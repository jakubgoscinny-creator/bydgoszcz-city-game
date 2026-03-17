import { useState, type CSSProperties } from 'react'
import { pauseSpots, routeStops } from './data/route'
import './App.css'

type Lens = 'both' | 'kids' | 'grownups'

const lensOptions: Array<{ value: Lens; label: string; note: string }> = [
  { value: 'both', label: 'Both', note: 'See child and adult facts together.' },
  { value: 'kids', label: 'Kids', note: 'Keep the clues playful and quick.' },
  { value: 'grownups', label: 'Adults', note: 'Lean into city history and context.' },
]

const createMapEmbedUrl = (query: string) =>
  `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(query)}&z=16&output=embed`

const createMapSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

const createDirectionsUrl = (origin: string, destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=walking`

function App() {
  const [activeStop, setActiveStop] = useState(0)
  const [lens, setLens] = useState<Lens>('both')

  const currentStop = routeStops[activeStop]
  const nextStop = routeStops[activeStop + 1]
  const progress = Math.round(((activeStop + 1) / routeStops.length) * 100)

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="kicker">Bydgoszcz City Game</p>
          <h1>Amy&apos;s Bydgoszcz Treasure Trail</h1>
          <p className="hero-intro">
            A warm, browser-friendly city quest for July: six family-first stops,
            English clues, Google Maps hand-offs, and little facts for both curious
            adults and tiny explorers.
          </p>

          <div className="badge-row">
            <span className="badge">2-3 hours with pauses</span>
            <span className="badge">About 3 km</span>
            <span className="badge">Friendly for ages 4+</span>
          </div>

          <div className="hero-actions">
            <a className="primary-link" href="#explore-route">
              Open the route
            </a>
            <a className="secondary-link" href="#pause-shortlist">
              See pause ideas
            </a>
          </div>
        </div>

        <div className="hero-card">
          <p className="hero-card-label">Route promises</p>
          <div className="metric-grid">
            <article className="metric-card">
              <strong>6</strong>
              <span>guided stops</span>
            </article>
            <article className="metric-card">
              <strong>40 min</strong>
              <span>walking time</span>
            </article>
            <article className="metric-card">
              <strong>4</strong>
              <span>pause ideas to curate</span>
            </article>
          </div>

          <div className="hero-notes">
            <p>
              The story arc is simple on purpose: medieval square, river island,
              industrial mills, balancing sculpture, park fountain, musical finale.
            </p>
            <p>
              Each stop keeps one easy clue for children and one richer fact for the
              grown-ups, so the walk feels shared rather than split.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-grid" id="explore-route">
        <aside className="route-rail">
          <div className="rail-top">
            <p className="rail-label">Route compass</p>
            <div className="progress-ring" aria-label={`${progress}% of route visible`}>
              <div
                className="progress-ring-track"
                style={{ '--ring-angle': `${progress * 3.6}deg` } as CSSProperties}
              >
                <strong>{progress}%</strong>
                <span>of the walk explored</span>
              </div>
            </div>
          </div>

          <div className="rail-list">
            {routeStops.map((stop, index) => (
              <button
                key={stop.id}
                className={`rail-stop ${index === activeStop ? 'is-active' : ''}`}
                onClick={() => setActiveStop(index)}
                type="button"
              >
                <span className="rail-stop-index">0{index + 1}</span>
                <span className="rail-stop-copy">
                  <strong>{stop.name}</strong>
                  <span>{stop.walkFromPrevious}</span>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <section className="stop-stage">
          <div className="stage-heading">
            <div>
              <p className="kicker">Stop {activeStop + 1}</p>
              <h2>{currentStop.name}</h2>
            </div>
            <div className="time-pill-group">
              <span className="time-pill">{currentStop.walkFromPrevious}</span>
              <span className="time-pill">{currentStop.stayFor}</span>
            </div>
          </div>

          <div className="stage-grid">
            <div className="story-column">
              <p className="stop-strapline">{currentStop.strapline}</p>
              <p className="look-for">
                <strong>Look for:</strong> {currentStop.lookFor}
              </p>

              <div className="lens-switcher" aria-label="Choose whose version to show">
                {lensOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`lens-chip ${lens === option.value ? 'is-active' : ''}`}
                    onClick={() => setLens(option.value)}
                    type="button"
                  >
                    <span>{option.label}</span>
                    <small>{option.note}</small>
                  </button>
                ))}
              </div>

              <div className="fact-grid">
                {lens !== 'grownups' ? (
                  <article className="fact-card">
                    <p className="fact-label">For little explorers</p>
                    <p>{currentStop.kidFact}</p>
                  </article>
                ) : null}

                {lens !== 'kids' ? (
                  <article className="fact-card">
                    <p className="fact-label">For grown-up explorers</p>
                    <p>{currentStop.adultFact}</p>
                  </article>
                ) : null}

                <article className="fact-card mission-card">
                  <p className="fact-label">Mini mission</p>
                  <p>{currentStop.mission}</p>
                  <span className="bonus-note">{currentStop.bonus}</span>
                </article>
              </div>

              <div className="action-row">
                <a
                  className="primary-link"
                  href={createMapSearchUrl(currentStop.mapQuery)}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open this stop in Google Maps
                </a>

                {nextStop ? (
                  <a
                    className="secondary-link"
                    href={createDirectionsUrl(currentStop.mapQuery, nextStop.mapQuery)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Take us to the next stop
                  </a>
                ) : (
                  <a
                    className="secondary-link"
                    href={createMapSearchUrl(currentStop.mapQuery)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open the finale on Google Maps
                  </a>
                )}
              </div>

              <div className="button-row">
                <button
                  className="ghost-button"
                  disabled={activeStop === 0}
                  onClick={() => setActiveStop((current) => Math.max(0, current - 1))}
                  type="button"
                >
                  Previous stop
                </button>
                <button
                  className="ghost-button"
                  disabled={activeStop === routeStops.length - 1}
                  onClick={() =>
                    setActiveStop((current) => Math.min(routeStops.length - 1, current + 1))
                  }
                  type="button"
                >
                  Next stop
                </button>
              </div>

              <a
                className="source-link"
                href={currentStop.sourceUrl}
                rel="noreferrer"
                target="_blank"
              >
                Source: {currentStop.sourceLabel}
              </a>
            </div>

            <div className="visual-column">
              <figure className="photo-card">
                <img src={currentStop.imageUrl} alt={currentStop.imageAlt} loading="lazy" />
                <figcaption>{currentStop.imageAlt}</figcaption>
              </figure>

              <div className="map-card">
                <div className="map-card-header">
                  <p className="fact-label">Live map hand-off</p>
                  <span>{nextStop ? `Next: ${nextStop.name}` : 'Final stop reached'}</span>
                </div>
                <iframe
                  className="map-frame"
                  loading="lazy"
                  src={createMapEmbedUrl(currentStop.mapQuery)}
                  title={`Map for ${currentStop.name}`}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="overview-panel">
        <div className="section-heading">
          <div>
            <p className="kicker">At a glance</p>
            <h2>The whole walk in one sweep</h2>
          </div>
          <p className="section-copy">
            Tap any tile to jump the story forward. This makes it easy to skip ahead
            if Amy&apos;s family takes a longer coffee stop or joins only part of the route.
          </p>
        </div>

        <div className="overview-grid">
          {routeStops.map((stop, index) => (
            <button
              key={stop.id}
              className={`overview-card ${index === activeStop ? 'is-active' : ''}`}
              onClick={() => setActiveStop(index)}
              type="button"
            >
              <span className="overview-index">0{index + 1}</span>
              <strong>{stop.name}</strong>
              <span>{stop.walkFromPrevious}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="pause-panel" id="pause-shortlist">
        <div className="section-heading">
          <div>
            <p className="kicker">Pause Shortlist</p>
            <h2>Coffee and food ideas to curate later</h2>
          </div>
          <p className="section-copy">
            These are intentionally kept as a shortlist rather than a locked plan, so
            you can tune them for July hours, allergies, and how energetic the family
            feels on the day.
          </p>
        </div>

        <div className="pause-grid">
          {pauseSpots.map((spot) => (
            <article className="pause-card" key={spot.name}>
              <div className="pause-card-top">
                <span className="pause-kind">{spot.kind}</span>
                <h3>{spot.name}</h3>
              </div>
              <p>{spot.summary}</p>
              <p className="pause-why">{spot.whyItWorks}</p>
              <div className="pause-actions">
                <a
                  className="secondary-link"
                  href={createMapSearchUrl(spot.mapQuery)}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open in Google Maps
                </a>
                <a
                  className="source-link"
                  href={spot.sourceUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {spot.sourceLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="project-note">
        <p>
          Prototype facts and reference images are drawn from the official Bydgoszcz
          tourism portal and wired into Google Maps search and walking directions for
          a quick MVP. Before public launch, it would be smart to swap in fully cleared
          images or confirm reuse rights.
        </p>
      </footer>
    </main>
  )
}

export default App
