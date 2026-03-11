"use client"

import { useState, useEffect } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { SectionDecorations } from "@/components/section-decorations"
import { ContactForm } from "./contact-form"


export function Contact() {

  const [siteReviewOpen, setSiteReviewOpen] = useState(false)

  const emailDraftHref = `mailto:hello@untanglit.com?subject=${encodeURIComponent("Website Inquiry")}&body=${encodeURIComponent(
    `\nName:\nEmail:\nPhone:\n\nWhat I'm looking for:\n\n`
  )}`

  return (
    <section id="contact" className="relative overflow-hidden bg-muted py-12 md:py-16">
      <SectionDecorations variant="contact" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left column - CTA text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <div className="mt-6 rounded-2xl border-2 border-primary/30 bg-primary/5 p-5">
              <p className="font-semibold text-foreground">Schedule a free 15-minute site review</p>
              <p className="mt-1 text-sm text-muted-foreground">No commitment—just honest advice.</p>
              <button
            type="button"
            onClick={() => setSiteReviewOpen(true)}
             className="mt-4 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Request a review
          </button>
            </div>
            <h2 className="mt-8 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Say hello
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Small business? Side project? Just curious? Tell us a bit about what you need—we'll get back within a day.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <ContactInfo
                icon={Mail}
                label="hello@untanglit.com"
                href={emailDraftHref}
              />
              <ContactInfo icon={Phone} label="(253) 260-6209" />
              <ContactInfo
                icon={MapPin}
                label={
                  <>
                    Spokane, WA <span className="text-lg font-medium text-muted-foreground">·</span> Puyallup, WA
                  </>
                }
              />
            </div>

            {/* Fun note */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-lg font-bold text-foreground">
                No pressure. We're happy to point you in the right direction even if we're not the fit.
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
            <ContactForm />
          </div>
        </div>
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
    </section>
  )
}

function ContactInfo({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: React.ReactNode
  href?: string
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={18} />
      </div>
      <span className="text-base font-medium text-foreground">{label}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-3 rounded-xl transition-colors hover:text-primary"
      >
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-3">{content}</div>
}
