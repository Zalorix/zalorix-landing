'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { ZMark } from '@/components/ui/ZMark'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/lib/nav'
import { MobileDrawer } from '@/components/layout/MobileDrawer'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    // Run once on mount to set initial state
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={[
          'fixed inset-x-0 top-0 z-[60] h-[var(--nav-h)]',
          'border-b transition-[background,border-color,box-shadow] duration-[250ms] ease-in-out',
          scrolled
            ? 'bg-[rgba(255,255,255,0.82)] backdrop-blur-[12px] [backdrop-filter:saturate(180%)_blur(12px)] [-webkit-backdrop-filter:saturate(180%)_blur(12px)] border-slate-200'
            : 'bg-transparent border-transparent',
        ].join(' ')}
      >
        {/* Inner: max-width container, flex row */}
        <div className="h-full flex items-center gap-6 mx-auto px-[var(--gutter)] max-w-[var(--maxw)]">

          {/* Brand */}
          <a
            href="#top"
            aria-label="Zalorix home"
            className="flex items-center gap-[9px] mr-auto"
          >
            <ZMark className="w-7 h-7 text-indigo" />
            <span className="font-display font-semibold text-[20px] tracking-[-0.02em] text-ink-900">
              Zalorix
            </span>
          </a>

          {/* Desktop nav links — hidden at ≤920px, shown above */}
          <div className="max-[920px]:hidden flex gap-[2px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 px-[14px] py-2 rounded-sm transition-[color,background] duration-150 hover:text-ink-900 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA area */}
          <div className="flex items-center gap-[10px]">
            {/* "Start a project" button — hidden at ≤920px */}
            <div className="max-[920px]:hidden">
              <Button variant="primary" href="#contact">
                Start a project
              </Button>
            </div>

            {/* Burger — hidden above 920px, shown on mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="min-[921px]:hidden w-[42px] h-[42px] border border-slate-300 bg-white rounded-sm grid place-items-center cursor-pointer text-ink-900"
            >
              <Menu className="w-5 h-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
