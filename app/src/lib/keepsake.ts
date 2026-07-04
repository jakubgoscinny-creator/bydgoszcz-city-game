// "Download the day" — renders everything the family marked into one
// self-contained HTML keepsake (photos embedded as data URLs), downloaded
// locally. This is also the offline fallback if Supabase sync never happens.

import { routeStops } from '../data/route'
import { foodPlaces } from '../data/food'
import { polandTips } from '../data/tips'
import { garbarySections } from '../data/garbary'
import {
  getVisitorLabel,
  loadAllPhotos,
  loadAllReactions,
  loadAllVoiceNotes,
} from './reactionsStore'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(blob)
  })
}

/** Human title for a content id, walking the app's content in visit order. */
function describeContentId(contentId: string): { order: number; title: string; detail: string } {
  const parts = contentId.split(':')
  if (parts[0] === 'stop') {
    const stopIndex = routeStops.findIndex((s) => s.id === parts[1])
    const stop = routeStops[stopIndex]
    if (stop) {
      const unitNames: Record<string, string> = {
        kidFact: 'a little-explorer fact',
        adultFact: 'a grown-up fact',
        mission: 'the mini mission',
        bonus: 'the bonus find',
        photo: 'the stop photo',
        deepDive: 'the longer story',
        stop: 'the stop itself',
      }
      const unit = unitNames[parts[2]] ?? parts[2]
      let detail = ''
      if (parts[2] === 'kidFact') detail = stop.kidFacts[Number(parts[3] ?? 0)] ?? ''
      if (parts[2] === 'adultFact') detail = stop.adultFacts[Number(parts[3] ?? 0)] ?? ''
      if (parts[2] === 'mission') detail = stop.mission
      if (parts[2] === 'bonus') detail = stop.bonus
      return { order: stopIndex * 100, title: `${stop.name} — ${unit}`, detail }
    }
  }
  if (parts[0] === 'pause') {
    return { order: 5000, title: `Pause: ${parts[1].replace(/-/g, ' ')}`, detail: '' }
  }
  if (parts[0] === 'food') {
    const place = foodPlaces.find((f) => f.slug === parts[1])
    return { order: 6000, title: `Food: ${place?.name ?? parts[1]}`, detail: place?.summary ?? '' }
  }
  if (parts[0] === 'tip') {
    const tip = polandTips.find((t) => t.slug === parts[1])
    return { order: 7000, title: `Good to know: ${tip?.title ?? parts[1]}`, detail: '' }
  }
  if (parts[0] === 'garbary') {
    if (parts[1] === 'chimney-photo') {
      return { order: 8000, title: 'Garbary: the chimney photo', detail: '' }
    }
    if (parts[1].endsWith('-photo')) {
      const section = garbarySections.find((s) => s.id === parts[1].replace(/-photo$/, ''))
      return {
        order: 8000,
        title: `Garbary: photo — ${section?.title ?? parts[1]}`,
        detail: '',
      }
    }
    const section = garbarySections.find((s) => s.id === parts[1])
    return { order: 8000, title: `Garbary: ${section?.title ?? parts[1]}`, detail: '' }
  }
  if (parts[0] === 'familyPhoto') {
    return { order: 9000, title: 'A photo your family took', detail: '' }
  }
  return { order: 9999, title: contentId, detail: '' }
}

export async function downloadKeepsake(): Promise<void> {
  const [reactions, photos, voiceNotes] = await Promise.all([
    loadAllReactions(),
    loadAllPhotos(),
    loadAllVoiceNotes(),
  ])
  const marked = reactions
    .filter((r) => r.liked || r.hearted || (r.note && r.note.length > 0) || r.voiceId)
    .map((r) => ({ ...r, ...describeContentId(r.contentId) }))
    .sort((a, b) => a.order - b.order || a.updatedAt - b.updatedAt)

  const photoData = new Map<string, string>()
  for (const photo of photos.sort((a, b) => a.createdAt - b.createdAt)) {
    try {
      photoData.set(photo.id, await blobToDataUrl(photo.blob))
    } catch {
      // one unreadable blob shouldn't sink the whole keepsake
    }
  }

  const voiceData = new Map<string, string>()
  for (const voice of voiceNotes) {
    try {
      voiceData.set(voice.id, await blobToDataUrl(voice.blob))
    } catch {
      // skip an unreadable recording rather than sinking the export
    }
  }

  const visitor = getVisitorLabel()
  const dateLabel = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const entries = marked
    .map((entry) => {
      const isPhoto = entry.contentId.startsWith('familyPhoto:')
      const photoId = isPhoto ? entry.contentId.split(':')[1] : null
      const img = photoId && photoData.get(photoId)
        ? `<img src="${photoData.get(photoId)}" alt="Family photo" />`
        : ''
      const audio = entry.voiceId && voiceData.get(entry.voiceId)
        ? `<audio controls src="${voiceData.get(entry.voiceId)}"></audio>`
        : ''
      return `<section class="entry">
        <h2>${entry.liked ? '● ' : ''}${entry.hearted ? '♥ ' : ''}${entry.voiceId ? '🎙 ' : ''}${escapeHtml(entry.title)}</h2>
        ${entry.detail ? `<p class="detail">${escapeHtml(entry.detail)}</p>` : ''}
        ${entry.note ? `<p class="note">“${escapeHtml(entry.note)}”</p>` : ''}
        ${audio}
        ${img}
      </section>`
    })
    .join('\n')

  const stampedPhotoIds = new Set(
    marked
      .filter((entry) => entry.contentId.startsWith('familyPhoto:'))
      .map((entry) => entry.contentId.split(':')[1]),
  )
  const extraPhotos = photos
    .filter((photo) => !stampedPhotoIds.has(photo.id))
    .map((photo) => {
      const data = photoData.get(photo.id)
      const stop = routeStops.find((s) => s.id === photo.stopId)
      return data
        ? `<section class="entry"><h2>Photo — ${escapeHtml(stop?.name ?? 'along the way')}</h2><img src="${data}" alt="Family photo" /></section>`
        : ''
    })
    .join('\n')

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Amy's Bydgoszcz Treasure Trail — the keepsake</title>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; background: #f6efe2; color: #182a4e; margin: 0; padding: 2rem 1.2rem 4rem; }
  main { max-width: 620px; margin: 0 auto; }
  h1 { font-size: 2rem; margin: 0 0 0.2rem; }
  .sub { color: #8a4a2b; margin: 0 0 2rem; font-style: italic; }
  .entry { background: #fffdf8; border: 1px solid rgba(24, 42, 78, 0.14); border-radius: 14px; padding: 1rem 1.2rem; margin-bottom: 1rem; }
  .entry h2 { font-size: 1.05rem; margin: 0 0 0.4rem; color: #9e2b25; }
  .detail { margin: 0 0 0.4rem; font-size: 0.94rem; }
  .note { margin: 0.2rem 0; font-size: 1.05rem; font-style: italic; color: #52351f; }
  img { max-width: 100%; border-radius: 10px; margin-top: 0.6rem; }
  audio { width: 100%; margin-top: 0.6rem; }
  .empty { font-style: italic; }
</style></head>
<body><main>
<h1>Amy's Bydgoszcz Treasure Trail</h1>
<p class="sub">The day as ${visitor ? escapeHtml(visitor) : 'the family'} marked it — ${dateLabel}</p>
${entries || extraPhotos ? entries + extraPhotos : '<p class="empty">Nothing marked yet — the amber dots are waiting.</p>'}
</main></body></html>`

  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'bydgoszcz-treasure-trail-keepsake.html'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
