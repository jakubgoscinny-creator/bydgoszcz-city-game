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
  newPhotoId,
  savePhoto,
  saveReaction,
  setVisitorLabel as persistVisitorLabel,
  type FamilyPhoto,
  type ReactionState,
} from '../lib/reactionsStore'
import { kickSync } from '../lib/supabaseSync'
import { familyPhotoId } from '../lib/contentIds'

export type ReactionsApi = {
  ready: boolean
  reactions: Map<string, ReactionState>
  photos: FamilyPhoto[]
  photoUrls: Map<string, string>
  visitorLabel: string
  setVisitorLabel: (label: string) => void
  toggleLike: (contentId: string) => void
  toggleHeart: (contentId: string) => void
  saveNote: (contentId: string, note: string) => void
  addFamilyPhoto: (stopId: string, file: File) => Promise<void>
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
  const urlsRef = useRef<Map<string, string>>(new Map())
  // Mutations read/write through this ref so persistence side effects stay
  // outside the React state updater (StrictMode runs updaters twice).
  const reactionsRef = useRef<Map<string, ReactionState>>(new Map())

  useEffect(() => {
    let cancelled = false
    Promise.all([loadAllReactions(), loadAllPhotos()])
      .then(([storedReactions, storedPhotos]) => {
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
        setVisitorLabelState(getVisitorLabel())
        setReady(true)
      })
      .catch(() => setReady(true))
    return () => {
      cancelled = true
      urlsRef.current.forEach((url) => URL.revokeObjectURL(url))
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
    await savePhoto(photo)
    setPhotos((current) => [...current, photo])
    const url = URL.createObjectURL(blob)
    urlsRef.current.set(photo.id, url)
    setPhotoUrls((current) => new Map(current).set(photo.id, url))
    await enqueueOutbox({
      contentId: familyPhotoId(photo.id),
      photoId: photo.id,
      visitorLabel: getVisitorLabel() || null,
      createdAt: Date.now(),
    }).catch(() => {})
    kickSync()
  }, [])

  const setVisitorLabel = useCallback((label: string) => {
    setVisitorLabelState(label)
    persistVisitorLabel(label)
  }, [])

  return {
    ready,
    reactions,
    photos,
    photoUrls,
    visitorLabel,
    setVisitorLabel,
    toggleLike,
    toggleHeart,
    saveNote,
    addFamilyPhoto,
  }
}
