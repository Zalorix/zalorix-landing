'use client'

/**
 * Gallery — Client Component
 *
 * Renders an image gallery with a lightbox.
 *
 * Features (ported from gallery.js reference):
 *  - Tabbed navigation (optional label/icon per image)
 *  - Clicking the active image or the Zoom button opens the lightbox
 *  - Lightbox: Esc to close, click backdrop to close, left/right arrow navigation
 *  - Body scroll is locked while the lightbox is open, restored on close
 *  - Keyboard: ArrowLeft / ArrowRight navigate; Escape closes
 *  - Focus is trapped on the close button when lightbox opens
 */

import { useEffect, useRef, useState, useCallback, type ReactNode } from 'react'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

// ── Types ──────────────────────────────────────────────────────────────────

export type GalleryImage = {
  src: string
  alt: string
  /** Optional tab label */
  label?: string
  /** Optional Lucide icon node for the tab */
  icon?: ReactNode
  /** Optional HTML string caption (rendered as text, tags stripped) */
  caption?: string
}

type GalleryProps = {
  images: GalleryImage[]
  /** Section headline (defaults to "Inside the concept.") */
  headline?: string
  /** Sub-copy under headline */
  subtext?: string
  id?: string
}

// ── Helpers ────────────────────────────────────────────────────────────────

function stripTags(html: string) {
  return html.replace(/<[^>]*>/g, '')
}

// ── Gallery ────────────────────────────────────────────────────────────────

