"use client"

import { useInView, motion } from "motion/react"
import { useRef } from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={`mb-12 flex flex-col items-center gap-4 text-center ${className}`}>
      {/* Silk thread accent */}
      <svg
        viewBox="0 0 120 4"
        fill="none"
        className="h-1 w-30"
        aria-hidden="true"
      >
        <defs>
          <filter id="heading-glow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M 0 2 L 120 2"
          stroke="var(--node-color)"
          strokeWidth={2}
          strokeLinecap="round"
          filter="url(#heading-glow)"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.8, ease: "easeOut" }
          }
        />
      </svg>

      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
