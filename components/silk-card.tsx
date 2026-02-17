"use client"

import { motion } from "motion/react"
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SilkCardProps {
  children: ReactNode
  className?: string
  hoverLift?: boolean
}

export function SilkCard({
  children,
  className = "",
  hoverLift = false,
}: SilkCardProps) {
  return (
    <motion.div
      whileHover={{
        y: hoverLift ? -6 : 0,
        boxShadow: "0 0 20px oklch(0.88 0.05 260 / 0.15), 0 0 40px oklch(0.65 0.15 290 / 0.08)",
      }}
      whileTap={{
        scaleX: 1.02,
        scaleY: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className={cn(
        "relative rounded-lg border border-border bg-card p-6 text-card-foreground",
        "transition-colors duration-300",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:border before:border-transparent",
        "hover:border-primary/20",
        className
      )}
    >
      {/* Corner silk accents */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t opacity-0 transition-opacity duration-300"
        style={{
          borderColor: "var(--thread-color)",
          opacity: "var(--silk-corner-opacity, 0)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r opacity-0 transition-opacity duration-300"
        style={{
          borderColor: "var(--thread-color)",
          opacity: "var(--silk-corner-opacity, 0)",
        }}
        aria-hidden="true"
      />

      <motion.div
        onHoverStart={() => {
          const el = document.querySelector(`[data-silk-id]`)
          if (el) el.setAttribute("style", "--silk-corner-opacity: 0.4")
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
