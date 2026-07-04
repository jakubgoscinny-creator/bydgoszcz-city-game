import { useCallback, useEffect, useRef, useState } from 'react'
import { useReactions } from '../hooks/useReactions'

const LONG_PRESS_MS = 450

type Props = {
  contentId: string
  notePlaceholder?: string
  /** Photo-corner variant: dot floats in the corner, note bar docks below. */
  corner?: boolean
  /** One-time first-load pulse teaching discoverability. */
  hint?: boolean
}

/**
 * The Amber Mark. Tap = like (ink-bloom pulse). Long-press = inline note.
 * On desktop / keyboard, hovering or focusing reveals a small pencil button
 * as the non-press path to the same note editor.
 */
export function ReactionDot({ contentId, notePlaceholder, corner, hint }: Props) {
  const { reactions, toggleLike, saveNote } = useReactions()
  const state = reactions.get(contentId)
  const liked = !!state?.liked
  const note = state?.note ?? ''

  const [editing, setEditing] = useState(false)
  const [bloom, setBloom] = useState(false)
  const pressTimer = useRef<number | null>(null)
  const longPressFired = useRef(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  const clearTimer = useCallback(() => {
    if (pressTimer.current !== null) {
      window.clearTimeout(pressTimer.current)
      pressTimer.current = null
    }
  }, [])

  useEffect(() => clearTimer, [clearTimer])

  const handlePointerDown = () => {
    longPressFired.current = false
    clearTimer()
    pressTimer.current = window.setTimeout(() => {
      longPressFired.current = true
      setEditing(true)
      if (navigator.vibrate) navigator.vibrate(6)
    }, LONG_PRESS_MS)
  }

  const handleClick = () => {
    if (longPressFired.current) {
      longPressFired.current = false
      return
    }
    toggleLike(contentId)
    if (!liked) {
      setBloom(true)
      if (navigator.vibrate) navigator.vibrate(8)
    }
  }

  const commitNote = () => {
    saveNote(contentId, inputRef.current?.value ?? '')
    setEditing(false)
  }

  const dot = (
    <span className={`amber-wrap ${corner ? 'amber-wrap-corner' : ''}`}>
      <button
        type="button"
        className={`amber-dot ${liked ? 'is-lit' : ''} ${note ? 'has-note' : ''} ${hint ? 'hint-pulse' : ''}`}
        aria-pressed={liked}
        aria-label={liked ? 'Marked — tap to unmark' : 'Mark this'}
        title="tap to mark · hold for a note"
        onPointerDown={handlePointerDown}
        onPointerUp={clearTimer}
        onPointerLeave={clearTimer}
        onPointerCancel={clearTimer}
        onClick={handleClick}
        onContextMenu={(e) => e.preventDefault()}
      >
        {note ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        {bloom ? <span className="amber-bloom" onAnimationEnd={() => setBloom(false)} /> : null}
      </button>
      {!editing ? (
        <button
          type="button"
          className="amber-note-btn"
          aria-label="Add a note"
          onClick={() => setEditing(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : null}
    </span>
  )

  return (
    <>
      {dot}
      {editing ? (
        <span className={`amber-note-row ${corner ? 'amber-note-row-corner' : ''}`}>
          <input
            ref={inputRef}
            type="text"
            className="amber-note-input"
            defaultValue={note}
            placeholder={notePlaceholder ?? 'scribble something…'}
            aria-label="Your note"
            maxLength={280}
            enterKeyHint="done"
            onBlur={commitNote}
            onKeyDown={(e) => {
              if (e.key === 'Enter') commitNote()
              if (e.key === 'Escape') setEditing(false)
            }}
          />
        </span>
      ) : note && !corner ? (
        <span className="amber-note-echo" onClick={() => setEditing(true)}>
          {note}
        </span>
      ) : null}
    </>
  )
}
