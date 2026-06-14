import { Mail } from 'lucide-react'
import { RMark } from '@/components/ui/RMark'
import { Wrap } from '@/components/ui/Section'

// Brand icons not in this version of lucide-react — using canonical SVG paths
function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const socialLinkClass =
  'w-10 h-10 grid place-items-center rounded-[var(--radius-sm)] border border-[var(--color-slate-800)] text-slate-400 transition-[color,border-color,background] duration-150 hover:text-white hover:border-[var(--color-slate-600)] hover:bg-[var(--color-slate-800)]'

const colLinkClass =
  'block text-[15px] py-1.5 text-[var(--color-slate-300)] transition-colors duration-150 hover:text-white'

const colHeadClass =
  'text-[13px] font-semibold uppercase tracking-[0.08em] mb-4.5 text-slate-400'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="pt-18 pb-10"
      style={{ background: 'var(--color-ink-900)', color: '#fff' }}
    >
      <Wrap>
        {/* 4-column grid → 2-col at ≤860px → 1-col at ≤480px */}
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 max-[860px]:grid-cols-[1fr_1fr] max-[480px]:grid-cols-[1fr]">

          {/* ── Brand column ── */}
          <div className="max-[860px]:col-span-full">
            {/* Mark + wordmark */}
            <div className="flex items-center gap-2.75 mb-4.5">
              <RMark mono className="w-8 h-8 text-white" />
              <span
                className="font-semibold text-[24px] tracking-[-0.02em]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Rozalix
              </span>
            </div>

            {/* Blurb */}
            <p className="text-[15px] max-w-[34ch] text-slate-400">
              We design and build fast, modern websites and web apps for
              businesses that want to stand out and scale.
            </p>

            {/* Social icon chips */}
            <div className="flex gap-2.5 mt-6">
              <a href="#" aria-label="LinkedIn" className={socialLinkClass}>
                <LinkedinIcon size={18} />
              </a>
              <a href="#" aria-label="X / Twitter" className={socialLinkClass}>
                <TwitterIcon size={18} />
              </a>
              <a href="#" aria-label="GitHub" className={socialLinkClass}>
                <GithubIcon size={18} />
              </a>
              <a href="mailto:hello@rozalix.com" aria-label="Email" className={socialLinkClass}>
                <Mail size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* ── Studio column ── */}
          <div className="flex flex-col">
            <h4 className={colHeadClass} style={{ fontFamily: 'var(--font-sans)' }}>
              Studio
            </h4>
            <a href="#services" className={colLinkClass}>Services</a>
            <a href="#process"  className={colLinkClass}>Process</a>
            <a href="#why"      className={colLinkClass}>Why Rozalix</a>
          </div>

          {/* ── Services column ── */}
          <div className="flex flex-col">
            <h4 className={colHeadClass} style={{ fontFamily: 'var(--font-sans)' }}>
              Services
            </h4>
            <a href="#services" className={colLinkClass}>Strategy &amp; UX</a>
            <a href="#services" className={colLinkClass}>Design</a>
            <a href="#services" className={colLinkClass}>Development</a>
            <a href="#services" className={colLinkClass}>Performance &amp; SEO</a>
          </div>

          {/* ── Get in touch column ── */}
          <div className="flex flex-col">
            <h4 className={colHeadClass} style={{ fontFamily: 'var(--font-sans)' }}>
              Get in touch
            </h4>
            <a href="#contact"                className={colLinkClass}>Start a project</a>
            <a href="mailto:hello@rozalix.com" className={colLinkClass}>hello@rozalix.com</a>
            <a href="#contact"                className={colLinkClass}>Book a call</a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex items-center justify-between gap-4 mt-14 pt-7 border-t border-slate-800 flex-wrap">
          <p className="text-[14px] text-slate-400">
            &copy; {year} Rozalix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[14px] text-slate-400 transition-colors duration-150 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-[14px] text-slate-400 transition-colors duration-150 hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </Wrap>
    </footer>
  )
}
