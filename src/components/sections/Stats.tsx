'use client'
import { Reveal } from '@/components/ui/Reveal'
import { Wrap } from '@/components/ui/Section'
import { useCountUp } from '@/components/ui/useCountUp'

function AnimatedStat({
  target,
  suffix,
  label,
  delay = 0,
}: {
  target: number
  suffix: string
  label: string
  delay?: number
}) {
  const { ref, value } = useCountUp(target)

  return (
    <Reveal className="stat text-center relative" delay={delay}>
      {/*
        .stat__num:
          font-family: var(--font-display); font-weight: 700; font-size: 48px;
          letter-spacing: -.03em; color: var(--indigo); line-height: 1
      */}
      <div
        ref={ref}
        className="font-display text-[48px] max-[760px]:text-[40px] font-bold tracking-[-0.03em] text-indigo leading-none"
      >
        {value}{suffix}
      </div>
      {/*
        .stat__lbl:
          font-size: 13px; font-weight: 600; text-transform: uppercase;
          letter-spacing: .07em; color: var(--slate-600); margin-top: 12px
      */}
      <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.07em] text-slate-600">
        {label}
      </div>
    </Reveal>
  )
}

function StaticStat({
  children,
  label,
  delay = 0,
}: {
  children: React.ReactNode
  label: string
  delay?: number
}) {
  return (
    <Reveal className="stat text-center relative" delay={delay}>
      <div className="font-display text-[48px] max-[760px]:text-[40px] font-bold tracking-[-0.03em] text-indigo leading-none">
        {children}
      </div>
      <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.07em] text-slate-600">
        {label}
      </div>
    </Reveal>
  )
}

export function Stats() {
  return (
    /*
      .stats:
        padding: 56px 0; border-bottom: 1px solid var(--slate-200); background: #fff
    */
    <section
      aria-label="What we deliver"
      className="border-b border-slate-200 bg-white py-[56px]"
    >
      <Wrap>
        {/*
          .stats__inner:
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px
          @media (max-width: 760px):
            grid-template-columns: 1fr 1fr; gap: 40px 24px
          Dividers between cells via CSS sibling rule:
            .stat + .stat::before — a 1px × 56px vertical line at left:-12px
          We reproduce these as a Tailwind equivalent with pseudo-before on each non-first stat.
        */}
        <div
          className="
            grid gap-[24px]
            [grid-template-columns:repeat(4,1fr)]
            max-[760px]:[grid-template-columns:1fr_1fr] max-[760px]:gap-x-[24px] max-[760px]:gap-y-[40px]
            [&_.stat+.stat]:before:content-[''] [&_.stat+.stat]:before:absolute
            [&_.stat+.stat]:before:left-[-12px] [&_.stat+.stat]:before:top-1/2
            [&_.stat+.stat]:before:-translate-y-1/2 [&_.stat+.stat]:before:w-px
            [&_.stat+.stat]:before:h-[56px] [&_.stat+.stat]:before:bg-slate-200
            max-[760px]:[&_.stat:nth-child(odd)]:before:hidden
            max-[760px]:[&_.stat:nth-child(3)]:before:hidden
            max-[760px]:[&_.stat:nth-child(4)]:before:hidden
          "
        >
          {/* Cell 1: animated, target=200, suffix="+" */}
          <AnimatedStat target={200} suffix="+" label="Projects shipped" delay={0} />

          {/* Cell 2: animated, target=100, suffix="%" */}
          <AnimatedStat target={100} suffix="%" label="Hand-coded, full control" delay={80} />

          {/* Cell 3: static "1–2 wks" with smaller "wks" span */}
          <StaticStat label="Typical delivery" delay={160}>
            1–2<span style={{ fontSize: '0.5em', fontWeight: 600 }}> wks</span>
          </StaticStat>

          {/* Cell 4: static "Free" */}
          <StaticStat label="Consultation & quote" delay={240}>
            Free
          </StaticStat>
        </div>
      </Wrap>
    </section>
  )
}
