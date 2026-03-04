"use client"

import { useInView, useSpring, useTransform, motion } from "motion/react"
import { useRef } from "react"

interface SilkNodeProps {
  className?: string
  size?: number
}

export function SilkNode({ className = "", size = 10 }: SilkNodeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-20%" })
  const scale = useSpring(isInView ? 1.3 : 1, {
    stiffness: 200,
    damping: 15,
  })
  const opacity = useTransform(scale, [1, 1.3], [0.5, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, width: size, height: size }}
      className={`rounded-full ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: "var(--node-color)",
          boxShadow: "var(--node-glow)",
          animation: "silk-pulse 3s ease-in-out infinite",
        }}
      />
    </motion.div>
  )
}
