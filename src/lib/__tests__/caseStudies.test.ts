import { describe, it, expect } from 'vitest'
import { caseStudies } from '../caseStudies'

describe('caseStudies', () => {
  it('has 4 studies with unique slugs and routes under /work', () => {
    expect(caseStudies).toHaveLength(4)
    const slugs = caseStudies.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(4)
    caseStudies.forEach((c) => { expect(c.href).toBe(`/work/${c.slug}`) })
  })
})
