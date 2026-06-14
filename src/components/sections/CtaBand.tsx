import { ArrowRight } from 'lucide-react'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function CtaBand() {
  return (
    /*
     * .cta-band:
     *   background: var(--indigo) [#4F46E5]; color: #fff;
     *   padding: 96px 0; position: relative; overflow: hidden;
     *
     * .cta-band::before (radial glow overlay):
     *   radial-gradient(700px 400px at 90% 120%, rgba(124,58,237,.5), transparent 60%),
     *   radial-gradient(600px 360px at 0% -20%, rgba(6,182,212,.18), transparent 55%)
     */
    <section
      className="relative overflow-hidden py-[96px] text-white"
      style={{ background: '#4F46E5' }}
    >
      {/* Pseudo-element glow — replicates .cta-band::before */}
      <div
        aria-hidden="true"
        className="rz-drift pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(700px 400px at 90% 120%, rgba(124,58,237,.5), transparent 60%), ' +
            'radial-gradient(600px 360px at 0% -20%, rgba(6,182,212,.18), transparent 55%)',
        }}
      />

      {/*
       * .cta-band__inner:
       *   position: relative; text-align: center;
       *   max-width: 720px; margin: 0 auto
       */}
      <Wrap>
        <Reveal>
          <div className="relative mx-auto max-w-[720px] text-center">
            {/*
             * .cta-band h2:
             *   font-size: 46px; color: #fff; letter-spacing: -.03em
             * @media (max-width: 560px): font-size: 34px
             */}
            <h2 className="text-[46px] max-[560px]:text-[34px] text-white tracking-[-0.03em]">
              Ready to turn visitors into customers?
            </h2>

            {/*
             * .cta-band p:
             *   font-size: 19px; color: var(--indigo-200) [#C7D2FE];
             *   margin: 18px auto 36px; max-width: 48ch
             */}
            <p className="mx-auto mt-[18px] mb-[36px] max-w-[48ch] text-[19px] text-[#C7D2FE]">
              Tell us about your project and we&apos;ll get back to you within
              one business day with next steps.
            </p>

            {/*
             * .cta-band__actions:
             *   display: flex; gap: 14px; justify-content: center; flex-wrap: wrap
             *
             * Light button: box-shadow: 0 10px 30px rgba(15,23,42,.25)
             * Ghost-light: bg transparent, text #fff, border rgba(255,255,255,.35)
             *              hover: bg rgba(255,255,255,.1), border rgba(255,255,255,.6)
             */}
            <div className="flex flex-wrap justify-center gap-[14px]">
              <Button
                variant="light"
                size="lg"
                href="#contact"
                className="group shadow-[0_10px_30px_rgba(15,23,42,.25)]"
              >
                Book a free consultation{' '}
                <ArrowRight
                  strokeWidth={1.75}
                  className="arr transition-transform duration-150 group-hover:translate-x-[3px]"
                />
              </Button>
              <Button variant="ghost-light" size="lg" href="#process">
                See how we work
              </Button>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  )
}
