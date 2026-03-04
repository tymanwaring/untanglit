"use client"

import { useInView, motion } from "motion/react"
import { useRef, type ReactNode } from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"

interface SpringRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

const directionMap = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
}

export function SpringReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: SpringRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-8%" })
  const reducedMotion = useReducedMotion()
  const offset = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: offset.y, x: offset.x, scale: 0.98 }
      }
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, scale: 1 }
          : reducedMotion
            ? { opacity: 1 }
            : undefined
      }
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 100,
              damping: 22,
              delay,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
