import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { examples } from "@/lib/examples"

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Sites we've built | Untanglit",
  description:
    "Examples of the kinds of sites we build. We adapt one of these for you or start from scratch—either way, it's built for your project.",
}

export default function TemplatesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sites we&apos;ve built
          </h1>
          <p className="mt-3 text-muted-foreground">
            A couple of the kinds of sites we build. We adapt one of these for you or start from scratch—either way, it&apos;s built for your project.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {examples.map((t) => (
              <li key={t.slug}>
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50 hover:bg-accent/30"
                >
                  <div className="relative aspect-[16/10] w-full bg-muted">
                    <Image
                      src={t.preview}
                      alt={t.previewAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl font-semibold text-foreground">{t.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-primary">
                      See this site →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
