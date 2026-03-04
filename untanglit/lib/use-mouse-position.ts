"use client"

import { useEffect, useRef, useState } from "react"

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return position
}

export function useRelativeMousePosition(ref: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!ref.current) return
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const rect = ref.current!.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        setPosition({
          x: (e.clientX - cx) / (rect.width / 2),
          y: (e.clientY - cy) / (rect.height / 2),
        })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [ref])

  return position
}
