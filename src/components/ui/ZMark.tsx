type ZMarkProps = { className?: string; mono?: boolean }

export function ZMark({ className, mono = false }: ZMarkProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <rect x="22" y="20" width="56" height="13" rx="2" fill="currentColor" />
      <polygon points="59,33 78,33 41,67 22,67" fill={mono ? 'currentColor' : 'var(--color-indigo-400)'} />
      <rect x="22" y="67" width="56" height="13" rx="2" fill="currentColor" />
    </svg>
  )
}
