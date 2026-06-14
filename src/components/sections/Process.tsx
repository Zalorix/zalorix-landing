import { Section, Wrap, SectionHead } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { processSteps } from '@/lib/content'
import { ProcessTimeline } from '@/components/ui/ProcessTimeline'

export function Process() {
  return (
    <Section tint id="process">
      <Wrap>
        {/*
          .section__head .reveal
        */}
        <Reveal>
          <SectionHead eyebrow="How we work" title="A clear path from idea to live.">
            A professional workflow with one point of contact at every step. You always know what's happening and what's next.
          </SectionHead>
        </Reveal>

        {/*
          .steps:
            display:grid; grid-template-columns:repeat(5,1fr); gap:24px;
            margin-top:56px; position:relative
          .steps::before (horizontal connector line):
            content:""; position:absolute; top:26px; left:6%; right:6%; height:2px;
            background:linear-gradient(90deg, var(--indigo-200), var(--slate-200))
          @media(max-width:860px):
            grid-template-columns:1fr; gap:0
          @media(max-width:860px) .steps::before (vertical connector line):
            top:0; bottom:0; left:26px; right:auto; width:2px; height:auto;
            background:linear-gradient(180deg, var(--indigo-200), var(--slate-200))
        */}
        {/* celebrateIndex 3 = "04 Launch" — trophy + confetti when the glow arrives */}
        <ProcessTimeline celebrateIndex={3}>
          {processSteps.map((step, i) => (
            /*
              Each .step wrapped in Reveal for staggered entrance.
              Delay increments: 0, 80, 160, 240, 320 ms
              @media(max-width:860px) .step:
                display:grid; grid-template-columns:54px 1fr; gap:20px; padding-bottom:32px
              @media(max-width:860px) .step:last-child:
                padding-bottom:0
            */
            <Reveal
              key={step.num}
              delay={i * 80}
              className="
                relative
                max-[860px]:grid
                max-[860px]:[grid-template-columns:54px_1fr]
                max-[860px]:gap-[20px]
                max-[860px]:pb-[32px]
                last:max-[860px]:pb-0
              "
            >
              {/*
                .step__num:
                  width:54px; height:54px; border-radius:50%; background:#fff;
                  border:2px solid var(--indigo);
                  color:var(--indigo); font-family:var(--font-display);
                  font-weight:700; font-size:18px;
                  display:grid; place-items:center;
                  margin-bottom:22px; position:relative; z-index:1
                @media(max-width:860px): margin-bottom:0
              */}
              <div
                className="
                  relative z-[1]
                  grid h-[54px] w-[54px] place-items-center
                  rounded-full bg-white
                  border-2 border-indigo
                  text-indigo font-display font-bold text-[18px]
                  mb-[22px]
                  max-[860px]:mb-0
                "
              >
                {step.num}
              </div>

              {/*
                Text block — on mobile it sits in grid column 2 (alongside the num circle)
              */}
              <div>
                {/*
                  .step h3:
                    font-family:var(--font-sans); font-weight:600; font-size:17px;
                    letter-spacing:0; margin-bottom:7px
                */}
                <h3 className="font-sans font-semibold text-[17px] tracking-[0] mb-[7px]">
                  {step.title}
                </h3>

                {/*
                  .step p: font-size:14.5px; color:var(--slate-600)
                */}
                <p className="text-[14.5px] text-slate-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ProcessTimeline>
      </Wrap>
    </Section>
  )
}
