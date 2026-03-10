import { FileText, Image, Wrench, List, Clock, Search } from "lucide-react"
import { SectionDecorations } from "@/components/section-decorations"

const services = [
  {
    icon: FileText,
    title: "Copy & Text Updates",
    description:
      "Need to change wording, fix typos, or update headlines and paragraphs? We keep your message clear and current.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Image,
    title: "Image & Photo Swaps",
    description:
      "New photos, updated graphics, or fresh menu and product images. We swap them in so your site always looks up to date.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Wrench,
    title: "Quick Fixes & Tweaks",
    description:
      "Broken links, small layout fixes, or button and form tweaks. We handle the little things so your site works smoothly.",
    color: "bg-accent/10 text-accent-foreground",
  },
  {
    icon: List,
    title: "Menu & Info Updates",
    description:
      "Keep your menu, services, or product list current. We update the details so customers always see the right info.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Hours & Contact Updates",
    description:
      "New hours, address, phone number, or contact form? We make sure visitors can find you and reach you.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Search,
    title: "SEO & Listings",
    description:
      "Get found when customers search. We help with basic SEO and listing updates so you show up where it matters.",
    color: "bg-accent/10 text-accent-foreground",
  },
]

const knotVariants = [
  "M8 16C8 12 12 8 16 8C20 8 24 12 24 16C24 20 20 24 16 24C12 24 9 21 10 18C11 15 15 14 17 16",
  "M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 17.8 8 20C8 22.2 9.8 24 12 24C14.2 24 16 22.2 16 20C16 17.8 17.8 16 20 16C22.2 16 24 14.2 24 12C24 9.8 22.2 8 20 8C17.8 8 16 9.8 16 12",
  "M8 18C10 14 12 12 14 12C16 12 18 14 20 18C22 22 24 20 24 16C24 12 21 8 17 8C13 8 10 10 8 14",
  "M8 10C10 8 14 8 16 10C18 12 18 15 16 17C14 19 10 19 8 21M24 10C22 8 18 8 16 10C14 12 14 15 16 17C18 19 22 19 24 21",
  "M8 20C8 16 12 12 16 12C20 12 24 16 24 20M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12",
  "M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 17.8 8 20C8 22.2 9.8 24 12 24C15 24 17 22 18 20C19 18 20 16 22 16C23.1 16 24 16.9 24 18",
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      <SectionDecorations variant="services" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Untangle
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            The updates small businesses need.{" "}
            <span className="text-muted-foreground">No jargon, no surprises.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From copy and photos to hours and contact info, we handle the everyday changes that keep your site accurate and easy to find—all included in your plan.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              knotPath={knotVariants[index % knotVariants.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  knotPath,
}: {
  icon: React.ComponentType<{ size?: number }>
  title: string
  description: string
  color: string
  knotPath: string
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
      {/* Icon */}
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${color} transition-transform group-hover:scale-110`}
      >
        <Icon size={24} />
      </div>

      <h3 className="font-serif text-xl font-bold text-card-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {/* Decorative knot corner */}
      <svg
        className="absolute right-4 top-4 h-8 w-8 text-border transition-colors group-hover:text-primary/30"
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
