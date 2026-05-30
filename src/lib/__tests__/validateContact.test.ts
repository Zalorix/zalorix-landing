import { describe, it, expect } from 'vitest'
import { validateContact } from '../validateContact'

describe('validateContact', () => {
  it('flags empty required fields', () => {
    const errs = validateContact({ name: '', email: '', message: '' })
    expect(errs).toEqual({ name: true, email: true, message: true })
  })
  it('flags an invalid email', () => {
    expect(validateContact({ name: 'A', email: 'nope', message: 'hi' }).email).toBe(true)
  })
  it('passes a valid submission', () => {
    expect(validateContact({ name: 'A', email: 'a@b.com', message: 'hi' })).toEqual({})
  })
})
