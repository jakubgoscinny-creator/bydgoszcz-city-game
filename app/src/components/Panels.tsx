import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { routeStops, mapSearchUrl } from '../data/route'
import { foodPlaces } from '../data/food'
import { polandTips } from '../data/tips'
import {
  garbarySections,
  garbaryPhoto,
  garbaryPhotoAlt,
  garbaryPhotoCredit,
  garbaryPhotoCreditUrl,
} from '../data/garbary'
import { attractionId, foodId, garbaryId, tipId } from '../lib/contentIds'
import { foodPhotos } from '../data/foodPhotos'
import { attractions, visitEvents } from '../data/attractions'
import { useReactions } from '../hooks/useReactions'
import { ReactionDot } from './ReactionDot'
import { StopPhoto } from './StopPhoto'
import { downloadKeepsake, entryMarks, gatherKeepsakeEntries } from '../lib/keepsake'

export type PanelId = 'howto' | 'tips' | 'garbary' | 'food' | 'attractions' | 'keepsake' | null

type SheetProps = {
  title: string
  kicker: string
  onClose: () => void
  children: ReactNode
}

function Sheet({ title, kicker, onClose, children }: SheetProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="sheet" role="dialog" aria-modal="true" aria-label={title}>
      <div className="sheet-chrome">
        <div>
          <p className="sheet-kicker">{kicker}</p>
          <h2>{title}</h2>
        </div>
        <button type="button" className="sheet-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="sheet-body">{children}</div>
    </div>
  )
}

const howItWorks = [
  {
    emoji: '🧭',
    title: 'The trail',
    body: 'Ten stops through central Bydgoszcz. Swipe left to walk forward — or use the buttons at the bottom. Every stop has clues for the kids and stories for the grown-ups, all on one card you just scroll.',
  },
  {
    emoji: '🟠',
    title: 'The amber dots',
    body: "See a small amber dot after a fact? Tap it to mark it as a favourite — it fills gold. That's the whole move. No accounts, no star ratings, no wrong answers.",
  },
  {
    emoji: '❤️',
    title: 'Photos',
    body: 'Double-tap any photo to stamp a heart on it. And every stop has an "Add a photo" button — your own shots become part of the story of the day.',
  },
  {
    emoji: '✏️',
    title: 'Written notes',
    body: 'The little pencil beside any dot opens a one-line note — what someone said, what made everyone laugh, which cake won.',
  },
  {
    emoji: '🎙️',
    title: 'Voice notes',
    body: "The mic beside the pencil records up to twenty seconds — a kid's reaction, the sound of the fountain, a verdict on the ice cream. Listen back, then keep it or toss it.",
  },
  {
    emoji: '🧳',
    title: 'In the menu',
    body: 'The ☰ button up top holds the rest of the kit. "Good to know" — practical Poland tips for the week, from złoty maths to Sunday shop hours. "Your Street: Garbary" — the surprising history of the street you sleep on. "Where to eat" — real, checked places to refuel near the route. "Notable attractions" — the bigger Bydgoszcz outings beyond the walk. "Your keepsake" — everything you\'ve marked so far, gathered in one place.',
  },
  {
    emoji: '📔',
    title: 'The keepsake',
    body: 'Everything you mark stays on this phone, even with no signal. "Your keepsake" in the menu shows the page growing as you walk — and "Download the day" saves it as one file holding the whole adventure.',
  },
]

export function HowItWorksPanel({ onClose }: { onClose: () => void }) {
  return (
    <Sheet title="How this works" kicker="Welcome to the trail" onClose={onClose}>
      <p className="sheet-intro">
        A city walk that doubles as a family journal. Two minutes of reading, then the streets take
        over.
      </p>
      {howItWorks.map((item) => (
        <section className="tip-card" key={item.title}>
          <h3>
            <span className="tip-emoji" aria-hidden="true">
              {item.emoji}
            </span>
            {item.title}
          </h3>
          <p>{item.body}</p>
        </section>
      ))}
      <button type="button" className="primary-link" onClick={onClose}>
        Let&apos;s go
      </button>
    </Sheet>
  )
}

