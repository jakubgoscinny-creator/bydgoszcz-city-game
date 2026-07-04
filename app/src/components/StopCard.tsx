import { useRef, useState } from 'react'
import { directionsUrl, mapSearchUrl, type RouteStop } from '../data/route'
import { stopUnitId, pauseId, slugify } from '../lib/contentIds'
import { useReactions } from '../hooks/useReactions'
import { ReactionDot } from './ReactionDot'
import { StopPhoto } from './StopPhoto'
import { StaticMap } from './StaticMap'

type Props = {
  stop: RouteStop
  index: number
  total: number
  nextStop?: RouteStop
  isActive: boolean
  showDotHint: boolean
  onOpenGarbary?: () => void
}

export function StopCard({ stop, index, total, nextStop, isActive, showDotHint, onOpenGarbary }: Props) {
  const { photos, photoUrls, addFamilyPhoto } = useReactions()
  const [deepOpen, setDeepOpen] = useState(false)
  const fileRef = useRef<HTMLInputElement | null>(null)
  const stopPhotos = photos.filter((p) => p.stopId === stop.id)

  return (
    <article
      className={`stop-card ${isActive ? 'is-active' : ''}`}
      aria-hidden={!isActive}
      // Inert keeps focus + clicks inside off-screen cards from misfiring.
      {...(!isActive ? { inert: true } : {})}
    >
      <div className="stop-scroll">
        <header className="stop-heading">
          <p className="stop-kicker">
            <span className="stop-count">
              Stop {index + 1} of {total}
            </span>
            <span className="stop-district">{stop.district}</span>
          </p>
          <h2>{stop.name}</h2>
          <p className="stop-meta">
            <span>{stop.walkFromPrevious}</span>
            <span aria-hidden="true">·</span>
            <span>stay {stop.stayFor}</span>
          </p>
        </header>

        <StopPhoto
          contentId={stopUnitId(stop.id, 'photo')}
          src={stop.imageUrl}
          alt={stop.imageAlt}
          caption={stop.imageAlt}
          notePlaceholder="the story behind this one…"
        />

        <p className="stop-strapline">{stop.strapline}</p>

        <section className="look-for" aria-label="What to look for">
          <h3>Look for</h3>
          <ul>
            {stop.lookFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {onOpenGarbary ? (
          <button type="button" className="garbary-teaser" onClick={onOpenGarbary}>
            <span className="deep-dive-kicker">Your street, before you set off</span>
            <span className="deep-dive-hook">
              A chimney that moved house, and the man who cracked Enigma — the story of Garbary →
            </span>
          </button>
        ) : null}

        <section className="fact-block fact-kids">
          <h3>For little explorers</h3>
          {stop.kidFacts.map((fact, i) => (
            <p className="fact-line" key={i}>
              {fact}
              <ReactionDot
                contentId={stopUnitId(stop.id, 'kidFact', i)}
                notePlaceholder="what the kids said…"
                hint={showDotHint && i === 0}
              />
            </p>
          ))}
        </section>

        <section className="fact-block fact-adults">
          <h3>For grown-up explorers</h3>
          {stop.adultFacts.map((fact, i) => (
            <p className="fact-line" key={i}>
              {fact}
              <ReactionDot
                contentId={stopUnitId(stop.id, 'adultFact', i)}
                notePlaceholder="worth remembering…"
              />
            </p>
          ))}
        </section>

        <section className="mission-block">
          <h3>Mini mission</h3>
          <p className="fact-line">
            {stop.mission}
            <ReactionDot
              contentId={stopUnitId(stop.id, 'mission')}
              notePlaceholder="how did it go…"
            />
          </p>
          <p className="fact-line bonus-line">
            {stop.bonus}
            <ReactionDot
              contentId={stopUnitId(stop.id, 'bonus')}
              notePlaceholder="little discovery…"
            />
          </p>
        </section>

        {stop.secondPhoto ? (
          <div className="second-photo">
            <StopPhoto
              contentId={stopUnitId(stop.id, 'photo', 2)}
              src={stop.secondPhoto.url}
              alt={stop.secondPhoto.alt}
              caption={stop.secondPhoto.alt}
              notePlaceholder="the story behind this one…"
            />
            <p className="photo-credit">
              <a href={stop.secondPhoto.creditUrl} target="_blank" rel="noreferrer">
                {stop.secondPhoto.credit}
              </a>
            </p>
          </div>
        ) : null}

        <section className="deep-dive">
          <button
            type="button"
            className="deep-dive-toggle"
            aria-expanded={deepOpen}
            onClick={() => setDeepOpen((open) => !open)}
          >
            <span className="deep-dive-teaser">
              <span className="deep-dive-kicker">
                {deepOpen ? 'The longer story — fold it away' : 'The longer story'}
              </span>
              <span className="deep-dive-hook">{stop.deepDive.teaser}</span>
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className={deepOpen ? 'is-open' : ''}>
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {deepOpen ? (
            <div className="deep-dive-body">
              <p className="deep-dive-intro">{stop.deepDive.intro}</p>
              <h4>With the kids</h4>
              {stop.deepDive.kids.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <h4>Between the grown-ups</h4>
              {stop.deepDive.adults.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <span className="deep-dive-mark">
                <ReactionDot
                  contentId={stopUnitId(stop.id, 'deepDive')}
                  notePlaceholder="the bit that stuck…"
                />
              </span>
            </div>
          ) : null}
        </section>

        {stop.highlightPause ? (
          <section className="pause-highlight">
            <p className="pause-kind">{stop.highlightPause.kind}</p>
            <h3>{stop.highlightPause.name}</h3>
            <p className="fact-line">
              {stop.highlightPause.summary}
              <ReactionDot
                contentId={pauseId(slugify(stop.highlightPause.name))}
                notePlaceholder="verdict from the table…"
              />
            </p>
            <a
              className="text-link"
              href={mapSearchUrl(stop.highlightPause.mapQuery)}
              target="_blank"
              rel="noreferrer"
            >
              Find it on the map
            </a>
          </section>
        ) : null}

        <section className="family-photos">
          <div className="family-photos-head">
            <h3>Your photos from here</h3>
            <button type="button" className="ghost-button" onClick={() => fileRef.current?.click()}>
              Add a photo
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) void addFamilyPhoto(stop.id, file)
                e.target.value = ''
              }}
            />
          </div>
          {stopPhotos.length ? (
            <div className="family-photo-grid">
              {stopPhotos.map((photo) => (
                <StopPhoto
                  key={photo.id}
                  contentId={`familyPhoto:${photo.id}`}
                  src={photoUrls.get(photo.id) ?? ''}
                  alt="A photo your family took here"
                  notePlaceholder="where this was taken…"
                />
              ))}
            </div>
          ) : (
            <p className="family-photos-empty">Snapped something good? It joins the keepsake.</p>
          )}
        </section>

        <StaticMap query={stop.mapQuery} label={stop.name} />

        <div className="stop-actions">
          <a className="primary-link" href={mapSearchUrl(stop.mapQuery)} target="_blank" rel="noreferrer">
            Open this stop in Google Maps
          </a>
          {nextStop ? (
            <a
              className="secondary-link"
              href={directionsUrl(stop.nextMapQuery ?? stop.mapQuery, nextStop.mapQuery)}
              target="_blank"
              rel="noreferrer"
            >
              {stop.nextLabel ?? `Walk us to ${nextStop.shortName}`}
            </a>
          ) : null}
        </div>

        <a className="source-link" href={stop.sourceUrl} target="_blank" rel="noreferrer">
          Source: {stop.sourceLabel}
        </a>
      </div>
    </article>
  )
}
