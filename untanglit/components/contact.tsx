"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { SectionDecorations } from "@/components/section-decorations"
import { siteReviewMailto } from "@/lib/data"

type ContactFormState = {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
}

const fieldBaseClass =
  "rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"

function validateForm(state: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!state.name.trim()) errors.name = "Please tell us your name."
  if (!state.email.trim()) {
    errors.email = "Please enter your email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  return errors
}

function buildInquiryEmailBody(state: ContactFormState) {
  const lines = [
    `Hi Untanglit team,`,
    ``,
    `I'd like to get in touch.`,
    ``,
    `Name: ${state.name.trim()}`,
    `Email: ${state.email.trim()}`,
  ]
  if (state.phone.trim()) lines.push(`Phone: ${state.phone.trim()}`)
  if (state.interest) lines.push(`Interested in: ${state.interest}`)
  if (state.message.trim()) {
    lines.push(``, `Message:`, state.message.trim())
  }
  return lines.join("\n")
}

export function Contact() {
  const emailDraftHref = `mailto:hello@untanglit.com?subject=${encodeURIComponent("Hello from your website")}&body=${encodeURIComponent(
    `Hi,\n\nI'd like to get in touch.\n\nName:\nEmail:\nPhone:\n\nWhat I'm looking for:\n\nThanks!`
  )}`

  const [formState, setFormState] = useState<ContactFormState>(initialFormState)
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [showDraftReminder, setShowDraftReminder] = useState(false)

  function updateField<K extends keyof ContactFormState>(field: K, value: string) {
    setFormState((prev) => ({ ...prev, [field]: value }))
    setFormErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors = validateForm(formState)
    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors)
      return
    }

    const subject = "Website inquiry"
    const body = buildInquiryEmailBody(formState)
    const mailtoHref = `mailto:hello@untanglit.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setFormErrors({})
    setFormState(initialFormState)
    window.location.href = mailtoHref
    setShowDraftReminder(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

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
              <a
                href={siteReviewMailto}
                className="mt-4 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Request a review
              </a>
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
              <ContactInfo icon={Phone} label="760 484 4845" />
              <ContactInfo icon={MapPin} label="Spokane, WA" />
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
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Send size={28} className="text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  Email drafted!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Your note is ready to be sent.
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    aria-invalid={Boolean(formErrors.name)}
                    className={`${fieldBaseClass} ${formErrors.name ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                    placeholder="Your name"
                  />
                  {formErrors.name && (
                    <p className="text-xs text-destructive">{formErrors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    aria-invalid={Boolean(formErrors.email)}
                    className={`${fieldBaseClass} ${formErrors.email ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                    placeholder="you@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-xs text-destructive">{formErrors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={fieldBaseClass}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="text-sm font-medium text-foreground">
                    What are you looking for? <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <select
                    id="interest"
                    value={formState.interest}
                    onChange={(e) => updateField("interest", e.target.value)}
                    className={fieldBaseClass}
                  >
                    <option value="">Select one if helpful...</option>
                    <option value="Free 15-min site review">Free 15-minute site review</option>
                    <option value="Monthly retainer ($99/mo)">Monthly retainer ($99/mo)</option>
                    <option value="One-time project">One-time project</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    What's on your mind? <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className={`resize-none ${fieldBaseClass}`}
                    placeholder="A few words about your project or question is plenty."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  <Send size={16} />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {showDraftReminder && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/35 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-card-foreground">
              One quick reminder
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Make sure to finalize and send your information in the drafted email.
            </p>
            <button
              type="button"
              onClick={() => setShowDraftReminder(false)}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover hover:scale-105"
            >
              Got it
            </button>
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
  label: string
  href?: string
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
