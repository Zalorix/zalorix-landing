import { Section, Wrap } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'

const props = [
  {
    icon: 'code',
    title: 'Hand-coded, not drag-and-drop',
    body: 'Every site is built from scratch in code — no Wix, Squarespace, or page builders. Full control, faster performance, no template lock-in.',
  },
  {
    icon: 'shield-check',
    title: 'Big-agency quality, honest prices',
    body: 'The polish and rigor of a big agency — without the bloated process or the price tag.',
  },
  {
    icon: 'zap',
    title: 'Fast, transparent delivery',
    body: 'Clear scope, clear timeline, clear pricing. You always know exactly where things stand.',
  },
  {
    icon: 'gauge',
    title: 'Built to perform',
    body: 'Mobile-first, SEO-ready, and fast by default — engineered to convert from day one.',
  },
]

const stats = [
  {
    num: '1',
    lbl: (
      <>
        Team that designs <em>and</em> builds — no handoffs
      </>
    ),
  },
  {
    num: 'Weeks',
    lbl: 'Typical time to launch, not months',
  },
  {
    num: '100%',
    lbl: 'Responsive, mobile-first builds',
  },
  {
    num: '∞',
    lbl: 'Support and improvements after go-live',
  },
]

export function Why() {
  return (
    <Section tint id="why">
      <Wrap>
        {/*
          .why-grid:
            display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center
          @media(max-width:920px): grid-template-columns:1fr; gap:40px
        */}
        <div
          className="
            grid
            [grid-template-columns:1fr_1fr]
            gap-[56px]
            items-center
            max-[920px]:[grid-template-columns:1fr]
            max-[920px]:gap-[40px]
          "
        >
          {/* LEFT COLUMN */}
          <Reveal>
            {/*
              .section__head: margin-bottom:24px
            */}
            <div className="mb-[24px]">
              <Eyebrow>Why Rozalix</Eyebrow>
              <h2 className="mt-[14px] mb-[18px] text-[40px]">
                Everything we build is made to grow your business.
              </h2>
            </div>

            {/*
              .why-props: display:grid; gap:8px
            */}
            <div className="grid gap-[8px]">
              {props.map((p) => (
                /*
                  .why-prop:
                    display:flex; gap:18px; padding:22px; border-radius:var(--r-md)[12px];
                    transition:background .15s ease
                  .why-prop:hover: background:#fff; box-shadow:var(--shadow-card)
                */
                <div
                  key={p.icon}
                  className="
                    flex gap-[18px] p-[22px]
                    rounded-[12px]
                    transition-[background,box-shadow]
                    duration-[150ms] ease-[ease]
                    hover:bg-white
                    hover:shadow-[var(--shadow-card)]
                  "
                >
                  {/*
                    .why-prop .ic:
                      width:46px; height:46px; border-radius:var(--r-sm)[8px];
                      background:var(--indigo); display:grid; place-items:center; flex:0 0 auto
                    .why-prop .ic svg: width:22px; height:22px; color:#fff
                  */}
                  <div className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[8px] bg-indigo">
                    <Icon name={p.icon} className="h-[22px] w-[22px] text-white" />
                  </div>
                  <div>
                    {/*
                      .why-prop h3:
                        font-family:var(--font-sans); font-weight:600; font-size:18px;
                        letter-spacing:0; margin-bottom:6px
                    */}
                    <h3 className="mb-[6px] font-sans text-[18px] font-semibold tracking-[0]">
                      {p.title}
                    </h3>
                    {/*
                      .why-prop p: font-size:15.5px; color:var(--slate-600)
                    */}
                    <p className="text-[15.5px] text-slate-600">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT COLUMN — .why-panel */}
          {/*
            .why-panel:
              border-radius:var(--r-lg)[16px];
              background:linear-gradient(165deg, var(--ink-900) 0%, var(--indigo-deeper) 130%);
              color:#fff; padding:44px; position:relative; overflow:hidden
            .why-panel::after (decorative glow blob — reproduced via pseudo or inline div)
            .why-panel .eyebrow: color:var(--indigo-400)
            .why-panel h3: font-size:30px; color:#fff; margin:14px 0 28px; max-width:16ch
          */}
          <Reveal>
            <div
              className="
                relative overflow-hidden
                rounded-[16px]
                p-[44px]
                text-white
              "
              style={{
                background: 'linear-gradient(165deg, #0F172A 0%, #3730A3 130%)',
              }}
            >
              {/* ::after glow blob */}
              <div
                className="pointer-events-none absolute"
                style={{
                  right: '-60px',
                  top: '-60px',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(129,140,248,.35), transparent 70%)',
                }}
                aria-hidden="true"
              />

              <Eyebrow className="text-indigo-400">The Rozalix difference</Eyebrow>

              {/*
                .why-panel h3: font-size:30px; color:#fff; margin:14px 0 28px; max-width:16ch
              */}
              <h3
                className="text-[30px] text-white"
                style={{ margin: '14px 0 28px', maxWidth: '16ch' }}
              >
                One team, accountable from first concept to long after launch.
              </h3>

              {/*
                .why-stats:
                  display:grid; grid-template-columns:1fr 1fr; gap:30px; position:relative
                .why-stats .num:
                  font-family:var(--font-display); font-weight:700; font-size:42px;
                  letter-spacing:-.02em; color:#fff
                .why-stats .lbl: font-size:14px; color:var(--slate-400); margin-top:4px
              */}
              <div
                className="
                  relative grid
                  [grid-template-columns:1fr_1fr]
                  gap-[30px]
                "
              >
                {stats.map((s, i) => (
                  <div key={i}>
                    <div
                      className="font-display text-[42px] font-bold text-white"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {s.num}
                    </div>
                    <div className="mt-[4px] text-[14px] text-slate-400">
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </Section>
  )
}
