"use client"

import { SilkCard } from "@/components/silk-card"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <SilkCard className="flex h-full flex-col justify-between gap-6">
      {/* Silk quote mark */}
      <div className="flex flex-col gap-4">
        <span
          className="text-4xl font-serif leading-none"
          style={{ color: "var(--node-color)", opacity: 0.4 }}
          aria-hidden="true"
        >
          {'\u201C'}
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {quote}
        </p>
      </div>

      <div className="flex flex-col gap-0.5 border-t border-border/50 pt-4">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">
          {role}, {company}
        </span>
      </div>
    </SilkCard>
  )
}
