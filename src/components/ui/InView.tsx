'use client'
import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

/**
 * Sets data-shown="true" on its element the first time it scrolls into view.
 * Children can react with `group-data-[shown=true]:…` Tailwind variants.
 */
export function InView({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: ElementType
}) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setShown(true)
            io.unobserve(en.target)
          }
        }),
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-shown={shown ? 'true' : 'false'}
      className={className}
    >
      {children}
    </Tag>
  )
}
