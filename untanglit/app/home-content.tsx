"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { CaseStudies } from "@/components/case-studies"
import { Contact } from "@/components/contact"

export function HomeContent() {
  const [wizardOpen, setWizardOpen] = useState(false)

  return (
    <main>
      <Hero onOpenWizard={() => setWizardOpen(true)} />
      <Services />
      <Pricing
        wizardOpen={wizardOpen}
        wizardOnOpenChange={setWizardOpen}
      />
      <About />
      <CaseStudies />
      <Contact />
      {/* Wizard modal is rendered inside Pricing with shared state */}
    </main>
  )
}