export function Gallery({ images, headline = 'Inside the concept.', subtext, id = 'gallery' }: GalleryProps) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const closeRef = useRef<HTMLButtonElement>(null)
  const prevActiveRef = useRef<HTMLElement | null>(null)

  // ── open / close helpers ──────────────────────────────────────────────────

  const openLightbox = useCallback((idx: number) => {
    prevActiveRef.current = document.activeElement as HTMLElement
    setLightboxIdx(idx)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
    // restore focus
    requestAnimationFrame(() => {
      prevActiveRef.current?.focus?.()
    })
  }, [])

  const goNext = useCallback(() => {
    setLightboxIdx((i) => (i + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setLightboxIdx((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  // ── keyboard handler ───────────────────────────────────────────────────────

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [lightboxOpen, closeLightbox, goNext, goPrev])

  // ── focus close button when lightbox opens ────────────────────────────────

  useEffect(() => {
    if (lightboxOpen) {
      requestAnimationFrame(() => closeRef.current?.focus())
    }
  }, [lightboxOpen])

  // ── cleanup on unmount ────────────────────────────────────────────────────

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (images.length === 0) return null

  const activeImage = images[active]
  const lbImage = images[lightboxIdx]

  return (
    <section id={id} className="py-[120px]">
      <Wrap>
        {/* Head */}
        <Reveal className="flex flex-wrap items-end justify-between gap-[24px]">
          <div>
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
              Visual gallery
            </span>
            <h2 className="my-[14px] text-[clamp(24px,3vw,36px)] font-display font-semibold">
              {headline}
            </h2>
            {subtext && <p className="text-[18px] text-slate-600">{subtext}</p>}
          </div>
        </Reveal>

        {/* Tabs */}
        {images.length > 1 && (
          <Reveal className="mt-[34px] flex flex-wrap gap-[8px]">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={[
                  'inline-flex items-center gap-[8px] rounded-[var(--radius-pill)] border px-[16px] py-[9px]',
                  'cursor-pointer font-sans text-[14px] font-medium transition-[0.15s]',
                  '[&_svg]:h-[15px] [&_svg]:w-[15px]',
                  i === active
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink-900',
                ].join(' ')}
                aria-pressed={i === active}
              >
                {img.icon && <span>{img.icon}</span>}
                {img.label ?? `Screen ${i + 1}`}
              </button>
            ))}
          </Reveal>
        )}

        {/* Stage */}
        <Reveal>
          <div
            className="relative mt-[28px] grid min-h-[520px] place-items-center overflow-hidden rounded-[var(--radius-lg)] border border-slate-200 p-[48px] max-[720px]:min-h-[420px] max-[720px]:p-[22px]"
            style={{
              background:
                'linear-gradient(0deg,var(--color-slate-50),var(--color-slate-50)),' +
                'radial-gradient(circle at 1px 1px,var(--color-slate-200) 1px,transparent 0)',
              backgroundSize: 'cover, 22px 22px',
            }}
          >
            {/* Zoom button */}
            <button
              onClick={() => openLightbox(active)}
              className={[
                'absolute right-[16px] top-[16px] z-[3] inline-flex items-center gap-[7px]',
                'rounded-[var(--radius-pill)] border border-slate-200 bg-white/90 px-[13px] py-[7px]',
                'cursor-pointer text-[13px] font-medium text-slate-600 backdrop-blur-[6px]',
                'transition-[0.15s] hover:border-slate-300 hover:text-ink-900',
                '[&_svg]:h-[15px] [&_svg]:w-[15px]',
              ].join(' ')}
              aria-label="View full size"
            >
              <Maximize2 strokeWidth={1.75} />
              Zoom
            </button>

            {/* Active image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active}
              src={activeImage.src}
              alt={activeImage.alt}
              onClick={() => openLightbox(active)}
              className={[
                'max-h-[600px] max-w-full rounded-[var(--radius-md)] object-contain',
                'shadow-[0_22px_60px_rgba(15,23,42,.18)]',
                'cursor-zoom-in transition-transform duration-[200ms] ease hover:-translate-y-[3px]',
                'animate-[galIn_0.4s_ease]',
              ].join(' ')}
            />
          </div>
        </Reveal>

        {/* Caption */}
        {activeImage.caption && (
          <div className="mt-[20px] flex items-center gap-[10px] text-[14.5px] text-slate-600">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-indigo" />
            <span
              dangerouslySetInnerHTML={{ __html: activeImage.caption }}
            />
          </div>
        )}
      </Wrap>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      {lightboxOpen && (
        <div
          className={[
            'fixed inset-0 z-[200] grid place-items-center p-[4vw]',
            'bg-ink-900/80 backdrop-blur-[8px]',
            'animate-[lbIn_0.25s_ease]',
          ].join(' ')}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={(e) => {
            // close when clicking backdrop (not the image or controls)
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          {/* Close */}
          <button
            ref={closeRef}
            onClick={closeLightbox}
            aria-label="Close preview"
            className={[
              'absolute right-[24px] top-[22px] grid h-[46px] w-[46px] place-items-center rounded-full',
              'border border-white/25 bg-white/12 text-white cursor-pointer',
              'transition-[0.15s] hover:bg-white/22',
              '[&_svg]:h-[22px] [&_svg]:w-[22px]',
            ].join(' ')}
          >
            <X strokeWidth={1.75} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous image"
              className={[
                'absolute left-[16px] top-1/2 -translate-y-1/2',
                'grid h-[46px] w-[46px] place-items-center rounded-full',
                'border border-white/25 bg-white/12 text-white cursor-pointer',
                'transition-[0.15s] hover:bg-white/22',
                '[&_svg]:h-[22px] [&_svg]:w-[22px]',
              ].join(' ')}
            >
              <ChevronLeft strokeWidth={1.75} />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next image"
              className={[
                'absolute right-[16px] top-1/2 -translate-y-1/2',
                'grid h-[46px] w-[46px] place-items-center rounded-full',
                'border border-white/25 bg-white/12 text-white cursor-pointer',
                'transition-[0.15s] hover:bg-white/22',
                '[&_svg]:h-[22px] [&_svg]:w-[22px]',
              ].join(' ')}
            >
              <ChevronRight strokeWidth={1.75} />
            </button>
          )}

          {/* Image */}
          <div className="w-full max-w-[1240px] grid place-items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lightboxIdx}
              src={lbImage.src}
              alt={lbImage.alt}
              onClick={(e) => e.stopPropagation()}
              className={[
                'max-h-[85vh] max-w-full rounded-[var(--radius-md)] object-contain',
                'shadow-[0_30px_80px_rgba(0,0,0,.4)]',
                'animate-[lbIn_0.2s_ease]',
              ].join(' ')}
            />
          </div>

          {/* Caption */}
          {lbImage.caption && (
            <div className="absolute bottom-[22px] left-0 right-0 text-center text-[14px] text-white/80">
              {stripTags(lbImage.caption)}
            </div>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-[22px] right-[24px] text-[13px] font-medium text-white/60">
              {lightboxIdx + 1} / {images.length}
            </div>
          )}
        </div>
      )}

      {/* keyframe definitions injected once via a style tag */}
      <style>{`
        @keyframes galIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes lbIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
