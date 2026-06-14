import { describe, it, expect } from 'vitest'
import { services, processSteps, pricingTiers, carePlans } from '../content'

describe('landing content', () => {
  it('has 6 services each with title and description', () => {
    expect(services).toHaveLength(6)
    services.forEach((s) => { expect(s.title).toBeTruthy(); expect(s.description).toBeTruthy() })
  })
  it('has 5 process steps numbered 01..05', () => {
    expect(processSteps.map((s) => s.num)).toEqual(['01', '02', '03', '04', '05'])
  })
  it('has 5 pricing tiers and 3 care plans', () => {
    expect(pricingTiers).toHaveLength(5)
    expect(carePlans).toHaveLength(3)
  })
})
