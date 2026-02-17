"use client"

/**
 * SpiderWeb -- Realistic orb-weaver-style corner spider web.
 *
 * Real spider webs are NOT perfect geometric shapes. They have:
 * - Irregularly-spaced radial spokes
 * - A continuous spiral capture thread (not concentric rings)
 * - Natural sag from gravity between attachment points
 * - Missing/broken strands for organic imperfection
 * - Asymmetric anchor threads extending to irregular attachment points
 *
 * Each corner variant is hand-crafted with SVG path data to look like
 * a real web observed in nature, not a vector icon.
 */

interface SpiderWebProps {
  size?: number
  className?: string
  anchor?: "tl" | "br"
}

// Hand-crafted web paths for top-left corner (origin at 0,0)
// Modelled after an orb-weaver web built in a corner with gravity sag
const TL_WEB = {
  // Main structural frame threads -- thick anchor lines to walls/surfaces
  frame: [
    "M 0 4 Q 42 6, 88 18 Q 130 32, 178 58",      // top wall to far right
    "M 3 0 Q 8 38, 16 82 Q 28 128, 52 172",       // left wall down
    "M 178 58 Q 120 108, 52 172",                  // long bridge thread
  ],
  // Radial spokes -- irregular spacing, extending from hub near corner
  // Hub is around (18, 16) -- slightly off centre like real webs
  spokes: [
    "M 18 16 L 0 4",                                // to top-left wall
    "M 18 16 L 3 0",                                // to top wall
    "M 18 16 Q 38 10, 62 8 L 88 18",                // upper-right spoke with curve
    "M 18 16 Q 52 18, 96 28 L 136 42",              // mid-right spoke
    "M 18 16 Q 60 32, 118 52 L 178 58",             // far-right spoke
    "M 18 16 Q 42 40, 86 76 L 116 114",             // lower-right spoke
    "M 18 16 Q 28 50, 46 98 L 52 172",              // lower spoke
    "M 18 16 Q 14 44, 12 72 L 16 82",               // down-left spoke
    "M 18 16 Q 24 28, 34 60 Q 54 88, 82 130",       // mid-lower spoke
    "M 18 16 Q 48 24, 108 38 L 158 50",             // extra upper spoke
  ],
  // Spiral capture thread -- one continuous winding outward path with natural sag
  // This is the key to looking realistic: uneven spacing, gentle drooping curves
  spiral: [
    // Inner spiral loops (tight, near hub)
    "M 10 10 Q 14 6, 24 8 Q 30 12, 28 20 Q 22 24, 14 18 Q 8 14, 10 10",
    // Second ring -- slightly larger, irregular
    "M 6 16 Q 10 4, 32 4 Q 48 8, 44 18 Q 50 28, 38 36 Q 28 42, 18 34 Q 6 26, 6 16",
    // Third ring -- sag becomes visible
    "M 3 28 Q 6 8, 40 2 Q 66 4, 72 16 Q 80 32, 68 50 Q 56 66, 38 62 Q 14 54, 8 38",
    // Fourth ring -- wider with asymmetric sag
    "M 2 46 Q 4 14, 52 3 Q 90 6, 104 26 Q 112 46, 96 74 Q 78 96, 48 94 Q 18 80, 10 56",
    // Fifth ring -- even more sag, some segments thinner
    "M 4 68 Q 4 24, 66 6 Q 116 8, 132 34 Q 140 62, 120 98 Q 98 126, 58 122 Q 22 108, 12 76",
    // Sixth ring (outermost) -- most sag, fading
    "M 6 88 Q 6 36, 80 12 Q 140 12, 162 46 Q 172 76, 146 118 Q 116 150, 68 148 Q 28 132, 14 96",
  ],
  // Loose hanging threads / broken strands -- add organic imperfection
  loose: [
    "M 52 172 Q 48 180, 44 192",                    // dangling from lower anchor
    "M 178 58 Q 184 62, 192 66",                     // wisp past right anchor
    "M 82 130 Q 88 140, 86 152",                     // loose strand drooping
    "M 136 42 Q 142 40, 148 44",                     // tiny broken end
  ],
}

// Bottom-right corner: mirror of TL_WEB by transforming coordinates
// (x,y) -> (200-x, 200-y) for 200x200 viewBox
function mirrorPath(d: string): string {
  return d.replace(
    /(-?\d+\.?\d*)\s+(-?\d+\.?\d*)/g,
    (_, xStr, yStr) => {
      const x = 200 - parseFloat(xStr)
      const y = 200 - parseFloat(yStr)
      return `${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`
    }
  )
}

const BR_WEB = {
  frame: TL_WEB.frame.map(mirrorPath),
  spokes: TL_WEB.spokes.map(mirrorPath),
  spiral: TL_WEB.spiral.map(mirrorPath),
  loose: TL_WEB.loose.map(mirrorPath),
}

export function SpiderWeb({
  size = 200,
  className = "",
  anchor = "tl",
}: SpiderWebProps) {
  const web = anchor === "tl" ? TL_WEB : BR_WEB
  const filterId = `rweb-glow-${anchor}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>

      <g filter={`url(#${filterId})`}>
        {/* Structural frame -- thickest threads, anchoring to surfaces */}
        {web.frame.map((d, i) => (
          <path
            key={`f-${i}`}
            d={d}
            stroke="var(--node-color)"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.55"
          />
        ))}

        {/* Radial spokes -- medium weight, irregular spacing */}
        {web.spokes.map((d, i) => (
          <path
            key={`s-${i}`}
            d={d}
            stroke="var(--node-color)"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        ))}

        {/* Spiral capture thread -- thin, continuous, with natural sag */}
        {web.spiral.map((d, i) => (
          <path
            key={`sp-${i}`}
            d={d}
            stroke="var(--node-color)"
            strokeWidth={i < 2 ? "0.3" : "0.4"}
            strokeLinecap="round"
            opacity={0.22 + i * 0.05}
          />
        ))}

        {/* Loose / broken strands -- very thin, wispy */}
        {web.loose.map((d, i) => (
          <path
            key={`l-${i}`}
            d={d}
            stroke="var(--node-color)"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeDasharray="2 3"
            opacity="0.2"
          />
        ))}

        {/* Hub thickening near corner -- like a real web's reinforced centre */}
        <circle
          cx={anchor === "tl" ? "18" : "182"}
          cy={anchor === "tl" ? "16" : "184"}
          r="2.5"
          fill="var(--node-color)"
          opacity="0.3"
        />
        <circle
          cx={anchor === "tl" ? "18" : "182"}
          cy={anchor === "tl" ? "16" : "184"}
          r="1"
          fill="var(--node-color)"
          opacity="0.5"
        />
      </g>
    </svg>
  )
}
