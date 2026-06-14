import { ArrowRight, CheckCircle2, Lock, TrendingUp, Gauge, Search, Smartphone, Zap, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Wrap } from '@/components/ui/Section'

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
          <Reveal>
            {/*
              .hero__eyebrow-pill:
                display:inline-flex; align-items:center; gap:8px;
                padding:6px 6px 6px 14px in the reference; intentionally evened
                to symmetric 10px horizontal per design request (balanced chip/text)
                border:1px solid var(--slate-200); background:#fff;
                border-radius:var(--r-pill); font-size:13px; font-weight:500;
                color:var(--slate-600); box-shadow:var(--shadow-card)
              .hero__eyebrow-pill .tag:
                background:var(--indigo-50); color:var(--indigo-deeper);
                font-weight:600; font-size:12px; padding:3px 9px;
                border-radius:var(--r-pill)
            */}
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

            {/*
              .hero__title:
                font-size:64px; line-height:1.04; margin:24px 0 22px;
                letter-spacing:-0.035em; max-width:14ch
              .hero__title em: font-style:normal; color:var(--indigo)
              @media(max-width:980px): font-size:52px
              @media(max-width:560px): font-size:40px
            */}
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

            {/*
              .hero__sub: font-size:20px; color:var(--slate-600); max-width:46ch
            */}
            <p className="text-[20px] text-slate-600 max-w-[46ch]">
              We design and build fast, custom websites that get your business
              found, build trust, and turn visitors into paying customers — and
              grow with you as you scale.
            </p>

            {/*
              .hero__actions: display:flex; flex-wrap:wrap; gap:14px; margin-top:36px
              @media(max-width:560px): .btn { flex:1 }
              Arrow nudge: replicate .btn:hover .arr { transform:translateX(3px) }
              Button base already has [&_svg] sizing; we add group + transition on the icon
            */}
            <div className="mt-[36px] flex flex-wrap gap-[14px]">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                className="group max-[560px]:flex-1"
              >
                Start a project{' '}
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

            {/*
              .hero__note:
                display:flex; align-items:center; gap:10px; margin-top:26px;
                font-size:14px; color:var(--slate-500,#64748b)
              .hero__note svg: width:16px; height:16px; color:var(--success)
              .hero__note span: color:var(--slate-600)
            */}
            <div className="mt-[26px] flex items-center gap-[10px] text-[14px] text-[#64748b]">
              <CheckCircle2
                strokeWidth={1.75}
                className="h-[16px] w-[16px] shrink-0 text-success"
              />
              <span className="text-slate-600">
                Typically launched in weeks, not months — fixed scope, clear timeline.
              </span>
            </div>
          </Reveal>

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
                className="overflow-hidden rounded-[14px] border border-slate-200 bg-white shadow-[var(--shadow-lift)]"
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
                <div
                  className="relative p-[30px]"
                  style={{
                    background: 'linear-gradient(160deg,#4F46E5 0%,#7C3AED 100%)',
                    aspectRatio: '4 / 3.05',
                  }}
                >
                  {/*
                    .mockcard:
                      position:absolute; background:rgba(255,255,255,.96);
                      border-radius:var(--r-md) [12px]
                    .mock-stat:
                      top:28px; left:28px; right:28px; padding:18px 20px;
                      display:flex; align-items:center; justify-content:space-between
                  */}
                  <div
                    className="
                      absolute left-[28px] right-[28px] top-[28px]
                      flex items-center justify-between
                      rounded-[12px] bg-white/[0.96]
                      px-[20px] py-[18px]
                    "
                  >
                    <div>
                      {/* .mock-stat .lbl */}
                      <div
                        className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-400"
                      >
                        Conversions
                      </div>
                      {/* .mock-stat .num */}
                      <div
                        className="mt-[4px] font-display text-[30px] font-bold tracking-[-0.02em]"
                      >
                        +38%
                      </div>
                      {/* .mock-stat .trend */}
                      <div className="mt-1 inline-flex items-center gap-[5px] text-[13px] font-semibold text-success">
                        <TrendingUp strokeWidth={1.75} className="h-[15px] w-[15px]" />
                        vs. previous site
                      </div>
                    </div>

                    {/*
                      .mock-spark: width:78px; height:44px
                      SVG copied verbatim from index.html, attrs converted to camelCase
                    */}
                    <svg
                      className="h-[44px] w-[78px]"
                      viewBox="0 0 78 44"
                      fill="none"
                      aria-hidden="true"
                    >
                      <polyline
                        points="2,38 14,30 26,33 38,20 50,24 62,10 76,4"
                        stroke="#4F46E5"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="2,38 14,30 26,33 38,20 50,24 62,10 76,4 76,44 2,44"
                        fill="rgba(79,70,229,.10)"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  {/*
                    .mockcard .mock-tiles:
                      top:118px; left:28px; right:28px; bottom:28px; padding:20px
                    .mock-tiles .row: display:flex; align-items:center; gap:12px
                    .mock-tiles .ic: width:38px; height:38px; border-radius:var(--r-sm)[8px];
                      background:var(--indigo-50); display:grid; place-items:center; flex:0 0 auto
                    .mock-tiles .ic svg: width:19px; height:19px; color:var(--indigo)
                    .mock-tiles .meta: flex:1; display:grid; gap:7px
                    .mock-tiles .bar: height:9px; border-radius:999px; background:var(--slate-200)
                    .mock-tiles .divider: height:1px; background:var(--slate-100); margin:16px 0
                  */}
                  <div
                    className="
                      absolute bottom-[28px] left-[28px] right-[28px] top-[118px]
                      rounded-[12px] bg-white/[0.96] p-[20px]
                    "
                  >
                    {/* Row 1: Gauge */}
                    <div className="flex items-center gap-[12px]">
                      <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[8px] bg-indigo-50">
                        <Gauge strokeWidth={1.75} className="h-[19px] w-[19px] text-indigo" />
                      </div>
                      <div className="grid flex-1 gap-[7px]">
                        <div className="h-[9px] rounded-[999px] bg-slate-200" style={{ width: '70%' }} />
                        <div className="h-[9px] rounded-[999px] bg-slate-200" style={{ width: '46%' }} />
                      </div>
                    </div>

                    <div className="my-[16px] h-px bg-slate-100" />

                    {/* Row 2: Search */}
                    <div className="flex items-center gap-[12px]">
                      <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[8px] bg-indigo-50">
                        <Search strokeWidth={1.75} className="h-[19px] w-[19px] text-indigo" />
                      </div>
                      <div className="grid flex-1 gap-[7px]">
                        <div className="h-[9px] rounded-[999px] bg-slate-200" style={{ width: '58%' }} />
                        <div className="h-[9px] rounded-[999px] bg-slate-200" style={{ width: '38%' }} />
                      </div>
                    </div>

                    <div className="my-[16px] h-px bg-slate-100" />

                    {/* Row 3: Smartphone */}
                    <div className="flex items-center gap-[12px]">
                      <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[8px] bg-indigo-50">
                        <Smartphone strokeWidth={1.75} className="h-[19px] w-[19px] text-indigo" />
                      </div>
                      <div className="grid flex-1 gap-[7px]">
                        <div className="h-[9px] rounded-[999px] bg-slate-200" style={{ width: '64%' }} />
                        <div className="h-[9px] rounded-[999px] bg-slate-200" style={{ width: '42%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*
                .hero__float:
                  position:absolute; bottom:-22px; left:-26px;
                  background:#fff; border:1px solid var(--slate-200);
                  border-radius:var(--r-md)[12px]; box-shadow:var(--shadow-lift);
                  padding:14px 18px; display:flex; align-items:center; gap:12px
                @media(max-width:980px): left:8px
                .hero__float .dot: width:36px; height:36px; border-radius:var(--r-sm)[8px];
                  background:var(--indigo); display:grid; place-items:center; color:#fff
                .hero__float .dot svg: width:19px; height:19px
                .hero__float .ft: font-size:13px; color:var(--slate-400);
                  font-weight:600; text-transform:uppercase; letter-spacing:.06em
                .hero__float .fv: font-family:var(--font-display);
                  font-weight:600; font-size:17px; margin-top:2px
              */}
              <div
                className="
                  absolute bottom-[-22px] left-[-26px] max-[980px]:left-[8px]
                  flex items-center gap-[12px]
                  rounded-[12px] border border-slate-200 bg-white
                  px-[18px] py-[14px]
                  shadow-[var(--shadow-lift)]
                "
              >
                <div className="grid h-[36px] w-[36px] place-items-center rounded-[8px] bg-indigo text-white">
                  <Zap strokeWidth={1.75} className="h-[19px] w-[19px]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate-400">
                    Performance
                  </div>
                  <div className="mt-[2px] font-display text-[17px] font-semibold">
                    100 / 100
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </header>
  )
}
