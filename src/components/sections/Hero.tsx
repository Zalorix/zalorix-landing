import { ArrowRight, CheckCircle2, Lock, Sparkles, Star } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Wrap } from '@/components/ui/Section'
import { HeroChips } from '@/components/sections/HeroChips'

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden pt-[calc(var(--nav-h)+56px)] pb-[104px]"
    >
      {/* Background decoration — matches .hero::before gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% -10%, rgba(79,70,229,.10) 0%, transparent 70%)',
        }}
      />

      <Wrap>
        {/*
          .hero__inner:
            display:grid; grid-template-columns:1.05fr .95fr; gap:64px; align-items:center
          @media(max-width:980px): grid-template-columns:1fr; gap:56px
        */}
        <div
          className="
            relative grid items-center gap-[64px]
            [grid-template-columns:1.05fr_0.95fr]
            max-[980px]:[grid-template-columns:1fr] max-[980px]:gap-[56px]
          "
        >
          {/* ─── LEFT: Copy column ───────────────────────────────────── */}
          <div>
            {/* Staggered load-in: eyebrow → headline → subtext → buttons → note */}
            <Reveal delay={0}>
              <span
                className="
                  inline-flex items-center gap-2.5 rounded-[999px] whitespace-nowrap
                  border border-slate-200 bg-white
                  px-[14px] py-[6px]
                  text-[13px] font-medium text-slate-600
                  shadow-[var(--shadow-card)]
                "
              >
                <span className="inline-flex items-center gap-[6px] font-semibold text-indigo-deeper">
                  <Sparkles size={14} strokeWidth={2} aria-hidden="true" />
                  Web Studio
                </span>
                <span className="hidden items-center gap-2.5 sm:inline-flex">
                  <span aria-hidden="true">&mdash;</span>
                  Design &amp; development, end to end
                </span>
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1
                className="
                  mt-[24px] mb-[22px] max-w-[14ch]
                  text-[64px] max-[980px]:text-[52px] max-[560px]:text-[40px]
                  leading-[1.04] tracking-[-0.035em]
                "
              >
                Websites that turn visitors into{' '}
                <em className="not-italic text-indigo">customers</em>.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="text-[20px] text-slate-600 max-w-[46ch]">
                We design and build fast, custom websites that get your business
                found, build trust, and turn visitors into paying customers — and
                grow with you as you scale.
              </p>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-[36px] flex flex-wrap gap-[14px]">
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  className="group max-[560px]:flex-1"
                >
                  Book a free consultation{' '}
                  <ArrowRight
                    strokeWidth={1.75}
                    className="arr transition-transform duration-150 group-hover:translate-x-[3px]"
                  />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#process"
                  className="max-[560px]:flex-1"
                >
                  See how we work
                </Button>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-[26px] flex items-start gap-[10px] text-[14px] text-[#64748b]">
                <CheckCircle2
                  strokeWidth={1.75}
                  className="mt-[2px] h-[16px] w-[16px] shrink-0 text-success"
                />
                <span className="text-slate-600">
                  Typically launched in weeks, not months — fixed scope, clear timeline.
                </span>
              </div>
            </Reveal>
          </div>

          {/* ─── RIGHT: Visual column ─────────────────────────────────── */}
          <Reveal delay={150}>
            {/*
              .hero__visual: position:relative
            */}
            <div className="relative">
              {/*
                .browser:
                  border-radius:14px; background:#fff;
                  border:1px solid var(--slate-200);
                  box-shadow:var(--shadow-lift); overflow:hidden
              */}
              <div
                className="overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[0_28px_70px_-28px_rgba(79,70,229,0.55),var(--shadow-lift)]"
              >
                {/*
                  .browser__bar:
                    display:flex; align-items:center; gap:14px;
                    padding:13px 16px; border-bottom:1px solid var(--slate-200);
                    background:var(--slate-50)
                */}
                <div className="flex items-center gap-[14px] border-b border-slate-200 bg-slate-50 px-[16px] py-[13px]">
                  {/*
                    .browser__dots: display:flex; gap:7px
                    .browser__dots i: width:11px; height:11px; border-radius:50%; background:var(--slate-300)
                  */}
                  <div className="flex gap-[7px]">
                    <span className="block h-[11px] w-[11px] rounded-full bg-slate-300" />
                    <span className="block h-[11px] w-[11px] rounded-full bg-slate-300" />
                    <span className="block h-[11px] w-[11px] rounded-full bg-slate-300" />
                  </div>

                  {/*
                    .browser__url:
                      flex:1; height:28px; border-radius:var(--r-pill);
                      background:#fff; border:1px solid var(--slate-200);
                      display:flex; align-items:center; gap:7px;
                      padding:0 12px; font-family:var(--font-mono);
                      font-size:12px; color:var(--slate-400)
                    .browser__url svg: width:12px; height:12px; color:var(--success)
                  */}
                  <div
                    className="
                      flex flex-1 items-center gap-[7px] rounded-[999px]
                      border border-slate-200 bg-white
                      h-[28px] px-[12px]
                      font-mono text-[12px] text-slate-400
                    "
                  >
                    <Lock strokeWidth={1.75} className="h-[12px] w-[12px] text-success" />
                    yourbusiness.com
                  </div>
                </div>

                {/*
                  .browser__body:
                    background:linear-gradient(160deg,var(--indigo) 0%,var(--violet) 100%);
                    padding:30px; aspect-ratio:4/3.05; position:relative
                */}
                <div className="bg-white">
                  {/* Site nav — real labels */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-[20px] py-[12px]">
                    <div className="flex items-center gap-[7px]">
                      <div className="h-[18px] w-[18px] rounded-[6px] bg-indigo" />
                      <span className="font-display text-[14px] font-semibold tracking-[-0.01em] text-ink-900">
                        yourbusiness
                      </span>
                    </div>
                    <div className="flex items-center gap-[13px] text-[11px] font-medium text-slate-500">
                      <span className="flex items-center gap-[13px] max-[560px]:hidden">
                        <span>Services</span>
                        <span>Work</span>
                        <span>About</span>
                      </span>
                      <span className="rounded-[7px] bg-indigo px-[11px] py-[5px] font-semibold text-white">
                        Get a quote
                      </span>
                    </div>
                  </div>

                  {/* Hero — real content + soft image block */}
                  <div className="grid grid-cols-[1fr_0.8fr] max-[560px]:grid-cols-1 items-center gap-[18px] px-[22px] py-[34px]">
                    <div>
                      <div className="inline-flex items-center gap-[5px] rounded-full bg-indigo-50 px-[9px] py-[4px] text-[10px] font-semibold text-indigo-deeper">
                        <Star strokeWidth={0} fill="currentColor" className="h-[10px] w-[10px]" />
                        5.0 · Trusted locally
                      </div>
                      <div className="mt-[10px] font-display text-[21px] font-bold leading-[1.12] tracking-[-0.02em] text-ink-900">
                        Make a strong first <span className="text-indigo">impression</span>.
                      </div>
                      <p className="mt-[8px] text-[11px] leading-[1.5] text-slate-500">
                        A fast, modern website your customers will love.
                      </p>
                      <div className="mt-[14px] flex items-center gap-[10px]">
                        <span className="rounded-[8px] bg-indigo px-[13px] py-[7px] text-[11px] font-semibold text-white">
                          Get started
                        </span>
                        <span className="inline-flex items-center gap-[4px] text-[11px] font-semibold text-ink-900">
                          See our work
                          <ArrowRight strokeWidth={2} className="h-[12px] w-[12px]" />
                        </span>
                      </div>
                    </div>
                    <div
                      className="h-[150px] rounded-[12px]"
                      style={{ background: 'linear-gradient(150deg,#EEF2FF 0%,#C7D2FE 50%,#A5B4FC 100%)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating growth chips — fan in/out on scroll + gentle float */}
              <HeroChips />
            </div>
          </Reveal>
        </div>
      </Wrap>
    </header>
  )
}
