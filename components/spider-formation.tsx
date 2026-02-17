"use client"

/**
 * SpiderFormation -- a stylized, geometric spider silhouette rendered in SVG.
 * Designed to be placed as a decorative accent at specific positions on the page.
 * Uses neon-red strokes with a glow filter to match the black widow / crimson theme.
 */
interface SpiderFormationProps {
  size?: number
  className?: string
  /** Flip horizontally */
  mirror?: boolean
}

export function SpiderFormation({
  size = 120,
  className = "",
  mirror = false,
}: SpiderFormationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
      style={mirror ? { transform: "scaleX(-1)" } : undefined}
    >
      <defs>
        <filter id="spider-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
        <radialGradient id="sp-body" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--node-color)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--node-color)" stopOpacity="0.5" />
        </radialGradient>
      </defs>

      <g filter="url(#spider-glow)">
        {/* Abdomen (larger oval) */}
        <ellipse
          cx="60"
          cy="64"
          rx="10"
          ry="13"
          fill="url(#sp-body)"
        />

        {/* Cephalothorax (smaller circle) */}
        <circle cx="60" cy="46" r="7" fill="url(#sp-body)" />

        {/* Hourglass marking on abdomen -- the black widow signature */}
        <path
          d="M 58 58 L 60 62 L 62 58 L 60 54 Z"
          fill="var(--background)"
          opacity="0.5"
        />

        {/* Legs -- 8 curved lines, 4 per side */}
        {/* Right legs */}
        <path d="M 65 44 Q 82 30, 98 22" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 66 48 Q 84 42, 100 40" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 66 52 Q 84 58, 100 60" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 65 56 Q 82 68, 96 80" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />

        {/* Left legs */}
        <path d="M 55 44 Q 38 30, 22 22" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 54 48 Q 36 42, 20 40" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 54 52 Q 36 58, 20 60" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 55 56 Q 38 68, 24 80" stroke="var(--node-color)" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leg "joints" -- tiny dots at mid-bend for anatomical detail */}
        {[
          [82, 30], [84, 42], [84, 58], [82, 68],
          [38, 30], [36, 42], [36, 58], [38, 68],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1" fill="var(--node-color)" opacity="0.6" />
        ))}

        {/* Fang dots on head */}
        <circle cx="57" cy="41" r="1" fill="var(--node-color)" opacity="0.8" />
        <circle cx="63" cy="41" r="1" fill="var(--node-color)" opacity="0.8" />
      </g>
    </svg>
  )
}
