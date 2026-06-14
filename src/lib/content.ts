// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  num: string
  title: string
  description: string
}

export interface PricingFeature {
  icon: string
  text: string
}

export interface PricingTier {
  name: string
  price: string
  from?: boolean
  best: string
  features: PricingFeature[]
  cta: string
  featured?: boolean
}

export interface CarePlan {
  name: string
  price: string
  blurb: string
}

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    icon: 'compass',
    title: 'Strategy & UX',
    description: 'Goals, structure, and user flows mapped before a single pixel is drawn.',
  },
  {
    icon: 'pen-tool',
    title: 'Design',
    description: 'Clean, modern, on-brand interfaces that look like they belong at the top of your market.',
  },
  {
    icon: 'code',
    title: 'Development',
    description: 'Fast, responsive builds on a modern stack — marketing sites and full web apps alike.',
  },
  {
    icon: 'gauge',
    title: 'Performance & SEO',
    description: 'Quick load times and a search-ready foundation, engineered in from the start.',
  },
  {
    icon: 'rocket',
    title: 'Launch',
    description: 'Testing, deployment, and a smooth go-live — with no surprises on launch day.',
  },
  {
    icon: 'life-buoy',
    title: 'Ongoing support',
    description: 'Updates, monitoring, and improvements that keep the site sharp after launch.',
  },
]

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We align on goals, audience, and scope — then map the structure.',
  },
  {
    num: '02',
    title: 'Design',
    description: 'On-brand interface design, reviewed and refined with you.',
  },
  {
    num: '03',
    title: 'Development',
    description: 'We build it fast and responsive on a modern, reliable stack.',
  },
  {
    num: '04',
    title: 'Launch',
    description: 'Thorough testing, deployment, and a smooth go-live.',
  },
  {
    num: '05',
    title: 'Support',
    description: "Monitoring, updates, and improvements after you're live.",
  },
]

// ─── Pricing Tiers ────────────────────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    name: 'Launch',
    price: '₱15,000',
    from: true,
    best: 'A clean, professional presence, fast.',
    features: [
      { icon: 'check', text: 'Up to 5 pages, custom mobile-first design' },
      { icon: 'repeat-2', text: 'Up to 3 design iterations' },
      { icon: 'check', text: 'CMS + lead/contact form' },
      { icon: 'check', text: 'On-page SEO & analytics setup' },
      { icon: 'check', text: 'SSL + 1-year hosting · 60-day support' },
      { icon: 'check', text: '~1–2 weeks' },
    ],
    cta: 'Start a project',
  },
  {
    name: 'Business',
    price: '₱25,000',
    from: true,
    best: 'More room to grow, with content control.',
    featured: true,
    features: [
      { icon: 'check', text: 'Up to ~8 pages, custom mobile-first design' },
      { icon: 'repeat-2', text: 'Up to 4 design iterations' },
      { icon: 'check', text: 'Editable CMS / blog' },
      { icon: 'check', text: 'On-page SEO + analytics' },
      { icon: 'check', text: 'Social & Google integrations' },
      { icon: 'check', text: 'SSL + 1-year hosting · 75-day support' },
      { icon: 'check', text: '~2–4 weeks' },
    ],
    cta: 'Start a project',
  },
  {
    name: 'Growth',
    price: '₱35,000',
    from: true,
    best: 'Depth, content control, and polish.',
    features: [
      { icon: 'check', text: 'Up to ~12 pages, bespoke design + wireframes' },
      { icon: 'repeat-2', text: 'Up to 5 design iterations' },
      { icon: 'check', text: 'Editable CMS / blog' },
      { icon: 'check', text: 'Full SEO + copywriting assist' },
      { icon: 'check', text: 'Social & Google integrations' },
      { icon: 'check', text: 'Admin training · 90-day support' },
      { icon: 'check', text: '~4–6 weeks' },
    ],
    cta: 'Start a project',
  },
  {
    name: 'E-commerce',
    price: '₱60,000',
    from: true,
    best: 'Everything you need to sell online.',
    features: [
      { icon: 'check', text: 'Up to ~100 products' },
      { icon: 'repeat-2', text: 'Up to 5 design iterations' },
      { icon: 'check', text: 'GCash / Maya / PayMongo + card gateway' },
      { icon: 'check', text: 'Inventory & order management' },
      { icon: 'check', text: 'Customer accounts' },
      { icon: 'check', text: 'Everything in Growth' },
      { icon: 'check', text: '~5–8 weeks' },
    ],
    cta: 'Get a quote',
  },
  {
    name: 'Custom',
    price: "Let's talk",
    best: 'Web apps, dashboards & complex builds. From ₱120,000',
    features: [
      { icon: 'check', text: 'Discovery & UX strategy' },
      { icon: 'repeat-2', text: 'Unlimited design iterations (within scope)' },
      { icon: 'check', text: 'Bespoke design + custom backend' },
      { icon: 'check', text: 'Role-based access' },
      { icon: 'check', text: 'Third-party / CRM integrations' },
      { icon: 'check', text: 'Scalable modern stack · dedicated support' },
      { icon: 'check', text: '~8–12+ weeks' },
    ],
    cta: 'Book a consultation',
  },
]

// ─── Care Plans ───────────────────────────────────────────────────────────────

export const carePlans: CarePlan[] = [
  {
    name: 'Essential',
    price: '₱1,500/mo',
    blurb: 'Managed hosting, SSL, updates, security scans, backups, uptime monitoring, and a monthly report.',
  },
  {
    name: 'Growth',
    price: '₱3,500/mo',
    blurb: 'Everything in Essential, plus ~3 hrs of content/design edits, SEO monitoring, analytics review, and priority email support.',
  },
  {
    name: 'Premium',
    price: '₱6,500/mo',
    blurb: 'Everything in Growth, plus ~6 hrs of dev time, performance & conversion optimization, priority support, and a quarterly strategy call.',
  },
]
