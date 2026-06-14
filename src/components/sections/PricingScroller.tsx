'use client'

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const GAP = 18

/** Horizontal, snap-scrolling rail for the pricing tiers.
 *  Desktop: arrows overlay the left/right edges.
 *  Mobile: a control bar above the rail (arrows + indicator dots) makes it
 *  obvious the row scrolls. Cards reveal as they enter view. */
export function PricingScroller({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [active, setActive] = useState(0)
  const count = Children.count(children)

  function stepOf(el: HTMLDivElement) {
    const card = el.firstElementChild as HTMLElement | null
    return card ? card.offsetWidth + GAP : el.clientWidth * 0.8
  }

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
    setActive(Math.max(0, Math.min(count - 1, Math.round(el.scrollLeft / stepOf(el)))))
  }, [count])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  function scrollByCards(dir: 1 | -1) {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * stepOf(el), behavior: 'smooth' })
  }

  function scrollToIndex(i: number) {
    const el = ref.current
    if (!el) return
    el.scrollTo({ left: i * stepOf(el), behavior: 'smooth' })
  }

  const sideArrow =
    'absolute top-1/2 z-20 grid h-[44px] w-[44px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-ink-900 shadow-[var(--shadow-lift)] transition-[color,background,border-color,opacity] hover:enabled:border-slate-400 hover:enabled:bg-slate-50 disabled:pointer-events-none disabled:opacity-0 max-[560px]:hidden'

  const barArrow =
    'grid h-[36px] w-[36px] shrink-0 cursor-pointer place-items-center rounded-full border border-slate-300 bg-white text-ink-900 transition-[color,background,border-color,opacity] hover:enabled:border-slate-400 hover:enabled:bg-slate-50 disabled:cursor-default disabled:opacity-35'

  return (
    <div className="mt-[40px]">
      {/* Mobile control bar — above the rail so it's clearly scrollable */}
      <div className="mb-[2px] hidden items-center justify-between max-[560px]:flex">
        <button
          type="button"
          aria-label="Previous plans"
          onClick={() => scrollByCards(-1)}
          disabled={atStart}
          className={barArrow}
        >
          <ChevronLeft className="h-[16px] w-[16px]" strokeWidth={2} />
        </button>

        <div className="flex items-center gap-[7px]">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to plan ${i + 1}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i)}
              className={`h-[7px] cursor-pointer rounded-full transition-all duration-200 ${
                i === active ? 'w-[20px] bg-indigo' : 'w-[7px] bg-slate-300'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="More plans"
          onClick={() => scrollByCards(1)}
          disabled={atEnd}
          className={barArrow}
        >
          <ChevronRight className="h-[16px] w-[16px]" strokeWidth={2} />
        </button>
      </div>

      {/* Rail + edge fades + desktop side controls (fades scoped to the rail
          only, so they never overlap the mobile control bar above) */}
      <div className="relative">
      {/* Rail */}
      <div
        ref={ref}
        className="flex gap-[18px] overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pt-[18px] pb-[12px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Edge-fade hints */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 w-[44px] bg-gradient-to-r from-white to-transparent transition-opacity duration-200 ${atStart ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 w-[44px] bg-gradient-to-l from-white to-transparent transition-opacity duration-200 ${atEnd ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Desktop side controls */}
      <button
        type="button"
        aria-label="Previous plans"
        onClick={() => scrollByCards(-1)}
        disabled={atStart}
        className={`${sideArrow} left-[-14px]`}
      >
        <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="More plans"
        onClick={() => scrollByCards(1)}
        disabled={atEnd}
        className={`${sideArrow} right-[-14px]`}
      >
        <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
      </div>
    </div>
  )
}
