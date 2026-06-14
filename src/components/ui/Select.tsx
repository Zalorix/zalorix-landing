'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
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

type Option = { value: string; label?: string }

type Props = {
  id?: string
  name?: string
  ariaLabel: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  className?: string
}

/** Lightweight custom dropdown (HeroUI-like) with Floating UI positioning:
 *  flips up when there's no room below, shifts to stay in the viewport, matches
 *  the trigger width, caps its height, and follows the trigger on scroll/resize. */
export function Select({ id, name, ariaLabel, value, onChange, options, className }: Props) {
  const [open, setOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(6),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      size({
        padding: 8,
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${Math.max(140, Math.min(280, availableHeight))}px`,
          })
        },
      }),
    ],
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  const selected = options.find((o) => o.value === value)

  return (
    <div className={className}>
      {name && <input type="hidden" name={name} value={value} />}
      <button
        type="button"
        id={id}
        ref={refs.setReference}
        aria-label={ariaLabel}
        {...getReferenceProps()}
        className={`flex w-full cursor-pointer items-center justify-between gap-[10px] rounded-[8px] border bg-white px-[14px] py-[12px] text-left font-[inherit] text-[16px] text-ink-900 transition-[0.15s] focus:outline-none ${
          open
            ? 'border-indigo shadow-[0_0_0_3px_var(--color-indigo-200)]'
            : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        <span className="truncate">{selected?.label ?? selected?.value ?? value}</span>
        <ChevronDown
          className={`h-[18px] w-[18px] shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <FloatingPortal>
          <ul
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-[80] overflow-auto rounded-[10px] border border-slate-200 bg-white px-[5px] py-[5px] shadow-[var(--shadow-lift)]"
          >
            {options.map((o) => {
              const active = o.value === value
              return (
                <li key={o.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onChange(o.value)
                      setOpen(false)
                    }}
                    className={`flex w-full cursor-pointer items-center justify-between gap-[10px] rounded-[8px] px-[12px] py-[9px] text-left text-[15px] hover:bg-slate-50 ${
                      active ? 'bg-indigo-50 font-medium text-indigo' : 'text-ink-900'
                    }`}
                  >
                    <span className="truncate">{o.label ?? o.value}</span>
                    {active && (
                      <Check className="h-[16px] w-[16px] shrink-0 text-indigo" strokeWidth={2.5} />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </FloatingPortal>
      )}
    </div>
  )
}
