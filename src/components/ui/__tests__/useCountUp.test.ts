import { describe, it, expect } from 'vitest'
import { countValue } from '../useCountUp'

describe('countValue', () => {
  it('returns 0 at progress 0', () => { expect(countValue(200, 0)).toBe(0) })
  it('returns the target at progress 1', () => { expect(countValue(200, 1)).toBe(200) })
  it('eases (cubic-out) so midpoint is past half', () => { expect(countValue(200, 0.5)).toBeGreaterThan(100) })
})
