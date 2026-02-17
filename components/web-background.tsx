"use client"

import { SpiderWeb } from "@/components/spider-web"

/**
 * WebBackground -- Two realistic orb-weaver spider webs anchored at
 * opposite corners, with subtle ambient glow. Minimalist and elegant.
 */
export function WebBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      role="presentation"
      aria-hidden="true"
    >
      {/* Subtle ambient red glow */}
      <div
        className="absolute left-1/2 top-[12%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.24 25 / 0.03) 0%, transparent 60%)",
        }}
      />

      {/* Web 1: top-left corner -- realistic orb weaver web */}
      <div
        className="absolute -left-1 -top-1 opacity-[0.30]"
        style={{ animation: "web-breathe 12s ease-in-out infinite" }}
      >
        <SpiderWeb size={320} anchor="tl" />
      </div>

      {/* Web 2: bottom-right corner -- mirrored variant */}
      <div
        className="absolute -bottom-1 -right-1 opacity-[0.24]"
        style={{ animation: "web-breathe 14s ease-in-out infinite 3s" }}
      >
        <SpiderWeb size={360} anchor="br" />
      </div>
    </div>
  )
}
