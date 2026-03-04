"use client"

import { useEffect, useState } from "react"

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)

    function handleChange(e: MediaQueryListEvent) {
      setPrefersReducedMotion(e.matches)
    }

    mq.addEventListener("change", handleChange)
    return () => mq.removeEventListener("change", handleChange)
  }, [])

  return prefersReducedMotion
}
