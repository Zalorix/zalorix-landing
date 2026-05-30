export type CaseStudyTheme = 'np' | 'bb' | 'sf' | 'sap'

export interface CaseStudy {
  slug: string
  href: string
  name: string
  tags: [string, string]
  blurb: string
  theme: CaseStudyTheme
}

const slugs = {
  np: 'northpoint-advisory',
  bb: 'brew-and-bloom',
  sf: 'stockflow',
  sap: 'sapling',
} as const

function make(
  theme: CaseStudyTheme,
  name: string,
  tags: [string, string],
  blurb: string,
): CaseStudy {
  const slug = slugs[theme]
  return { slug, href: `/work/${slug}`, name, tags, blurb, theme }
}

export const caseStudies: CaseStudy[] = [
  make(
    'np',
    'Northpoint Advisory',
    ['Corporate site', 'Consulting'],
    'A trust-first marketing site for a modern management-consulting firm — service architecture, senior team, and a clear path to a conversation.',
  ),
  make(
    'bb',
    'Brew & Bloom',
    ['E-commerce', 'Retail'],
    'A fast, mobile-first store for a lifestyle coffee & homeware brand — with one-page checkout and GCash, Maya & card.',
  ),
  make(
    'sf',
    'StockFlow',
    ['Web app', 'Dashboard'],
    'A custom inventory & order dashboard that replaces spreadsheet chaos — the hand-coded work a page builder can\'t do.',
  ),
  make(
    'sap',
    'Sapling',
    ['Landing page', 'Fintech'],
    'A conversion-focused launch page for a fintech app — a focused single-page flow built mobile-first to drive sign-ups.',
  ),
]
