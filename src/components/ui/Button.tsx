import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'ghost-light'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-transparent font-medium transition-[0.15s] [&_svg]:w-[17px] [&_svg]:h-[17px] focus-visible:shadow-[0_0_0_3px_var(--color-indigo-200)]'

const sizes: Record<Size, string> = {
  md: 'text-[16px] px-[22px] py-[13px]',
  lg: 'text-[17px] px-[26px] py-[15px]',
}

const variants: Record<Variant, string> = {
  primary: 'bg-indigo text-white hover:bg-indigo-dark active:bg-indigo-deeper',
  secondary: 'bg-white text-ink-900 border-slate-300 hover:bg-slate-50 hover:border-slate-400',
  ghost: 'bg-transparent text-indigo hover:bg-indigo-50',
  light: 'bg-white text-indigo-deeper hover:bg-indigo-50',
  // Reference: bg transparent, white text, border rgba(255,255,255,.35); hover: bg rgba(255,255,255,.1), border rgba(255,255,255,.6)
  'ghost-light': 'bg-transparent text-white border-white/40 hover:bg-white/10 hover:border-white/60',
}

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: Variant
  size?: Size
  block?: boolean
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  block,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${block ? 'w-full' : ''} ${className}`.trim()
  if (href) {
    const internal = href.startsWith('/')
    if (internal) return <Link href={href} onClick={onClick} className={cls}>{children}</Link>
    return <a href={href} onClick={onClick} className={cls}>{children}</a>
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
