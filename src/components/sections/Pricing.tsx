import { Section, Wrap, SectionHead } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { PricingScroller } from '@/components/sections/PricingScroller'
import { pricingTiers, carePlans } from '@/lib/content'

// ─── Helper: split "₱1,500/mo" into price and "/mo" suffix ────────────────────
function CarePrice({ raw }: { raw: string }) {
  const slashIdx = raw.indexOf('/mo')
  if (slashIdx === -1) return <>{raw}</>
  return (
    <>
      {raw.slice(0, slashIdx)}
      <small className="text-[12px] text-slate-400 font-medium font-sans">/mo</small>
    </>
  )
}

// ─── Helper: render the "best" text — Custom tier has a muted price note ──────
function BestText({ text }: { text: string }) {
  // Custom tier: "Web apps, dashboards & complex builds. From ₱120,000"
  const fromIdx = text.indexOf(' From ₱')
  if (fromIdx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, fromIdx + 1)}
      <span className="text-slate-400">{text.slice(fromIdx + 1)}</span>
    </>
  )
}

export function Pricing() {
  return (
    <Section id="pricing">
      <Wrap>
        {/* .section__head .reveal */}
        <Reveal>
          <SectionHead eyebrow="Pricing" title="Agency-quality web, at honest prices.">
            Project-based pricing with no surprises. Every engagement starts with a free
            consultation — these are starting points, and your final quote depends on scope.
          </SectionHead>
        </Reveal>

        {/* Horizontal, snap-scrolling rail (showcases motion); cards reveal as
            they enter view. */}
        <PricingScroller>
          {pricingTiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 80}
              className="w-[300px] max-[560px]:w-[82vw] shrink-0 snap-start"
            >
              {/*
                .price-card:
                  border:1px solid var(--slate-200); border-radius:var(--r-md)[12px];
                  background:#fff; padding:30px 26px;
                  display:flex; flex-direction:column;
                  box-shadow:var(--shadow-card);
                  position:relative;
                  transition:transform .18s ease, box-shadow .18s ease
                .price-card:hover: transform:translateY(-4px); box-shadow:var(--shadow-hover)
                .price-card--featured: border-color:var(--indigo); box-shadow:var(--shadow-hover)
                .price-card--featured::before: "Most popular" badge (indigo pill, top-center)
              */}
              <div
                className={[
                  'relative flex h-full flex-col rounded-[12px] border bg-white px-[26px] py-[30px]',
                  'shadow-[var(--shadow-card)]',
                  'transition-[transform,box-shadow] duration-[180ms] ease-[ease]',
                  'hover:-translate-y-[4px] hover:shadow-[var(--shadow-hover)]',
                  tier.featured
                    ? 'border-indigo shadow-[var(--shadow-hover)]'
                    : 'border-slate-200',
                ].join(' ')}
              >
                {/* .price-card--featured::before — "Most popular" pill badge */}
                {tier.featured && (
                  <span
                    className="
                      absolute -top-[12px] left-1/2 -translate-x-1/2
                      bg-indigo text-white
                      text-[12px] font-semibold tracking-[0.04em]
                      px-[14px] py-[5px]
                      rounded-[999px]
                      whitespace-nowrap
                    "
                  >
                    Most popular
                  </span>
                )}

                {/* .price-card__name */}
                <div className="font-sans text-[17px] font-semibold tracking-[0]">
                  {tier.name}
                </div>

                {/*
                  .price-card__price: margin:16px 0 6px; display:flex; align-items:baseline; gap:6px
                  .from: font-size:13px; color:var(--slate-400); font-weight:500
                  .amt: font-display; font-weight:700; font-size:34px; letter-spacing:-.02em; color:var(--ink-900)
                  .amt.sm: font-size:26px
                  Growth (featured) uses .amt (34px); all others use .amt.sm (26px)
                */}
                <div className="mt-[16px] mb-[6px] flex items-baseline gap-[6px]">
                  {tier.from && (
                    <span className="text-[13px] font-medium text-slate-400">from</span>
                  )}
                  <span
                    className={[
                      'font-display font-bold tracking-[-0.02em] text-ink-900',
                      tier.featured ? 'text-[34px]' : 'text-[26px]',
                    ].join(' ')}
                  >
                    {tier.price}
                  </span>
                </div>

                {/*
                  .price-card__best:
                    font-size:14px; color:var(--slate-600); min-height:42px; margin-bottom:20px
                */}
                <p className="min-h-[42px] text-[14px] text-slate-600 mb-[20px]">
                  <BestText text={tier.best} />
                </p>

                {/*
                  .price-card__feats:
                    list-style:none; margin:0 0 26px; padding:20px 0 0;
                    display:grid; gap:12px; border-top:1px solid var(--slate-100)
                  li: display:flex; gap:10px; font-size:14px; color:var(--slate-600); align-items:flex-start
                  li svg: width:16px; height:16px; color:var(--indigo); flex:0 0 auto; margin-top:2px
                */}
                <ul className="mb-[26px] grid gap-[12px] border-t border-slate-100 pt-[20px] list-none p-0 [margin:0_0_26px]">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex gap-[10px] text-[14px] text-slate-600 items-start">
                      <Icon
                        name={f.icon}
                        className="h-[16px] w-[16px] flex-[0_0_auto] mt-[2px] text-indigo"
                      />
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA — .price-card .btn { margin-top: auto } */}
                <div className="mt-auto">
                  <Button
                    href="#contact"
                    variant={tier.featured ? 'primary' : 'secondary'}
                    block
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </PricingScroller>

        {/* ── Care plans ─────────────────────────────────────────────────────── */}
        {/*
          .care: margin-top:64px
        */}
        <Reveal className="mt-[64px]">
          {/*
            .care__head:
              display:flex; align-items:baseline; gap:14px; margin-bottom:28px; flex-wrap:wrap
            .care__head h3: font-sans; font-weight:600; font-size:22px; letter-spacing:0
            .care__head p: font-size:15px; color:var(--slate-600)
          */}
          <div className="flex flex-wrap items-baseline gap-[14px] mb-[28px]">
            <h3 className="font-sans text-[22px] font-semibold tracking-[0]">Care plans</h3>
            <p className="text-[15px] text-slate-600">
              Optional monthly support to keep your site fast, secure, and up to date.
            </p>
          </div>

          {/*
            .care-grid:
              display:grid; grid-template-columns:repeat(3,1fr); gap:20px
            @media(max-width:760px): grid-template-columns:1fr
          */}
          <div
            className="
              grid gap-[20px]
              [grid-template-columns:repeat(3,1fr)]
              max-[760px]:[grid-template-columns:1fr]
            "
          >
            {carePlans.map((plan) => (
              /*
                .care-card:
                  border:1px solid var(--slate-200); border-radius:var(--r-md)[12px];
                  background:var(--slate-50); padding:26px
              */
              <div
                key={plan.name}
                className="rounded-[12px] border border-slate-200 bg-slate-50 p-[26px]"
              >
                {/*
                  .care-card__top:
                    display:flex; align-items:baseline; justify-content:space-between;
                    gap:10px; margin-bottom:18px
                  .nm: font-sans; font-weight:600; font-size:17px
                  .pr: font-display; font-weight:700; font-size:20px; color:var(--indigo); white-space:nowrap
                  .pr small: font-size:12px; color:var(--slate-400); font-weight:500; font-family:var(--font-sans)
                */}
                <div className="flex items-baseline justify-between gap-[10px] mb-[18px]">
                  <span className="font-sans text-[17px] font-semibold">{plan.name}</span>
                  <span className="font-display text-[20px] font-bold text-indigo whitespace-nowrap">
                    <CarePrice raw={plan.price} />
                  </span>
                </div>
                {/* .care-card p: font-size:14px; color:var(--slate-600) */}
                <p className="text-[14px] text-slate-600">{plan.blurb}</p>
              </div>
            ))}
          </div>

          {/*
            .price-note:
              display:flex; gap:10px; align-items:flex-start; margin-top:40px;
              font-size:14.5px; color:var(--slate-600); max-width:64ch
            .price-note svg: width:18px; height:18px; color:var(--indigo); flex:0 0 auto; margin-top:2px
          */}
          <div className="mt-[40px] flex gap-[10px] items-start text-[14.5px] text-slate-600 max-w-[64ch]">
            <Icon name="info" className="h-[18px] w-[18px] flex-[0_0_auto] mt-[2px] text-indigo" />
            <span>
              All projects start with a free consultation. Hosting and domain can be bundled into
              your first year or billed separately — we&apos;ll make it clear up front. Final
              pricing depends on scope; these are starting points.
            </span>
          </div>
        </Reveal>
      </Wrap>
    </Section>
  )
}
