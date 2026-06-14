'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { RMark } from '@/components/ui/RMark'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/lib/nav'

type MobileDrawerProps = {
  open: boolean
  onClose: () => void
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  // Esc key closes + body scroll lock
  useEffect(() => {
    if (!open) return

    // Lock body scroll
    document.body.style.overflow = 'hidden'

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    /* Overlay — clicking the backdrop (the overlay itself) closes the drawer */
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      onClick={(e) => {
        // Close only when clicking the backdrop, not the panel
        if (e.target === e.currentTarget) onClose()
      }}
      className={[
        'fixed inset-0 z-[70] bg-[rgba(15,23,42,0.4)]',
        'transition-opacity duration-200 ease-in-out',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      ].join(' ')}
    >
      {/* Sliding panel */}
      <div
        className={[
          'absolute top-0 right-0 bottom-0 w-[min(82vw,340px)]',
          'bg-white flex flex-col gap-[6px] p-6',
          'shadow-[var(--shadow-lift)]',
          'transition-transform duration-[250ms] ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <a
            href="#top"
            onClick={onClose}
            className="flex items-center gap-[9px]"
          >
            <RMark className="w-[26px] h-[26px] text-indigo" />
            <span
              className="font-display font-semibold text-[20px] tracking-[-0.02em] text-ink-900"
            >
              Rozalix
            </span>
          </a>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-[42px] h-[42px] border border-slate-200 bg-white rounded-sm grid place-items-center cursor-pointer text-ink-900"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Nav links */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-[17px] font-medium text-ink-900 px-3 py-[14px] rounded-sm hover:bg-slate-100 transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}

        {/* CTA */}
        <div className="mt-4">
          <Button variant="primary" href="#contact" block onClick={onClose}>
            Book a free consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
