"use client"

import { SpiderFormation } from "@/components/spider-formation"

/**
 * WebBackground -- strategic spider-formation accents at specific positions
 * with minimal web-fragment arcs connecting them. No full-screen clutter;
 * the formations sit at corners/edges and glow in neon red.
 */
export function WebBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      role="presentation"
      aria-hidden="true"
    >
      {/* Subtle ambient glow -- warm crimson centre */}
      <div
        className="absolute left-1/2 top-[12%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.24 25 / 0.04) 0%, transparent 60%)",
        }}
      />

      {/* --- Spider formation 1: top-right corner, facing inward --- */}
      <div
        className="absolute right-6 top-[18%] opacity-[0.12] md:right-12"
        style={{ animation: "web-breathe 10s ease-in-out infinite" }}
      >
        <SpiderFormation size={100} mirror />
      </div>

      {/* Connecting web-fragment arc from spider 1 toward centre */}
      <svg
        className="absolute right-0 top-[16%] h-[200px] w-[300px] opacity-[0.06]"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          d="M 280 30 Q 200 10, 140 50 Q 80 90, 60 160"
          stroke="var(--node-color)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M 260 50 Q 180 40, 120 80 Q 70 120, 50 180"
          stroke="var(--node-color)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="6 8"
        />
      </svg>

      {/* --- Spider formation 2: left side, mid-page --- */}
      <div
        className="absolute left-4 top-[52%] opacity-[0.10] md:left-10"
        style={{ animation: "web-breathe 12s ease-in-out infinite 2s" }}
      >
        <SpiderFormation size={80} />
      </div>

      {/* Web-fragment arc from spider 2 */}
      <svg
        className="absolute left-0 top-[50%] h-[180px] w-[260px] opacity-[0.05]"
        viewBox="0 0 260 180"
        fill="none"
      >
        <path
          d="M 20 30 Q 60 10, 120 40 Q 180 70, 220 150"
          stroke="var(--node-color)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M 30 60 Q 80 45, 140 70 Q 200 100, 240 170"
          stroke="var(--node-color)"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>

      {/* --- Spider formation 3: bottom-right, near contact/footer --- */}
      <div
        className="absolute bottom-[12%] right-8 opacity-[0.09] md:right-16"
        style={{ animation: "web-breathe 11s ease-in-out infinite 4s" }}
      >
        <SpiderFormation size={90} mirror />
      </div>

      {/* Web-fragment arc from spider 3 */}
      <svg
        className="absolute bottom-[10%] right-0 h-[160px] w-[240px] opacity-[0.04]"
        viewBox="0 0 240 160"
        fill="none"
      >
        <path
          d="M 220 20 Q 160 15, 100 50 Q 50 85, 30 140"
          stroke="var(--node-color)"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </svg>

      {/* Tiny corner web in top-left for balance */}
      <svg
        className="absolute left-0 top-0 h-[120px] w-[120px] opacity-[0.05]"
        viewBox="0 0 120 120"
        fill="none"
      >
        {/* Quarter-web: a few arcs and spokes radiating from corner */}
        <path d="M 0 0 Q 40 5, 60 40" stroke="var(--node-color)" strokeWidth="0.6" />
        <path d="M 0 0 Q 10 30, 30 60" stroke="var(--node-color)" strokeWidth="0.6" />
        <path d="M 0 0 L 80 20" stroke="var(--node-color)" strokeWidth="0.4" />
        <path d="M 0 0 L 20 80" stroke="var(--node-color)" strokeWidth="0.4" />
        {/* Arc between the two spokes */}
        <path d="M 60 15 Q 50 30, 18 55" stroke="var(--node-color)" strokeWidth="0.4" />
      </svg>
    </div>
  )
}
