import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  enqueueOutbox,
  getVisitorLabel,
  loadAllPhotos,
  loadAllReactions,
  loadAllVoiceNotes,
  newPhotoId,
  savePhoto,
  saveReaction,
  saveVoiceNote,
  setVisitorLabel as persistVisitorLabel,
  type FamilyPhoto,
  type FamilyVoiceNote,
  type ReactionState,
} from '../lib/reactionsStore'
import { kickSync } from '../lib/supabaseSync'
import { audioPathSlug, familyPhotoId } from '../lib/contentIds'

export type ReactionsApi = {
  ready: boolean
  reactions: Map<string, ReactionState>
  photos: FamilyPhoto[]
  photoUrls: Map<string, string>
  voiceUrls: Map<string, string>
  visitorLabel: string
  setVisitorLabel: (label: string) => void
  toggleLike: (contentId: string) => void
  toggleHeart: (contentId: string) => void
  saveNote: (contentId: string, note: string) => void
  addFamilyPhoto: (stopId: string, file: File) => Promise<void>
  addVoiceNote: (contentId: string, blob: Blob, durationSec: number) => Promise<void>
}

export const ReactionsContext = createContext<ReactionsApi | null>(null)

export function useReactions(): ReactionsApi {
  const api = useContext(ReactionsContext)
  if (!api) throw new Error('useReactions must be used inside ReactionsProvider')
  return api
}

/** Downscale a family photo before storing: keeps IndexedDB and uploads light. */
async function compressPhoto(file: File, maxEdge = 1600, quality = 0.82): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height))
    const width = Math.round(bitmap.width * scale)
    const height = Math.round(bitmap.height * scale)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return file
    ctx.drawImage(bitmap, 0, 0, width, height)
    bitmap.close()
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', quality),
    )
    return blob ?? file
  } catch {
    return file
  }
}

