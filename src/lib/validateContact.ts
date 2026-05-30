export type ContactInput = { name: string; email: string; message: string }
export type ContactErrors = Partial<Record<keyof ContactInput, true>>

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(input: ContactInput): ContactErrors {
  const errs: ContactErrors = {}
  if (!input.name.trim()) errs.name = true
  if (!input.email.trim() || !emailRe.test(input.email.trim())) errs.email = true
  if (!input.message.trim()) errs.message = true
  return errs
}
