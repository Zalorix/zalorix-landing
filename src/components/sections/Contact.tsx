'use client'

import { useRef, useState } from 'react'
import { Mail, Calendar, Clock, AlertCircle, ArrowRight, Check } from 'lucide-react'
import { Section, Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { validateContact, type ContactErrors } from '@/lib/validateContact'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  function handleBlur(field: keyof ContactErrors) {
    const next = validateContact({ name, email, message })
    if (next[field]) {
      setErrors((prev) => ({ ...prev, [field]: true }))
    }
  }

  function handleInput(field: keyof ContactErrors, value: string) {
    if (field === 'name') setName(value)
    else if (field === 'email') setEmail(value)
    else if (field === 'message') setMessage(value)

    if (errors[field]) {
      const updated = { ...{ name, email, message }, [field]: value }
      const next = validateContact(updated)
      setErrors((prev) => ({ ...prev, [field]: next[field] }))
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validateContact({ name, email, message })
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      if (errs.name && nameRef.current) { nameRef.current.focus(); return }
      if (errs.email && emailRef.current) { emailRef.current.focus(); return }
      if (errs.message && messageRef.current) { messageRef.current.focus(); return }
      return
    }
    setSubmitted(true)
  }

  return (
    <Section id="contact">
      <Wrap>
        {/*
          .contact-grid:
            display:grid; grid-template-columns:.9fr 1.1fr; gap:64px; align-items:start
          @media(max-width:920px): grid-template-columns:1fr; gap:44px
        */}
        <div
          className="
            grid gap-[64px] items-start
            [grid-template-columns:.9fr_1.1fr]
            max-[920px]:[grid-template-columns:1fr]
            max-[920px]:gap-[44px]
          "
        >
          {/* LEFT — .contact-info */}
          <Reveal>
            <div className="contact-info">
              <Eyebrow>Start a project</Eyebrow>
              {/*
                .contact-info h2: font-size:38px; margin:14px 0 18px
              */}
              <h2 className="text-[38px] max-[560px]:text-[29px] my-[14px] mb-[18px]">
                Let's talk about what you're building.
              </h2>
              {/*
                .contact-info > p: font-size:18px; color:var(--slate-600); max-width:42ch
              */}
              <p className="text-[18px] text-slate-600 max-w-[42ch]">
                Share a few details and we'll reply within one business day. Prefer to talk it
                through? Book a call or email us directly.
              </p>

              {/*
                .contact-list: display:grid; gap:18px; margin-top:36px
              */}
              <div className="grid gap-[18px] mt-[36px]">
                {/* Email */}
                {/*
                  .ci: display:flex; gap:16px; align-items:flex-start
                  .ci .ic: width:44px; height:44px; border-radius:var(--r-sm)[8px];
                    background:#fff; border:1px solid var(--slate-200);
                    display:grid; place-items:center; flex:0 0 auto
                  .ci .ic svg: width:20px; height:20px; color:var(--indigo)
                  .ci .k: font-size:13px; font-weight:600; text-transform:uppercase;
                    letter-spacing:.06em; color:var(--slate-400)
                  .ci .v: font-size:16.5px; font-weight:500; color:var(--ink-900); margin-top:2px
                  .ci a.v: color:var(--indigo)
                */}
                <div className="flex gap-[16px] items-start">
                  <div className="w-[44px] h-[44px] rounded-[8px] bg-white border border-slate-200 grid place-items-center flex-[0_0_auto]">
                    <Mail className="w-[20px] h-[20px] text-indigo" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-[.06em] text-slate-400">Email</div>
                    <a
                      href="mailto:hello@rozalix.com"
                      className="block text-[16.5px] font-medium text-indigo mt-[2px]"
                    >
                      hello@rozalix.com
                    </a>
                  </div>
                </div>

                {/* Book a call */}
                <div className="flex gap-[16px] items-start">
                  <div className="w-[44px] h-[44px] rounded-[8px] bg-white border border-slate-200 grid place-items-center flex-[0_0_auto]">
                    <Calendar className="w-[20px] h-[20px] text-indigo" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-[.06em] text-slate-400">Book a call</div>
                    <a
                      href="#contact"
                      className="block text-[16.5px] font-medium text-indigo mt-[2px]"
                    >
                      Schedule a 30-min discovery call
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex gap-[16px] items-start">
                  <div className="w-[44px] h-[44px] rounded-[8px] bg-white border border-slate-200 grid place-items-center flex-[0_0_auto]">
                    <Clock className="w-[20px] h-[20px] text-indigo" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold uppercase tracking-[.06em] text-slate-400">Response time</div>
                    <div className="text-[16.5px] font-medium text-ink-900 mt-[2px]">Within one business day</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — .form-card + .form-success */}
          <Reveal delay={120}>
            {!submitted ? (
              /*
                .form-card:
                  border:1px solid var(--slate-200); border-radius:var(--r-lg)[16px];
                  background:#fff; padding:36px; box-shadow:var(--shadow-card)
              */
              <form
                className="border border-slate-200 rounded-[16px] bg-white p-[36px] shadow-[var(--shadow-card)] max-[520px]:p-[24px]"
                onSubmit={handleSubmit}
                noValidate
              >
                {/*
                  .form-row: display:grid; grid-template-columns:1fr 1fr; gap:20px
                  @media(max-width:520px): grid-template-columns:1fr; gap:0
                */}
                <div className="grid [grid-template-columns:1fr_1fr] gap-[20px] max-[520px]:[grid-template-columns:1fr] max-[520px]:gap-0">
                  {/* Name field */}
                  {/*
                    .field: display:grid; gap:8px; margin-bottom:20px
                    .field label: font-size:14px; font-weight:500; color:var(--slate-600)
                    .field label .req: color:var(--indigo)
                    .field.invalid .input: border-color:var(--error)
                    .field .err: font-size:13px; color:var(--error); display:none; align-items:center; gap:5px
                    .field.invalid .err: display:flex
                  */}
                  <div className={`grid gap-[8px] mb-[20px]${errors.name ? ' [&_.field-err]:flex [&_.field-input]:border-error' : ''}`}>
                    <label htmlFor="name" className="text-[14px] font-medium text-slate-600">
                      Name <span className="text-indigo">*</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={name}
                      onChange={(e) => handleInput('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      className={`field-input font-[inherit] text-[16px] px-[14px] py-[12px] border rounded-[8px] bg-white text-ink-900 transition-[0.15s] w-full placeholder:text-slate-400 focus:outline-none focus:border-indigo focus:shadow-[0_0_0_3px_var(--color-indigo-200)]${errors.name ? ' border-error' : ' border-slate-300'}`}
                    />
                    <span className={`field-err text-[13px] text-error ${errors.name ? 'flex' : 'hidden'} items-center gap-[5px]`}>
                      <AlertCircle className="w-[14px] h-[14px]" strokeWidth={1.75} /> Please enter your name
                    </span>
                  </div>

                  {/* Email field */}
                  <div className={`grid gap-[8px] mb-[20px]${errors.email ? ' [&_.field-err]:flex [&_.field-input]:border-error' : ''}`}>
                    <label htmlFor="email" className="text-[14px] font-medium text-slate-600">
                      Email <span className="text-indigo">*</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={email}
                      onChange={(e) => handleInput('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      className={`field-input font-[inherit] text-[16px] px-[14px] py-[12px] border rounded-[8px] bg-white text-ink-900 transition-[0.15s] w-full placeholder:text-slate-400 focus:outline-none focus:border-indigo focus:shadow-[0_0_0_3px_var(--color-indigo-200)]${errors.email ? ' border-error' : ' border-slate-300'}`}
                    />
                    <span className={`field-err text-[13px] text-error ${errors.email ? 'flex' : 'hidden'} items-center gap-[5px]`}>
                      <AlertCircle className="w-[14px] h-[14px]" strokeWidth={1.75} /> Enter a valid email
                    </span>
                  </div>
                </div>

                {/* Company + Project type row */}
                <div className="grid [grid-template-columns:1fr_1fr] gap-[20px] max-[520px]:[grid-template-columns:1fr] max-[520px]:gap-0">
                  {/* Company — no validation */}
                  <div className="grid gap-[8px] mb-[20px]">
                    <label htmlFor="company" className="text-[14px] font-medium text-slate-600">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      className="font-[inherit] text-[16px] px-[14px] py-[12px] border border-slate-300 rounded-[8px] bg-white text-ink-900 transition-[0.15s] w-full placeholder:text-slate-400 focus:outline-none focus:border-indigo focus:shadow-[0_0_0_3px_var(--color-indigo-200)]"
                    />
                  </div>

                  {/* Project type select */}
                  <div className="grid gap-[8px] mb-[20px]">
                    <label htmlFor="ptype" className="text-[14px] font-medium text-slate-600">
                      Project type
                    </label>
                    {/*
                      .select: appearance:none; background-image: chevron SVG;
                        background-repeat:no-repeat; background-position:right 12px center;
                        padding-right:40px; cursor:pointer
                    */}
                    <select
                      id="ptype"
                      name="ptype"
                      className="font-[inherit] text-[16px] px-[14px] py-[12px] border border-slate-300 rounded-[8px] bg-white text-ink-900 transition-[0.15s] w-full focus:outline-none focus:border-indigo focus:shadow-[0_0_0_3px_var(--color-indigo-200)] appearance-none cursor-pointer pr-[40px] [background-image:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%2294A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] [background-repeat:no-repeat] [background-position:right_12px_center]"
                    >
                      <option>New website</option>
                      <option>Web app</option>
                      <option>Redesign</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Budget range — full width */}
                <div className="grid gap-[8px] mb-[20px]">
                  <label htmlFor="budget" className="text-[14px] font-medium text-slate-600">
                    Budget range{' '}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="font-[inherit] text-[16px] px-[14px] py-[12px] border border-slate-300 rounded-[8px] bg-white text-ink-900 transition-[0.15s] w-full focus:outline-none focus:border-indigo focus:shadow-[0_0_0_3px_var(--color-indigo-200)] appearance-none cursor-pointer pr-[40px] [background-image:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%2294A3B8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] [background-repeat:no-repeat] [background-position:right_12px_center]"
                  >
                    <option>Not sure yet</option>
                    <option>Launch — from ₱15,000</option>
                    <option>Growth — from ₱35,000</option>
                    <option>E-commerce — from ₱60,000</option>
                    <option>Custom — ₱120,000+</option>
                  </select>
                </div>

                {/* Project details — required textarea */}
                <div className={`grid gap-[8px] mb-[20px]${errors.message ? ' [&_.field-err]:flex [&_.field-input]:border-error' : ''}`}>
                  <label htmlFor="message" className="text-[14px] font-medium text-slate-600">
                    Project details <span className="text-indigo">*</span>
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    placeholder="Tell us about your goals, timeline, and what you have in mind…"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => handleInput('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    className={`field-input font-[inherit] text-[16px] px-[14px] py-[12px] border rounded-[8px] bg-white text-ink-900 transition-[0.15s] w-full placeholder:text-slate-400 focus:outline-none focus:border-indigo focus:shadow-[0_0_0_3px_var(--color-indigo-200)] resize-y min-h-[120px]${errors.message ? ' border-error' : ' border-slate-300'}`}
                  />
                  <span className={`field-err text-[13px] text-error ${errors.message ? 'flex' : 'hidden'} items-center gap-[5px]`}>
                    <AlertCircle className="w-[14px] h-[14px]" strokeWidth={1.75} /> Tell us a little about the project
                  </span>
                </div>

                {/*
                  .form-foot:
                    display:flex; align-items:center; justify-content:space-between;
                    gap:16px; margin-top:4px
                  .form-foot .fine:
                    font-size:13px; color:var(--slate-400); max-width:30ch
                */}
                <div className="flex items-center justify-between gap-[16px] mt-[4px]">
                  <p className="text-[13px] text-slate-400 max-w-[30ch]">
                    By submitting, you agree to be contacted about your project.
                  </p>
                  <Button type="submit" variant="primary" size="lg">
                    Send inquiry <ArrowRight className="arr" strokeWidth={1.75} />
                  </Button>
                </div>
              </form>
            ) : (
              /*
                .form-success: text-align:center; padding:40px 20px
                .form-success.show: display:block
                .badge-ok: width:64px; height:64px; border-radius:50%;
                  background:#ECFDF5; display:grid; place-items:center;
                  margin:0 auto 20px
                .badge-ok svg: width:30px; height:30px; color:var(--success)
                .form-success h3: font-size:24px; margin-bottom:10px
                .form-success p: color:var(--slate-600)
              */
              <div className="text-center py-[40px] px-[20px]">
                <div className="w-[64px] h-[64px] rounded-full bg-[#ECFDF5] grid place-items-center mx-auto mb-[20px]">
                  <Check className="w-[30px] h-[30px] text-success" strokeWidth={1.75} />
                </div>
                <h3 className="text-[24px] mb-[10px]">Thanks — we've got it.</h3>
                <p className="text-slate-600">
                  We'll be in touch within one business day. In the meantime, feel free to email us
                  at hello@rozalix.com.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </Wrap>
    </Section>
  )
}
