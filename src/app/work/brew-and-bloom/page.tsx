import type { Metadata } from 'next'
import {
  Sparkles,
  ShoppingBag,
  Coffee,
  Lock,
  Search,
  Heart,
  Plus,
  ArrowRight,
  X,
  CreditCard,
  ImageOff,
  Smartphone,
  Wallet,
  CheckCircle2,
  ScanEye,
  PackageCheck,
  MousePointerClick,
  Zap,
  Gauge,
  Store,
  LayoutGrid,
  Accessibility,
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
  title: 'Brew & Bloom — Concept case study · Rozalix',
  description:
    'A concept e-commerce case study by Rozalix: a fast, mobile-first online store for a fictional specialty coffee & homeware brand, Brew & Bloom.',
}

// ── Cover shot — CSS-art storefront + overlapping checkout phone ─────────────

function BbCoverShot() {
  return (
    <div className="bb-mock">
      <div className="bb-cover-combo mx-auto">
        {/* ===== Storefront ===== */}
        <div className="bb-mock-frame bb-mock-browser">
          <div className="bb-mock-bar">
            <div className="dots">
              <i /><i /><i />
            </div>
            <div className="bb-mock-url">
              <Lock /> brewandbloom.ph
            </div>
          </div>
          <div className="bb-mock-screen">
            {/* Store nav */}
            <div className="bb-mock-nav">
              <div className="bb-mock-logo">
                <span className="mk" /> Brew &amp; Bloom
              </div>
              <div className="bb-mock-navlinks">
                <a className="on">Shop</a>
                <a>Coffee</a>
                <a>Homeware</a>
                <a>Journal</a>
              </div>
              <div className="bb-mock-tools">
                <Search />
                <span className="bb-mock-cart">
                  <ShoppingBag />
                  <span className="ct">3</span>
                </span>
              </div>
            </div>

            {/* Hero */}
            <div className="bb-mock-hero">
              <div className="bb-mock-hero__copy">
                <span className="bb-mock-eyebrow">New · Single-origin</span>
                <h1>
                  Coffee, beautifully <em>brewed</em>.
                </h1>
                <p className="sub">
                  Small-batch beans and the homeware to enjoy them — roasted, packed, and shipped across the Philippines.
                </p>
                <div className="bb-mock-hero__acts">
                  <span className="bb-mock-btn bb-mock-btn--terra">
                    Shop the collection <ArrowRight />
                  </span>
                  <span className="bb-mock-btn bb-mock-btn--ghost">Our story</span>
                </div>
              </div>
              <div className="bb-mock-hero__art">
                <span className="bb-mock-emoji">☕</span>
                <div className="bb-mock-hero__tag">
                  <div className="n">Morning Bloom Roast</div>
                  <div className="p">₱520 / 250g</div>
                </div>
              </div>
            </div>

            {/* Bestsellers strip */}
            <div className="bb-mock-strip">
              <div className="bb-mock-strip__head">
                <h2>Bestsellers</h2>
                <span className="lk">View all →</span>
              </div>
              <div className="bb-mock-prods">
                <div className="bb-mock-card">
                  <div className="bb-mock-card__img c-amber">
                    ☕<span className="fav"><Heart /></span>
                  </div>
                  <div className="bb-mock-card__b">
                    <div className="nm">Morning Bloom</div>
                    <div className="ds">Medium roast · citrus</div>
                    <div className="bb-mock-card__row">
                      <span className="pr">₱520</span>
                      <span className="add"><Plus /></span>
                    </div>
                  </div>
                </div>
                <div className="bb-mock-card">
                  <div className="bb-mock-card__img c-sage">
                    🪴<span className="fav"><Heart /></span>
                  </div>
                  <div className="bb-mock-card__b">
                    <div className="nm">Stoneware Mug</div>
                    <div className="ds">Hand-glazed · 300ml</div>
                    <div className="bb-mock-card__row">
                      <span className="pr">₱480</span>
                      <span className="add"><Plus /></span>
                    </div>
                  </div>
                </div>
                <div className="bb-mock-card">
                  <div className="bb-mock-card__img c-cocoa">
                    🫘<span className="fav"><Heart /></span>
                  </div>
                  <div className="bb-mock-card__b">
                    <div className="nm">Dark Harvest</div>
                    <div className="ds">Dark roast · cocoa</div>
                    <div className="bb-mock-card__row">
                      <span className="pr">₱560</span>
                      <span className="add"><Plus /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Phone (checkout) overlapping ===== */}
        <div className="bb-mock-phone bb-mock-phone--float">
          <div className="bb-mock-phone__screen">
            <div className="bb-mock-phone__notch" />
            <div>
              <div className="bb-mock-m__top">
                <div className="bb-mock-logo">
                  <span className="mk" /> Checkout
                </div>
                <span className="x"><X /></span>
              </div>
              <div className="bb-mock-m__body">
                <div className="bb-mock-m__sec">Pay with</div>
                <div className="bb-mock-pay">
                  <div className="bb-mock-pay__opt on">
                    <span className="rad" /> GCash <span className="logo gcash">GCash</span>
                  </div>
                  <div className="bb-mock-pay__opt">
                    <span className="rad" /> Maya <span className="logo maya">Maya</span>
                  </div>
                  <div className="bb-mock-pay__opt">
                    <span className="rad" /> Card <span className="logo card"><CreditCard /></span>
                  </div>
                </div>
              </div>
              <div className="bb-mock-m__bar">
                <div className="tot">
                  <span>Total</span>
                  <b>₱1,560</b>
                </div>
                <span className="bb-mock-btn bb-mock-btn--terra">Pay ₱1,560</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function BrewAndBloomPage() {
  return (
    <CaseLayout
      pills={[
        { icon: <Sparkles />, label: 'Concept', concept: true },
        { icon: <ShoppingBag />, label: 'E-commerce' },
        { icon: <Coffee />, label: 'Retail & lifestyle' },
      ]}
      title="Brew & Bloom"
      summary="A fast, mobile-first store for a lifestyle brand."
      meta={[
        { label: 'Type', value: 'Concept', sub: 'Self-initiated' },
        { label: 'Industry', value: 'Retail / lifestyle' },
        { label: 'Scope', value: 'E-commerce store' },
        { label: 'Stack', value: 'Hand-coded', sub: 'Storefront + GCash / Maya / card' },
        { label: 'Timeline', value: 'Illustrative' },
      ]}
      disclaimer="This is a concept piece created to demonstrate Rozalix's approach — Brew & Bloom is a fictional brand. There are no real products, customers, or sales here; any figures shown are design targets and sample data, clearly labelled as such."
      overviewLede={
        <>
          A premium product deserves a premium store. We designed an e-commerce experience that feels as considered as the brand itself — <em>warm, fast, and built to convert the mobile shopper</em> who's deciding in the time it takes a kettle to boil.
        </>
      }
      coverShot={<BbCoverShot />}
      ctaHeadline="Got a product worth showing off?"
      ctaBody="This is a concept — but the craft is real. Tell us what you're selling and we'll get back within one business day."
      related={relatedTo('brew-and-bloom')}
      breadcrumb="Brew & Bloom"
    >
      {/* ── THE BRIEF ─────────────────────────────────────────────────── */}
      <CaseNarr id="brief" tint>
        <CaseNarrAside>
          <Reveal>
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo mb-[14px]">
              The brief
            </span>
            <h2 className="text-[clamp(26px,3vw,34px)] font-display font-semibold tracking-[-0.02em]">
              Premium product, generic store.
            </h2>
            <p className="mt-[14px] text-[16px] text-slate-600">
              The imagined scenario behind the concept — the gap between a beautiful brand and a forgettable buying experience.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <p>
              A growing lifestyle brand sells gorgeous, small-batch coffee and homeware — but it sells through a stock template store that looks like everyone else's. The packaging is photographed beautifully on social; the product pages don't come close.
            </p>
            <p>
              Worse, most of the traffic is on mobile, and the checkout is a multi-step form that asks for too much and supports too little. Carts get abandoned at the payment step because the options shoppers actually use aren't there.
            </p>
            <CaseProbList>
              <CaseProbItem icon={<ImageOff />} title="Off-brand storefront">
                A generic template undersells a premium product and erodes the brand's hard-won credibility.
              </CaseProbItem>
              <CaseProbItem icon={<Smartphone />} title="Clunky mobile checkout">
                A long, multi-step form on mobile is where most of the would-be sales quietly disappear.
              </CaseProbItem>
              <CaseProbItem icon={<Wallet />} title="Missing local payments">
                No GCash or Maya means friction at the exact moment a shopper is ready to pay.
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
              A warm, photography-forward store engineered around one number that matters: mobile conversion.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <CaseApprList>
              <CaseApprItem
                n="01"
                title="A storefront with a point of view"
                tags={['Brand system', 'Home page', 'Art direction']}
              >
                An editorial home page that leads with the product and the brand's warmth — cream, terracotta and sage, a friendly serif, and room for photography to breathe.
              </CaseApprItem>
              <CaseApprItem
                n="02"
                title="Catalog & filtering that gets out of the way"
                tags={['Catalog', 'Filtering', 'Quick-view']}
              >
                A clean product grid with category, roast and price filters, so shoppers reach the right product in a tap or two — not a scroll marathon.
              </CaseApprItem>
              <CaseApprItem
                n="03"
                title="Product pages built to sell"
                tags={['Product detail', 'Add to cart', 'Stock states']}
              >
                Big imagery, clear pricing in ₱, tasting notes, and an add-to-cart that's always within thumb's reach — with stock states that build trust instead of doubt.
              </CaseApprItem>
              <CaseApprItem
                n="04"
                title="One-page checkout, local payments"
                tags={['One-page checkout', 'GCash / Maya', 'Mobile-first']}
              >
                A single, frictionless checkout with GCash, Maya and card built in — designed mobile-first so the last step feels effortless.
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
            The pieces that drive the sale.
          </h2>
          <p className="text-[19px] text-slate-600">
            Four parts of the design carry most of the conversion load.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          <CaseFeatItem icon={<CheckCircle2 />} title="One-page checkout">
            Contact, shipping and payment on a single screen — fewer steps, fewer drop-offs.
          </CaseFeatItem>
          <CaseFeatItem icon={<Wallet />} title="GCash, Maya & card">
            Local wallets and cards built in, so shoppers pay the way they already do.
          </CaseFeatItem>
          <CaseFeatItem icon={<ScanEye />} title="Product quick-view">
            Peek at price, notes and add-to-cart from the grid — no full page load needed.
          </CaseFeatItem>
          <CaseFeatItem icon={<PackageCheck />} title="Inventory-aware stock">
            Honest &ldquo;low stock&rdquo; and &ldquo;back soon&rdquo; states that nudge action and build trust.
          </CaseFeatItem>
        </div>
      </CaseFeatGrid>

      {/* ── WHAT THIS DEMONSTRATES ────────────────────────────────────── */}
      <CaseDemoSection
        title="Capability, shown — not claimed."
        subtitle="No invented sales figures. Here's what the concept is built to prove Rozalix can do."
        targets={[
          { icon: <Gauge />, label: 'Design target', value: '< 2s load' },
          { icon: <Smartphone />, label: 'Design target', value: '1-page checkout' },
          { icon: <Search />, label: 'Design target', value: 'SEO-ready catalog' },
          { icon: <Accessibility />, label: 'Design target', value: 'WCAG AA contrast' },
        ]}
      >
        <CaseDemoItem icon={<MousePointerClick />} title="Conversion-focused product pages">
          Layouts that put price, proof and the buy button exactly where the decision happens.
        </CaseDemoItem>
        <CaseDemoItem icon={<Smartphone />} title="Frictionless mobile checkout">
          A one-page, thumb-friendly flow designed to hold the shopper through to payment.
        </CaseDemoItem>
        <CaseDemoItem icon={<Zap />} title="Fast hand-coded performance">
          A lean storefront with no page-builder bloat — quick to load, even on mobile data.
        </CaseDemoItem>
        <CaseDemoItem icon={<Wallet />} title="Local payment integration">
          GCash, Maya and card wired into a checkout that's built for the Philippine market.
        </CaseDemoItem>
      </CaseDemoSection>

      {/* ── VISUAL GALLERY ────────────────────────────────────────────── */}
      <Gallery
        id="gallery"
        headline="Inside the concept."
        subtext="Screens from the Brew & Bloom design — click any screen to view it larger."
        images={[
          {
            src: '/screenshots/bb-cover.png',
            alt: 'Brew & Bloom storefront — an editorial homepage that leads with product photography, brand warmth, and a bestsellers grid',
            label: 'Storefront',
            icon: <Store className="h-[15px] w-[15px]" />,
            caption: '<b>Storefront</b> — an editorial home that leads with product and brand warmth.',
          },
          {
            src: '/screenshots/bb-gallery.png',
            alt: 'Brew & Bloom product grid — category, roast and price filters alongside a coffee product grid with ₱ pricing',
            label: 'Product grid',
            icon: <LayoutGrid className="h-[15px] w-[15px]" />,
            caption: '<b>Product grid</b> — category, roast and price filters for fast browsing.',
          },
        ]}
      />
    </CaseLayout>
  )
}