export function TipsPanel({ onClose }: { onClose: () => void }) {
  return (
    <Sheet title="Good to know" kicker="Poland, decoded for visitors" onClose={onClose}>
      <p className="sheet-intro">
        Practical notes for the week — checked against current Polish rules and prices, not guessed.
      </p>
      {polandTips.map((tip) => (
        <section className="tip-card" key={tip.slug}>
          <h3>
            <span className="tip-emoji" aria-hidden="true">
              {tip.emoji}
            </span>
            {tip.title}
          </h3>
          {tip.body.map((para, i) => (
            <p className={i === tip.body.length - 1 ? 'fact-line' : undefined} key={i}>
              {para}
              {i === tip.body.length - 1 ? (
                <ReactionDot contentId={tipId(tip.slug)} notePlaceholder="did this come in handy…" />
              ) : null}
            </p>
          ))}
        </section>
      ))}
    </Sheet>
  )
}

export function GarbaryPanel({ onClose }: { onClose: () => void }) {
  return (
    <Sheet title="Your Street: Garbary" kicker="The neighbourhood you sleep in" onClose={onClose}>
      <StopPhoto
        contentId={garbaryId('chimney-photo')}
        src={garbaryPhoto}
        alt={garbaryPhotoAlt}
        notePlaceholder="spotted it yet…"
      />
      <p className="photo-credit">
        <a href={garbaryPhotoCreditUrl} target="_blank" rel="noreferrer">
          {garbaryPhotoCredit}
        </a>
      </p>
      {garbarySections.map((section) => (
        <section className="garbary-section" key={section.id}>
          <h3>{section.title}</h3>
          {section.body.map((para, i) => (
            <p className={i === section.body.length - 1 ? 'fact-line' : undefined} key={i}>
              {para}
              {i === section.body.length - 1 ? (
                <ReactionDot
                  contentId={garbaryId(section.id)}
                  notePlaceholder="a note from your street…"
                />
              ) : null}
            </p>
          ))}
          {section.photo ? (
            <>
              <StopPhoto
                contentId={garbaryId(`${section.id}-photo`)}
                src={section.photo.src}
                alt={section.photo.alt}
                caption={section.photo.alt}
                notePlaceholder="spotted it yet…"
              />
              <p className="photo-credit">
                <a href={section.photo.creditUrl} target="_blank" rel="noreferrer">
                  {section.photo.credit}
                </a>
              </p>
            </>
          ) : null}
        </section>
      ))}
    </Sheet>
  )
}

export function FoodPanel({ onClose }: { onClose: () => void }) {
  const familyPlaces = foodPlaces.filter((p) => !p.adultsOnly)
  const adultPlaces = foodPlaces.filter((p) => p.adultsOnly)
  return (
    <Sheet title="Where to eat" kicker="Real places, checked this month" onClose={onClose}>
      <p className="sheet-intro">
        Every place below is real, open, and verified — addresses included so the kids can navigate.
      </p>
      {familyPlaces.map((place) => (
        <FoodCard key={place.slug} place={place} />
      ))}
      <h3 className="food-divider">After bedtime — for the grown-ups</h3>
      {adultPlaces.map((place) => (
        <FoodCard key={place.slug} place={place} />
      ))}
    </Sheet>
  )
}

function FoodCard({ place }: { place: (typeof foodPlaces)[number] }) {
  const pairedStop = place.nearStopId
    ? routeStops.find((s) => s.id === place.nearStopId)
    : undefined
  const photo = foodPhotos[place.slug]
  return (
    <section className={`food-card ${place.adultsOnly ? 'is-adults' : ''}`}>
      {photo ? (
        <StopPhoto
          contentId={`${foodId(place.slug)}:photo`}
          src={photo}
          alt={`${place.name} — ${place.kind.toLowerCase()}`}
          notePlaceholder="verdict from the table…"
        />
      ) : null}
      <div className="food-card-head">
        <p className="food-kind">
          {place.kind}
          {place.adultsOnly ? <span className="adults-badge">adults only</span> : null}
        </p>
        <h3>{place.name}</h3>
        <p className="food-address">{place.address}</p>
      </div>
      <p className="fact-line">
        {place.summary}
        <ReactionDot contentId={foodId(place.slug)} notePlaceholder="verdict from the table…" />
      </p>
      <p className="food-family-note">{place.familyNote}</p>
      {place.hoursNote ? <p className="food-hours">{place.hoursNote}</p> : null}
      <div className="food-links">
        <a className="text-link" href={mapSearchUrl(place.mapQuery)} target="_blank" rel="noreferrer">
          Find it on the map
        </a>
        {pairedStop ? <span className="food-pairing">pairs with {pairedStop.shortName}</span> : null}
      </div>
    </section>
  )
}

