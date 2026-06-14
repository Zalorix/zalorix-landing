'use client'

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const GAP = 16

/** Desktop: lays children out with `gridClassName` (a normal grid).
 *  Mobile (≤560px): becomes a snap-scrolling carousel with a control bar
 *  (arrows + indicator dots) above so it's obviously swipeable.
 *
 *  Children should carry `max-[560px]:w-[82vw] max-[560px]:shrink-0
 *  max-[560px]:snap-start` so they size correctly in the mobile rail. */
export function MobileCarousel({
  gridClassName,
  children,
}: {
  gridClassName: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [active, setActive] = useState(0)
  const count = Children.count(children)

  function stepOf(el: HTMLDivElement) {
    const card = el.firstElementChild as HTMLElement | null
    return card ? card.offsetWidth + GAP : el.clientWidth * 0.85
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

  const barArrow =
    'grid h-[36px] w-[36px] shrink-0 cursor-pointer place-items-center rounded-full border border-slate-300 bg-white text-ink-900 transition-[color,background,border-color,opacity] hover:enabled:border-slate-400 hover:enabled:bg-slate-50 disabled:cursor-default disabled:opacity-35'

  return (
    <div className="mt-[56px]">
      {/* Mobile control bar — only shown on small screens */}
      <div className="mb-[14px] hidden items-center justify-between max-[560px]:flex">
        <button
          type="button"
          aria-label="Previous"
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
              aria-label={`Go to item ${i + 1}`}
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
          aria-label="Next"
          onClick={() => scrollByCards(1)}
          disabled={atEnd}
          className={barArrow}
        >
          <ChevronRight className="h-[16px] w-[16px]" strokeWidth={2} />
        </button>
      </div>

      {/* Grid on desktop, snap rail on mobile */}
      <div
        ref={ref}
        className={`${gridClassName} max-[560px]:flex max-[560px]:gap-[16px] max-[560px]:overflow-x-auto max-[560px]:overscroll-x-contain max-[560px]:scroll-smooth max-[560px]:snap-x max-[560px]:snap-mandatory max-[560px]:pb-[6px] max-[560px]:[scrollbar-width:none] max-[560px]:[-ms-overflow-style:none] max-[560px]:[&::-webkit-scrollbar]:hidden`}
      >
        {children}
      </div>
    </div>
  )
}
