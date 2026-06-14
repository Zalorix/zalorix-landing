'use client'

import { useEffect, useMemo, useRef, useState, type FC, type RefObject, type SVGProps } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  size,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react'
import { getCountryCallingCode, type CountryCode } from 'libphonenumber-js'
import * as Flags from 'country-flag-icons/react/3x2'
import { COUNTRIES } from '@/lib/countries'

type FlagComp = FC<SVGProps<SVGSVGElement> & { title?: string }>
const FLAGS = Flags as unknown as Record<string, FlagComp | undefined>

function dialOf(code: string): string {
  try {
    return getCountryCallingCode(code as CountryCode)
  } catch {
    return ''
  }
}

type Props = {
  id?: string
  country: CountryCode
  number: string
  onCountryChange: (c: CountryCode) => void
  onNumberChange: (v: string) => void
  onBlur?: () => void
  invalid?: boolean
  inputRef?: RefObject<HTMLInputElement | null>
}

export function PhoneField({
  id,
  country,
  number,
  onCountryChange,
  onNumberChange,
  onBlur,
  invalid,
  inputRef,
}: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  const dial = useMemo(() => dialOf(country), [country])
  const Flag = FLAGS[country]

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: (next) => {
      setOpen(next)
      if (!next) setQuery('')
    },
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(6),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      size({
        padding: 8,
        apply({ elements, availableWidth, availableHeight }) {
          Object.assign(elements.floating.style, {
            width: `${Math.min(320, availableWidth)}px`,
            maxHeight: `${Math.max(180, Math.min(320, availableHeight))}px`,
          })
        },
      }),
    ],
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return COUNTRIES
    const digits = q.replace(/^\+/, '')
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        (digits && c.dial.includes(digits)),
    )
  }, [query])

  // Focus the search box when the menu opens.
  useEffect(() => {
    if (!open) return
    const t = requestAnimationFrame(() => searchRef.current?.focus())
    return () => cancelAnimationFrame(t)
  }, [open])

  function pick(c: CountryCode) {
    onCountryChange(c)
    setOpen(false)
    setQuery('')
    inputRef?.current?.focus()
  }

  return (
    <>
      <div
        className={`flex items-stretch overflow-hidden rounded-[8px] border bg-white transition-[0.15s] focus-within:border-indigo focus-within:shadow-[0_0_0_3px_var(--color-indigo-200)] ${
          invalid ? 'border-error' : 'border-slate-300'
        }`}
      >
        {/* Country trigger */}
        <button
          type="button"
          ref={refs.setReference}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label="Select country calling code"
          {...getReferenceProps()}
          className="flex shrink-0 cursor-pointer items-center gap-[7px] border-r border-slate-200 pl-[12px] pr-[10px] hover:bg-slate-50 focus:outline-none"
        >
          {Flag ? (
            <Flag className="h-[15px] w-[21px] rounded-[2px] object-cover" />
          ) : (
            <span className="text-[13px]">{country}</span>
          )}
          <ChevronDown
            className={`h-[15px] w-[15px] text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
            strokeWidth={1.75}
          />
        </button>

        {/* Dial prefix */}
        <span className="flex select-none items-center pl-[10px] text-[16px] text-slate-500">
          +{dial}
        </span>

        {/* National number */}
        <input
          ref={inputRef}
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="917 123 4567"
          value={number}
          onChange={(e) => onNumberChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={invalid ? 'true' : 'false'}
          aria-label="Phone number"
          className="w-full bg-transparent px-[14px] py-[12px] font-[inherit] text-[16px] text-ink-900 placeholder:text-slate-400 focus:outline-none focus-visible:shadow-none"
        />
      </div>

      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-[80] flex flex-col overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[var(--shadow-lift)]"
          >
            <div className="border-b border-slate-100 p-[8px]">
              <div className="flex items-center gap-[8px] rounded-[7px] border border-slate-200 px-[10px] focus-within:border-indigo">
                <Search className="h-[15px] w-[15px] shrink-0 text-slate-400" strokeWidth={1.75} />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search country or code"
                  className="w-full bg-transparent py-[8px] text-[14px] focus:outline-none focus-visible:shadow-none"
                />
              </div>
            </div>
            <ul role="listbox" className="flex-1 overflow-auto px-[6px] py-[4px]">
              {filtered.length === 0 ? (
                <li className="px-[12px] py-[10px] text-[14px] text-slate-400">No matches</li>
              ) : (
                filtered.map((c) => {
                  const F = FLAGS[c.code]
                  const active = c.code === country
                  return (
                    <li key={c.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={active}
                        onClick={() => pick(c.code)}
                        className={`flex w-full cursor-pointer items-center gap-[10px] rounded-[8px] px-[10px] py-[8px] text-left hover:bg-slate-50 ${
                          active ? 'bg-indigo-50' : ''
                        }`}
                      >
                        {F ? (
                          <F className="h-[14px] w-[20px] shrink-0 rounded-[2px] object-cover" />
                        ) : (
                          <span className="w-[20px] text-[12px]">{c.code}</span>
                        )}
                        <span className="flex-1 truncate text-[14px] text-ink-900">{c.name}</span>
                        <span className="text-[13px] text-slate-400">+{c.dial}</span>
                      </button>
                    </li>
                  )
                })
              )}
            </ul>
          </div>
        </FloatingPortal>
      )}
    </>
  )
}
