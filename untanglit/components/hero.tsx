"use client"

import { ArrowDown } from "lucide-react"
import { SectionDecorations } from "@/components/section-decorations"

interface HeroProps {
  onOpenWizard?: () => void
}

export function Hero({ onOpenWizard }: HeroProps) {
  const tickerItems = Array.from({ length: 8 }, () => "Untanglit")
  const bandItems = [
    "Code Detangling",
    "Architecture Unraveling",
    "Performance Untying",
    "UX Unknotting",
    "API & Data Stitching",
    "SEO Straightening",
    "Design System Weaving",
    "Migration Smoothing",
  ]

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-10">
      <SectionDecorations variant="hero" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">We untangle your </span>
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">messiest</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8C30 2 60 10 100 5C140 0 170 9 198 4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-accent"
              >
                <animate
                  attributeName="d"
                  dur="5.2s"
                  repeatCount="indefinite"
                  values="
                    M2 8C30 2 60 10 100 5C140 0 170 9 198 4;
                    M2 6C32 11 62 2 100 7C138 12 170 2 198 7;
                    M2 9C30 4 60 11 100 6C140 2 170 10 198 5;
                    M2 8C30 2 60 10 100 5C140 0 170 9 198 4
                  "
                />
              </path>
            </svg>
          </span>
          <br />
          <span className="text-balance">web problems.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Tangled code? Knotted architecture? Spaghetti integrations?
          We specialize in turning your digital chaos into clean, elegant solutions that actually work.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {onOpenWizard ? (
            <button
              type="button"
              onClick={onOpenWizard}
              className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-hover hover:scale-105"
            >
              Find my plan
            </button>
          ) : (
            <a
              href="#contact"
              className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-hover hover:scale-105"
            >
              Start Untangling
            </a>
          )}
          <a
            href="#cases"
            className="rounded-full border-2 border-foreground/20 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary-hover hover:text-primary-hover"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-1/2 z-20 -translate-x-1/2 animate-float">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to services"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} />
        </a>
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-40 left-0 right-0 overflow-hidden opacity-[0.06]">
        <div className="animate-marquee-slow flex w-max whitespace-nowrap">
          {[0, 1].map((track) => (
            <div key={track} aria-hidden={track === 1} className="flex shrink-0 items-center gap-16 pr-16">
              {tickerItems.map((item, i) => (
                <span
                  key={`${track}-${i}`}
                  className="font-serif text-7xl font-black uppercase tracking-tighter text-foreground md:text-9xl"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Red marquee band */}
      <div className="absolute right-0 bottom-0 left-0 z-20 overflow-hidden border-y border-border bg-primary py-4">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((track) => (
            <div key={track} aria-hidden={track === 1} className="flex shrink-0">
              {bandItems.map((item, i) => (
                <span key={`${track}-${i}`} className="flex items-center gap-6 px-6">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground">
                    {item}
                  </span>
                  <svg
                    className="h-3 w-3 text-primary-foreground/40"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
