'use client'

import { useState } from 'react'

export type ServiceItem = {
  name: string
  desc: string
  timeEstimate: string
}

export type ServiceCategory = {
  title: string
  items: ServiceItem[]
}

function ServiceRow({
  name,
  timeEstimate,
  isSelected,
  onToggle,
}: {
  name: string
  timeEstimate?: string
  isSelected: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full text-left flex items-start gap-3 rounded-xl border px-4 py-3 min-h-[4.25rem] transition-all ${
        isSelected
          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-sm'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
      }`}
      aria-pressed={isSelected}
    >
      <span
        className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          isSelected ? 'border-[var(--color-primary)] bg-[var(--color-primary)]' : 'border-gray-300'
        }`}
        aria-hidden
      >
        {isSelected && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <span className="flex-1 min-w-0 flex flex-col gap-0.5">
        <span className="text-base font-medium text-gray-900 break-words line-clamp-2">{name}</span>
        {timeEstimate && <span className="text-sm text-[var(--color-primary)]">{timeEstimate}</span>}
      </span>
    </button>
  )
}

export function BookingSection({ services }: { services: ServiceCategory[] }) {
  const [step, setStep] = useState<1 | 2>(1)
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const canProceed = selected.size >= 1
  const selectedList = [...selected]

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  return (
    <section id="book" className="py-16 md:py-20 bg-white border-t border-gray-200" aria-labelledby="schedule-heading">
      <div className="max-w-4xl mx-auto px-4">
        <h2 id="schedule-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Schedule now
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Call or text <a href="tel:+15559876543" className="font-semibold text-[var(--color-primary)] hover:underline">(555) 987-6543</a> or use the wizard below. Step 1: pick services. Step 2: your details.
        </p>

        <div className="rounded-2xl border border-gray-200 bg-[var(--color-bg)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-5" aria-live="polite">
            Step {step} of 2
          </p>

          {step === 1 && (
            <>
              <p className="text-base font-medium text-gray-900 mb-4">Choose your services (select at least one)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {services.map((cat) =>
                  cat.items.map((item) => (
                    <ServiceRow
                      key={item.name}
                      name={item.name}
                      timeEstimate={item.timeEstimate}
                      isSelected={selected.has(item.name)}
                      onToggle={() => toggle(item.name)}
                    />
                  ))
                )}
                <ServiceRow
                  name="Other"
                  timeEstimate="Varies"
                  isSelected={selected.has('Other')}
                  onToggle={() => toggle('Other')}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceed}
                  className="bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-[var(--color-primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--color-primary)]"
                >
                  Next step →
                </button>
                {!canProceed && <span className="text-sm text-gray-500">Select at least one service.</span>}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {selectedList.length > 0 && (
                <p className="text-sm text-gray-600 mb-5">
                  <span className="font-medium text-gray-700">Requesting:</span> {selectedList.join(', ')}
                </p>
              )}
              <form action="#" method="post" className="space-y-4">
                <input type="hidden" name="service" value={selectedList.join(', ')} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                    <input
                      type="text"
                      id="book-name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="book-phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      id="book-phone"
                      name="phone"
                      required
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                    />
                  </div>
                </div>
                {selected.has('Other') && (
                  <div>
                    <label htmlFor="book-other" className="block text-sm font-medium text-gray-700 mb-1.5">Other (describe)</label>
                    <input
                      type="text"
                      id="book-other"
                      name="service_other"
                      placeholder="e.g. Strange noise, AC not cooling"
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="book-notes" className="block text-sm font-medium text-gray-700 mb-1.5">Preferred date/time or notes</label>
                  <input
                    type="text"
                    id="book-notes"
                    name="notes"
                    placeholder="Optional"
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                  />
                </div>
                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-base text-gray-600 hover:text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:ring-offset-2 rounded-lg"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-[var(--color-primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  >
                    Request appointment
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
