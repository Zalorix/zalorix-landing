import type { Metadata } from 'next'
import {
  Sparkles,
  LayoutTemplate,
  Briefcase,
  EyeOff,
  Shuffle,
  Filter,
  LayoutGrid,
  Users,
  Newspaper,
  Send,
  ShieldCheck,
  ListTree,
  Zap,
  Target,
  Gauge,
  Smartphone,
  Search,
  Accessibility,
  Lock,
  Home,
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
import { Gallery } from '@/components/case/Gallery'
import { Reveal } from '@/components/ui/Reveal'
import { relatedTo } from '@/lib/caseStudies'

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Northpoint Advisory — Concept case study · Rozalix',
  description:
    'A concept corporate-website case study by Rozalix: a trust-first marketing site for a fictional management consulting firm, Northpoint Advisory.',
}

// ── Cover shot — CSS-art homepage mockup ────────────────────────────────────

function NpCoverShot() {
  return (
    <div className="np-browser-frame mx-auto w-full" style={{ maxWidth: '1060px' }}>
      {/* Browser chrome */}
      <div className="np-bar-chrome">
        <div className="np-dots">
          <i /><i /><i />
        </div>
        <div className="np-url-bar">
          <Lock className="np-url-lock" />
          northpointadvisory.com
        </div>
      </div>

      {/* Screen */}
      <div className="np-screen-bg">
        {/* Nav */}
        <nav className="np-mock-nav">
          <div className="np-mock-logo">
            <span className="np-mock-dia" />
            <span className="np-mock-wordmark">Northpoint</span>
          </div>
          <div className="np-mock-navlinks">
            <span className="np-mock-navlink np-mock-navlink--on">Services</span>
            <span className="np-mock-navlink">Insights</span>
            <span className="np-mock-navlink">About</span>
            <span className="np-mock-navlink">Contact</span>
          </div>
          <span className="np-mock-btn np-mock-btn--gold">Book a consultation</span>
        </nav>

        {/* Hero */}
        <div className="np-mock-hero">
          <div className="np-mock-hero-left">
            <div className="np-mock-eyebrow-row">
              <span className="np-mock-rule" />
              <span className="np-mock-eyebrow">Management consulting</span>
            </div>
            <h2 className="np-mock-h1">
              Strategy that moves your business <em>forward</em>.
            </h2>
            <p className="np-mock-sub">
              We help leadership teams make decisive moves — in growth, operations, and market entry — and turn strategy into measurable outcomes.
            </p>
            <div className="np-mock-acts">
              <span className="np-mock-btn np-mock-btn--gold">Book a consultation</span>
              <span className="np-mock-btn np-mock-btn--ghost">Our services</span>
            </div>
            <div className="np-mock-trust">
              <span className="np-mock-trust-label">Trusted across</span>
              <div className="np-mock-trust-logos">
                <b>Financial Services</b>
                <b>Healthcare</b>
                <b>Industrials</b>
              </div>
            </div>
          </div>

          <div className="np-mock-hero-right">
            <div className="np-mock-card">
              <div className="np-mock-card-eye">Practice areas</div>
              <div className="np-mock-card-title">Decisive advice, end to end.</div>
              <ul className="np-mock-pa">
                <li>
                  <span className="np-mock-pa-no">01</span>
                  <span className="np-mock-pa-nm">Growth Strategy</span>
                  <span className="np-mock-pa-ds">Where to play</span>
                </li>
                <li>
                  <span className="np-mock-pa-no">02</span>
                  <span className="np-mock-pa-nm">Operations</span>
                  <span className="np-mock-pa-ds">How to win</span>
                </li>
                <li>
                  <span className="np-mock-pa-no">03</span>
                  <span className="np-mock-pa-nm">Market Entry</span>
                  <span className="np-mock-pa-ds">Expansion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="np-mock-stats">
          <div className="np-mock-stat">
            <div className="np-mock-stat-n">2004</div>
            <div className="np-mock-stat-l">Advising leadership teams since</div>
          </div>
          <div className="np-mock-stat">
            <div className="np-mock-stat-n">14<span>+</span></div>
            <div className="np-mock-stat-l">Markets served worldwide</div>
          </div>
          <div className="np-mock-stat">
            <div className="np-mock-stat-n">40<span>+</span></div>
            <div className="np-mock-stat-l">Senior advisors &amp; partners</div>
          </div>
          <div className="np-mock-stat">
            <div className="np-mock-stat-n">3</div>
            <div className="np-mock-stat-l">Core practice areas</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function NorthpointAdvisoryPage() {
  return (
    <CaseLayout
      pills={[
        { icon: <Sparkles />, label: 'Concept', concept: true },
        { icon: <LayoutTemplate />, label: 'Corporate website' },
        { icon: <Briefcase />, label: 'Management consulting' },
      ]}
      title="Northpoint Advisory"
      summary="A trust-first website for a modern consulting firm."
      meta={[
        { label: 'Type', value: 'Concept', sub: 'Self-initiated' },
        { label: 'Industry', value: 'Management consulting' },
        { label: 'Scope', value: 'Multi-page marketing site' },
        { label: 'Stack', value: 'Hand-coded', sub: 'Next.js + headless CMS' },
        { label: 'Timeline', value: 'Illustrative' },
      ]}
      disclaimer="This is a concept piece created to demonstrate Rozalix's approach — Northpoint Advisory is a fictional firm. There are no real clients, testimonials, or results here; any figures shown are design targets, clearly labelled as such."
      overviewLede={
        <>
          A B2B consultancy lives and dies on <em>credibility</em>. We designed a website that earns trust on first scroll — clear service architecture, a senior team front and centre, and a path to a conversation that never feels more than one click away.
        </>
      }
      coverShot={<NpCoverShot />}
      ctaHeadline="Like the thinking? Let's build yours."
      ctaBody="This is a concept — but the craft is real. Tell us what you're building and we'll get back within one business day."
      related={relatedTo('northpoint-advisory')}
      breadcrumb="Northpoint Advisory"
    >
      {/* ── THE BRIEF ─────────────────────────────────────────────────── */}
      <CaseNarr id="brief" tint>
        <CaseNarrAside>
          <Reveal>
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo mb-[14px]">
              The brief
            </span>
            <h2 className="text-[clamp(26px,3vw,34px)] font-display font-semibold tracking-[-0.02em]">
              Look as credible as the work.
            </h2>
            <p className="mt-[14px] text-[16px] text-slate-600">
              The imagined scenario behind the concept — the kind of brief we hear from established firms ready to play a bigger game.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <p>
              A respected mid-sized consultancy has quietly done excellent work for years — but its website doesn't say so. It reads like a brochure from a decade ago, undersells the team, and gives larger prospective clients no reason to believe it can operate at their scale.
            </p>
            <p>
              The mandate: a site that signals seriousness to enterprise buyers, makes a fragmented set of services legible, and turns more of the right visitors into booked conversations.
            </p>
            <CaseProbList>
              <CaseProbItem icon={<EyeOff />} title="Credibility gap">
                An outdated site undercuts the firm's reputation with the enterprise clients it wants to win.
              </CaseProbItem>
              <CaseProbItem icon={<Shuffle />} title="Unclear service structure">
                Offerings are described inconsistently, so visitors can't quickly tell what the firm actually does.
              </CaseProbItem>
              <CaseProbItem icon={<Filter />} title="Weak lead capture">
                No clear, low-friction path from interest to a qualified conversation with the team.
              </CaseProbItem>
            </CaseProbList>
          </Reveal>
        </CaseNarrBody>
      </CaseNarr>

      {/* ── APPROACH ──────────────────────────────────────────────────── */}
      <CaseNarr id="approach">
        <CaseNarrAside>
          <Reveal>
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo mb-[14px]">
              Approach
            </span>
            <h2 className="text-[clamp(26px,3vw,34px)] font-display font-semibold tracking-[-0.02em]">
              What we designed.
            </h2>
            <p className="mt-[14px] text-[16px] text-slate-600">
              A clean, deliberate system built around one job: making a serious firm feel as credible online as it is in the room.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <CaseApprList>
              <CaseApprItem
                n="01"
                title="Information architecture"
                tags={['Sitemap', 'Navigation', 'Page hierarchy']}
              >
                Mapped the site to how buyers actually evaluate a firm — Services, Insights, About &amp; Team, and Contact — so the structure does the explaining before the copy does.
              </CaseApprItem>
              <CaseApprItem
                n="02"
                title="A restrained design system"
                tags={['Type scale', 'Color tokens', 'Components']}
              >
                Deep navy, a single warm-gold accent, and an editorial serif paired with a clean sans — a palette that reads as established and trustworthy without trying too hard.
              </CaseApprItem>
              <CaseApprItem
                n="03"
                title="Key pages, designed to convert"
                tags={['Home', 'Services', 'About / Team', 'Contact']}
              >
                Home, Services, Case studies, About/Team and Contact — each with a clear job, a single primary action, and proof of expertise placed where decisions are made.
              </CaseApprItem>
              <CaseApprItem
                n="04"
                title="Clear, repeated CTAs"
                tags={['Lead capture', 'Conversion paths']}
              >
                One unmistakable next step — "Book a consultation" — present in the nav, hero, and at the foot of every page, so the path to a conversation is never out of reach.
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
            The pieces that build trust.
          </h2>
          <p className="text-[19px] text-slate-600">
            Four parts of the design carry most of the credibility load.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          <CaseFeatItem icon={<LayoutGrid />} title="Service architecture">
            A clear three-practice structure — Growth, Operations, Market Entry — that makes the offer legible in seconds.
          </CaseFeatItem>
          <CaseFeatItem icon={<Users />} title="Team &amp; credibility">
            Senior advisors presented up front, with the experience and authority enterprise buyers look for.
          </CaseFeatItem>
          <CaseFeatItem icon={<Newspaper />} title="Insights / blog">
            A CMS-backed insights hub that demonstrates thinking and keeps the firm visible in search.
          </CaseFeatItem>
          <CaseFeatItem icon={<Send />} title="Lead-capture forms">
            Low-friction consultation requests, wired to the firm's pipeline, present on every page.
          </CaseFeatItem>
        </div>
      </CaseFeatGrid>

      {/* ── WHAT THIS DEMONSTRATES ────────────────────────────────────── */}
      <CaseDemoSection
        title="Capability, shown — not claimed."
        subtitle="No invented metrics. Here's what the concept is built to prove Rozalix can do."
        targets={[
          { icon: <Gauge />, label: 'Design target', value: '< 2s load' },
          { icon: <Smartphone />, label: 'Design target', value: '100% responsive' },
          { icon: <Search />, label: 'Design target', value: 'SEO-ready foundation' },
          { icon: <Accessibility />, label: 'Design target', value: 'WCAG AA contrast' },
        ]}
      >
        <CaseDemoItem icon={<ShieldCheck />} title="Trust-building layout">
          Composition, type and restraint that read as established and credible from the first screen.
        </CaseDemoItem>
        <CaseDemoItem icon={<ListTree />} title="Clear service hierarchy">
          Information architecture that makes a complex offer immediately legible to busy buyers.
        </CaseDemoItem>
        <CaseDemoItem icon={<Zap />} title="Fast hand-coded performance">
          No page-builder bloat — a lean, hand-coded build engineered to load quickly and rank.
        </CaseDemoItem>
        <CaseDemoItem icon={<Target />} title="Conversion-focused capture">
          A single, repeated path to a booked conversation, designed to turn interest into leads.
        </CaseDemoItem>
      </CaseDemoSection>

      {/* ── VISUAL GALLERY ────────────────────────────────────────────── */}
      <Gallery
        id="gallery"
        headline="Inside the concept."
        subtext="Screens from the Northpoint Advisory design — click any screen to view it larger."
        images={[
          {
            src: '/screenshots/np-check.png',
            alt: 'Northpoint Advisory homepage — hero section with headline, primary CTA, and a credibility-first stats strip',
            label: 'Homepage',
            icon: <Home className="h-[15px] w-[15px]" />,
            caption: '<b>Homepage</b> — hero, primary CTA, and a credibility-first stats strip.',
          },
          {
            src: '/screenshots/np-check2.png',
            alt: 'Northpoint Advisory — services page showing the three-practice grid with Growth Strategy, Operations, and Market Entry',
            label: 'Services',
            icon: <LayoutGrid className="h-[15px] w-[15px]" />,
            caption: '<b>Services</b> — three connected practices laid out for enterprise buyers.',
          },
        ]}
      />
    </CaseLayout>
  )
}
