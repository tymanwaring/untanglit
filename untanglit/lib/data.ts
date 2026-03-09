export const navigation = [
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const

export const processSteps = [
  {
    number: "01",
    icon: "Search" as const,
    title: "Discovery",
    description:
      "Every successful launch starts with clarity. We align on goals, audience, constraints, and priorities so your team can make confident product decisions from day one.",
    tagline: "Clarifying the problem",
  },
  {
    number: "02",
    icon: "PenTool" as const,
    title: "Architecture",
    description:
      "We design a practical technical plan -- selecting the right stack, defining component boundaries, and planning for scale so implementation stays predictable.",
    tagline: "Designing the plan",
  },
  {
    number: "03",
    icon: "Code" as const,
    title: "Implementation",
    description:
      "This is where strategy becomes product. We build high-quality interfaces with clean architecture, thoughtful UX, and maintainable code your team can extend confidently.",
    tagline: "Building with confidence",
  },
  {
    number: "04",
    icon: "Sparkles" as const,
    title: "Refinement",
    description:
      "We harden every release for performance, accessibility, and cross-browser consistency. Critical paths are validated and polished until quality is measurable.",
    tagline: "De-risking the release",
  },
  {
    number: "05",
    icon: "Rocket" as const,
    title: "Launch",
    description:
      "Your product goes live with a clear rollout plan. We support deployment, monitoring, and post-launch iteration so your team ships without fear.",
    tagline: "Shipping with confidence",
  },
] as const

export const services = [
  {
    icon: "Layers" as const,
    title: "Frontend Architecture",
    description:
      "Scalable, maintainable codebases designed to grow with your business. We lay foundations that last years, not months.",
  },
  {
    icon: "Palette" as const,
    title: "Design System Development",
    description:
      "Unified component libraries that ensure visual consistency across every touchpoint while accelerating your team's delivery speed.",
  },
  {
    icon: "Gauge" as const,
    title: "Performance Optimization",
    description:
      "Sub-second load times and buttery-smooth interactions that reduce bounce rates and directly impact your bottom line.",
  },
  {
    icon: "FileCode" as const,
    title: "React & Next.js Consulting",
    description:
      "Deep expertise in the modern React ecosystem -- from server components to streaming SSR, we guide your team through the cutting edge.",
  },
  {
    icon: "SearchCheck" as const,
    title: "Code Audits & Reviews",
    description:
      "Comprehensive analysis of your codebase with actionable recommendations to improve quality, security, and developer experience.",
  },
  {
    icon: "Users" as const,
    title: "Team Mentoring",
    description:
      "Level up your engineering team with hands-on workshops, pair programming, and best-practice coaching from seasoned practitioners.",
  },
] as const

export const projects = [
  {
    title: "Meridian Finance Dashboard",
    description:
      "A real-time financial analytics platform serving 50K+ daily users. Built with Next.js App Router, streaming SSR, and a custom charting engine.",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSocket"],
    clientType: "Enterprise",
    category: "fintech",
    accentColor: "oklch(0.55 0.24 25)",
  },
  {
    title: "Bloom E-Commerce Redesign",
    description:
      "Complete frontend overhaul for a luxury retail brand. Achieved 40% improvement in Core Web Vitals and 25% increase in conversion rate.",
    tags: ["React", "Tailwind", "Shopify", "Framer Motion"],
    clientType: "Retail",
    category: "ecommerce",
    accentColor: "oklch(0.50 0.20 20)",
  },
  {
    title: "Prism Design System",
    description:
      "An enterprise-grade component library powering 12 product teams. 200+ components with full accessibility compliance and Figma integration.",
    tags: ["React", "Storybook", "Radix UI", "CSS Modules"],
    clientType: "SaaS",
    category: "design-system",
    accentColor: "oklch(0.60 0.22 30)",
  },
  {
    title: "Nexus Health Portal",
    description:
      "HIPAA-compliant patient portal with real-time appointment scheduling, telehealth integration, and accessible form workflows.",
    tags: ["Next.js", "TypeScript", "Zod", "React Query"],
    clientType: "Healthcare",
    category: "healthcare",
    accentColor: "oklch(0.45 0.18 15)",
  },
  {
    title: "Velocity Startup Landing Kit",
    description:
      "A conversion-optimized landing page system deployed across 8 Y Combinator startups, with built-in A/B testing and analytics.",
    tags: ["Next.js", "Tailwind", "Vercel", "Posthog"],
    clientType: "Startup",
    category: "marketing",
    accentColor: "oklch(0.55 0.24 25)",
  },
  {
    title: "Arcadia Learning Platform",
    description:
      "Interactive coding education platform with live code editors, real-time collaboration, and adaptive curriculum powered by AI.",
    tags: ["React", "Monaco Editor", "WebRTC", "AI SDK"],
    clientType: "EdTech",
    category: "education",
    accentColor: "oklch(0.50 0.16 10)",
  },
] as const

export const team = [
  {
    name: "Alex Mercer",
    role: "Lead Consultant & Founder",
    specialty: "Frontend Architecture",
    bio: "10+ years shaping interfaces for Fortune 500s and ambitious startups alike. Obsessed with performance and developer experience.",
    initials: "AM",
    social: { github: "#", linkedin: "#", x: "#" },
  },
  {
    name: "Jordan Reeves",
    role: "Senior Developer",
    specialty: "React & Animation",
    bio: "Brings interfaces to life with fluid motion and meticulous attention to interactive detail. Motion design advocate.",
    initials: "JR",
    social: { github: "#", linkedin: "#" },
  },
  {
    name: "Sam Okoro",
    role: "Design Engineer",
    specialty: "Design Systems",
    bio: "Bridges the gap between design and engineering. Builds component libraries that designers love and developers trust.",
    initials: "SO",
    social: { github: "#", linkedin: "#", x: "#" },
  },
  {
    name: "Morgan Chen",
    role: "Performance Specialist",
    specialty: "Web Performance",
    bio: "Makes the web faster, one millisecond at a time. Core Web Vitals expert with a background in browser internals.",
    initials: "MC",
    social: { github: "#", linkedin: "#" },
  },
  {
    name: "Riley Park",
    role: "Full-Stack Developer",
    specialty: "Next.js & APIs",
    bio: "Full-stack generalist who loves the seam between server and client. Architect of seamless data flows.",
    initials: "RP",
    social: { github: "#", linkedin: "#", x: "#" },
  },
] as const

export const testimonials = [
  {
    quote:
      "Untanglit transformed our frontend from a brittle codebase into a reliable product foundation. Their process was transparent, their code quality was excellent, and the results speak for themselves -- 40% faster load times and a 25% lift in conversions.",
    name: "Catherine Liu",
    role: "VP of Product",
    company: "Bloom Retail",
  },
  {
    quote:
      "Working with Alex and the team felt like having a world-class engineering department on speed dial. They didn't just build our design system -- they mentored our team to own it going forward.",
    name: "David Okafor",
    role: "CTO",
    company: "Prism Software",
  },
  {
    quote:
      "We needed a patient portal that was both HIPAA-compliant and genuinely pleasant to use. Untanglit delivered on both fronts with a level of clarity and execution we did not think was possible under our constraints.",
    name: "Dr. Sarah Winters",
    role: "Chief Digital Officer",
    company: "Nexus Health",
  },
  {
    quote:
      "Their attention to detail is unmatched. Every animation, every micro-interaction, every edge case -- they thought of everything. Our users constantly tell us how smooth the experience feels.",
    name: "Marcus Tanaka",
    role: "Founder",
    company: "Velocity Labs",
  },
] as const

export const stats = [
  { value: 10, suffix: "+", label: "Years of Craft" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Clients Served" },
  { value: 5, suffix: "", label: "Collaborators" },
] as const

export const socialLinks = [
  { label: "GitHub", href: "#", icon: "Github" as const },
  { label: "LinkedIn", href: "#", icon: "Linkedin" as const },
  { label: "X", href: "#", icon: "Twitter" as const },
  { label: "Email", href: "mailto:hello@untanglit.dev", icon: "Mail" as const },
] as const

/** Mailto for "Schedule a free 15-minute site review" — opens email draft immediately */
export const siteReviewMailto =
  `mailto:hello@untanglit.com?subject=${encodeURIComponent("Free 15-minute site review")}&body=${encodeURIComponent(
    `Hi,\n\nI'd like to schedule a free 15-minute site review. No commitment—just honest advice.\n\nName:\nBest way to reach me (email or phone):\nCurrent site (if any):\n`
  )}`

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "GraphQL",
  "Vercel",
] as const

// Pricing: small-business friendly retainer; projects by page count
export const monthlyPlan = {
  name: "Monthly Retainer",
  price: 199,
  period: "month",
  description:
    "Ongoing front-end support for small businesses. Request work as you go—updates, new pages, or small features. No project lock-in; pause or scale when you need to.",
  features: [
    "Priority queue for your requests",
    "Up to 10 hours/month front-end development",
    "Code reviews and best-practice guidance",
    "Pause or cancel anytime—no long-term contract",
  ],
} as const

// One-time builds by page count so it's clear what you're paying for
export const pagePackages = [
  {
    name: "1–3 Pages",
    pageRange: "1–3 pages",
    price: 3500,
    description: "One flat fee for a small site: landing page, micro-site, or a few key pages. Design-to-code, responsive, and fast.",
    features: [
      "Fully responsive, accessible build",
      "SEO basics and performance tuning",
      "Handoff and light documentation",
      "Rush delivery available — we'll confirm timeline and surcharge in your quote",
    ],
  },
  {
    name: "4–9 Pages",
    pageRange: "4–9 pages",
    price: 8500,
    description: "Multi-page marketing site or app shell. Reusable components and clear structure so you can extend it later.",
    features: [
      "Reusable component system",
      "Forms or simple API integration",
      "Design system foundations",
      "Rush delivery available — we'll confirm timeline and surcharge in your quote",
    ],
  },
  {
    name: "10+ Pages",
    pageRange: "10+ pages",
    price: 19500,
    description: "Larger site or app: full product front-end, design system, or many content pages. Built to last and scale.",
    features: [
      "Full design system or app front-end",
      "Performance and a11y audits",
      "Team handoff and documentation",
      "Rush delivery available — we'll confirm timeline and surcharge in your quote",
    ],
  },
] as const

// Plan finder wizard: mattress-style flow to recommend a plan
export type WizardRecommendation = "retainer" | "1-3" | "4-9" | "10+"

export const planFinderWizard = {
  intro: {
    headline: "Not sure what you're looking for?",
    subline:
      "We can help find the plan that's right for you. Answer a few quick questions and we'll recommend your best fit.",
    timeEstimate: "Takes about 1 minute",
    cta: "Start the plan finder",
  },
  steps: [
    {
      id: "need",
      question: "What do you need?",
      options: [
        {
          id: "ongoing",
          label: "Ongoing front-end support",
          description: "I want a dedicated team or capacity I can tap month to month.",
          recommendation: "retainer" as WizardRecommendation,
          nextStep: "timeline",
        },
        {
          id: "onetime",
          label: "A one-time site or app build",
          description: "I have a defined project with a clear scope.",
          nextStep: "pages",
        },
        {
          id: "unsure",
          label: "Not sure yet",
          description: "My scope might change or I'm still figuring it out.",
          nextStep: "pages",
        },
      ],
    },
    {
      id: "pages",
      question: "Roughly how many pages or main screens?",
      options: [
        {
          id: "1-3",
          label: "Just a few (1–3)",
          description: "Landing page, micro-site, or a handful of key pages.",
          recommendation: "1-3" as WizardRecommendation,
          nextStep: "timeline",
        },
        {
          id: "4-9",
          label: "A handful (4–9)",
          description: "Multi-page marketing site or a small app.",
          recommendation: "4-9" as WizardRecommendation,
          nextStep: "timeline",
        },
        {
          id: "10+",
          label: "Lots (10+)",
          description: "Large site, product front-end, or many screens.",
          recommendation: "10+" as WizardRecommendation,
          nextStep: "timeline",
        },
        {
          id: "unsure-pages",
          label: "Not sure yet",
          description: "Scope might grow or I'd rather not lock in a number.",
          recommendation: "retainer" as WizardRecommendation,
          nextStep: "timeline",
        },
      ],
    },
    {
      id: "timeline",
      question: "What's your timeline?",
      options: [
        {
          id: "asap",
          label: "ASAP",
          description: "We need to move quickly.",
          nextStep: "designs",
        },
        {
          id: "flexible",
          label: "Flexible",
          description: "We have some runway and want to do it right.",
          nextStep: "designs",
        },
        {
          id: "not-sure-timeline",
          label: "Not sure yet",
          description: "Still figuring out the roadmap.",
          nextStep: "designs",
        },
      ],
    },
    {
      id: "designs",
      question: "Do you have designs ready?",
      options: [
        {
          id: "yes-designs",
          label: "Yes, we have Figma (or similar)",
          description: "Ready for design-to-code or implementation.",
          nextStep: "priorities",
        },
        {
          id: "no-designs",
          label: "No, we need guidance",
          description: "We might need help with UX or design direction.",
          nextStep: "priorities",
        },
        {
          id: "in-progress-designs",
          label: "In progress",
          description: "Designs are being created or iterated.",
          nextStep: "priorities",
        },
      ],
    },
    {
      id: "priorities",
      question: "What matters most for this project?",
      options: [
        {
          id: "speed",
          label: "Ship fast",
          description: "We need to get something live quickly.",
          nextStep: "team",
        },
        {
          id: "quality",
          label: "Quality and maintainability",
          description: "We want something that lasts and is easy to extend.",
          nextStep: "team",
        },
        {
          id: "budget",
          label: "Budget clarity",
          description: "We want predictable scope and pricing.",
          nextStep: "team",
        },
        {
          id: "balanced",
          label: "Balanced",
          description: "A mix of speed, quality, and clarity.",
          nextStep: "team",
        },
      ],
    },
    {
      id: "team",
      question: "Who's on your side?",
      options: [
        {
          id: "solo",
          label: "Just me",
          description: "I'm the main decision-maker and doer.",
          nextStep: "rush",
        },
        {
          id: "small-team",
          label: "Small team (2–5)",
          description: "We'll collaborate and hand off.",
          nextStep: "rush",
        },
        {
          id: "in-house",
          label: "We have devs in-house",
          description: "We need front-end expertise to complement the team.",
          nextStep: "rush",
        },
      ],
    },
    {
      id: "rush",
      question: "Need rush delivery?",
      options: [
        {
          id: "rush-yes",
          label: "Yes, ASAP",
          description: "We need it done on a compressed timeline.",
          nextStep: "result",
        },
        {
          id: "rush-no",
          label: "No, standard timeline",
          description: "We have flexibility on delivery.",
          nextStep: "result",
        },
      ],
    },
  ],
} as const
