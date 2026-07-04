import { useCallback, useEffect, useRef, useState } from 'react'
import { useReactions } from '../hooks/useReactions'

const MAX_SECONDS = 20
const STOP_TIMEOUT_MS = 2000

// Never hardcode audio/webm — unsupported on Safari. Detect at call time.
const CODEC_CANDIDATES = ['audio/mp4', 'audio/aac', 'audio/webm;codecs=opus', 'audio/webm']

function pickMimeType(): string | undefined {
  if (typeof MediaRecorder === 'undefined') return undefined
  return CODEC_CANDIDATES.find((type) => MediaRecorder.isTypeSupported(type))
}

type Phase =
  | { name: 'idle' }
  | { name: 'requesting' }
  | { name: 'denied' }
  | { name: 'recording'; startedAt: number }
  | { name: 'processing' }
  | { name: 'review'; blob: Blob; url: string; durationSec: number }
  | { name: 'savedReview' }
  | { name: 'error'; message: string }

type Props = {
  contentId: string
  corner?: boolean
}

/**
 * 20-second voice memo, iOS-Safari-first:
 * - getUserMedia is called synchronously inside the tap handler.
 * - Codec is feature-detected (audio/mp4 first; webm is the last resort).
 * - recorder.start(1000) so chunks land per second — the final stop event
 *   is known-flaky on iOS and must not be the only source of data.
 * - stop() is wrapped in a timeout; a hung recorder degrades to an error
 *   state instead of a stuck "recording" UI.
 * - Backgrounding/lock mid-recording stops the recorder and drops into
 *   review with whatever chunks exist.
 * - Object URLs are never revoked early (Safari fails silently on stale
 *   blob URLs mid-playback).
 */
