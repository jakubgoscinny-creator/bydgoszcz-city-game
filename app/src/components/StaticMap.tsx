import { useEffect, useState } from 'react'
import { mapEmbedUrl, mapSearchUrl } from '../data/route'

type Props = {
  query: string
  label: string
}

/**
 * A map preview that cannot be panned (pointer-events: none on the iframe),
 * so it never fights the horizontal stop-swipe. Tapping opens a fullscreen
 * interactive map with an "Open in Google Maps" escape hatch.
 */
export function StaticMap({ query, label }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        className="map-preview"
        role="button"
        tabIndex={0}
        aria-label={`Map preview for ${label} — tap to explore`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      >
        <iframe
          className="map-preview-frame"
          src={mapEmbedUrl(query)}
          title={`Map preview for ${label}`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
        />
        <span className="map-preview-veil">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 21c4-4.4 7-8 7-11a7 7 0 1 0-14 0c0 3 3 6.6 7 11z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="10" r="2.4" fill="currentColor" />
          </svg>
          Tap to explore the map
        </span>
      </div>

      {open ? (
        <div className="map-modal" role="dialog" aria-modal="true" aria-label={`Map for ${label}`}>
          <div className="map-modal-chrome">
            <span className="map-modal-title">{label}</span>
            <a
              className="map-modal-external"
              href={mapSearchUrl(query)}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
            <button
              type="button"
              className="map-modal-close"
              aria-label="Close map"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <iframe className="map-modal-frame" src={mapEmbedUrl(query)} title={`Map for ${label}`} />
        </div>
      ) : null}
    </>
  )
}
