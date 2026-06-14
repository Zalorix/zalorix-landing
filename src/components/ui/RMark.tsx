type RMarkProps = { className?: string; mono?: boolean }

export function RMark({ className, mono = false }: RMarkProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      {/* stem */}
      <rect x="24" y="20" width="13" height="60" rx="2" fill="currentColor" />
      {/* bowl: top bar, right side, and waist bar enclose the counter */}
      <rect x="37" y="20" width="28" height="13" rx="2" fill="currentColor" />
      <rect x="52" y="20" width="13" height="35" fill="currentColor" />
      <rect x="37" y="42" width="28" height="13" rx="2" fill="currentColor" />
      {/* leg (diagonal accent) */}
      <polygon points="50,55 65,55 80,80 65,80" fill={mono ? 'currentColor' : 'var(--color-indigo-400)'} />
    </svg>
  )
}
