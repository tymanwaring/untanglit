"use client"

import { useInView, motion } from "motion/react"
import { useRef } from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"

interface SilkConnectorProps {
  direction?: "left" | "right"
  delay?: number
  className?: string
}

export function SilkConnector({
  direction = "left",
  delay = 0,
  className = "",
}: SilkConnectorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const reducedMotion = useReducedMotion()

  const path =
    direction === "left"
      ? "M 80 20 C 60 20, 30 15, 0 20"
      : "M 0 20 C 20 20, 50 15, 80 20"

  return (
    <div ref={ref} className={`h-10 w-20 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 80 40" fill="none" className="h-full w-full">
        <defs>
          <filter id={`conn-glow-${direction}-${delay}`}>
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d={path}
          stroke="var(--thread-color)"
          strokeWidth={0.8}
          strokeLinecap="round"
          fill="none"
          filter={`url(#conn-glow-${direction}-${delay})`}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: reducedMotion ? 1 : 1, opacity: 0.5 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  pathLength: { duration: 0.8, delay: delay, ease: "easeOut" },
                  opacity: { duration: 0.3, delay: delay },
                }
          }
        />
      </svg>
    </div>
  )
}
