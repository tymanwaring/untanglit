import { Send } from "lucide-react"
import { useEffect, useState } from "react"

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

  export type ContactFormProps = {
    idPrefix?: string
    initialInterest?: string
    onSuccess?: () => void
  }
  

  
  export type ContactPrefillDetail = { interest: string; message: string }
  
  const fieldBaseClass =
    "rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
  
      const CONTACT_PREFILL_EVENT = "contact-prefill"
    const FORMSPREE_URL = "https://formspree.io/f/maqperwo"
    
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
  

  


export function ContactForm({ idPrefix = "", initialInterest = "", onSuccess }: ContactFormProps) {
    const [formState, setFormState] = useState<ContactFormState>({
      ...initialFormState,
      interest: initialInterest,
    })
    const [formErrors, setFormErrors] = useState<ContactFormErrors>({})
    const [submitted, setSubmitted] = useState(false)
    const [showPrefillNudge, setShowPrefillNudge] = useState(false)
  
    useEffect(() => {
      const handlePrefill = (e: CustomEvent<ContactPrefillDetail>) => {
        const { interest, message } = e.detail
        setFormState((prev) => ({
          ...prev,
          ...(interest && { interest }),
          ...(message && { message }),
        }))
        setShowPrefillNudge(true)
      }
      window.addEventListener(CONTACT_PREFILL_EVENT, handlePrefill as EventListener)
      return () =>
        window.removeEventListener(CONTACT_PREFILL_EVENT, handlePrefill as EventListener)
    }, [])
  
    function updateField<K extends keyof ContactFormState>(field: K, value: string) {
      setFormState((prev) => ({ ...prev, [field]: value }))
      setFormErrors((prev) => {
        if (!prev[field]) return prev
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      const nextErrors = validateForm(formState)
      if (Object.keys(nextErrors).length > 0) {
        setFormErrors(nextErrors)
        return
      }
      const formData = new FormData()
      formData.append("name", formState.name.trim())
      formData.append("email", formState.email.trim())
      if (formState.phone.trim()) formData.append("phone", formState.phone.trim())
      if (formState.interest) formData.append("interest", formState.interest)
      if (formState.message.trim()) formData.append("message", formState.message.trim())
  
      try {
        const res = await fetch(FORMSPREE_URL, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        })
        const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
        const success = res.ok && (data.ok !== false)
        if (!success) throw new Error(data.error ?? "Submit failed")
        setSubmitted(true)
        setFormErrors({})
        setFormState({ ...initialFormState, interest: initialInterest })
        setShowPrefillNudge(false)
        if (onSuccess) setTimeout(onSuccess, 1500)
        else setTimeout(() => setSubmitted(false), 4000)
      } catch {
        setFormErrors({ email: "Something went wrong. Please try again or email us directly." })
      }
    }
  
    return (
      <>
        {showPrefillNudge && (
          <p className="mb-5 rounded-xl bg-secondary/10 px-4 py-3 text-sm text-foreground">
            Fill in your name, email, and phone below to get your quote.
          </p>
        )}
        {submitted ? (
          <div className="flex h-full flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <Send size={28} className="text-secondary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-card-foreground">
              Thank you
            </h3>
            <p className="mt-2 text-muted-foreground">Your message is on its way.</p>
          </div>
        ) : (
          <form
            noValidate
            action={FORMSPREE_URL}
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor={`${idPrefix}name`} className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id={`${idPrefix}name`}
                name="name"
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
              <label htmlFor={`${idPrefix}email`} className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id={`${idPrefix}email`}
                name="email"
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
              <label htmlFor={`${idPrefix}phone`} className="text-sm font-medium text-foreground">
                Phone <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id={`${idPrefix}phone`}
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={fieldBaseClass}
                placeholder="(555) 123-4567"
              />
            </div>
  
            <div className="flex flex-col gap-2">
              <label htmlFor={`${idPrefix}interest`} className="text-sm font-medium text-foreground">
                What are you looking for? <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <select
                id={`${idPrefix}interest`}
                name="interest"
                value={formState.interest}
                onChange={(e) => updateField("interest", e.target.value)}
                className={fieldBaseClass}
              >
                <option value="">Select one if helpful...</option>
                <option value="Free 15-min site review">Free 15-minute site review</option>
                <option value="Monthly retainer ($99/mo)">Monthly retainer ($99/mo)</option>
                <option value="One-time build: 1–3 Pages — ~$2,000 one-time">One-time build: 1–3 Pages — ~$2,000</option>
                <option value="One-time build: 4–9 Pages — ~$8,500 one-time">One-time build: 4–9 Pages — ~$8,500</option>
                <option value="One-time build: 10+ Pages — ~$19,500 one-time">One-time build: 10+ Pages — ~$19,500</option>
                <option value="One-time project (other)">One-time project (other)</option>
                <option value="Just exploring">Just exploring</option>
              </select>
            </div>
  
            <div className="flex flex-col gap-2">
              <label htmlFor={`${idPrefix}message`} className="text-sm font-medium text-foreground">
                What's on your mind? <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <textarea
                id={`${idPrefix}message`}
                name="message"
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
      </>
    )
  }