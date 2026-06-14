import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import {
  Sparkles,
  LayoutDashboard,
  Boxes,
  Package,
  ShoppingCart,
  Truck,
  BarChart3,
  Settings,
  Search,
  Bell,
  Plus,
  Lock,
  Wallet,
  AlertTriangle,
  Clock,
  Receipt,
  TrendingUp,
  ChevronDown,
  Filter,
  Download,
  Printer,
  ArrowUpDown,
  Menu,
  Table2,
  EyeOff,
  Users,
  Activity,
  BellRing,
  ShieldCheck,
  FileDown,
  Layers,
  Code2,
  Zap,
  TabletSmartphone,
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
  title: 'StockFlow — Concept case study · Rozalix',
  description:
    'A concept web-app case study by Rozalix: a custom inventory & order management dashboard for a fictional small retailer, StockFlow — proof of hand-coded, full-control product work.',
}

// ── Shared dashboard sidebar (used across all SF screens) ────────────────────

function SfSidebar({ active }: { active: 'dashboard' | 'inventory' | 'orders' }) {
  return (
    <aside className="sf-mock-side">
      <div className="sf-mock-side__logo">
        <span className="mk">
          <Boxes />
        </span>
        <span className="wd">StockFlow</span>
      </div>
      <div className={`sf-mock-nav__i${active === 'dashboard' ? ' on' : ''}`}>
        <LayoutDashboard /> Dashboard
      </div>
      <div className={`sf-mock-nav__i${active === 'inventory' ? ' on' : ''}`}>
        <Package /> Inventory
      </div>
      <div className={`sf-mock-nav__i${active === 'orders' ? ' on' : ''}`}>
        <ShoppingCart /> Orders
      </div>
      <div className="sf-mock-nav__i">
        <Truck /> Suppliers
      </div>
      <div className="sf-mock-nav__i">
        <BarChart3 /> Reports
      </div>
      <div className="sf-mock-side__sp" />
      <div className="sf-mock-nav__i">
        <Settings /> Settings
      </div>
      <div className="sf-mock-side__user">
        <span className="av">JD</span>
        <div>
          <div className="nm">J. Dela Cruz</div>
          <div className="rl">Owner</div>
        </div>
      </div>
    </aside>
  )
}

// ── Dashboard mock (cover + gallery canonical) ───────────────────────────────