export function AttractionsPanel({ onClose }: { onClose: () => void }) {
  return (
    <Sheet title="Notable attractions" kicker="Beyond the trail" onClose={onClose}>
      <p className="sheet-intro">
        The walking route is half a day — these are the bigger Bydgoszcz cards to play with the
        rest of the visit. All real, all checked.
      </p>
      {attractions.map((attraction) => (
        <section className="food-card" key={attraction.slug}>
          {attraction.photo ? (
            <>
              <StopPhoto
                contentId={`${attractionId(attraction.slug)}:photo`}
                src={attraction.photo.src}
                alt={attraction.photo.alt}
                notePlaceholder="worth the detour…"
              />
              {attraction.photo.credit ? (
                <p className="photo-credit">
                  <a href={attraction.photo.creditUrl} target="_blank" rel="noreferrer">
                    {attraction.photo.credit}
                  </a>
                </p>
              ) : null}
            </>
          ) : null}
          <div className="food-card-head">
            <p className="food-kind">{attraction.kind}</p>
            <h3>{attraction.name}</h3>
          </div>
          {attraction.summary.map((para, i) => (
            <p className={i === attraction.summary.length - 1 ? 'fact-line' : 'food-family-note'} key={i}>
              {para}
              {i === attraction.summary.length - 1 ? (
                <ReactionDot
                  contentId={attractionId(attraction.slug)}
                  notePlaceholder="worth the detour…"
                />
              ) : null}
            </p>
          ))}
          {attraction.practicalNote ? <p className="food-hours">{attraction.practicalNote}</p> : null}
          <div className="food-links">
            <a
              className="text-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
            >
              Find it on the map
            </a>
          </div>
        </section>
      ))}

      {visitEvents.length ? (
        <>
          <h3 className="food-divider">While you&apos;re here — 9 to 12 July</h3>
          {visitEvents.map((event) => (
            <section className="food-card" key={event.name}>
              <div className="food-card-head">
                <p className="food-kind">{event.dates}</p>
                <h3>{event.name}</h3>
                <p className="food-address">{event.venue}</p>
              </div>
              <p className="fact-line">
                {event.note}
                <ReactionDot
                  contentId={attractionId(`event-${event.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
                  notePlaceholder="are we going…"
                />
              </p>
            </section>
          ))}
        </>
      ) : null}
    </Sheet>
  )
}

export function KeepsakePanel({ onClose }: { onClose: () => void }) {
  const { reactions, photos, photoUrls, voiceUrls, visitorLabel, setVisitorLabel } = useReactions()
  const [busy, setBusy] = useState(false)
  const [exportFailed, setExportFailed] = useState(false)
  // Same gathering logic as the exported file — preview and download can't drift.
  const entries = useMemo(() => gatherKeepsakeEntries([...reactions.values()]), [reactions])
  const markedCount = entries.length

  return (
    <Sheet title="Your keepsake" kicker="The day, as you marked it" onClose={onClose}>
      <p className="sheet-intro">
        Every amber dot, heart, note, and photo lives on this phone — nothing is lost without
        signal. Download the day whenever you like; it also travels home quietly on its own.
      </p>

      <label className="visitor-field">
        <span>Whose marks are these?</span>
        <input
          type="text"
          value={visitorLabel}
          placeholder="Amy, the kids, all of us…"
          maxLength={60}
          onChange={(e) => setVisitorLabel(e.target.value)}
        />
        <small>one word is plenty — you can leave it blank</small>
      </label>

      <div className="keepsake-stats">
        <div>
          <strong>{markedCount}</strong>
          <span>things marked</span>
        </div>
        <div>
          <strong>{photos.length}</strong>
          <span>photos added</span>
        </div>
      </div>

      <section className="keepsake-preview" aria-label="Keepsake preview">
        <p className="keepsake-preview-label">The page so far</p>
        {entries.length === 0 && photos.length === 0 ? (
          <p className="family-photos-empty">Nothing marked yet — the amber dots are waiting.</p>
        ) : (
          entries.map((entry) => {
            const familyUrl = entry.familyPhotoId ? photoUrls.get(entry.familyPhotoId) : undefined
            const voiceUrl = entry.voiceId ? voiceUrls.get(entry.voiceId) : undefined
            return (
              <article className="keepsake-entry" key={entry.contentId}>
                <p className="keepsake-entry-title">
                  {entryMarks(entry)}
                  {entry.title}
                </p>
                {entry.detail ? <p className="keepsake-entry-detail">{entry.detail}</p> : null}
                {entry.note ? <p className="keepsake-entry-note">“{entry.note}”</p> : null}
                {voiceUrl ? <audio controls src={voiceUrl} preload="metadata" /> : null}
                {familyUrl ? (
                  <img className="keepsake-thumb" src={familyUrl} alt="A photo your family took" />
                ) : entry.imageSrc ? (
                  <img className="keepsake-thumb" src={entry.imageSrc} alt="" />
                ) : null}
              </article>
            )
          })
        )}
        {/* Family photos that were added but never marked — the export appends
            these too, so the preview shows the same page. */}
        {photos
          .filter((photo) => !entries.some((entry) => entry.familyPhotoId === photo.id))
          .map((photo) => {
            const stop = routeStops.find((s) => s.id === photo.stopId)
            const url = photoUrls.get(photo.id)
            return url ? (
              <article className="keepsake-entry" key={photo.id}>
                <p className="keepsake-entry-title">Photo — {stop?.name ?? 'along the way'}</p>
                <img className="keepsake-thumb" src={url} alt="A photo your family took" />
              </article>
            ) : null
          })}
      </section>

      <button
        type="button"
        className="primary-link keepsake-download"
        disabled={busy}
        onClick={() => {
          setBusy(true)
          setExportFailed(false)
          void downloadKeepsake()
            .catch(() => setExportFailed(true))
            .finally(() => setBusy(false))
        }}
      >
        {busy ? 'Folding the page…' : 'Download the day'}
      </button>
      <p className="keepsake-note">
        {exportFailed
          ? "That didn't save — try once more, or free up a little space on the phone."
          : 'One page with everything you marked — save it, print it, or send it on.'}
      </p>
    </Sheet>
  )
}

type MenuProps = {
  open: boolean
  onClose: () => void
  onOpenPanel: (panel: PanelId) => void
  onJumpToStop: (index: number) => void
  activeStop: number
  theme: string
  onThemeChange: (theme: 'day' | 'dusk' | 'night') => void
}

export function TrailMenu({
  open,
  onClose,
  onOpenPanel,
  onJumpToStop,
  activeStop,
  theme,
  onThemeChange,
}: MenuProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Trail menu">
      <button type="button" className="menu-backdrop" aria-label="Close menu" onClick={onClose} />
      <nav className="menu-sheet">
        <div className="menu-head">
          <p className="menu-title">Trail menu</p>
          <button type="button" className="sheet-close" aria-label="Close menu" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="menu-links">
          <button type="button" onClick={() => onOpenPanel('howto')}>
            <span className="menu-emoji" aria-hidden="true">💡</span> How this works
            <small>dots, notes, voice memos, keepsake</small>
          </button>
          <button type="button" onClick={() => onOpenPanel('tips')}>
            <span className="menu-emoji" aria-hidden="true">🧭</span> Good to know
            <small>Poland tips for the week</small>
          </button>
          <button type="button" onClick={() => onOpenPanel('garbary')}>
            <span className="menu-emoji" aria-hidden="true">🏠</span> Your Street: Garbary
            <small>tanners, candy, and a codebreaker</small>
          </button>
          <button type="button" onClick={() => onOpenPanel('food')}>
            <span className="menu-emoji" aria-hidden="true">🍦</span> Where to eat
            <small>verified picks near the route</small>
          </button>
          <button type="button" onClick={() => onOpenPanel('attractions')}>
            <span className="menu-emoji" aria-hidden="true">🎡</span> Notable attractions
            <small>beyond the walking route</small>
          </button>
          <button type="button" onClick={() => onOpenPanel('keepsake')}>
            <span className="menu-emoji" aria-hidden="true">📔</span> Your keepsake
            <small>download the day</small>
          </button>
        </div>

        <p className="menu-section-label">Jump to a stop</p>
        <div className="menu-stops">
          {routeStops.map((stop, index) => (
            <button
              key={stop.id}
              type="button"
              className={index === activeStop ? 'is-active' : ''}
              onClick={() => {
                onJumpToStop(index)
                onClose()
              }}
            >
              <span className="menu-stop-index">{String(index + 1).padStart(2, '0')}</span>
              {stop.shortName}
            </button>
          ))}
        </div>

        <p className="menu-section-label">Light</p>
        <div className="menu-themes" role="radiogroup" aria-label="Choose visual theme">
          {(['day', 'dusk', 'night'] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={theme === option}
              className={theme === option ? 'is-active' : ''}
              onClick={() => onThemeChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

