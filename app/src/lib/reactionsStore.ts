// Local-first persistence for the Amber Marks reaction layer.
// IndexedDB is the source of truth for the UI; Supabase sync is best-effort
// and handled separately in supabaseSync.ts via the outbox store.

export type ReactionState = {
  contentId: string
  liked?: boolean
  hearted?: boolean
  note?: string
  updatedAt: number
}

export type FamilyPhoto = {
  id: string
  stopId: string
  blob: Blob
  createdAt: number
}

export type OutboxEvent = {
  id?: number
  contentId: string
  liked?: boolean | null
  note?: string | null
  emoji?: string | null
  photoId?: string | null
  visitorLabel?: string | null
  createdAt: number
}

const DB_NAME = 'amber-marks'
const DB_VERSION = 1

let dbPromise: Promise<IDBDatabase> | null = null

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains('reactions')) {
        db.createObjectStore('reactions', { keyPath: 'contentId' })
      }
      if (!db.objectStoreNames.contains('photos')) {
        db.createObjectStore('photos', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('outbox')) {
        db.createObjectStore('outbox', { keyPath: 'id', autoIncrement: true })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => {
      // Don't cache a rejected promise — a transient failure (private mode,
      // storage pressure) would otherwise disable persistence all session.
      dbPromise = null
      reject(request.error)
    }
  })
  return dbPromise
}

function requestToPromise<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function withStore<T>(
  storeName: string,
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  const db = await openDb()
  return requestToPromise(fn(db.transaction(storeName, mode).objectStore(storeName)))
}

export async function loadAllReactions(): Promise<ReactionState[]> {
  return withStore('reactions', 'readonly', (store) => store.getAll() as IDBRequest<ReactionState[]>)
}

export async function saveReaction(state: ReactionState): Promise<void> {
  await withStore('reactions', 'readwrite', (store) => store.put(state))
}

export async function savePhoto(photo: FamilyPhoto): Promise<void> {
  await withStore('photos', 'readwrite', (store) => store.put(photo))
}

export async function loadPhoto(id: string): Promise<FamilyPhoto | undefined> {
  return withStore('photos', 'readonly', (store) => store.get(id) as IDBRequest<FamilyPhoto | undefined>)
}

export async function loadAllPhotos(): Promise<FamilyPhoto[]> {
  return withStore('photos', 'readonly', (store) => store.getAll() as IDBRequest<FamilyPhoto[]>)
}

export async function deletePhoto(id: string): Promise<void> {
  await withStore('photos', 'readwrite', (store) => store.delete(id))
}

export async function enqueueOutbox(event: OutboxEvent): Promise<void> {
  await withStore('outbox', 'readwrite', (store) => store.add(event))
}

export async function loadOutbox(): Promise<OutboxEvent[]> {
  return withStore('outbox', 'readonly', (store) => store.getAll() as IDBRequest<OutboxEvent[]>)
}

export async function deleteOutboxEvent(id: number): Promise<void> {
  await withStore('outbox', 'readwrite', (store) => store.delete(id))
}

const VISITOR_KEY = 'amber-marks-visitor'

export function getVisitorLabel(): string {
  try {
    return localStorage.getItem(VISITOR_KEY) ?? ''
  } catch {
    return ''
  }
}

export function setVisitorLabel(label: string): void {
  try {
    localStorage.setItem(VISITOR_KEY, label)
  } catch {
    // storage unavailable — the label is a nicety, not a requirement
  }
}

export function newPhotoId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return `photo-${Date.now()}-${Math.floor(Math.random() * 1e9)}`
}
