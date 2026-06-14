import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js'

export type ContactInput = {
  firstName: string
  lastName: string
  email: string
  message: string
  /** national number as typed; validated against `phoneCountry` */
  phone?: string
  phoneCountry?: CountryCode
}
export type ContactErrors = Partial<
  Record<'firstName' | 'lastName' | 'email' | 'message' | 'phone', true>
>

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(input: ContactInput): ContactErrors {
  const errs: ContactErrors = {}
  if (!input.firstName.trim()) errs.firstName = true
  if (!input.lastName.trim()) errs.lastName = true
  if (!input.message.trim()) errs.message = true
  // Email is optional — only validate the format when something was entered.
  const email = input.email.trim()
  if (email && !emailRe.test(email)) errs.email = true
  // Phone is required and must be a valid number for the selected country.
  const phone = input.phone?.trim()
  if (!phone || !isValidPhoneNumber(phone, input.phoneCountry)) errs.phone = true
  return errs
}
