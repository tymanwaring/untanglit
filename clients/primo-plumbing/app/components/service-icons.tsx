const iconClass = 'w-10 h-10 text-[var(--color-primary)]'

export function IconDrain() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
    </svg>
  )
}

export function IconWaterHeater() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="6" y="3" width="12" height="15" rx="2" />
      <line x1="10" y1="18" x2="10" y2="21" />
      <line x1="14" y1="18" x2="14" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
      <path d="M10 9c0-1 1-1.5 1-2.5S10 5 10 5s1 .5 1 1.5S10 8 10 9z" />
      <path d="M13 9c0-1 1-1.5 1-2.5S13 5 13 5s1 .5 1 1.5S13 8 13 9z" />
    </svg>
  )
}

export function IconPipe() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export function IconFaucet() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 8h14" />
      <path d="M5 8a2 2 0 1 0-4 0c0 3 2 4 2 8h4c0-4 2-5 2-8" />
      <path d="M12 8c0-2.5 2-2 2-4" />
      <path d="M14 8h5a2 2 0 0 1 2 2v2H14V8z" />
      <path d="M21 12v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  )
}
