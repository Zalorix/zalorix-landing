'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Trophy } from 'lucide-react'

const CONFETTI_COLORS = ['#4F46E5', '#818CF8', '#7C3AED', '#10B981', '#F59E0B']

// Deterministic particle spread (no Math.random → SSR-safe, stable per render).
const PARTICLES = Array.from({ length: 16 }, (_, i) => {
  const ang = (i / 16) * Math.PI * 2
  const dist = 50 + (i % 3) * 18
  return {
    dx: Math.round(Math.cos(ang) * dist),
    dy: Math.round(Math.sin(ang) * dist),
    r: i % 2 ? 200 : -180,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: (i % 4) * 25,
  }
})

type Geo = {
  axis: 'x' | 'y'
  start: number // first circle center along the axis
  end: number // last circle center along the axis
  cross: number // circle center on the other axis (line offset)
  tp: number // progress at which the tip reaches the celebrated circle
  lx: number // celebrated circle center (for the burst)
  ly: number
}

/** Steps grid + a connector line that glows/fills based on scroll position,
 *  anchored to the actual step circles (so it joins 01…05 exactly). Horizontal
 *  on desktop, vertical on mobile. When the glow reaches `celebrateIndex`, a
 *  trophy + confetti burst fires on that circle. */
export function ProcessTimeline({
  children,
  celebrateIndex,
}: {
  children: ReactNode
  celebrateIndex?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)
  const [geo, setGeo] = useState<Geo | null>(null)
  const [burst, setBurst] = useState(0)

  const geoRef = useRef<Geo | null>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Center of a step's circle, via offset chain (ignores Reveal's transforms).
    const centerOf = (stepEl: Element) => {
      const circle = (stepEl as HTMLElement).firstElementChild as HTMLElement
      let x = 0
      let y = 0
      let node: HTMLElement | null = circle
      while (node && node !== el) {
        x += node.offsetLeft
        y += node.offsetTop
        node = node.offsetParent as HTMLElement | null
      }
      return { x: x + circle.offsetWidth / 2, y: y + circle.offsetHeight / 2 }
    }

    const measure = () => {
      const steps = Array.from(el.children).filter(
        (c) => !(c as HTMLElement).dataset.deco,
      )
      if (steps.length < 2) return
      const first = centerOf(steps[0])
      const last = centerOf(steps[steps.length - 1])
      const mobile = window.innerWidth <= 860
      const axis = mobile ? 'y' : 'x'
      const start = mobile ? first.y : first.x
      const end = mobile ? last.y : last.x
      const cross = mobile ? first.x : first.y
      let tp = 1
      let lx = 0
      let ly = 0
      if (celebrateIndex != null && steps[celebrateIndex]) {
        const c = centerOf(steps[celebrateIndex])
        lx = c.x
        ly = c.y
        const along = mobile ? c.y : c.x
        tp = Math.max(0, Math.min(1, (along - start) / (end - start)))
      }
      const g: Geo = { axis, start, end, cross, tp, lx, ly }
      geoRef.current = g
      setGeo(g)
    }

    if (reduce) {
      measure()
      setP(1)
      return
    }

    // Fill is driven by where the section's TOP sits in the viewport (not by the
    // section height), so the speed and end point are fixed & predictable.
    let raf = 0
    const compute = () => {
      raf = 0
      const mobile = window.innerWidth <= 860
      const start = mobile ? 0.7 : 0.9
      const end = mobile ? 0.1 : 0.3
      const top = el.getBoundingClientRect().top / window.innerHeight
      const clamped = Math.max(0, Math.min(1, (start - top) / (start - end)))
      setP(clamped)

      const tp = geoRef.current?.tp
      if (tp != null) {
        if (clamped >= tp && !firedRef.current) {
          firedRef.current = true
          setBurst((b) => b + 1)
        } else if (clamped < tp - 0.04 && firedRef.current) {
          firedRef.current = false
        }
      }
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }
    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [celebrateIndex])

  const glow = 'bg-indigo shadow-[0_0_10px_1px_rgba(79,70,229,0.55)]'
  const dotVisible = p > 0.01 && p < 0.999
  const horiz = geo?.axis === 'x'
  const len = geo ? geo.end - geo.start : 0

  const trackStyle: CSSProperties = geo
    ? horiz
      ? { left: geo.start, top: geo.cross - 1, width: len, height: 2 }
      : { top: geo.start, left: geo.cross - 1, height: len, width: 2 }
    : {}
  const fillStyle: CSSProperties = geo
    ? horiz
      ? { left: geo.start, top: geo.cross - 1, width: len, height: 2, transformOrigin: 'left', transform: `scaleX(${p})` }
      : { top: geo.start, left: geo.cross - 1, height: len, width: 2, transformOrigin: 'top', transform: `scaleY(${p})` }
    : {}
  const dotStyle: CSSProperties = geo
    ? horiz
      ? { left: geo.start + p * len, top: geo.cross, opacity: dotVisible ? 1 : 0 }
      : { top: geo.start + p * len, left: geo.cross, opacity: dotVisible ? 1 : 0 }
    : {}

  return (
    <div
      ref={ref}
      className="
        relative mt-[56px]
        grid gap-[24px]
        [grid-template-columns:repeat(5,1fr)]
        max-[860px]:[grid-template-columns:1fr] max-[860px]:gap-0
      "
    >
      {geo && (
        <>
          {/* Base track */}
          <div
            data-deco
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full bg-slate-200"
            style={trackStyle}
          />
          {/* Glow fill */}
          <div
            data-deco
            aria-hidden="true"
            className={`pointer-events-none absolute rounded-full [will-change:transform] ${glow}`}
            style={fillStyle}
          />
          {/* Leading dot */}
          <div
            data-deco
            aria-hidden="true"
            className={`pointer-events-none absolute h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity ${glow}`}
            style={dotStyle}
          />
        </>
      )}

      {/* Launch celebration — anchored to the measured circle */}
      {celebrateIndex != null && burst > 0 && geo && (
        <div
          key={burst}
          data-deco
          aria-hidden="true"
          className="pointer-events-none absolute z-[5]"
          style={{ left: geo.lx, top: geo.ly }}
        >
          {PARTICLES.map((pt, i) => (
            <span
              key={i}
              className="absolute left-0 top-0 h-[7px] w-[7px] rounded-[2px]"
              style={
                {
                  background: pt.color,
                  '--dx': `${pt.dx}px`,
                  '--dy': `${pt.dy}px`,
                  '--r': `${pt.r}deg`,
                  animation: `rz-confetti 760ms ease-out ${pt.delay}ms forwards`,
                } as CSSProperties
              }
            />
          ))}
          <div className="absolute left-0 top-[-32px] -translate-x-1/2 -translate-y-1/2">
            <div
              className="grid h-[34px] w-[34px] place-items-center rounded-full bg-indigo text-white shadow-[0_0_18px_3px_rgba(79,70,229,0.5)]"
              style={{ animation: 'rz-trophy 1600ms cubic-bezier(0.22,1,0.36,1) forwards' }}
            >
              <Trophy className="h-[18px] w-[18px]" strokeWidth={2} />
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  )
}
