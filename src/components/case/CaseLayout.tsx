/**
 * CaseLayout — Server Component
 *
 * Shared chrome for all four case-study pages.
 *
 * Structure (faithful to case.css reference):
 *  1. Cover header: pills/eyebrow, title, desc + hero slot (per-page mockup)
 *  2. Snapshot meta strip: 5-column key/value grid + concept disclaimer
 *  3. Overview lede section
 *  4. {children}  ← per-page body (brief, approach, features, demo, gallery…)
 *  5. CTA band
 *  6. "More work" cards (up to 3 neighbouring cases)
 *
 * Nav + Footer are rendered by the root layout — NOT repeated here.
 */

import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Info, ChevronRight, Sparkles } from 'lucide-react'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ZMark } from '@/components/ui/ZMark'
import { Button } from '@/components/ui/Button'

// ── Types ──────────────────────────────────────────────────────────────────

export type CasePill = {
  icon: ReactNode
  label: string
  /** apply pill--concept (indigo) style */
  concept?: boolean
}

export type CaseMeta = {
  label: string
  value: string
  sub?: string
}

export type CaseRelated = {
  name: string
  href: string
  category: string
  /** Tailwind bg class or inline style handled via className */
  shotClassName?: string
  shotStyle?: React.CSSProperties
}

export type CaseLayoutProps = {
  /** Pills in the cover (type tags). First pill is usually the "Concept" pill. */
  pills?: CasePill[]
  /** Main case-study title */
  title: string
  /** One-liner tagline under the title */
  summary?: string
  /** Snapshot meta row (Type / Industry / Scope / Stack / Timeline) */
  meta?: CaseMeta[]
  /** Short concept-disclaimer text that appears below the meta row */
  disclaimer?: string
  /** Large overview lede paragraph (supports <em> for accent) */
  overviewLede?: ReactNode
  /** Hero cover slot — the per-page decorative mockup lives here */
  coverShot?: ReactNode
  /** Per-page body sections rendered between overview and the CTA band */
  children: ReactNode
  /** CTA band headline (defaults to "Like the thinking? Let's build yours.") */
  ctaHeadline?: string
  /** CTA band body copy */
  ctaBody?: string
  /** Up to 3 related/neighbouring case cards in the "More work" section */
  related?: CaseRelated[]
  /** Current case name (used for the breadcrumb) */
  breadcrumb?: string
}

// ── Eyebrow ────────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
      {children}
    </span>
  )
}

// ── Component ──────────────────────────────────────────────────────────────

