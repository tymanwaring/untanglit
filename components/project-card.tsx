"use client"

import { Badge } from "@/components/ui/badge"
import { SilkCard } from "@/components/silk-card"

interface ProjectCardProps {
  title: string
  description: string
  tags: readonly string[]
  clientType: string
  accentColor: string
}

export function ProjectCard({
  title,
  description,
  tags,
  clientType,
  accentColor,
}: ProjectCardProps) {
  return (
    <SilkCard hoverLift className="relative overflow-hidden">
      {/* Color accent strip */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 pl-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <Badge variant="outline" className="text-xs shrink-0">
            {clientType}
          </Badge>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/50 bg-muted/30 px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SilkCard>
  )
}
