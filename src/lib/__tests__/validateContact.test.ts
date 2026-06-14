import { describe, it, expect } from 'vitest'
import { validateContact } from '../validateContact'

const base = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'a@b.com',
  message: 'hi',
  phone: '9171234567',
  phoneCountry: 'PH' as const,
}

describe('validateContact', () => {
  it('flags empty required fields (email optional, phone required)', () => {
    const errs = validateContact({ firstName: '', lastName: '', email: '', message: '' })
    expect(errs).toEqual({ firstName: true, lastName: true, message: true, phone: true })
  })
  it('passes a valid submission', () => {
    expect(validateContact(base)).toEqual({})
  })
  it('allows an empty (optional) email', () => {
    expect(validateContact({ ...base, email: '' })).toEqual({})
  })
  it('flags an invalid email when one is entered', () => {
    expect(validateContact({ ...base, email: 'nope' }).email).toBe(true)
  })
  it('requires a phone number', () => {
    expect(validateContact({ ...base, phone: '' }).phone).toBe(true)
  })
  it('flags an invalid phone for the selected country', () => {
    expect(validateContact({ ...base, phone: '123' }).phone).toBe(true)
  })
})