export function CaseLayout({
  pills = [],
  title,
  summary,
  meta = [],
  disclaimer,
  overviewLede,
  coverShot,
  children,
  ctaHeadline = "Like the thinking? Let's build yours.",
  ctaBody = 'This is a concept — but the craft is real. Tell us what you\'re building and we\'ll get back within one business day.',
  related = [],
  breadcrumb,
}: CaseLayoutProps) {
  return (
    <>
      {/* ── COVER ────────────────────────────────────────────────────── */}
      <header
        id="top"
        className={[
          'case-cover',
          'relative overflow-hidden',
          'pt-[calc(var(--nav-h)+72px)]',
        ].join(' ')}
      >
        {/* radial gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(1000px 520px at 84% -10%, rgba(124,58,237,.10), transparent 58%),' +
              'radial-gradient(760px 440px at 0% 0%, rgba(79,70,229,.06), transparent 55%)',
          }}
          aria-hidden="true"
        />

        {/* breadcrumb + title */}
        <Wrap className="relative">
          <Reveal className="max-w-[760px]">
            {/* pills */}
            {pills.length > 0 && (
              <div className="mb-[22px] flex flex-wrap gap-[10px]">
                {pills.map((pill, i) => (
                  <span
                    key={i}
                    className={[
                      'inline-flex items-center gap-[7px] rounded-[var(--radius-pill)] border px-[13px] py-[6px]',
                      'text-[12.5px] font-semibold tracking-[0.02em]',
                      pill.concept
                        ? 'border-indigo-200 bg-indigo-50 text-indigo-deeper [&_svg]:text-indigo'
                        : 'border-slate-200 bg-white text-slate-600',
                    ].join(' ')}
                  >
                    <span className="[&_svg]:h-[14px] [&_svg]:w-[14px]">{pill.icon}</span>
                    {pill.label}
                  </span>
                ))}
              </div>
            )}

            <h1
              className={[
                'mb-[18px] font-display font-semibold leading-[1.02] tracking-[-0.035em]',
                'text-[clamp(38px,6vw,68px)]',
              ].join(' ')}
            >
              {title}
            </h1>

            {summary && (
              <p className="text-[clamp(18px,2.2vw,22px)] text-slate-600 max-w-[30ch] leading-[1.4]">
                {summary}
              </p>
            )}
          </Reveal>
        </Wrap>

        {/* cover shot */}
        {coverShot && (
          <Wrap>
            <Reveal
              className={[
                'relative mt-[56px] overflow-hidden px-[40px] pt-[40px]',
                'rounded-[22px_22px_0_0] border border-b-0 border-slate-200',
                'bg-gradient-to-b from-slate-50 to-white',
                'after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[120px]',
                'after:bg-gradient-to-t after:from-white after:to-transparent',
                'max-sm:mt-[36px] max-sm:px-[18px]',
              ].join(' ')}
            >
              {coverShot}
            </Reveal>
          </Wrap>
        )}
      </header>

      {/* ── SNAPSHOT META STRIP ──────────────────────────────────────── */}
      {(meta.length > 0 || disclaimer) && (
        <section className="border-b border-slate-200 bg-white">
          <Wrap className="py-[30px]">
            {meta.length > 0 && (
              <div
                className={[
                  'grid gap-0',
                  meta.length >= 5
                    ? 'grid-cols-5 max-[900px]:grid-cols-3 max-[560px]:grid-cols-2'
                    : 'grid-cols-4 max-[900px]:grid-cols-2',
                ].join(' ')}
              >
                {meta.map((item, i) => (
                  <div
                    key={i}
                    className={[
                      'border-l border-slate-200 px-[28px] py-[30px]',
                      i === 0 ? 'border-l-0 pl-0' : '',
                      i === meta.length - 1 ? 'pr-0' : '',
                      // Responsive border reset
                      'max-[900px]:border-l-0 max-[900px]:border-t max-[900px]:border-slate-200 max-[900px]:px-0 max-[900px]:py-[22px]',
                      'max-[900px]:[&:nth-child(-n+3)]:border-t-0',
                    ].join(' ')}
                  >
                    <div className="mb-[9px] text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="text-[16px] font-semibold leading-[1.35] text-ink-900">
                      {item.value}
                      {item.sub && (
                        <small className="mt-[3px] block text-[13.5px] font-normal text-slate-600">
                          {item.sub}
                        </small>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {disclaimer && (
              <div className="mt-[26px] flex max-w-[80ch] items-start gap-[10px] border-t border-dashed border-slate-200 pt-[18px] text-[14px] text-slate-600">
                <Info className="mt-[1px] h-[17px] w-[17px] shrink-0 text-indigo" strokeWidth={1.75} />
                <span>{disclaimer}</span>
              </div>
            )}
          </Wrap>
        </section>
      )}

      {/* ── OVERVIEW ─────────────────────────────────────────────────── */}
      {overviewLede && (
        <section id="overview" className="py-[84px]">
          <Wrap>
            <Reveal className="max-w-[920px]">
              <Eyebrow>Overview</Eyebrow>
              <div
                className={[
                  'mt-[18px] font-display text-[clamp(23px,2.8vw,30px)] font-medium',
                  'leading-[1.4] tracking-[-0.02em] text-ink-900',
                  '[&_em]:not-italic [&_em]:text-indigo',
                ].join(' ')}
              >
                {overviewLede}
              </div>

              {/* "by Zalorix" credit */}
              <div className="mt-[28px] flex items-center gap-[12px] text-[15px] text-slate-600">
                <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[var(--radius-sm)] bg-indigo text-white">
                  <ZMark className="h-[17px] w-[17px]" mono />
                </span>
                <span>Concept &amp; design by Zalorix — design &amp; development, end to end.</span>
              </div>
            </Reveal>
          </Wrap>
        </section>
      )}

      {/* ── PER-PAGE BODY ────────────────────────────────────────────── */}
      {children}

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section
        className={[
          'relative overflow-hidden py-[80px]',
          'bg-gradient-to-br from-ink-900 via-indigo-deeper to-indigo',
        ].join(' ')}
      >
        <Wrap>
          <Reveal className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[clamp(26px,4vw,40px)] font-display font-semibold text-white">
              {ctaHeadline}
            </h2>
            {ctaBody && (
              <p className="mx-auto mt-[18px] max-w-[52ch] text-[18px] text-indigo-200">
                {ctaBody}
              </p>
            )}
            <div className="mt-[36px] flex flex-wrap justify-center gap-[14px]">
              <Button href="/#contact" variant="light" size="lg">
                Start a project <ArrowRight strokeWidth={1.75} />
              </Button>
              <Button href="/#work" variant="ghost-light" size="lg">
                See all work
              </Button>
            </div>
          </Reveal>
        </Wrap>
      </section>

      {/* ── MORE WORK ────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-[84px]">
          <Wrap>
            <Reveal className="max-w-[680px]">
              <Eyebrow>More work</Eyebrow>
              <h2 className="my-[14px] text-[clamp(24px,3vw,36px)] font-display font-semibold">
                More concepts in the series.
              </h2>
              <p className="text-[19px] text-slate-600">
                Part of a series of concept pieces exploring different kinds of build.
              </p>
            </Reveal>

            <div
              className={[
                'mt-[44px] grid gap-[22px]',
                related.length >= 3
                  ? 'grid-cols-3 max-[820px]:grid-cols-1'
                  : 'grid-cols-2 max-[640px]:grid-cols-1',
              ].join(' ')}
            >
              {related.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <Link
                    href={item.href}
                    className={[
                      'group block overflow-hidden rounded-[var(--radius-md)] border border-slate-200',
                      'bg-white shadow-[var(--shadow-card)]',
                      'transition-[transform,box-shadow] duration-[180ms]',
                      'hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'relative aspect-[16/10] grid place-items-center',
                        item.shotClassName ?? '',
                      ].join(' ')}
                      style={item.shotStyle}
                    >
                      <span className="flex items-center gap-[7px] rounded-[var(--radius-pill)] border border-white/25 bg-ink-900/40 px-[12px] py-[6px] text-[12.5px] font-semibold text-white/90">
                        <ArrowRight className="h-[14px] w-[14px]" strokeWidth={1.75} />
                        View case study
                      </span>
                    </div>
                    <div className="px-[20px] pb-[20px] pt-[18px]">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.04em] text-slate-400">
                        {item.category}
                      </div>
                      <h3 className="mt-[7px] font-sans text-[17px] font-semibold">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Wrap>
        </section>
      )}
    </>
  )
}

// ── Helper sub-components exported for per-page use ────────────────────────

/**
 * Two-column narrative section (Brief / Approach pattern).
 * Aside is sticky on desktop; stacks on mobile.
 */
export function CaseNarr({
  children,
  id,
  tint = false,
}: {
  children: ReactNode
  id?: string
  tint?: boolean
}) {
  return (
    <section
      id={id}
      className={[
        'py-[120px]',
        tint ? 'border-y border-slate-200 bg-slate-50' : '',
      ].join(' ')}
    >
      <Wrap>
        <div className="grid grid-cols-[320px_1fr] gap-[64px] items-start max-[880px]:grid-cols-1 max-[880px]:gap-[28px]">
          {children}
        </div>
      </Wrap>
    </section>
  )
}

/** The sticky left column in a CaseNarr */
export function CaseNarrAside({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-[calc(var(--nav-h)+28px)] max-[880px]:static">
      {children}
    </div>
  )
}

/** The scrolling right column in a CaseNarr */
export function CaseNarrBody({ children }: { children: ReactNode }) {
  return <div className="[&>p]:text-[18px] [&>p]:text-slate-600 [&>p]:leading-[1.7] [&>p+p]:mt-[18px]">{children}</div>
}

/**
 * Problem list card (used inside CaseNarrBody)
 */
export function CaseProbList({ children }: { children: ReactNode }) {
  return <div className="mt-[30px] grid gap-[14px]">{children}</div>
}

export function CaseProbItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex gap-[16px] rounded-[var(--radius-md)] border border-slate-200 bg-white px-[22px] py-[20px] shadow-[var(--shadow-card)]">
      <div className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[var(--radius-sm)] bg-slate-100 [&_svg]:h-[20px] [&_svg]:w-[20px] [&_svg]:text-slate-600">
        {icon}
      </div>
      <div>
        <h4 className="mb-[4px] font-sans text-[16px] font-semibold">{title}</h4>
        <p className="m-0 text-[14.5px] text-slate-600">{children}</p>
      </div>
    </div>
  )
}

/**
 * Numbered approach step
 */
export function CaseApprList({ children }: { children: ReactNode }) {
  return <div className="mt-[8px] divide-y divide-slate-200">{children}</div>
}

export function CaseApprItem({
  n,
  title,
  tags = [],
  children,
}: {
  n: string
  title: string
  tags?: string[]
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-[20px] py-[24px] first:pt-0">
      <div className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full border-[1.5px] border-indigo-200 font-display text-[15px] font-bold text-indigo">
        {n}
      </div>
      <div>
        <h4 className="mt-[6px] mb-[6px] font-sans text-[18px] font-semibold">{title}</h4>
        <p className="m-0 text-[15.5px] text-slate-600">{children}</p>
        {tags.length > 0 && (
          <div className="mt-[12px] flex flex-wrap gap-[7px]">
            {tags.map((t, i) => (
              <span
                key={i}
                className="rounded-[var(--radius-pill)] bg-slate-100 px-[10px] py-[4px] text-[12px] font-medium text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Key features 4-column grid section
 */
export function CaseFeatGrid({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="border-y border-slate-200 bg-slate-50 py-[120px]"
    >
      <Wrap>{children}</Wrap>
    </section>
  )
}

export function CaseFeatItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="group rounded-[var(--radius-md)] border border-slate-200 bg-white p-[26px] shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-[180ms] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-hover)]">
      <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[var(--radius-sm)] bg-indigo-50 [&_svg]:h-[23px] [&_svg]:w-[23px] [&_svg]:text-indigo">
        {icon}
      </div>
      <h3 className="mb-[8px] font-sans text-[17px] font-semibold tracking-[0]">{title}</h3>
      <p className="text-[14.5px] text-slate-600">{children}</p>
    </div>
  )
}

/**
 * "What this demonstrates" dark section
 */
export function CaseDemoSection({
  id,
  eyebrow = 'What this demonstrates',
  title,
  subtitle,
  children,
  targets,
}: {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  targets?: { icon: ReactNode; label: string; value: string }[]
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden py-[120px] text-white"
      style={{
        background: 'linear-gradient(165deg, var(--color-ink-900) 0%, var(--color-indigo-deeper) 135%)',
      }}
    >
      <div
        className="pointer-events-none absolute right-[-80px] top-[-80px] h-[320px] w-[320px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(129,140,248,.30), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <Wrap className="relative">
        <Reveal className="mb-[48px] max-w-[640px]">
          <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo-400">
            {eyebrow}
          </span>
          <h2 className="my-[14px] text-[clamp(26px,3.5vw,38px)] font-display font-semibold text-white">
            {title}
          </h2>
          {subtitle && <p className="text-[18px] text-indigo-200">{subtitle}</p>}
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-x-[48px] gap-y-0 max-[760px]:grid-cols-1">
          {children}
        </Reveal>

        {targets && targets.length > 0 && (
          <Reveal className="mt-[44px] flex flex-wrap gap-[12px]">
            {targets.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-[9px] rounded-[var(--radius-pill)] border border-white/16 bg-white/6 px-[16px] py-[10px] text-[14px] text-white"
              >
                <span className="[&_svg]:h-[16px] [&_svg]:w-[16px] [&_svg]:text-indigo-400">
                  {t.icon}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-indigo-400">
                  {t.label}
                </span>
                <b className="font-display">{t.value}</b>
              </span>
            ))}
          </Reveal>
        )}
      </Wrap>
    </section>
  )
}

export function CaseDemoItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-[18px] border-t border-white/12 py-[22px]">
      <div className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-[var(--radius-sm)] border border-white/14 bg-white/8 [&_svg]:h-[21px] [&_svg]:w-[21px] [&_svg]:text-indigo-400">
        {icon}
      </div>
      <div>
        <h3 className="mb-[6px] font-sans text-[17px] font-semibold text-white">{title}</h3>
        <p className="text-[14.5px] text-slate-400">{children}</p>
      </div>
    </div>
  )
}
