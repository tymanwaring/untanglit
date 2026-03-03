"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, Sparkles, Check } from "lucide-react"
import Link from "next/link"
import {
  planFinderWizard,
  type WizardRecommendation,
} from "@/lib/data"
import { monthlyPlan, pagePackages } from "@/lib/data"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
}

function getPlanFromRecommendation(recommendation: WizardRecommendation) {
  if (recommendation === "retainer") {
    return {
      name: monthlyPlan.name,
      price: formatPrice(monthlyPlan.price),
      period: `/${monthlyPlan.period}`,
      oneTime: false,
      reason:
        "Ongoing support or an evolving scope fits a retainer—you get dedicated capacity without locking in a fixed scope.",
    }
  }
  const pkg = pagePackages[
    recommendation === "1-3" ? 0 : recommendation === "4-9" ? 1 : 2
  ]
  return {
    name: pkg.name,
    price: formatPrice(pkg.price),
    period: " one-time",
    oneTime: true,
    reason: pkg.description,
  }
}

type WizardOption = (typeof planFinderWizard.steps)[number]["options"][number]

function hasRecommendation(
  opt: WizardOption
): opt is WizardOption & { recommendation: WizardRecommendation } {
  return "recommendation" in opt && opt.recommendation != null
}

const RESULT_STEP_ID = "result"

interface PlanFinderWizardProps {
  /** When provided, the wizard is controlled and the trigger is not rendered (use for hero + pricing shared state). */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function PlanFinderWizard({ open: controlledOpen, onOpenChange: controlledOnOpenChange }: PlanFinderWizardProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined && controlledOnOpenChange !== undefined
  const open = isControlled ? controlledOpen : internalOpen
  const setOpen = isControlled ? controlledOnOpenChange! : setInternalOpen
  const [started, setStarted] = useState(false)
  const [currentStepId, setCurrentStepId] = useState<string | null>(null)
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [recommendation, setRecommendation] =
    useState<WizardRecommendation | null>(null)
  const [history, setHistory] = useState<string[]>([])

  const steps = planFinderWizard.steps
  const currentStep = steps.find((s) => s.id === currentStepId)
  const currentStepIndex = currentStep ? steps.indexOf(currentStep) : -1
  const totalSteps = steps.length
  const selectedOption = currentStep?.options.find(
    (o) => o.id === selectedOptionId
  )
  const showResult = recommendation != null && currentStepId === null

  const resetWizard = () => {
    setStarted(false)
    setCurrentStepId(null)
    setSelectedOptionId(null)
    setRecommendation(null)
    setHistory([])
  }

  useEffect(() => {
    if (!open) resetWizard()
  }, [open])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) resetWizard()
  }

  const showTrigger = !isControlled

  const handleStart = () => {
    setStarted(true)
    setCurrentStepId(steps[0].id)
    setSelectedOptionId(null)
    setHistory([steps[0].id])
    setRecommendation(null)
  }

  const handleBack = () => {
    if (history.length <= 1) {
      setStarted(false)
      setCurrentStepId(null)
      setSelectedOptionId(null)
      setHistory([])
      return
    }
    const prev = history.slice(0, -1)
    setHistory(prev)
    setCurrentStepId(prev[prev.length - 1])
    setSelectedOptionId(null)
  }

  const handleNext = () => {
    if (!selectedOption || !currentStep) return
    const nextId = selectedOption.nextStep
    if (hasRecommendation(selectedOption)) {
      setRecommendation(selectedOption.recommendation)
    }
    setSelectedOptionId(null)
    if (nextId === RESULT_STEP_ID) {
      setCurrentStepId(null)
      return
    }
    setCurrentStepId(nextId)
    setHistory((h) => [...h, nextId])
  }

  const handleRestart = () => {
    setRecommendation(null)
    setCurrentStepId(steps[0].id)
    setSelectedOptionId(null)
    setHistory([steps[0].id])
  }

  const handleCloseAfterCta = () => {
    setOpen(false)
  }

  return (
    <>
      {showTrigger && (
        <div className="flex flex-col items-center gap-4">
          {planFinderWizard.intro.timeEstimate && (
            <p className="text-sm text-muted-foreground">
              {planFinderWizard.intro.timeEstimate}
            </p>
          )}
          <Button size="lg" className="min-w-[220px]" onClick={() => setOpen(true)}>
            {planFinderWizard.intro.cta}
          </Button>
        </div>
      )}

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-h-[90vh] overflow-y-auto sm:max-w-2xl"
          showCloseButton={true}
        >
          <DialogTitle className="sr-only">
            Find your plan
          </DialogTitle>
          <DialogDescription className="sr-only">
            Answer a few questions and we'll recommend the right plan for your project.
          </DialogDescription>

          {/* ——— Result view ——— */}
          {showResult && recommendation && (() => {
            const plan = getPlanFromRecommendation(recommendation)
            return (
              <div className="py-2">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles size={24} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Your recommended plan
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {plan.name}
                </h3>
                <p className="mt-3 text-2xl font-bold tabular-nums text-foreground">
                  {plan.price}
                  {plan.period}
                </p>
                <p className="mt-5 text-muted-foreground">
                  {plan.reason}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="#contact" onClick={handleCloseAfterCta}>
                      Get in touch
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleRestart}>
                    Take the quiz again
                  </Button>
                </div>
              </div>
            )
          })()}

          {/* ——— Intro (first screen inside modal) ——— */}
          {!started && !showResult && (
            <div className="flex flex-col items-center py-6 text-center sm:py-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Plan finder
              </p>
              <div className="mt-4 h-px w-12 rounded-full bg-primary/40" aria-hidden />
              <h3 className="mt-5 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Let's find your plan
              </h3>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                We'll ask a few questions about your project so we can recommend the best fit.
              </p>
              <Button
                size="lg"
                className="mt-10 min-w-[200px] rounded-full"
                onClick={handleStart}
              >
                Start
              </Button>
            </div>
          )}

          {/* ——— Question view ——— */}
          {started && currentStep && !showResult && (
            <div className="py-2">
              <div className="mb-8 flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 -ml-2"
                  onClick={handleBack}
                  aria-label="Previous question"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <p className="text-sm font-medium text-muted-foreground">
                  Question {currentStepIndex + 1} of {totalSteps}
                </p>
                <div className="w-10 shrink-0" aria-hidden />
              </div>

              <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                {currentStep.question}
              </h3>

              <div className="mt-8 space-y-3">
                {currentStep.options.map((option) => {
                  const isSelected = selectedOptionId === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedOptionId(option.id)}
                      className={cn(
                        "flex w-full items-start gap-4 rounded-xl border-2 px-5 py-4 text-left transition-all",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/30 hover:bg-primary/10"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                          isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"
                        )}
                      >
                        {isSelected ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                      </span>
                      <span className="flex flex-1 flex-col gap-1">
                        <span className="font-semibold text-foreground">
                          {option.label}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {option.description}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-10 flex justify-end">
                <Button
                  size="lg"
                  disabled={!selectedOptionId}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
