import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import {
  Sparkles,
  Layout,
  LineChart,
  Lock,
  Sprout,
  ArrowDownLeft,
  ArrowUpRight,
  Home,
  PieChart,
  Target,
  User,
  Wallet,
  Apple,
  Play,
  Menu,
  ChevronUp,
  ChevronDown,
  Check,
  HelpCircle,
  Route,
  Smartphone,
  MousePointerClick,
  Zap,
  BookOpen,
  Gauge,
  Accessibility,
  PanelTop,
  Rows3,
} from 'lucide-react'
import {
  CaseLayout,
  CaseNarr,
  CaseNarrAside,
  CaseNarrBody,
  CaseProbList,
  CaseProbItem,
  CaseApprList,
  CaseApprItem,
  CaseFeatGrid,
  CaseFeatItem,
  CaseDemoSection,
  CaseDemoItem,
} from '@/components/case/CaseLayout'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { relatedTo } from '@/lib/caseStudies'

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Sapling — Concept case study · Rozalix',
  description:
    'A concept landing-page case study by Rozalix: a conversion-focused launch page for a fictional fintech app, Sapling — budgeting for young Filipinos.',
}

// ── Phone app (the in-hand mockup, reused across hero + mobile) ──────────────

function SapPhoneApp() {
  return (
    <div className="sap-mock-phone">
      <div className="sap-mock-phone__screen">
        <div className="sap-mock-phone__notch" />
        <div className="sap-mock-app">
          <div className="sap-mock-app__top">
            <div>
              <div className="hi">Good morning,</div>
              <div className="nm">Liam 🌱</div>
            </div>
            <span className="av" />
          </div>
          <div className="sap-mock-bal">
            <div className="l">Total balance</div>
            <div className="v">₱42,580</div>
            <div className="row">
              <span className="chip"><ArrowDownLeft /> In ₱18.2k</span>
              <span className="chip"><ArrowUpRight /> Out ₱11.4k</span>
            </div>
          </div>
          <div className="sap-mock-goal">
            <div className="sap-mock-goal__hd"><span>Japan trip fund</span><span className="pct">68%</span></div>
            <div className="sap-mock-bar2"><i style={{ width: '68%' }} /></div>
          </div>
          <div className="sap-mock-tx">
            <div className="sap-mock-tx__t">Today</div>
            <div className="sap-mock-tx__i">
              <span className="ic" style={{ background: '#FCE7F3' }}>☕</span>
              <div><div className="nm">Tim&apos;s Coffee</div><div className="ct">Food &amp; drink</div></div>
              <span className="amt">-₱180</span>
            </div>
            <div className="sap-mock-tx__i">
              <span className="ic" style={{ background: 'var(--sap-mint-s)' }}>💸</span>
              <div><div className="nm">Salary</div><div className="ct">Income</div></div>
              <span className="amt in">+₱18,200</span>
            </div>
            <div className="sap-mock-tx__i">
              <span className="ic" style={{ background: 'var(--sap-vio-soft)' }}>🚌</span>
              <div><div className="nm">Grab ride</div><div className="ct">Transport</div></div>
              <span className="amt">-₱240</span>
            </div>
          </div>
          <div className="sap-mock-tabbar">
            <Home className="on" /><PieChart /><Target /><User />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── App-store badges ─────────────────────────────────────────────────────────

function SapBadges({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="sap-mock-badges" style={style}>
      <span className="sap-mock-badge">
        <Apple /><span className="t"><span className="s">Download on the</span><span className="b">App Store</span></span>
      </span>
      <span className="sap-mock-badge">
        <Play /><span className="t"><span className="s">Get it on</span><span className="b">Google Play</span></span>
      </span>
    </div>
  )
}

// ── Landing nav (browser frame top) ──────────────────────────────────────────

function SapNav() {
  return (
    <div className="sap-mock-nav">
      <div className="sap-mock-logo"><span className="mk"><Sprout /></span> Sapling</div>
      <div className="sap-mock-nav__links"><a>Features</a><a>How it works</a><a>Pricing</a><a>FAQ</a></div>
      <div className="sap-mock-nav__cta">
        <span className="sap-mock-btn sap-mock-btn--ghost">Log in</span>
        <span className="sap-mock-btn sap-mock-btn--vio">Get the app</span>
      </div>
    </div>
  )
}

// ── Hero block (reused in cover + hero gallery panel) ────────────────────────

function SapHero({ style, h1Style, subStyle }: { style?: React.CSSProperties; h1Style?: React.CSSProperties; subStyle?: React.CSSProperties }) {
  return (
    <div className="sap-mock-hero" style={style}>
      <div className="sap-mock-hero__copy">
        <span className="sap-mock-eyebrow"><Sparkles /> Now in early access</span>
        <h1 style={h1Style}>Money, finally <em>figured out</em>.</h1>
        <p className="sub" style={subStyle}>
          Sapling helps young Filipinos budget, save, and actually understand where their money goes — all from one friendly app.
        </p>
        <div className="sap-mock-signup">
          <div className="inp">you@email.com</div>
          <span className="sap-mock-btn sap-mock-btn--vio">Get early access</span>
        </div>
        <SapBadges />
        <div className="sap-mock-hero__trust"><span className="stars">★★★★★</span> Loved by early testers</div>
      </div>
      <div className="sap-mock-hero__art">
        <SapPhoneApp />
      </div>
    </div>
  )
}

// ── Full landing composite (cover + "Full landing" gallery panel) ────────────

function SapFullLanding() {
  return (
    <div className="sap-mock-frame sap-mock-browser" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="sap-mock-bar">
        <div className="dots"><i /><i /><i /></div>
        <div className="url"><Lock /> getsapling.ph</div>
      </div>
      <div className="sap-mock-screen">
        <SapNav />
        <SapHero />
        <div className="sap-mock-sec">
          <div className="sap-mock-sec__head">
            <h2>Everything your money needs</h2>
            <p>Simple tools that make good habits effortless.</p>
          </div>
          <div className="sap-mock-feats">
            <div className="sap-mock-fcard">
              <div className="ic"><Wallet /></div>
              <h3>Smart budgets</h3>
              <p>Set a budget once and Sapling keeps you on track automatically.</p>
            </div>
            <div className="sap-mock-fcard">
              <div className="ic"><Target /></div>
              <h3>Savings goals</h3>
              <p>Name a goal, set a target, and watch your sapling grow.</p>
            </div>
            <div className="sap-mock-fcard">
              <div className="ic"><PieChart /></div>
              <h3>Spending insights</h3>
              <p>See where your money really goes, sorted automatically.</p>
            </div>
          </div>
        </div>
        <div className="sap-mock-sec sap-mock-sec--alt">
          <div className="sap-mock-sec__head"><h2>Up and running in minutes</h2></div>
          <div className="sap-mock-steps">
            <div className="sap-mock-step"><div className="n">1</div><h4>Create your account</h4><p>Sign up free in under a minute — no paperwork.</p></div>
            <div className="sap-mock-step"><div className="n">2</div><h4>Set your budgets</h4><p>Pick categories and monthly limits that fit your life.</p></div>
            <div className="sap-mock-step"><div className="n">3</div><h4>Grow your savings</h4><p>Track goals and watch the habit stick.</p></div>
          </div>
        </div>
        <div className="sap-mock-cta">
          <h2>Start growing today.</h2>
          <p>Join the early-access list and be first in line at launch.</p>
          <SapBadges />
        </div>
        <div className="sap-mock-sec">
          <div className="sap-mock-sec__head"><h2>Questions, answered</h2></div>
          <div className="sap-mock-faq">
            <div className="sap-mock-faq__i open">Is Sapling free to use? <ChevronUp /></div>
            <div className="sap-mock-faq__i">Is my financial data secure? <ChevronDown /></div>
            <div className="sap-mock-faq__i">Which banks does it support? <ChevronDown /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Hero close-up panel ──────────────────────────────────────────────────────

function SapHeroPanel() {
  return (
    <div className="sap-mock-frame sap-mock-browser">
      <div className="sap-mock-bar">
        <div className="dots"><i /><i /><i /></div>
        <div className="url"><Lock /> getsapling.ph</div>
      </div>
      <div className="sap-mock-screen">
        <SapNav />
        <SapHero
          style={{ paddingTop: '48px', paddingBottom: '48px' }}
          h1Style={{ fontSize: '52px' }}
          subStyle={{ fontSize: '16px' }}
        />
      </div>
    </div>
  )
}

// ── Feature section panel (alternating rows) ─────────────────────────────────

function SapFeaturePanel() {
  return (
    <div className="sap-mock-frame sap-mock-browser">
      <div className="sap-mock-bar">
        <div className="dots"><i /><i /><i /></div>
        <div className="url"><Lock /> getsapling.ph/#features</div>
      </div>
      <div className="sap-mock-screen">
        <div className="sap-mock-sec">
          <div className="sap-mock-frow">
            <div className="sap-mock-frow__art"><span className="glyph">🎯</span></div>
            <div className="sap-mock-frow__copy">
              <span className="sap-mock-eyebrow"><Target /> Savings goals</span>
              <h3 style={{ marginTop: '12px' }}>Name it. Grow it.</h3>
              <p>Set a goal — a trip, an emergency fund, a new laptop — and Sapling shows you exactly what to set aside each week to get there.</p>
              <div className="sap-mock-frow__list">
                <div className="li"><span className="ck"><Check /></span> Auto-calculated weekly targets</div>
                <div className="li"><span className="ck"><Check /></span> Visual progress that motivates</div>
                <div className="li"><span className="ck"><Check /></span> Round-ups to grow it faster</div>
              </div>
            </div>
          </div>
          <div className="sap-mock-frow">
            <div className="sap-mock-frow__copy">
              <span className="sap-mock-eyebrow"><PieChart /> Insights</span>
              <h3 style={{ marginTop: '12px' }}>See where it really goes.</h3>
              <p>Every transaction is sorted automatically, so you can spot the sneaky subscriptions and the ₱180 coffees before they add up.</p>
              <div className="sap-mock-frow__list">
                <div className="li"><span className="ck"><Check /></span> Automatic categorisation</div>
                <div className="li"><span className="ck"><Check /></span> Monthly spending breakdown</div>
                <div className="li"><span className="ck"><Check /></span> Friendly nudges, never nagging</div>
              </div>
            </div>
            <div className="sap-mock-frow__art"><span className="glyph">📊</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Mobile landing panel ─────────────────────────────────────────────────────

function SapMobilePanel() {
  return (
    <div className="sap-mock-phone" style={{ width: '300px' }}>
      <div className="sap-mock-phone__screen">
        <div className="sap-mock-phone__notch" />
        <div style={{ padding: '30px 18px 18px' }}>
          <div className="sap-mock-nav" style={{ padding: '0 0 18px' }}>
            <div className="sap-mock-logo" style={{ fontSize: '16px' }}><span className="mk"><Sprout /></span> Sapling</div>
            <div className="sap-mock-nav__cta" style={{ marginLeft: 'auto' }}>
              <span style={{ color: 'var(--sap-slate)' }}><Menu /></span>
            </div>
          </div>
          <span className="sap-mock-eyebrow"><Sparkles /> Early access</span>
          <h1 style={{ fontSize: '30px', marginTop: '12px' }}>Money, finally <em>figured out</em>.</h1>
          <p style={{ fontSize: '13px', color: 'var(--sap-slate)', marginTop: '10px', lineHeight: 1.55 }}>
            Budget, save, and understand your money — all from one friendly app.
          </p>
          <div style={{ marginTop: '16px' }}>
            <span className="sap-mock-btn sap-mock-btn--vio" style={{ width: '100%', padding: '14px' }}>Get early access</span>
          </div>
          <div className="sap-mock-badges" style={{ marginTop: '12px' }}>
            <span className="sap-mock-badge" style={{ flex: 1, justifyContent: 'center' }}>
              <Apple /><span className="t"><span className="b">App Store</span></span>
            </span>
            <span className="sap-mock-badge" style={{ flex: 1, justifyContent: 'center' }}>
              <Play /><span className="t"><span className="b">Google Play</span></span>
            </span>
          </div>
          <div className="sap-mock-hero__art" style={{ marginTop: '20px' }}>
            <div className="sap-mock-bal" style={{ width: '100%' }}>
              <div className="l">Total balance</div>
              <div className="v">₱42,580</div>
              <div className="row">
                <span className="chip"><ArrowDownLeft /> In ₱18.2k</span>
                <span className="chip"><ArrowUpRight /> Out ₱11.4k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Visual section panel wrapper (inline CSS-art "screen") ───────────────────

function SapScreen({
  icon,
  label,
  caption,
  children,
  delay = 0,
}: {
  icon: ReactNode
  label: string
  caption: ReactNode
  children: ReactNode
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="mb-[16px] inline-flex items-center gap-[8px] rounded-[var(--radius-pill)] border border-ink-900 bg-ink-900 px-[16px] py-[9px] text-[14px] font-medium text-white [&_svg]:h-[15px] [&_svg]:w-[15px]">
        {icon}
        {label}
      </div>
      <div
        className="grid min-h-[420px] place-items-center overflow-hidden rounded-[var(--radius-lg)] border border-slate-200 p-[40px] max-[720px]:p-[20px]"
        style={{
          background:
            'linear-gradient(0deg,var(--color-slate-50),var(--color-slate-50)),' +
            'radial-gradient(circle at 1px 1px,var(--color-slate-200) 1px,transparent 0)',
          backgroundSize: 'cover, 22px 22px',
        }}
      >
        <div className="sap-mock w-full grid place-items-center">{children}</div>
      </div>
      <div className="mt-[16px] flex items-center gap-[10px] text-[14.5px] text-slate-600">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-indigo" />
        <span>{caption}</span>
      </div>
    </Reveal>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function SaplingPage() {
  return (
    <CaseLayout
      pills={[
        { icon: <Sparkles />, label: 'Concept', concept: true },
        { icon: <Layout />, label: 'Landing page' },
        { icon: <LineChart />, label: 'Fintech / SaaS' },
      ]}
      title="Sapling"
      summary="A conversion-focused launch page for a fintech app."
      meta={[
        { label: 'Type', value: 'Concept', sub: 'Self-initiated' },
        { label: 'Industry', value: 'Fintech / SaaS' },
        { label: 'Scope', value: 'Product landing page' },
        { label: 'Stack', value: 'Hand-coded', sub: 'Fast · animation-light' },
        { label: 'Timeline', value: 'Illustrative' },
      ]}
      disclaimer="This is a concept piece created to demonstrate Rozalix's approach — Sapling is a fictional app. There are no real users, downloads, or sign-up figures here; any numbers shown are design targets and sample data, clearly labelled as such."
      overviewLede={
        <>
          A pre-launch app gets one shot at a first impression. We designed a <em>single, focused page</em> that explains the product in a scroll and turns curious visitors into sign-ups and downloads.
        </>
      }
      coverShot={
        <div className="sap-mock">
          <SapFullLanding />
        </div>
      }
      ctaHeadline="Launching something? Land it well."
      ctaBody="This is a concept — but the craft is real. Tell us what you're launching and we'll get back within one business day."
      related={relatedTo('sapling')}
      breadcrumb="Sapling"
    >
      {/* ── THE BRIEF ─────────────────────────────────────────────────── */}
      <CaseNarr id="brief" tint>
        <CaseNarrAside>
          <Reveal>
            <span className="mb-[14px] inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
              The brief
            </span>
            <h2 className="text-[clamp(26px,3vw,34px)] font-display font-semibold tracking-[-0.02em]">
              One page, one job.
            </h2>
            <p className="mt-[14px] text-[16px] text-slate-600">
              The imagined scenario behind the concept — a startup that needs its launch page to earn the install.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <p>
              A startup is weeks from launching a budgeting app for young Filipinos. They have a great product and a small budget, and almost all their traffic will arrive on a phone from social ads and word of mouth.
            </p>
            <p>
              They need a single page that explains what the app does in seconds, builds enough trust to overcome &ldquo;another finance app?&rdquo; fatigue, and makes signing up — or downloading — the obvious next move.
            </p>
            <CaseProbList>
              <CaseProbItem icon={<HelpCircle />} title="Unclear product story">
                A new app has to explain itself instantly, or the visitor is gone before they understand it.
              </CaseProbItem>
              <CaseProbItem icon={<Route />} title="No clear conversion path">
                Without one obvious next step, interested visitors bounce instead of signing up.
              </CaseProbItem>
              <CaseProbItem icon={<Smartphone />} title="Mobile-first traffic">
                If the page isn&apos;t built for a thumb on a phone, most of the audience never converts.
              </CaseProbItem>
            </CaseProbList>
          </Reveal>
        </CaseNarrBody>
      </CaseNarr>

      {/* ── APPROACH ──────────────────────────────────────────────────── */}
      <CaseNarr id="approach">
        <CaseNarrAside>
          <Reveal>
            <span className="mb-[14px] inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
              Approach
            </span>
            <h2 className="text-[clamp(26px,3vw,34px)] font-display font-semibold tracking-[-0.02em]">
              What we designed.
            </h2>
            <p className="mt-[14px] text-[16px] text-slate-600">
              A focused single-page flow that tells the story top to bottom and keeps the call to action always in reach.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <CaseApprList>
              <CaseApprItem
                n="01"
                title="A hero that converts above the fold"
                tags={['Hero', 'Sign-up', 'App-store CTAs']}
              >
                A clear promise — &ldquo;Money, finally figured out&rdquo; — paired with an app mockup, an email capture, and app-store buttons, so the visitor can act in the first screen.
              </CaseApprItem>
              <CaseApprItem
                n="02"
                title="Problem → solution → proof"
                tags={['Features', 'How it works', 'Social proof']}
              >
                Feature highlights and a simple &ldquo;how it works&rdquo; walk the visitor from &ldquo;why bother?&rdquo; to &ldquo;I get it,&rdquo; with room for social proof when it&apos;s ready.
              </CaseApprItem>
              <CaseApprItem
                n="03"
                title="Scroll-reveal storytelling"
                tags={['Scroll reveals', 'Section rhythm']}
              >
                Sections animate in gently as you scroll, giving the page rhythm and focus — motion that guides attention without slowing the load.
              </CaseApprItem>
              <CaseApprItem
                n="04"
                title="FAQ & repeated CTAs"
                tags={['FAQ', 'Repeated CTA', 'Mobile-first']}
              >
                An FAQ clears the last objections, and the download CTA returns at the foot of the page — so the install is never more than a flick away.
              </CaseApprItem>
            </CaseApprList>
          </Reveal>
        </CaseNarrBody>
      </CaseNarr>

      {/* ── KEY FEATURES ──────────────────────────────────────────────── */}
      <CaseFeatGrid id="features">
        <Reveal className="mb-[52px] max-w-[680px]">
          <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
            Key features
          </span>
          <h2 className="my-[14px] text-[clamp(24px,3vw,36px)] font-display font-semibold">
            The pieces that earn the install.
          </h2>
          <p className="text-[19px] text-slate-600">
            Four parts of the design carry most of the conversion load.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          <CaseFeatItem icon={<MousePointerClick />} title="Above-the-fold sign-up">
            Email capture and a clear promise in the first screen — convert before they scroll.
          </CaseFeatItem>
          <CaseFeatItem icon={<Smartphone />} title="App-store buttons">
            Prominent App Store and Google Play CTAs, repeated where intent peaks.
          </CaseFeatItem>
          <CaseFeatItem icon={<Sparkles />} title="Scroll-reveal sections">
            Gentle motion that gives the story rhythm without hurting performance.
          </CaseFeatItem>
          <CaseFeatItem icon={<Zap />} title="Fast, light load">
            Hand-coded and animation-light, so it opens instantly on mobile data.
          </CaseFeatItem>
        </div>
      </CaseFeatGrid>

      {/* ── WHAT THIS DEMONSTRATES ────────────────────────────────────── */}
      <CaseDemoSection
        title="Capability, shown — not claimed."
        subtitle="No invented sign-up numbers. Here's what the concept is built to prove Rozalix can do."
        targets={[
          { icon: <Gauge />, label: 'Design target', value: '< 1.5s' },
          { icon: <Smartphone />, label: 'Design target', value: 'Mobile-first' },
          { icon: <MousePointerClick />, label: 'Design target', value: '1 clear CTA' },
          { icon: <Accessibility />, label: 'Design target', value: 'WCAG AA' },
        ]}
      >
        <CaseDemoItem icon={<Route />} title="Clear conversion path">
          A single, obvious next step carried from the hero to the foot of the page.
        </CaseDemoItem>
        <CaseDemoItem icon={<BookOpen />} title="Focused single-page storytelling">
          One scroll that takes a stranger from &ldquo;what is this?&rdquo; to &ldquo;I want it.&rdquo;
        </CaseDemoItem>
        <CaseDemoItem icon={<Zap />} title="Fast hand-coded performance">
          A lean, animation-light build that loads fast on the mobile data most visitors use.
        </CaseDemoItem>
        <CaseDemoItem icon={<Smartphone />} title="Mobile-first hero">
          A hero designed thumb-first, because that&apos;s where fintech traffic actually lives.
        </CaseDemoItem>
      </CaseDemoSection>

      {/* ── VISUAL GALLERY ────────────────────────────────────────────── */}
      <section id="gallery" className="py-[120px]">
        <Wrap>
          <Reveal className="max-w-[680px]">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
              Visual gallery
            </span>
            <h2 className="my-[14px] text-[clamp(24px,3vw,36px)] font-display font-semibold">
              Inside the concept.
            </h2>
            <p className="text-[18px] text-slate-600">
              Four screens from the Sapling design — reproduced as pixel-faithful CSS art.
            </p>
          </Reveal>

          <div className="mt-[44px] grid gap-[64px]">
            <SapScreen
              icon={<Layout />}
              label="Full landing"
              caption={
                <>
                  <b>Full landing</b> — the long-scroll page from hero to FAQ.
                </>
              }
            >
              <SapFullLanding />
            </SapScreen>

            <SapScreen
              icon={<PanelTop />}
              label="Hero"
              delay={80}
              caption={
                <>
                  <b>Hero</b> — the promise, the app, and the call to action above the fold.
                </>
              }
            >
              <SapHeroPanel />
            </SapScreen>

            <SapScreen
              icon={<Rows3 />}
              label="Feature section"
              delay={160}
              caption={
                <>
                  <b>Feature section</b> — alternating rows that show the app in action.
                </>
              }
            >
              <SapFeaturePanel />
            </SapScreen>

            <SapScreen
              icon={<Smartphone />}
              label="Mobile"
              delay={240}
              caption={
                <>
                  <b>Mobile landing</b> — the hero, built thumb-first for fintech traffic.
                </>
              }
            >
              <SapMobilePanel />
            </SapScreen>
          </div>
        </Wrap>
      </section>
    </CaseLayout>
  )
}
