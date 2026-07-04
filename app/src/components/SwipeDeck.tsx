import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

const LOCK_DISTANCE = 12
const HORIZONTAL_BIAS = 1.4
const FLICK_VELOCITY = 0.5 // px/ms

type Props = {
  index: number
  count: number
  onIndexChange: (next: number) => void
  onFirstSwipe?: () => void
  children: ReactNode
}

type GestureState =
  | { phase: 'idle' }
  | { phase: 'pending'; pointerId: number; startX: number; startY: number; startTime: number }
  | { phase: 'dragging'; pointerId: number; startX: number; startY: number; startTime: number }

/**
 * Axis-locked horizontal swipe between stops.
 *
 * - `touch-action: pan-y` on the track keeps vertical scrolling native; we
 *   only claim the gesture once horizontal movement clearly dominates
 *   (|dx| > 12px AND |dx| > 1.4·|dy|). A mostly-vertical drag is dismissed
 *   and never moves the deck.
 * - Drags starting on interactive elements (links, buttons, inputs, iframes,
 *   or anything inside [data-no-swipe]) are ignored entirely.
 * - A completed drag suppresses the trailing click so buttons under the
 *   finger don't fire after a swipe.
 */
export function SwipeDeck({ index, count, onIndexChange, onFirstSwipe, children }: Props) {
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const gesture = useRef<GestureState>({ phase: 'idle' })
  const suppressClick = useRef(false)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const reset = useCallback(() => {
    gesture.current = { phase: 'idle' }
    setDrag(0)
    setDragging(false)
  }, [])

  useEffect(() => reset, [index, reset])

  const handlePointerDown = (e: React.PointerEvent) => {
    // One gesture at a time: a second finger mid-drag must not steal or
    // corrupt the anchor (kids' hands land everywhere).
    if (gesture.current.phase !== 'idle') return
    if (e.pointerType === 'mouse' && e.button !== 0) return
    const target = e.target as Element
    if (target.closest('a, button, input, textarea, select, iframe, [data-no-swipe]')) return
    gesture.current = {
      phase: 'pending',
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startTime: performance.now(),
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    const g = gesture.current
    if (g.phase === 'idle' || e.pointerId !== g.pointerId) return
    // Mouse released outside the window: no pointerup ever reaches us.
    if (e.pointerType === 'mouse' && e.buttons === 0) {
      reset()
      return
    }
    const dx = e.clientX - g.startX
    const dy = e.clientY - g.startY

    if (g.phase === 'pending') {
      if (Math.abs(dx) > LOCK_DISTANCE && Math.abs(dx) > Math.abs(dy) * HORIZONTAL_BIAS) {
        gesture.current = { ...g, phase: 'dragging' }
        trackRef.current?.setPointerCapture(e.pointerId)
        setDragging(true)
      } else if (Math.abs(dy) > LOCK_DISTANCE && Math.abs(dy) >= Math.abs(dx)) {
        // Vertical scroll wins — hand the gesture back to the browser.
        gesture.current = { phase: 'idle' }
      }
      return
    }

    // Edge resistance at the first and last stop. (Handlers close over the
    // current `index`; it cannot change mid-gesture.)
    const atEdge = (index === 0 && dx > 0) || (index === count - 1 && dx < 0)
    setDrag(atEdge ? dx * 0.3 : dx)
  }

  const handlePointerCancel = (e: React.PointerEvent) => {
    const g = gesture.current
    if (g.phase === 'idle' || e.pointerId !== g.pointerId) return
    // The browser took the gesture back — abort, never commit a swipe.
    reset()
  }

  const handlePointerEnd = (e: React.PointerEvent) => {
    const g = gesture.current
    if (g.phase === 'idle' || e.pointerId !== g.pointerId) return
    if (g.phase !== 'dragging') {
      reset()
      return
    }
    const dx = e.clientX - g.startX
    const elapsed = Math.max(1, performance.now() - g.startTime)
    const velocity = dx / elapsed
    const width = trackRef.current?.clientWidth ?? window.innerWidth
    const threshold = Math.min(width * 0.25, 110)

    let next = index
    if (dx < -threshold || velocity < -FLICK_VELOCITY) next = Math.min(count - 1, index + 1)
    if (dx > threshold || velocity > FLICK_VELOCITY) next = Math.max(0, index - 1)

    suppressClick.current = true
    window.setTimeout(() => {
      suppressClick.current = false
    }, 80)

    reset()
    if (next !== index) {
      onIndexChange(next)
      onFirstSwipe?.()
    }
  }

  return (
    <div
      className={`swipe-deck ${dragging ? 'is-dragging' : ''}`}
      ref={trackRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerCancel}
      onClickCapture={(e) => {
        if (suppressClick.current) {
          e.preventDefault()
          e.stopPropagation()
        }
      }}
    >
      <div
        className="swipe-track"
        style={{ transform: `translate3d(calc(${-index * 100}% + ${drag}px), 0, 0)` }}
      >
        {children}
      </div>
    </div>
  )
}
