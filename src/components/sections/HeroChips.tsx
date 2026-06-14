'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, ShoppingBag, Wallet, type LucideIcon } from 'lucide-react'

type Chip = {
  label: string
  value: string
  Icon: LucideIcon
  pos: string
  /** transform applied when "fanned in" (hidden) — each points back toward the hero */
  from: string
  enterDelay: string
  floatDur: string
  floatDelay: string
}

const CHIPS: Chip[] = [
  {
    label: 'Conversions',
    value: '+38%',
    Icon: TrendingUp,
    pos: 'top-[-20px] right-[18px]',
    from: 'translate(-52px, 40px) scale(0.55)',
    enterDelay: '0.05s',
    floatDur: '4.6s',
    floatDelay: '0s',
  },
  {
    label: 'New customers',
    value: '+24%',
    Icon: ShoppingBag,
    pos: 'bottom-[-20px] left-[-26px] max-[980px]:left-[8px] max-[560px]:bottom-[-42px]',
    from: 'translate(44px, -32px) scale(0.55)',
    enterDelay: '0.16s',
    floatDur: '5.2s',
    floatDelay: '-1.8s',
  },
  {
    label: 'Revenue',
    value: '+32%',
    Icon: Wallet,
    pos: 'bottom-[-20px] right-[18px] max-[980px]:hidden max-[560px]:block max-[560px]:top-[calc(50%-28px)] max-[560px]:bottom-auto max-[560px]:right-[-14px]',
    from: 'translate(-34px, -40px) scale(0.55)',
    enterDelay: '0.28s',
    floatDur: '4.9s',
    floatDelay: '-3.1s',
  },
]

export function HeroChips() {
  const [shown, setShown] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      return
    }
    // Play the intro fan-out once, then leave the chips in place (floating).
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const settled = shown || reduced

  return (
    <div aria-hidden="true">
      {CHIPS.map((c) => (
        <div
          key={c.label}
          className={`absolute ${c.pos}`}
          style={{
            transform: settled ? 'none' : c.from,
            opacity: settled ? 1 : 0,
            transition: reduced
              ? 'none'
              : `transform 0.7s cubic-bezier(0.2,0.85,0.25,1) ${c.enterDelay}, opacity 0.5s ease ${c.enterDelay}`,
          }}
        >
          {/* inner element carries the continuous float so it never fights the fan transform */}
          <div
            className="rz-float flex items-center gap-[10px] rounded-[12px] border border-slate-200 bg-white px-[14px] py-[11px] shadow-[0_22px_48px_-14px_rgba(15,23,42,0.32),0_4px_12px_-4px_rgba(15,23,42,0.16)]"
            style={{ animationDuration: c.floatDur, animationDelay: c.floatDelay }}
          >
            <div className="grid h-[34px] w-[34px] place-items-center rounded-[8px] bg-indigo text-white">
              <c.Icon strokeWidth={2} className="h-[18px] w-[18px]" />
            </div>
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-400">
                {c.label}
              </div>
              <div className="mt-[1px] font-display text-[16px] font-semibold text-success">
                {c.value}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
