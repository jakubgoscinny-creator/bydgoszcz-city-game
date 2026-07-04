import { useRef, useState } from 'react'
import { useReactions } from '../hooks/useReactions'
import { ReactionDot } from './ReactionDot'

const DOUBLE_TAP_MS = 300

type Props = {
  contentId: string
  src: string
  alt: string
  caption?: string
  notePlaceholder?: string
}

/**
 * A photo with the Instagram-muscle-memory double-tap heart.
 * IMPORTANT: long-press stays native (save/share image) — no contextmenu
 * hijacking, no touch-callout suppression. Comments go through the corner dot.
 */
export function StopPhoto({ contentId, src, alt, caption, notePlaceholder }: Props) {
  const { reactions, toggleHeart } = useReactions()
  const hearted = !!reactions.get(contentId)?.hearted
  const [stamp, setStamp] = useState(false)
  const lastTap = useRef(0)

  const handleClick = (e: React.MouseEvent) => {
    // Taps on the corner reaction dot / pencil / note input are their own
    // interaction — they must not count toward the double-tap heart.
    if ((e.target as Element).closest('button, input, .amber-wrap, .amber-note-row')) return
    const now = performance.now()
    if (now - lastTap.current < DOUBLE_TAP_MS) {
      lastTap.current = 0
      toggleHeart(contentId)
      if (!hearted) {
        setStamp(true)
        if (navigator.vibrate) navigator.vibrate([8, 40, 8])
      }
    } else {
      lastTap.current = now
    }
  }

  return (
    <figure className="stop-photo">
      <div className="stop-photo-frame" onClick={handleClick}>
        <img src={src} alt={alt} loading="lazy" draggable={false} />
        {stamp ? (
          <span className="heart-stamp" onAnimationEnd={() => setStamp(false)} aria-hidden="true">
            <HeartIcon />
          </span>
        ) : null}
        {hearted ? (
          <span className="heart-badge" aria-label="Hearted">
            <HeartIcon />
          </span>
        ) : null}
        <ReactionDot corner contentId={contentId} notePlaceholder={notePlaceholder} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
      />
    </svg>
  )
}
