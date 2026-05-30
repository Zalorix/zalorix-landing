import Link from 'next/link'
import { ArrowRight, Info, Sparkles } from 'lucide-react'
import { Section, Wrap, SectionHead } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { caseStudies, type CaseStudy } from '@/lib/caseStudies'

/* ------------------------------------------------------------------ */
/* Bespoke mini-mockups — one per theme                                 */
/* ------------------------------------------------------------------ */

function MockNp() {
  return (
    <div className="wc wc--np">
      <div className="wc__bar">
        <i></i><i></i><i></i>
      </div>
      <div className="wc__body">
        <div className="wc__row">
          <span className="wc__logo">
            <span className="dia"></span> NORTHPOINT
          </span>
          <span className="wc__pill">Book a consultation</span>
        </div>
        <div className="wc-np-grid">
          <div>
            <div className="wc__eye">
              <span className="r"></span> Management consulting
            </div>
            <h4 className="wc__h">
              Strategy that moves your business <em>forward</em>.
            </h4>
          </div>
          <div className="wc-np-card">
            <div className="lbl">Practice areas</div>
            <div className="ct">Decisive advice, end to end.</div>
            <div className="r"><span className="no">01</span><span className="nm">Growth Strategy</span></div>
            <div className="r"><span className="no">02</span><span className="nm">Operations</span></div>
            <div className="r"><span className="no">03</span><span className="nm">Market Entry</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockBb() {
  return (
    <div className="wc wc--bb">
      <div className="wc__bar">
        <i></i><i></i><i></i>
      </div>
      <div className="wc__body">
        <div className="wc__row">
          <span className="wc__logo">
            <span className="mk"></span> Brew &amp; Bloom
          </span>
          <span className="wc__pill">Shop</span>
        </div>
        <div className="wc-bb-grid">
          <div>
            <div className="wc__eye">
              <span className="r"></span> New · Single-origin
            </div>
            <h4 className="wc__h">
              Coffee, beautifully <em>brewed</em>.
            </h4>
          </div>
          <div className="wc-bb-art">
            ☕
            <span className="tag">
              <span className="n">Morning Bloom</span>
              <span className="p">₱520</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockSf() {
  return (
    <div className="wc wc--sf">
      <div className="wc__bar">
        <i></i><i></i><i></i>
      </div>
      <div className="wc-sf-screen">
        <div className="wc-sf-side">
          <span className="mk"></span>
          <span className="d on"></span>
          <span className="d"></span>
          <span className="d"></span>
          <span className="d"></span>
        </div>
        <div className="wc-sf-main">
          <div className="wc-sf-metrics">
            <div className="wc-sf-m">
              <div className="l">Stock value</div>
              <div className="n">₱1.84M</div>
            </div>
            <div className="wc-sf-m">
              <div className="l">Low stock</div>
              <div className="n">12</div>
            </div>
          </div>
          <div className="wc-sf-chart">
            <i style={{ height: '48%' }}></i>
            <i style={{ height: '64%' }}></i>
            <i style={{ height: '42%' }}></i>
            <i style={{ height: '78%' }}></i>
            <i style={{ height: '60%' }}></i>
            <i className="hi" style={{ height: '96%' }}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockSap() {
  return (
    <div className="wc wc--sap">
      <div className="wc__bar">
        <i></i><i></i><i></i>
      </div>
      <div className="wc__body">
        <div className="wc__row">
          <span className="wc__logo">
            <span className="mk"></span> Sapling
          </span>
          <span className="wc__pill">Get the app</span>
        </div>
        <div className="wc-sap-grid">
          <div>
            <span className="wc__eye">
              <Sparkles strokeWidth={1.75} style={{ width: 10, height: 10 }} /> Early access
            </span>
            <h4 className="wc__h">
              Money, finally <em>figured out</em>.
            </h4>
            <span className="wc__btn">Get early access</span>
          </div>
          <div className="wc-sap-bal">
            <div className="l">Total balance</div>
            <div className="v">₱42,580</div>
            <div className="wc-sap-bar"><i></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Mock switcher                                                         */
/* ------------------------------------------------------------------ */

function CardMock({ theme }: { theme: CaseStudy['theme'] }) {
  switch (theme) {
    case 'np':  return <MockNp />
    case 'bb':  return <MockBb />
    case 'sf':  return <MockSf />
    case 'sap': return <MockSap />
  }
}

/* ------------------------------------------------------------------ */
/* Work section                                                          */
/* ------------------------------------------------------------------ */

export function Work() {
  return (
    <Section id="work">
      <Wrap>
        <Reveal>
          <SectionHead eyebrow="Selected work" title="Concept case studies.">
            Four self-initiated concepts — a consultancy, a store, a dashboard, and a launch page — each hand-coded to show the range.
          </SectionHead>
        </Reveal>

        <div className="work-grid">
          {caseStudies.map((c) => (
            <Reveal key={c.slug}>
              <Link href={c.href} className="work-card">
                <div className={`work-card__shot work-card__shot--${c.theme}`}>
                  <CardMock theme={c.theme} />
                </div>
                <div className="work-card__foot">
                  <div className="work-card__tags">
                    {c.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <span className="work-card__view">
                    View case study <ArrowRight strokeWidth={1.75} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="work-note">
            <Info strokeWidth={1.75} />
            <span>Four self-initiated concept pieces — each a different kind of build, each hand-coded.</span>
          </div>
        </Reveal>
      </Wrap>
    </Section>
  )
}
