"use client"

import { useState } from "react"
import { SectionDecorations } from "@/components/section-decorations"
import { ContactForm } from "./contact-form"

interface HeroProps {
  onOpenWizard?: () => void
}

export function Hero({ onOpenWizard }: HeroProps) {
  const [siteReviewOpen, setSiteReviewOpen] = useState(false)
  const tickerItems = Array.from({ length: 8 }, () => "Untanglit")
  const bandItems = [
    "Copy & Text Updates",
    "Image & Photo Swaps",
    "Quick Fixes & Tweaks",
    "Menu & Info Updates",
    "Hours & Contact Updates",
    "Content Refreshes",
    "Listing & SEO Tweaks",
    "Small Site Updates",
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
          We help small businesses stay online without the big-agency price tag. From just $99/month we take care of your site, so you can focus on running your business.
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
        <p className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setSiteReviewOpen(true)}
            className="text-sm font-medium text-muted-foreground underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary"
          >
            Schedule a free 15-minute site review
          </button>
          <span className="mt-1 block text-xs text-muted-foreground">No commitment—just honest advice.</span>
        </p>
      </div>

      {siteReviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="site-review-modal-title"
          onClick={() => setSiteReviewOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSiteReviewOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <span className="text-xl leading-none">×</span>
            </button>
            <h2 id="site-review-modal-title" className="pr-8 font-serif text-2xl font-bold text-card-foreground">
              Request a free 15-minute site review
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">No commitment—just honest advice.</p>
            <div className="mt-6">
              <ContactForm
                idPrefix="hero-modal-"
                initialInterest="Free 15-min site review"
                onSuccess={() => setSiteReviewOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

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
