"use client"

import { Repeat, FileText } from "lucide-react"
import Link from "next/link"
import { monthlyPlan, pagePackages, planFinderWizard, siteReviewMailto } from "@/lib/data"
import { SectionDecorations } from "@/components/section-decorations"
import { Button } from "@/components/ui/button"
import { PlanFinderWizard } from "@/components/plan-finder-wizard"

const knotVariants = [
  "M8 16C8 12 12 8 16 8C20 8 24 12 24 16C24 20 20 24 16 24C12 24 9 21 10 18C11 15 15 14 17 16",
  "M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 17.8 8 20C8 22.2 9.8 24 12 24C14.2 24 16 22.2 16 20C16 17.8 17.8 16 20 16C22.2 16 24 14.2 24 12C24 9.8 22.2 8 20 8C17.8 8 16 9.8 16 12",
  "M8 18C10 14 12 12 14 12C16 12 18 14 20 18C22 22 24 20 24 16C24 12 21 8 17 8C13 8 10 10 8 14",
  "M8 20C8 16 12 12 16 12C20 12 24 16 24 20M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12",
]

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
}

interface PricingProps {
  wizardOpen?: boolean
  wizardOnOpenChange?: (open: boolean) => void
}

export function Pricing({ wizardOpen, wizardOnOpenChange }: PricingProps = {}) {
  const isWizardControlled = wizardOpen !== undefined && wizardOnOpenChange !== undefined

  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      <SectionDecorations variant="pricing" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Monthly retainer or a one-time build.{" "}
            <span className="text-muted-foreground">
              You know exactly what you're paying for.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Prefer ongoing capacity? Retainer. Prefer a fixed scope? Pick by page count.
          </p>
        </div>

        {/* Emphasized monthly retainer */}
        <div className="mt-16">
          <RetainerCard />
        </div>

        {/* One-time build by page count */}
        <div className="mt-20">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Or a one-time build
          </p>
          <p className="mb-10 text-center text-muted-foreground">
            Fixed price by number of pages. No guesswork.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {pagePackages.map((pkg, index) => (
              <PagePackageCard
                key={pkg.name}
                name={pkg.name}
                pageRange={pkg.pageRange}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                knotPath={knotVariants[index % knotVariants.length]}
              />
            ))}
          </div>
        </div>

        {/* Plan finder wizard */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Not sure what you're looking for?
            </h3>
            <p className="mt-3 text-muted-foreground">
              We can help find the plan that's right for you. Answer a few quick
              questions and we'll recommend your best fit.
            </p>
          </div>
          <div className="mt-10">
            {isWizardControlled ? (
              <>
                <p className="mb-4 text-center text-sm text-muted-foreground">
                  {planFinderWizard.intro.timeEstimate}
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="min-w-[220px] rounded-full"
                    onClick={() => wizardOnOpenChange?.(true)}
                  >
                    {planFinderWizard.intro.cta}
                  </Button>
                </div>
                <PlanFinderWizard open={wizardOpen} onOpenChange={wizardOnOpenChange} />
              </>
            ) : (
              <PlanFinderWizard />
            )}
          </div>
          <p className="mt-6 text-center">
            <a
              href={siteReviewMailto}
              className="text-sm font-medium text-muted-foreground underline decoration-primary/50 underline-offset-2 transition-colors hover:text-primary"
            >
              Or schedule a free 15-minute site review
            </a>
            <span className="mt-1 block text-xs text-muted-foreground">No commitment—just honest advice.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function RetainerCard() {
  return (
    <div className="group relative mx-auto max-w-2xl rounded-2xl border-2 border-primary/30 bg-card p-8 shadow-lg transition-all hover:border-primary/50 hover:shadow-xl md:p-10">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="rounded-full border border-primary/30 bg-background px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Most flexible
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
          <Repeat size={28} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-card-foreground md:text-3xl">
          {monthlyPlan.name}
        </h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-bold tabular-nums text-foreground md:text-5xl">
            {formatPrice(monthlyPlan.price)}
          </span>
          <span className="text-lg text-muted-foreground">
            /{monthlyPlan.period}
          </span>
        </div>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
          {monthlyPlan.description}
        </p>
        <ul className="mt-8 grid gap-3 text-left text-sm text-muted-foreground sm:grid-cols-2 sm:gap-x-8">
          {monthlyPlan.features.map((feature, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary" aria-hidden>
                —
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="#contact">Discuss retainer</Link>
          </Button>
        </div>
      </div>

      <svg
        className="absolute right-6 top-6 h-8 w-8 text-border transition-colors group-hover:text-primary/30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={knotVariants[0]}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function PagePackageCard({
  name,
  pageRange,
  price,
  description,
  features,
  knotPath,
}: {
  name: string
  pageRange: string
  price: number
  description: string
  features: readonly string[]
  knotPath: string
}) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-transform group-hover:scale-110">
        <FileText size={20} />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {pageRange}
      </p>
      <h4 className="mt-1 font-serif text-xl font-bold text-card-foreground">
        {name}
      </h4>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-2xl font-bold tabular-nums text-foreground">
          {formatPrice(price)}
        </span>
        <span className="text-sm text-muted-foreground">one-time</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <ul className="mt-5 flex flex-1 flex-col gap-2 text-sm text-muted-foreground">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-primary" aria-hidden>
              —
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-2">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href="#contact">Get a quote</Link>
        </Button>
      </div>

      <svg
        className="absolute right-4 top-4 h-6 w-6 text-border transition-colors group-hover:text-primary/30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d={knotPath}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
