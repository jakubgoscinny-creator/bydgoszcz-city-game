import { useEffect, useState, type ReactNode } from 'react'
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
import { foodId, garbaryId, tipId } from '../lib/contentIds'
import { useReactions } from '../hooks/useReactions'
import { ReactionDot } from './ReactionDot'
import { StopPhoto } from './StopPhoto'
import { downloadKeepsake } from '../lib/keepsake'

export type PanelId = 'tips' | 'garbary' | 'food' | 'keepsake' | null

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
  return (
    <section className={`food-card ${place.adultsOnly ? 'is-adults' : ''}`}>
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

export function KeepsakePanel({ onClose }: { onClose: () => void }) {
  const { reactions, photos, visitorLabel, setVisitorLabel } = useReactions()
  const [busy, setBusy] = useState(false)
  const [exportFailed, setExportFailed] = useState(false)
  const markedCount = [...reactions.values()].filter(
    (r) => r.liked || r.hearted || (r.note && r.note.length > 0),
  ).length

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

