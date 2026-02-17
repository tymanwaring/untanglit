"use client"

import { motion, useSpring, useMotionValue } from "motion/react"
import { useRef, type ReactNode } from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"

interface MagneticWrapperProps {
  children: ReactNode
  className?: string
  strength?: number
  range?: number
}

export function MagneticWrapper({
  children,
  className = "",
  strength = 6,
  range = 80,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const xRaw = useMotionValue(0)
  const yRaw = useMotionValue(0)
  const x = useSpring(xRaw, { stiffness: 300, damping: 20 })
  const y = useSpring(yRaw, { stiffness: 300, damping: 20 })

  function handleMouseMove(e: React.MouseEvent) {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < range) {
      const pull = (1 - dist / range) * strength
      xRaw.set(dx * pull * 0.1)
      yRaw.set(dy * pull * 0.1)
    }
  }

  function handleMouseLeave() {
    xRaw.set(0)
    yRaw.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
