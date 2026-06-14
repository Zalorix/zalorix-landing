import type { ReactNode } from 'react'
import { Wrap } from '@/components/ui/Section'

/** Shared chrome + readable prose styling for legal pages (Privacy, Terms). */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="pt-[calc(var(--nav-h)+72px)] pb-[120px]">
      <Wrap>
        <div className="mx-auto max-w-[760px]">
          <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
            Legal
          </span>
          <h1 className="mt-[14px] mb-[10px] text-[40px] max-[560px]:text-[32px] tracking-[-0.02em]">
            {title}
          </h1>
          <p className="text-[14px] text-slate-400">Last updated: {updated}</p>

          <div
            className="
              mt-[40px]
              [&_h2]:font-display [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-[-0.01em]
              [&_h2]:text-ink-900 [&_h2]:mt-[40px] [&_h2]:mb-[12px]
              [&_p]:text-[16px] [&_p]:leading-[1.7] [&_p]:text-slate-600 [&_p]:mb-[16px]
              [&_ul]:my-[16px] [&_ul]:pl-[22px] [&_ul]:list-disc
              [&_li]:text-[16px] [&_li]:leading-[1.7] [&_li]:text-slate-600 [&_li]:mb-[8px]
              [&_li]:marker:text-slate-400
              [&_a]:text-indigo [&_a]:underline [&_a]:underline-offset-2
              [&_strong]:text-ink-900 [&_strong]:font-semibold
            "
          >
            {children}
          </div>
        </div>
      </Wrap>
    </main>
  )
}
