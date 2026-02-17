"use client"

import { useScroll, useTransform, motion, useReducedMotion } from "motion/react"

/**
 * WebBackground -- A full-page spider web that dynamically weaves itself
 * as the user scrolls. The centre is faded to transparent using a radial
 * mask so the hub area (which maps to the top of the viewport) stays clean
 * and uncluttered, while the branching strands and outer rings provide
 * depth at the periphery.
 */
export function WebBackground() {
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Spokes draw from 0-40% of scroll
  const spokeProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  // Outer ring layers staggered across the scroll range
  const ring3 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const ring4 = useTransform(scrollYProgress, [0.3, 0.65], [0, 1])
  const ring5 = useTransform(scrollYProgress, [0.4, 0.8], [0, 1])
  // Wisps appear last
  const wispProgress = useTransform(scrollYProgress, [0.6, 0.9], [0, 1])

  // Slow rotation synced to scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 25])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.04, 0.98])

  const stroke = "var(--node-color)"

  const sp = reducedMotion ? 1 : spokeProgress
  const r3 = reducedMotion ? 1 : ring3
  const r4 = reducedMotion ? 1 : ring4
  const r5 = reducedMotion ? 1 : ring5
  const wp = reducedMotion ? 1 : wispProgress

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      role="presentation"
      aria-hidden="true"
    >
      <motion.svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        style={reducedMotion ? {} : { rotate: rotation, scale }}
      >
        <defs>
          <filter id="web-bg-glow">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feComposite in="blur" in2="SourceGraphic" operator="over" />
          </filter>
          {/* Radial mask: centre is transparent, edges are visible */}
          <radialGradient id="centre-fade">
            <stop offset="0%" stopColor="black" />
            <stop offset="25%" stopColor="black" />
            <stop offset="42%" stopColor="white" />
            <stop offset="100%" stopColor="white" />
          </radialGradient>
          <mask id="fade-centre">
            <rect width="1000" height="1000" fill="url(#centre-fade)" />
          </mask>
        </defs>

        <g filter="url(#web-bg-glow)" mask="url(#fade-centre)">

          {/* ═══ RADIAL SPOKES ═══ */}
          {[
            { d: "M 500 500 Q 490 340, 470 60",  w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 510 320, 540 20",   w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 460 360, 360 30",   w: "0.4", o: 0.04 },
            { d: "M 500 500 Q 580 380, 740 80",   w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 620 400, 860 180",  w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 640 440, 950 290",  w: "0.4", o: 0.04 },
            { d: "M 500 500 Q 660 490, 960 470",  w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 660 520, 980 560",  w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 620 600, 870 840",  w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 580 630, 740 940",  w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 640 560, 960 720",  w: "0.4", o: 0.04 },
            { d: "M 500 500 Q 510 680, 530 960",  w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 480 660, 440 980",  w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 540 680, 620 970",  w: "0.4", o: 0.04 },
            { d: "M 500 500 Q 380 600, 140 830",  w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 420 620, 260 920",  w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 340 510, 40 540",   w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 340 480, 20 440",   w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 360 550, 60 680",   w: "0.4", o: 0.04 },
            { d: "M 500 500 Q 380 380, 120 120",  w: "0.5", o: 0.06 },
            { d: "M 500 500 Q 420 400, 200 200",  w: "0.4", o: 0.05 },
            { d: "M 500 500 Q 360 440, 50 320",   w: "0.4", o: 0.04 },
          ].map((s, i) => (
            <motion.path
              key={`spoke-${i}`}
              d={s.d}
              stroke={stroke}
              strokeWidth={s.w}
              opacity={s.o}
              strokeLinecap="round"
              style={{ pathLength: sp }}
            />
          ))}

          {/* ═══ RING 3 (~220px) ═══ */}
          {[
            "M 460 282 Q 352 276, 296 356",
            "M 296 356 Q 248 432, 260 530",
            "M 260 530 Q 278 622, 360 684",
            "M 360 684 Q 448 738, 556 710",
            "M 556 710 Q 656 678, 716 588",
            "M 716 588 Q 756 504, 724 408",
            "M 724 408 Q 684 316, 576 282",
            "M 576 282 Q 510 270, 460 282",
          ].map((d, i) => (
            <motion.path
              key={`r3-${i}`}
              d={d}
              stroke={stroke}
              strokeWidth="0.35"
              opacity={i % 2 === 0 ? 0.04 : 0.035}
              strokeLinecap="round"
              style={{ pathLength: r3 }}
            />
          ))}

          {/* ═══ RING 4 (~340px) ═══ */}
          {[
            "M 442 164 Q 276 156, 186 286",
            "M 186 286 Q 108 406, 132 560",
            "M 132 560 Q 160 700, 298 792",
            "M 298 792 Q 436 870, 602 828",
            "M 602 828 Q 756 780, 834 646",
            "M 834 646 Q 896 520, 852 372",
            "M 852 372 Q 798 232, 636 168",
            "M 636 168 Q 530 136, 442 164",
          ].map((d, i) => (
            <motion.path
              key={`r4-${i}`}
              d={d}
              stroke={stroke}
              strokeWidth="0.3"
              opacity={i % 2 === 0 ? 0.035 : 0.03}
              strokeLinecap="round"
              style={{ pathLength: r4 }}
            />
          ))}

          {/* ═══ RING 5 (outermost ~460px) ═══ */}
          {[
            "M 430 44  Q 208 38, 80 220",
            "M 80 220  Q -24 396, 20 600",
            "M 20 600  Q 64 792, 250 912",
            "M 250 912 Q 438 1006, 660 948",
            "M 660 948 Q 862 882, 948 702",
            "M 948 702 Q 1016 530, 962 334",
            "M 962 334 Q 898 148, 690 56",
            "M 690 56  Q 550 10, 430 44",
          ].map((d, i) => (
            <motion.path
              key={`r5-${i}`}
              d={d}
              stroke={stroke}
              strokeWidth="0.3"
              opacity={i % 2 === 0 ? 0.03 : 0.025}
              strokeLinecap="round"
              style={{ pathLength: r5 }}
            />
          ))}

          {/* ═══ DANGLING WISPS ═══ */}
          {[
            "M 470 60  Q 466 30, 462 8",
            "M 960 470 Q 978 468, 996 472",
            "M 530 960 Q 534 978, 532 996",
            "M 40  540 Q 22  538, 4   542",
            "M 120 120 Q 100 100, 78  76",
            "M 870 840 Q 888 860, 904 882",
            "M 140 830 Q 118 854, 96  876",
            "M 740 80  Q 754 62,  770 42",
          ].map((d, i) => (
            <motion.path
              key={`wisp-${i}`}
              d={d}
              stroke={stroke}
              strokeWidth="0.25"
              strokeDasharray="3 5"
              opacity={i < 4 ? 0.03 : 0.025}
              strokeLinecap="round"
              style={{ pathLength: wp }}
            />
          ))}
        </g>
      </motion.svg>
    </div>
  )
}