function SfDashboard() {
  return (
    <div className="sf-mock-frame sf-mock-browser">
      <div className="sf-mock-bar">
        <div className="dots">
          <i /><i /><i />
        </div>
        <div className="url">
          <Lock /> app.stockflow.io/dashboard
        </div>
      </div>
      <div className="sf-mock-app">
        <SfSidebar active="dashboard" />
        <div className="sf-mock-main">
          <div className="sf-mock-top">
            <div>
              <div className="crumb">Overview</div>
              <h1>Dashboard</h1>
            </div>
            <div className="sf-mock-search">
              <Search /> Search stock, orders…
            </div>
            <div className="bell">
              <Bell />
            </div>
            <span className="sf-mock-btn">
              <Plus /> New order
            </span>
          </div>
          <div className="sf-mock-content">
            <div className="sf-mock-metrics">
              <div className="sf-mock-metric">
                <div className="lbl">
                  <span className="ic"><Wallet /></span> Total stock value
                </div>
                <div className="num">₱1.84M</div>
                <div className="chg up"><TrendingUp /> +6.2% this month</div>
              </div>
              <div className="sf-mock-metric">
                <div className="lbl">
                  <span className="ic"><AlertTriangle /></span> Low-stock items
                </div>
                <div className="num">12</div>
                <div className="chg warn"><AlertTriangle /> Needs reorder</div>
              </div>
              <div className="sf-mock-metric">
                <div className="lbl">
                  <span className="ic"><Clock /></span> Pending orders
                </div>
                <div className="num">28</div>
                <div className="chg up"><TrendingUp /> 9 ship today</div>
              </div>
              <div className="sf-mock-metric">
                <div className="lbl">
                  <span className="ic"><Receipt /></span> Revenue (Aug)
                </div>
                <div className="num">₱642K</div>
                <div className="chg up"><TrendingUp /> +11% vs Jul</div>
              </div>
            </div>
            <div className="sf-mock-row">
              <div className="sf-mock-panel">
                <div className="sf-mock-panel__head">
                  <h3>Stock movement</h3>
                  <span className="pick">Last 7 months <ChevronDown /></span>
                </div>
                <div className="sf-mock-chart">
                  <div className="col"><div className="bar" style={{ height: '46%' }} /><div className="cl">Feb</div></div>
                  <div className="col"><div className="bar" style={{ height: '58%' }} /><div className="cl">Mar</div></div>
                  <div className="col"><div className="bar" style={{ height: '42%' }} /><div className="cl">Apr</div></div>
                  <div className="col"><div className="bar" style={{ height: '70%' }} /><div className="cl">May</div></div>
                  <div className="col"><div className="bar" style={{ height: '62%' }} /><div className="cl">Jun</div></div>
                  <div className="col"><div className="bar" style={{ height: '80%' }} /><div className="cl">Jul</div></div>
                  <div className="col"><div className="bar hi" style={{ height: '96%' }} /><div className="cl">Aug</div></div>
                </div>
              </div>
              <div className="sf-mock-panel">
                <div className="sf-mock-panel__head">
                  <h3>Low-stock alerts</h3>
                  <span className="pick">Reorder</span>
                </div>
                <div className="sf-mock-mini">
                  <div className="sf-mock-mini__i">
                    <span className="sw swk">📦</span>
                    <div><div className="nm">Kraft Boxes — M</div><div className="meta">SKU PK-021</div></div>
                    <div className="v"><span className="sf-mock-pill low">4 left</span></div>
                  </div>
                  <div className="sf-mock-mini__i">
                    <span className="sw swy">🏷️</span>
                    <div><div className="nm">Thermal Labels</div><div className="meta">SKU PK-008</div></div>
                    <div className="v"><span className="sf-mock-pill low">7 left</span></div>
                  </div>
                  <div className="sf-mock-mini__i">
                    <span className="sw swo">🧴</span>
                    <div><div className="nm">Bottle Pumps</div><div className="meta">SKU HW-114</div></div>
                    <div className="v"><span className="sf-mock-pill out">0 left</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sf-mock-table sf-mock-orders">
              <div className="sf-mock-table__head">
                <h3>Recent orders</h3>
                <div className="sf-mock-table__tools">
                  <span className="sf-mock-btn sf-mock-btn--ghost"><Filter /> Filter</span>
                  <span className="sf-mock-btn sf-mock-btn--ghost"><Download /> Export</span>
                </div>
              </div>
              <div className="sf-mock-trow head">
                <span>Order</span><span>Customer</span><span>Items</span><span className="sf-mock-right">Total</span><span>Status</span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-mono">#10428</span><span>Aria Home Goods</span><span>6 items</span>
                <span className="sf-mock-right">₱4,820</span><span><span className="sf-mock-pill pend">Pending</span></span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-mono">#10427</span><span>M. Reyes</span><span>2 items</span>
                <span className="sf-mock-right">₱1,560</span><span><span className="sf-mock-pill ship">Shipped</span></span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-mono">#10426</span><span>Cafe Verde</span><span>14 items</span>
                <span className="sf-mock-right">₱9,240</span><span><span className="sf-mock-pill ok">Fulfilled</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Inventory mock ───────────────────────────────────────────────────────────

function SfInventory() {
  return (
    <div className="sf-mock-frame sf-mock-browser">
      <div className="sf-mock-bar">
        <div className="dots"><i /><i /><i /></div>
        <div className="url"><Lock /> app.stockflow.io/inventory</div>
      </div>
      <div className="sf-mock-app">
        <SfSidebar active="inventory" />
        <div className="sf-mock-main">
          <div className="sf-mock-top">
            <div>
              <div className="crumb">Catalog</div>
              <h1>Inventory</h1>
            </div>
            <div className="sf-mock-search"><Search /> Search by name or SKU…</div>
            <span className="sf-mock-btn"><Plus /> Add item</span>
          </div>
          <div className="sf-mock-content">
            <div className="sf-mock-filterbar">
              <span className="sf-mock-chip on"><Filter /> All categories</span>
              <span className="sf-mock-chip">Coffee</span>
              <span className="sf-mock-chip">Packaging</span>
              <span className="sf-mock-chip">Homeware</span>
              <span className="sf-mock-chip" style={{ marginLeft: 'auto' }}>
                <ArrowUpDown /> Stock: Low → High
              </span>
            </div>
            <div className="sf-mock-table sf-mock-inv">
              <div className="sf-mock-trow head">
                <span>Product</span><span>SKU</span><span className="sf-mock-right">Stock</span>
                <span className="sf-mock-right">Price</span><span>Status</span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-prod"><span className="sw swk">📦</span> Kraft Boxes — M</span>
                <span className="sf-mock-mono">PK-021</span><span className="sf-mock-right">4</span>
                <span className="sf-mock-right">₱18</span><span><span className="sf-mock-pill low">Low stock</span></span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-prod"><span className="sw swy">🏷️</span> Thermal Labels</span>
                <span className="sf-mock-mono">PK-008</span><span className="sf-mock-right">7</span>
                <span className="sf-mock-right">₱2</span><span><span className="sf-mock-pill low">Low stock</span></span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-prod"><span className="sw swo">🧴</span> Bottle Pumps</span>
                <span className="sf-mock-mono">HW-114</span><span className="sf-mock-right">0</span>
                <span className="sf-mock-right">₱45</span><span><span className="sf-mock-pill out">Out of stock</span></span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-prod"><span className="sw swk">☕</span> Morning Bloom 250g</span>
                <span className="sf-mock-mono">CF-001</span><span className="sf-mock-right">142</span>
                <span className="sf-mock-right">₱520</span><span><span className="sf-mock-pill ok">In stock</span></span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-prod"><span className="sw swt">🫙</span> Glass Jars — 500ml</span>
                <span className="sf-mock-mono">HW-052</span><span className="sf-mock-right">86</span>
                <span className="sf-mock-right">₱95</span><span><span className="sf-mock-pill ok">In stock</span></span>
              </div>
              <div className="sf-mock-trow">
                <span className="sf-mock-prod"><span className="sw swg">🥄</span> Bamboo Scoops</span>
                <span className="sf-mock-mono">HW-077</span><span className="sf-mock-right">210</span>
                <span className="sf-mock-right">₱35</span><span><span className="sf-mock-pill ok">In stock</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Order detail mock ────────────────────────────────────────────────────────

function SfOrderDetail() {
  return (
    <div className="sf-mock-frame sf-mock-browser">
      <div className="sf-mock-bar">
        <div className="dots"><i /><i /><i /></div>
        <div className="url"><Lock /> app.stockflow.io/orders/10428</div>
      </div>
      <div className="sf-mock-app">
        <SfSidebar active="orders" />
        <div className="sf-mock-main">
          <div className="sf-mock-top">
            <div>
              <div className="crumb">Orders / #10428</div>
              <h1>Order #10428</h1>
            </div>
            <span className="sf-mock-btn sf-mock-btn--ghost" style={{ marginLeft: 'auto' }}>
              <Printer /> Invoice
            </span>
            <span className="sf-mock-btn"><Truck /> Mark shipped</span>
          </div>
          <div className="sf-mock-detail">
            <div className="sf-mock-detail__main">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h2>Aria Home Goods</h2>
                <span className="sf-mock-pill pend">Pending</span>
              </div>
              <div className="sf-mock-detail__sub">Placed 14 Aug 2026 · 6 items · Paid via bank transfer</div>
              <div style={{ marginTop: '16px' }}>
                <div className="sf-mock-line">
                  <span className="sw swk">☕</span>
                  <div><div className="nm">Morning Bloom 250g</div><div className="meta">CF-001 · ×4</div></div>
                  <span className="pr">₱2,080</span>
                </div>
                <div className="sf-mock-line">
                  <span className="sw swt">🫙</span>
                  <div><div className="nm">Glass Jars — 500ml</div><div className="meta">HW-052 · ×12</div></div>
                  <span className="pr">₱1,140</span>
                </div>
                <div className="sf-mock-line">
                  <span className="sw swg">🥄</span>
                  <div><div className="nm">Bamboo Scoops</div><div className="meta">HW-077 · ×16</div></div>
                  <span className="pr">₱560</span>
                </div>
              </div>
              <div style={{ maxWidth: '280px', marginLeft: 'auto', marginTop: '14px' }}>
                <div className="sf-mock-kv"><span className="k">Subtotal</span><span>₱3,780</span></div>
                <div className="sf-mock-kv"><span className="k">Shipping</span><span>₱120</span></div>
                <div className="sf-mock-kv tot"><span>Total</span><span className="v">₱3,900</span></div>
              </div>
            </div>
            <div className="sf-mock-detail__side">
              <div className="sf-mock-info">
                <div className="b">
                  <div className="k">Customer</div>
                  <div className="v">Aria Home Goods</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--sf-s-500)', marginTop: '2px' }}>orders@ariahome.ph</div>
                </div>
                <div className="b">
                  <div className="k">Ship to</div>
                  <div className="v">Unit 4, Makati City</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--sf-s-500)', marginTop: '2px' }}>Metro Manila · 1226</div>
                </div>
                <div className="b">
                  <div className="k">Fulfilment</div>
                  <div className="v" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="sf-mock-pill pend">Pending</span> Assigned: Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Responsive / tablet mock ─────────────────────────────────────────────────

function SfResponsive() {
  return (
    <div className="sf-mock-tablet">
      <div className="sf-mock-frame">
        <div className="sf-mock-app" style={{ gridTemplateColumns: '1fr' }}>
          <div className="sf-mock-main">
            <div className="sf-mock-top">
              <div className="bell" style={{ marginRight: '2px' }}><Menu /></div>
              <div>
                <div className="crumb">Overview</div>
                <h1>Dashboard</h1>
              </div>
              <div className="bell" style={{ marginLeft: 'auto' }}><Bell /></div>
              <span className="sf-mock-side__user" style={{ border: 'none', padding: 0, margin: 0 }}>
                <span className="av">JD</span>
              </span>
            </div>
            <div className="sf-mock-content">
              <div className="sf-mock-metrics" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="sf-mock-metric">
                  <div className="lbl"><span className="ic"><Wallet /></span> Stock value</div>
                  <div className="num">₱1.84M</div>
                  <div className="chg up"><TrendingUp /> +6.2%</div>
                </div>
                <div className="sf-mock-metric">
                  <div className="lbl"><span className="ic"><AlertTriangle /></span> Low stock</div>
                  <div className="num">12</div>
                  <div className="chg warn"><AlertTriangle /> Reorder</div>
                </div>
                <div className="sf-mock-metric">
                  <div className="lbl"><span className="ic"><Clock /></span> Pending</div>
                  <div className="num">28</div>
                  <div className="chg up"><TrendingUp /> 9 today</div>
                </div>
                <div className="sf-mock-metric">
                  <div className="lbl"><span className="ic"><Receipt /></span> Revenue</div>
                  <div className="num">₱642K</div>
                  <div className="chg up"><TrendingUp /> +11%</div>
                </div>
              </div>
              <div className="sf-mock-panel">
                <div className="sf-mock-panel__head">
                  <h3>Stock movement</h3>
                  <span className="pick">7 mo <ChevronDown /></span>
                </div>
                <div className="sf-mock-chart" style={{ height: '120px' }}>
                  <div className="col"><div className="bar" style={{ height: '46%' }} /><div className="cl">Feb</div></div>
                  <div className="col"><div className="bar" style={{ height: '58%' }} /><div className="cl">Mar</div></div>
                  <div className="col"><div className="bar" style={{ height: '42%' }} /><div className="cl">Apr</div></div>
                  <div className="col"><div className="bar" style={{ height: '70%' }} /><div className="cl">May</div></div>
                  <div className="col"><div className="bar" style={{ height: '62%' }} /><div className="cl">Jun</div></div>
                  <div className="col"><div className="bar" style={{ height: '80%' }} /><div className="cl">Jul</div></div>
                  <div className="col"><div className="bar hi" style={{ height: '96%' }} /><div className="cl">Aug</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Visual section panel (inline CSS-art "screen") ───────────────────────────

function SfScreen({
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
        <div className="sf-mock w-full">{children}</div>
      </div>
      <div className="mt-[16px] flex items-center gap-[10px] text-[14.5px] text-slate-600">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-indigo" />
        <span>{caption}</span>
      </div>
    </Reveal>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function StockFlowPage() {
  return (
    <CaseLayout
      pills={[
        { icon: <Sparkles />, label: 'Concept', concept: true },
        { icon: <LayoutDashboard />, label: 'Web app' },
        { icon: <Boxes />, label: 'Retail operations' },
      ]}
      title="StockFlow"
      summary="A custom dashboard that replaces the spreadsheet chaos."
      meta={[
        { label: 'Type', value: 'Concept', sub: 'Self-initiated' },
        { label: 'Industry', value: 'Retail operations' },
        { label: 'Scope', value: 'Web application' },
        { label: 'Stack', value: 'Hand-coded', sub: 'React / Next.js · API · role-based auth' },
        { label: 'Timeline', value: 'Illustrative' },
      ]}
      disclaimer="This is a concept piece created to demonstrate Rozalix's approach — StockFlow is a fictional product. All data shown is sample data; there are no real users or usage figures, and any targets are clearly labelled as such."
      overviewLede={
        <>
          Spreadsheets don&apos;t scale. We designed a <em>custom, hand-coded web app</em> that pulls stock, orders, and suppliers into one live view — the kind of bespoke application logic a page builder simply can&apos;t produce.
        </>
      }
      coverShot={
        <div className="sf-mock">
          <SfDashboard />
        </div>
      }
      ctaHeadline="Outgrown your spreadsheets?"
      ctaBody="This is a concept — but the craft is real. Tell us what you need to track and we'll get back within one business day."
      related={relatedTo('stockflow')}
      breadcrumb="StockFlow"
    >
      {/* ── THE BRIEF ─────────────────────────────────────────────────── */}
      <CaseNarr id="brief" tint>
        <CaseNarrAside>
          <Reveal>
            <span className="mb-[14px] inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
              The brief
            </span>
            <h2 className="text-[clamp(26px,3vw,34px)] font-display font-semibold tracking-[-0.02em]">
              Drowning in spreadsheets.
            </h2>
            <p className="mt-[14px] text-[16px] text-slate-600">
              The imagined scenario behind the concept — a growing business outrunning the tools that got it started.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <p>
              A small retail business tracks everything in a tangle of spreadsheets — stock on one tab, orders on another, supplier contacts in a third. Two people edit the same file, numbers drift out of sync, and nobody can answer &ldquo;what&apos;s actually in stock right now?&rdquo; with confidence.
            </p>
            <p>
              They don&apos;t need a bloated enterprise ERP. They need a focused, custom tool that fits how they actually work — and that more than one person can use at once, safely.
            </p>
            <CaseProbList>
              <CaseProbItem icon={<Table2 />} title="Manual spreadsheets">
                Stock, orders and suppliers live in separate files that constantly fall out of sync.
              </CaseProbItem>
              <CaseProbItem icon={<EyeOff />} title="No real-time view">
                No single screen shows current stock, so reorders are guesswork and stockouts surprise everyone.
              </CaseProbItem>
              <CaseProbItem icon={<Users />} title="No multi-user access">
                One shared file, no roles — anyone can overwrite anything, with no accountability.
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
              A focused, custom application — every screen built around the questions the team asks all day.
            </p>
          </Reveal>
        </CaseNarrAside>

        <CaseNarrBody>
          <Reveal>
            <CaseApprList>
              <CaseApprItem
                n="01"
                title="A dashboard that answers “how are we doing?”"
                tags={['Metric cards', 'Chart', 'Alerts']}
              >
                Key metrics up top — stock value, low-stock count, pending orders, revenue — with a movement chart and a live low-stock alert list, so the day starts with answers, not digging.
              </CaseApprItem>
              <CaseApprItem
                n="02"
                title="Inventory you can actually search"
                tags={['Data table', 'Search & filter', 'Status states']}
              >
                A fast, responsive data table with search, filters and clear status pills — in stock, low, out — so the right item is one query away, not one scroll-marathon away.
              </CaseApprItem>
              <CaseApprItem
                n="03"
                title="Orders & suppliers in one place"
                tags={['Order detail', 'Suppliers', 'Fulfilment']}
              >
                Every order opens to a clean detail view — line items, customer, totals, fulfilment status — with supplier records linked, so reordering is a couple of clicks.
              </CaseApprItem>
              <CaseApprItem
                n="04"
                title="Role-based access, by design"
                tags={['Roles & permissions', 'Custom auth', 'Audit-friendly']}
              >
                Custom-coded auth separates staff from admin — staff fulfil orders, admins manage pricing and exports — so the right people see the right things.
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
            The pieces that replace the spreadsheet.
          </h2>
          <p className="text-[19px] text-slate-600">
            Four parts of the design carry most of the operational weight.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          <CaseFeatItem icon={<Activity />} title="Real-time stock overview">
            One live screen for stock value, counts and movement — no more reconciling tabs.
          </CaseFeatItem>
          <CaseFeatItem icon={<BellRing />} title="Low-stock alerts">
            Automatic flags when items dip below threshold, so reorders happen before stockouts.
          </CaseFeatItem>
          <CaseFeatItem icon={<ShieldCheck />} title="Role-based permissions">
            Staff and admin see and do different things — safe multi-user by design.
          </CaseFeatItem>
          <CaseFeatItem icon={<FileDown />} title="Exportable reports">
            Stock and sales exported to CSV for accounting in a click — no copy-paste.
          </CaseFeatItem>
        </div>
      </CaseFeatGrid>

      {/* ── WHAT THIS DEMONSTRATES ────────────────────────────────────── */}
      <CaseDemoSection
        title="The hand-coded difference."
        subtitle="A dashboard is exactly what page builders can't do. No invented user numbers — here's the capability on show."
        targets={[
          { icon: <Code2 />, label: 'Approach', value: 'Hand-coded' },
          { icon: <ShieldCheck />, label: 'Design target', value: 'Role-based' },
          { icon: <Zap />, label: 'Design target', value: 'Real-time' },
          { icon: <TabletSmartphone />, label: 'Design target', value: 'Responsive' },
        ]}
      >
        <CaseDemoItem icon={<Layers />} title="Complex state & data UI">
          Live metrics, charts and tables that stay in sync — real application state, not static pages.
        </CaseDemoItem>
        <CaseDemoItem icon={<Code2 />} title="Custom hand-coded logic">
          Bespoke application behaviour built in code — the opposite of a drag-and-drop template.
        </CaseDemoItem>
        <CaseDemoItem icon={<ShieldCheck />} title="Role-based access">
          Authentication and permissions that separate staff from admin, built properly.
        </CaseDemoItem>
        <CaseDemoItem icon={<Table2 />} title="Responsive data tables">
          Dense, sortable, filterable tables that stay usable from desktop down to tablet.
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
              Four screens from the StockFlow design — reproduced as pixel-faithful CSS art.
            </p>
          </Reveal>

          <div className="mt-[44px] grid gap-[64px]">
            <SfScreen
              icon={<LayoutDashboard />}
              label="Dashboard"
              caption={
                <>
                  <b>Dashboard</b> — metric cards, a stock-movement chart, and recent orders.
                </>
              }
            >
              <SfDashboard />
            </SfScreen>

            <SfScreen
              icon={<Package />}
              label="Inventory"
              delay={80}
              caption={
                <>
                  <b>Inventory</b> — a searchable, filterable table with clear status pills.
                </>
              }
            >
              <SfInventory />
            </SfScreen>

            <SfScreen
              icon={<Receipt />}
              label="Order detail"
              delay={160}
              caption={
                <>
                  <b>Order detail</b> — line items, customer, totals and fulfilment status.
                </>
              }
            >
              <SfOrderDetail />
            </SfScreen>

            <SfScreen
              icon={<TabletSmartphone />}
              label="Responsive"
              delay={240}
              caption={
                <>
                  <b>Responsive</b> — the dashboard holding up on a tablet screen.
                </>
              }
            >
              <SfResponsive />
            </SfScreen>
          </div>
        </Wrap>
      </section>
    </CaseLayout>
  )
}