export function useReactionsProvider(): ReactionsApi {
  const [ready, setReady] = useState(false)
  const [reactions, setReactions] = useState<Map<string, ReactionState>>(new Map())
  const [photos, setPhotos] = useState<FamilyPhoto[]>([])
  const [photoUrls, setPhotoUrls] = useState<Map<string, string>>(new Map())
  const [visitorLabel, setVisitorLabelState] = useState('')
  const [voiceUrls, setVoiceUrls] = useState<Map<string, string>>(new Map())
  const urlsRef = useRef<Map<string, string>>(new Map())
  const voiceUrlsRef = useRef<Map<string, string>>(new Map())
  // Mutations read/write through this ref so persistence side effects stay
  // outside the React state updater (StrictMode runs updaters twice).
  const reactionsRef = useRef<Map<string, ReactionState>>(new Map())

  useEffect(() => {
    let cancelled = false
    Promise.all([loadAllReactions(), loadAllPhotos(), loadAllVoiceNotes()])
      .then(([storedReactions, storedPhotos, storedVoices]) => {
        if (cancelled) return
        const map = new Map(storedReactions.map((r) => [r.contentId, r]))
        reactionsRef.current = map
        setReactions(map)
        storedPhotos.sort((a, b) => a.createdAt - b.createdAt)
        setPhotos(storedPhotos)
        const urls = new Map(
          storedPhotos.map((p) => [p.id, URL.createObjectURL(p.blob)]),
        )
        urlsRef.current = urls
        setPhotoUrls(urls)
        const audioUrls = new Map(
          storedVoices.map((v) => [v.id, URL.createObjectURL(v.blob)]),
        )
        voiceUrlsRef.current = audioUrls
        setVoiceUrls(audioUrls)
        setVisitorLabelState(getVisitorLabel())
        setReady(true)
      })
      .catch(() => setReady(true))
    return () => {
      cancelled = true
      urlsRef.current.forEach((url) => URL.revokeObjectURL(url))
      voiceUrlsRef.current.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  const mutate = useCallback((contentId: string, changes: Partial<ReactionState>) => {
    const previous = reactionsRef.current.get(contentId)
    const nextState: ReactionState = {
      contentId,
      ...previous,
      ...changes,
      updatedAt: Date.now(),
    }
    const next = new Map(reactionsRef.current)
    next.set(contentId, nextState)
    reactionsRef.current = next
    setReactions(next)
    void saveReaction(nextState)
      .then(() =>
        enqueueOutbox({
          contentId,
          liked: nextState.liked ?? null,
          note: nextState.note ?? null,
          emoji: nextState.hearted ? '❤' : null,
          visitorLabel: getVisitorLabel() || null,
          createdAt: Date.now(),
        }),
      )
      .then(kickSync)
      .catch(() => {})
  }, [])

  const toggleLike = useCallback(
    (contentId: string) => {
      mutate(contentId, { liked: !reactionsRef.current.get(contentId)?.liked })
    },
    [mutate],
  )

  const toggleHeart = useCallback(
    (contentId: string) => {
      mutate(contentId, { hearted: !reactionsRef.current.get(contentId)?.hearted })
    },
    [mutate],
  )

  const saveNote = useCallback(
    (contentId: string, note: string) => {
      if ((reactionsRef.current.get(contentId)?.note ?? '') === note.trim()) return
      mutate(contentId, { note: note.trim() })
    },
    [mutate],
  )

  const addFamilyPhoto = useCallback(async (stopId: string, file: File) => {
    const blob = await compressPhoto(file)
    const photo: FamilyPhoto = {
      id: newPhotoId(),
      stopId,
      blob,
      createdAt: Date.now(),
    }
    // Show the photo even if persistence fails (quota, private mode) —
    // local-first means the tap never silently no-ops.
    setPhotos((current) => [...current, photo])
    const url = URL.createObjectURL(blob)
    urlsRef.current.set(photo.id, url)
    setPhotoUrls((current) => new Map(current).set(photo.id, url))
    try {
      await savePhoto(photo)
      await enqueueOutbox({
        contentId: familyPhotoId(photo.id),
        photoId: photo.id,
        visitorLabel: getVisitorLabel() || null,
        createdAt: Date.now(),
      })
      kickSync()
    } catch {
      // photo stays visible this session; it just won't survive a reload
    }
  }, [])

  const addVoiceNote = useCallback(
    async (contentId: string, blob: Blob, durationSec: number) => {
      const voice: FamilyVoiceNote = {
        id: newPhotoId(),
        stopId: audioPathSlug(contentId),
        blob,
        durationSec,
        createdAt: Date.now(),
      }
      // Optimistic: playable immediately even if persistence fails.
      const url = URL.createObjectURL(blob)
      voiceUrlsRef.current.set(voice.id, url)
      setVoiceUrls((current) => new Map(current).set(voice.id, url))
      const previous = reactionsRef.current.get(contentId)
      const nextState: ReactionState = {
        contentId,
        ...previous,
        voiceId: voice.id,
        voiceDuration: durationSec,
        updatedAt: Date.now(),
      }
      const next = new Map(reactionsRef.current)
      next.set(contentId, nextState)
      reactionsRef.current = next
      setReactions(next)
      try {
        await saveVoiceNote(voice)
        await saveReaction(nextState)
        await enqueueOutbox({
          contentId,
          liked: nextState.liked ?? null,
          note: nextState.note ?? null,
          emoji: nextState.hearted ? '❤' : null,
          voiceId: voice.id,
          visitorLabel: getVisitorLabel() || null,
          createdAt: Date.now(),
        })
        kickSync()
      } catch {
        // stays playable this session; it just won't survive a reload
      }
    },
    [],
  )

  const setVisitorLabel = useCallback((label: string) => {
    setVisitorLabelState(label)
    persistVisitorLabel(label)
  }, [])

  return {
    ready,
    reactions,
    photos,
    photoUrls,
    voiceUrls,
    visitorLabel,
    setVisitorLabel,
    toggleLike,
    toggleHeart,
    saveNote,
    addFamilyPhoto,
    addVoiceNote,
  }
}
