// Best-effort, fire-and-forget sync of reaction events to Supabase.
// The anon key below can only INSERT into `reactions` and upload into the
// `keepsake-photos` bucket (enforced by RLS); the reactions table has no
// public SELECT. Uploaded photos ARE publicly readable by their unguessable
// UUID URL — an accepted trade-off so photo_url links work when the table is
// read later. Shipping the key in the bundle is intentional; baked-in
// defaults keep the GitHub Pages mirror syncing, Vercel env vars override.

import {
  deleteOutboxEvent,
  deletePhoto,
  loadOutbox,
  loadPhoto,
  type OutboxEvent,
} from './reactionsStore'

const SUPABASE_URL: string =
  import.meta.env.VITE_SUPABASE_URL || 'https://jldtvleeppkfsrtqkjgp.supabase.co'

const SUPABASE_ANON_KEY: string =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZHR2bGVlcHBrZnNydHFramdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxOTI0NTYsImV4cCI6MjA5ODc2ODQ1Nn0.8Oj4OoKElNwE6Dpn_7w5XNqZ8X0zCtylHRLjCygKxS0'

const HEADERS = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
}

async function uploadPhoto(photoId: string): Promise<string | null> {
  const photo = await loadPhoto(photoId)
  if (!photo) return null
  const path = `${photo.stopId}/${photo.id}.jpg`
  const response = await fetch(
    `${SUPABASE_URL}/storage/v1/object/keepsake-photos/${path}`,
    {
      method: 'POST',
      headers: { ...HEADERS, 'Content-Type': photo.blob.type || 'image/jpeg' },
      body: photo.blob,
    },
  )
  // 409 = already uploaded on a previous partially-failed sync; treat as success.
  if (!response.ok && response.status !== 409) return null
  return `${SUPABASE_URL}/storage/v1/object/public/keepsake-photos/${path}`
}

async function pushEvent(event: OutboxEvent): Promise<boolean> {
  let photoUrl: string | null = null
  if (event.photoId) {
    photoUrl = await uploadPhoto(event.photoId)
    if (!photoUrl) return false
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/reactions`, {
    method: 'POST',
    keepalive: true,
    headers: { ...HEADERS, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify({
      content_id: event.contentId,
      liked: event.liked ?? null,
      note: event.note ?? null,
      emoji: event.emoji ?? null,
      photo_url: photoUrl,
      visitor_label: event.visitorLabel || null,
    }),
  })
  return response.ok
}

let syncing = false

/**
 * Drain the outbox. Never throws, never blocks the UI, gives up silently on
 * the first failure (patchy signal) — the next app open / reconnect retries.
 */
export async function syncPending(): Promise<void> {
  if (syncing || typeof navigator !== 'undefined' && navigator.onLine === false) return
  syncing = true
  try {
    // Re-read the outbox after each drain so events enqueued while a sync was
    // in flight go out now instead of waiting for the next trigger.
    for (let round = 0; round < 10; round++) {
      const events = await loadOutbox()
      if (events.length === 0) return
      for (const event of events) {
        const ok = await pushEvent(event).catch(() => false)
        if (!ok) return
        if (event.id !== undefined) await deleteOutboxEvent(event.id)
      }
    }
  } catch {
    // best-effort by design
  } finally {
    syncing = false
  }
}

/** Kick a sync without awaiting it — the caller never waits on the network. */
export function kickSync(): void {
  void syncPending()
}

/** Wire resync triggers: app open, reconnect, tab becoming visible again. */
export function installSyncTriggers(): void {
  kickSync()
  window.addEventListener('online', kickSync)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') kickSync()
  })
}

/**
 * Local photo blobs are kept in IndexedDB even after upload (they feed the
 * keepsake export); this helper exists for future cleanup should quota bite.
 */
export async function discardLocalPhoto(photoId: string): Promise<void> {
  await deletePhoto(photoId)
}
