const items = [
  "Code Detangling",
  "Architecture Unraveling",
  "Performance Untying",
  "UX Unknotting",
  "Security Untwisting",
  "SEO Unsnarling",
  "API Straightening",
  "Migration Smoothing",
]

export function MarqueeBand() {
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground">
              {item}
            </span>
            <svg
              className="h-3 w-3 text-primary-foreground/40"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="6" cy="6" r="3" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
