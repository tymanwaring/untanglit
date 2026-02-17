"use client"

import { projects } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { SpringReveal } from "@/components/spring-reveal"
import { ProjectCard } from "@/components/project-card"

export function PortfolioSection() {
  return (
    <section id="work" className="relative px-6 py-24 md:px-12 md:py-32">
      <SpringReveal>
        <SectionHeading
          title="Webs We've Spun"
          subtitle="A selection of projects where our craft made a measurable impact on our clients' businesses."
        />
      </SpringReveal>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <SpringReveal key={project.title} delay={index * 0.08}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              clientType={project.clientType}
              accentColor={project.accentColor}
            />
          </SpringReveal>
        ))}
      </div>
    </section>
  )
}
