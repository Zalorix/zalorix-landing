'use client'
import { useEffect, useRef, useState } from 'react'

export function countValue(target: number, p: number): number {
  const eased = 1 - Math.pow(1 - p, 3)
  return Math.round(target * eased)
}

export function useCountUp(target: number, durationMs = 1100) {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const run = () => {
      if (started.current) return
      started.current = true
      if (reduce || !window.requestAnimationFrame) { setValue(target); return }
      let start: number | null = null
      const frame = (ts: number) => {
        if (start === null) start = ts
        const p = Math.min((ts - start) / durationMs, 1)
        setValue(countValue(target, p))
        if (p < 1) requestAnimationFrame(frame)
      }
      requestAnimationFrame(frame)
    }
    if (!('IntersectionObserver' in window)) { run(); return }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { run(); io.unobserve(en.target) }
      }),
      { threshold: 0.5 }
    )
    io.observe(el)
    const backstop = window.setTimeout(() => setValue(target), 1600)
    return () => { io.disconnect(); window.clearTimeout(backstop) }
  }, [target, durationMs])

  return { ref, value }
}
