import { useCallback, useEffect, useState } from 'react'
import { routeStops } from './data/route'
import { ReactionsContext, useReactionsProvider } from './hooks/useReactions'
import { installSyncTriggers } from './lib/supabaseSync'
import { SwipeDeck } from './components/SwipeDeck'
import { StopCard } from './components/StopCard'
import {
  FoodPanel,
  GarbaryPanel,
  HowItWorksPanel,
  KeepsakePanel,
  TipsPanel,
  TrailMenu,
  type PanelId,
} from './components/Panels'
import './App.css'

type Theme = 'day' | 'dusk' | 'night'

const THEME_KEY = 'bydgoszcz-theme'
const HINT_KEY = 'amber-swipe-hint-done'
const WELCOME_KEY = 'trail-welcome-seen'

function loadTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'day' || saved === 'dusk' || saved === 'night') return saved
  } catch {
    // default below
  }
  return 'day'
}

function App() {
  const [activeStop, setActiveStop] = useState(0)
  const [theme, setTheme] = useState<Theme>(loadTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  // First-time visitors land on "How this works" so nothing needs discovering.
  const [panel, setPanel] = useState<PanelId>(() => {
    try {
      return localStorage.getItem(WELCOME_KEY) ? null : 'howto'
    } catch {
      return 'howto'
    }
  })
  const [showHint, setShowHint] = useState(() => {
    try {
      return !localStorage.getItem(HINT_KEY)
    } catch {
      return true
    }
  })
  const reactionsApi = useReactionsProvider()

  useEffect(() => {
    installSyncTriggers()
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // theme just won't persist
    }
  }, [theme])

  const dismissHint = useCallback(() => {
    setShowHint(false)
    try {
      localStorage.setItem(HINT_KEY, 'yes')
    } catch {
      // fine — the hint just shows again next time
    }
  }, [])

  useEffect(() => {
    // Don't burn the one-time swipe hint while the welcome sheet covers it.
    if (!showHint || panel !== null) return
    const timer = window.setTimeout(() => dismissHint(), 6500)
    return () => window.clearTimeout(timer)
  }, [showHint, panel, dismissHint])

  const goToStop = (index: number) => {
    setActiveStop(Math.max(0, Math.min(routeStops.length - 1, index)))
  }

  return (
    <ReactionsContext.Provider value={reactionsApi}>
      <div className="trail-shell">
        <header className="trail-chrome">
          <div className="wordmark">
            <span className="wordmark-city">Bydgoszcz</span>
            <span className="wordmark-title">Amy&apos;s Treasure Trail</span>
          </div>
          <span className="chrome-counter" aria-label={`Stop ${activeStop + 1} of ${routeStops.length}`}>
            {activeStop + 1}<em>/</em>{routeStops.length}
          </span>
          <button
            type="button"
            className="hamburger"
            aria-label="Open the trail menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <div className="route-ribbon" role="presentation">
          {routeStops.map((stop, index) => (
            <button
              key={stop.id}
              type="button"
              className={`ribbon-seg ${index === activeStop ? 'is-active' : ''} ${index < activeStop ? 'is-done' : ''}`}
              aria-label={`Go to stop ${index + 1}: ${stop.shortName}`}
              onClick={() => goToStop(index)}
            />
          ))}
        </div>

        <main className="trail-main">
          <SwipeDeck
            index={activeStop}
            count={routeStops.length}
            onIndexChange={goToStop}
            onFirstSwipe={dismissHint}
          >
            {routeStops.map((stop, index) => (
              <StopCard
                key={stop.id}
                stop={stop}
                index={index}
                total={routeStops.length}
                nextStop={routeStops[index + 1]}
                isActive={index === activeStop}
                showDotHint={showHint && index === 0}
                onOpenGarbary={index === 0 ? () => setPanel('garbary') : undefined}
              />
            ))}
          </SwipeDeck>

          {showHint && panel === null ? (
            <div className="swipe-hint" aria-hidden="true">
              <span className="swipe-hint-chevrons">
                <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              swipe for the next stop
            </div>
          ) : null}
        </main>

        <footer className="trail-footer">
          <div className="footer-nav">
            <button
              type="button"
              className="ghost-button"
              disabled={activeStop === 0}
              onClick={() => goToStop(activeStop - 1)}
            >
              ← {activeStop > 0 ? routeStops[activeStop - 1].shortName : 'Start'}
            </button>
            <button
              type="button"
              className="ghost-button"
              disabled={activeStop === routeStops.length - 1}
              onClick={() => goToStop(activeStop + 1)}
            >
              {activeStop < routeStops.length - 1 ? routeStops[activeStop + 1].shortName : 'Finale'} →
            </button>
          </div>
          <p className="footer-note">
            Made for one family&apos;s July in Bydgoszcz. Photos: visitbydgoszcz.pl archive &amp;
            Wikimedia Commons contributors.
          </p>
        </footer>

        <TrailMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onOpenPanel={(next) => {
            setMenuOpen(false)
            setPanel(next)
          }}
          onJumpToStop={goToStop}
          activeStop={activeStop}
          theme={theme}
          onThemeChange={setTheme}
        />

        {panel === 'howto' ? (
          <HowItWorksPanel
            onClose={() => {
              setPanel(null)
              try {
                localStorage.setItem(WELCOME_KEY, 'yes')
              } catch {
                // it'll just show again next visit
              }
            }}
          />
        ) : null}
        {panel === 'tips' ? <TipsPanel onClose={() => setPanel(null)} /> : null}
        {panel === 'garbary' ? <GarbaryPanel onClose={() => setPanel(null)} /> : null}
        {panel === 'food' ? <FoodPanel onClose={() => setPanel(null)} /> : null}
        {panel === 'keepsake' ? <KeepsakePanel onClose={() => setPanel(null)} /> : null}
      </div>
    </ReactionsContext.Provider>
  )
}

export default App
