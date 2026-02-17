"use client"

import {
  Search,
  PenTool,
  Code,
  Sparkles,
  Rocket,
} from "lucide-react"
import { processSteps } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { SpringReveal } from "@/components/spring-reveal"
import { SilkCard } from "@/components/silk-card"
import { SilkNode } from "@/components/silk-node"
import { SilkConnector } from "@/components/silk-connector"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  PenTool,
  Code,
  Sparkles,
  Rocket,
}

export function ProcessSection() {
  return (
    <section id="process" className="relative px-6 py-24 md:px-12 md:py-32">
      <SpringReveal>
        <SectionHeading
          title="How We Spin Your Web"
          subtitle="Our process is deliberate and transparent -- five interlocking phases that transform your vision into a polished, production-ready interface."
        />
      </SpringReveal>

      <div className="relative mx-auto max-w-4xl">
        {/* Central vertical silk line (visible on all screens) */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px"
          style={{ backgroundColor: "var(--thread-color)", opacity: 0.15 }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-16">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon]
            const isEven = index % 2 === 0

            return (
              <SpringReveal
                key={step.number}
                delay={index * 0.1}
                direction={isEven ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-6 pl-14 md:pl-0 ${
                    isEven
                      ? "md:flex-row md:pr-[calc(50%+2rem)]"
                      : "md:flex-row-reverse md:pl-[calc(50%+2rem)]"
                  }`}
                >
                  {/* Node on the spine */}
                  <div
                    className="absolute left-4 top-4 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <SilkNode size={12} />
                  </div>

                  {/* Connector */}
                  <div
                    className={`hidden md:block absolute top-5 ${
                      isEven
                        ? "left-[calc(50%+6px)]"
                        : "right-[calc(50%+6px)] rotate-180"
                    }`}
                    aria-hidden="true"
                  >
                    <SilkConnector
                      direction={isEven ? "right" : "left"}
                      delay={index * 0.15}
                    />
                  </div>

                  {/* Card */}
                  <SilkCard className="flex-1">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: "var(--node-color)" }}
                        >
                          {step.number}
                        </span>
                        {Icon && (
                          <Icon
                            className="h-5 w-5"
                            style={{ color: "var(--node-color)" }}
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                      <span className="text-xs italic text-muted-foreground/70">
                        {step.tagline}
                      </span>
                    </div>
                  </SilkCard>
                </div>
              </SpringReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