export function VoiceNoteButton({ contentId, corner }: Props) {
  const { reactions, voiceUrls, addVoiceNote } = useReactions()
  const savedVoiceId = reactions.get(contentId)?.voiceId
  const savedDuration = reactions.get(contentId)?.voiceDuration
  const savedUrl = savedVoiceId ? voiceUrls.get(savedVoiceId) : undefined

  const [phase, setPhase] = useState<Phase>({ name: 'idle' })
  const [elapsed, setElapsed] = useState(0)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const finalizedRef = useRef(false)
  const timersRef = useRef<number[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => window.clearTimeout(t))
    timersRef.current = []
  }, [])

  const addTimer = useCallback((fn: () => void, ms: number) => {
    timersRef.current.push(window.setTimeout(fn, ms))
  }, [])

  const releaseStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
    recorderRef.current = null
  }, [])

  const finalize = useCallback(
    (startedAt: number) => {
      if (finalizedRef.current) return
      finalizedRef.current = true
      clearTimers()
      const mime = recorderRef.current?.mimeType || pickMimeType() || 'audio/mp4'
      releaseStream()
      const chunks = chunksRef.current
      if (!chunks.length || chunks.reduce((total, c) => total + c.size, 0) === 0) {
        setPhase({ name: 'error', message: "recording didn't save — try again" })
        addTimer(() => setPhase({ name: 'idle' }), 3000)
        return
      }
      const blob = new Blob(chunks, { type: mime.split(';')[0] })
      const durationSec = Math.min(
        MAX_SECONDS,
        Math.max(1, Math.round((performance.now() - startedAt) / 1000)),
      )
      // Deliberately never revoked — Safari fails silently on stale blob URLs.
      const url = URL.createObjectURL(blob)
      setPhase({ name: 'review', blob, url, durationSec })
    },
    [addTimer, clearTimers, releaseStream],
  )

  const stopRecording = useCallback(
    (startedAt: number) => {
      if (navigator.vibrate) navigator.vibrate(8)
      setPhase({ name: 'processing' })
      // If onstop never fires (known iOS flake), finalize from the chunks
      // that the 1s timeslice already delivered.
      addTimer(() => finalize(startedAt), STOP_TIMEOUT_MS)
      try {
        const recorder = recorderRef.current
        if (recorder && recorder.state !== 'inactive') recorder.stop()
        else finalize(startedAt)
      } catch {
        finalize(startedAt)
      }
    },
    [addTimer, finalize],
  )

  const beginRecording = useCallback(
    (stream: MediaStream) => {
      streamRef.current = stream
      chunksRef.current = []
      finalizedRef.current = false
      const mime = pickMimeType()
      let recorder: MediaRecorder
      try {
        recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream)
      } catch {
        releaseStream()
        setPhase({ name: 'error', message: "recording didn't start — try again" })
        addTimer(() => setPhase({ name: 'idle' }), 3000)
        return
      }
      recorderRef.current = recorder
      const startedAt = performance.now()
      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data)
      }
      recorder.onstop = () => finalize(startedAt)
      recorder.onerror = () => finalize(startedAt)
      recorder.start(1000)
      if (navigator.vibrate) navigator.vibrate(8)
      setElapsed(0)
      setPhase({ name: 'recording', startedAt })
    },
    [addTimer, finalize, releaseStream],
  )

  const handleMicTap = () => {
    if (savedVoiceId) {
      setPhase({ name: 'savedReview' })
      return
    }
    if (
      typeof MediaRecorder === 'undefined' ||
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getUserMedia
    ) {
      setPhase({ name: 'error', message: 'voice notes need a newer browser' })
      addTimer(() => setPhase({ name: 'idle' }), 3000)
      return
    }
    setPhase({ name: 'requesting' })
    // Synchronous call in the same turn as the tap — no await before it,
    // or iOS treats it as not user-initiated.
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(beginRecording)
      .catch(() => {
        setPhase({ name: 'denied' })
        addTimer(() => setPhase({ name: 'idle' }), 3000)
      })
  }

  // Elapsed ticker + hard auto-stop at 20s.
  useEffect(() => {
    if (phase.name !== 'recording') return
    const interval = window.setInterval(() => {
      const seconds = (performance.now() - phase.startedAt) / 1000
      setElapsed(Math.min(MAX_SECONDS, seconds))
      if (seconds >= MAX_SECONDS) stopRecording(phase.startedAt)
    }, 100)
    return () => window.clearInterval(interval)
  }, [phase, stopRecording])

  // Backgrounding / lock screen mid-recording: capture what exists, land in
  // review — never trust stop to behave normally after resume.
  useEffect(() => {
    if (phase.name !== 'recording') return
    const bail = () => {
      if (document.visibilityState === 'hidden') stopRecording(phase.startedAt)
    }
    const bailNow = () => stopRecording(phase.startedAt)
    document.addEventListener('visibilitychange', bail)
    window.addEventListener('pagehide', bailNow)
    return () => {
      document.removeEventListener('visibilitychange', bail)
      window.removeEventListener('pagehide', bailNow)
    }
  }, [phase, stopRecording])

  useEffect(() => clearTimers, [clearTimers])

  const keep = () => {
    if (phase.name !== 'review') return
    void addVoiceNote(contentId, phase.blob, phase.durationSec)
    setPhase({ name: 'idle' })
  }

  const discard = () => setPhase({ name: 'idle' })

  const formatTime = (seconds: number) =>
    `0:${String(Math.floor(seconds)).padStart(2, '0')}`

  const micButton = (
    <button
      type="button"
      className={`amber-voice-btn ${savedVoiceId ? 'has-voice' : ''} ${phase.name === 'requesting' ? 'is-requesting' : ''}`}
      aria-label={savedVoiceId ? 'Play your voice note' : 'Record a voice note'}
      onClick={handleMicTap}
    >
      {savedVoiceId ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )

  const expanded = (() => {
    switch (phase.name) {
      case 'denied':
        return <span className="voice-hint">Mic access is off — check Settings</span>
      case 'error':
        return <span className="voice-hint">{phase.message}</span>
      case 'requesting':
        return <span className="voice-hint">waiting for the mic…</span>
      case 'recording':
      case 'processing': {
        const seconds = phase.name === 'recording' ? elapsed : MAX_SECONDS
        return (
          <span className="voice-row voice-recording">
            <button
              type="button"
              className="voice-stop-btn"
              aria-label="Stop recording"
              onClick={() => phase.name === 'recording' && stopRecording(phase.startedAt)}
            >
              <span className="voice-stop-square" />
            </button>
            <span className="voice-elapsed">{formatTime(seconds)}</span>
            <span className="voice-progress">
              <span
                className="voice-progress-fill"
                style={{ width: `${(seconds / MAX_SECONDS) * 100}%` }}
              />
            </span>
            <span className="voice-live-dot" aria-hidden="true" />
          </span>
        )
      }
      case 'review':
        return (
          <span className="voice-row voice-review">
            <audio controls src={phase.url} preload="metadata" />
            <span className="voice-review-actions">
              <span className="voice-elapsed">{formatTime(phase.durationSec)}</span>
              <button type="button" className="voice-keep" onClick={keep}>
                keep
              </button>
              <button type="button" className="voice-discard" onClick={discard}>
                discard
              </button>
            </span>
          </span>
        )
      case 'savedReview':
        return (
          <span className="voice-row voice-review">
            {savedUrl ? (
              <audio controls src={savedUrl} preload="metadata" />
            ) : (
              <span className="voice-hint">this note will play after the page finishes loading</span>
            )}
            <span className="voice-review-actions">
              {savedDuration ? <span className="voice-elapsed">{formatTime(savedDuration)}</span> : null}
              <button type="button" className="voice-discard" onClick={() => setPhase({ name: 'idle' })}>
                close
              </button>
            </span>
          </span>
        )
      default:
        return null
    }
  })()

  return (
    <>
      <span className={`amber-wrap amber-wrap-voice ${corner ? 'amber-wrap-voice-corner' : ''}`}>
        {micButton}
      </span>
      {expanded ? (
        <span className={`amber-note-row ${corner ? 'amber-note-row-corner' : ''}`}>{expanded}</span>
      ) : null}
    </>
  )
}
