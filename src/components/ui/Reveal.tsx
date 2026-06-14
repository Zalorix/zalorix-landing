'use client'
import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window)
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setShown(true)
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    const backstop = window.setTimeout(() => setShown(true), 1200)
    return () => {
      io.disconnect()
      window.clearTimeout(backstop)
    }
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:translate-y-0 ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
