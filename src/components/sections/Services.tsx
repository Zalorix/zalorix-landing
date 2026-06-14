import { Section, Wrap, SectionHead } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { services } from '@/lib/content'

export function Services() {
  return (
    <Section id="services">
      <Wrap>
        {/* .section__head .reveal */}
        <Reveal>
          <SectionHead eyebrow="What we do" title="Web design, end to end.">
            {/*
              .svc-intro:
                max-width:600px; margin-top:8px; font-size:19px; color:var(--slate-600)
              SectionHead already renders children in a <p className="text-[19px] text-slate-600">
              We add max-w and mt-2 via className on the wrapping element below.
              Since SectionHead wraps children in its own <p>, we pass a span instead
              and rely on the parent paragraph's styles, adding only the svc-intro constraints.
            */}
            <span className="block max-w-[600px] mt-[8px]">
              We design and build websites and web apps — from first concept to launch and beyond.
              One team, one accountable process, no handoffs.
            </span>
          </SectionHead>
        </Reveal>

        {/*
          .svc-grid:
            display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:56px
          @media(max-width:920px): grid-template-columns:1fr 1fr
          @media(max-width:600px): grid-template-columns:1fr
        */}
        <div
          className="
            mt-[56px]
            grid gap-[24px]
            [grid-template-columns:repeat(3,1fr)]
            max-[920px]:[grid-template-columns:1fr_1fr]
            max-[600px]:[grid-template-columns:1fr]
          "
        >
          {services.map((s, i) => (
            /*
              Each card individually wrapped in Reveal for staggered entrance.
              Delay increments: 0, 80, 160, 240, 320, 400 ms
            */
            <Reveal key={s.icon} delay={i * 80} className="h-full">
              {/*
                .svc-card:
                  border:1px solid var(--slate-200); border-radius:var(--r-md)[12px];
                  background:#fff; padding:28px;
                  box-shadow:var(--shadow-card);
                  transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease
                .svc-card:hover:
                  transform:translateY(-4px); box-shadow:var(--shadow-hover);
                  border-color:var(--slate-300)
              */}
              <div
                className="
                  group h-full
                  rounded-[12px] border border-slate-200 bg-white
                  p-[28px]
                  shadow-[var(--shadow-card)]
                  transition-[transform,box-shadow,border-color]
                  duration-[180ms] ease-[ease]
                  hover:-translate-y-[4px]
                  hover:shadow-[var(--shadow-hover)]
                  hover:border-slate-300
                "
              >
                {/*
                  .svc-card .ic:
                    width:46px; height:46px; border-radius:var(--r-sm)[8px];
                    background:var(--indigo-50); display:grid; place-items:center;
                    margin-bottom:20px
                  .svc-card .ic svg: width:23px; height:23px; color:var(--indigo)
                */}
                <div className="mb-[20px] grid h-[46px] w-[46px] place-items-center rounded-[8px] bg-indigo-50 transition-[transform,background-color] duration-[250ms] ease-out group-hover:scale-110 group-hover:bg-indigo motion-reduce:transform-none [&>svg]:transition-colors [&>svg]:duration-[250ms] group-hover:[&>svg]:text-white">
                  <Icon name={s.icon} className="h-[23px] w-[23px] text-indigo" />
                </div>

                {/*
                  .svc-card h3:
                    font-family:var(--font-sans); font-weight:600; font-size:19px;
                    letter-spacing:0; margin-bottom:8px
                */}
                <h3 className="mb-[8px] font-sans text-[19px] font-semibold tracking-[0]">
                  {s.title}
                </h3>

                {/*
                  .svc-card p: font-size:15.5px; color:var(--slate-600)
                */}
                <p className="text-[15.5px] text-slate-600">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Section>
  )
}
