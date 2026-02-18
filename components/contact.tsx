"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - CTA text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Ready to get untangled?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Bring us your knotty web problem. No judgment, no buzzwords.
              Just a practical plan and people who love solving the messy stuff.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <ContactInfo icon={Mail} label="hello@untanglit.com" />
              <ContactInfo icon={Phone} label="+1 (555) 123-4567" />
              <ContactInfo icon={MapPin} label="San Francisco, CA" />
            </div>

            {/* Fun note */}
            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <p className="font-serif text-lg font-bold text-foreground">
                "The messier the knot, the bigger our smile."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {"\u2014 The Untanglit Team, probably before their third coffee"}
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Send size={28} className="text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  Message sent!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Your note just landed in our inbox. We will reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    What kind of knot are we untangling?
                  </label>
                  <select
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select your knot type...</option>
                    <option value="code">Code Detangling</option>
                    <option value="architecture">Architecture Unraveling</option>
                    <option value="performance">Load-Time Loosening </option>
                    <option value="ux">UX Unknotting</option>
                    <option value="security">Security Untwisting</option>
                    <option value="seo">SEO Unsnarling</option>
                    <option value="other">Something wonderfully weird</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Describe the mess
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us everything. The messier the better..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <Send size={16} />
                  Untanglit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={18} />
      </div>
      <span className="text-base font-medium text-foreground">{label}</span>
    </div>
  )
}
