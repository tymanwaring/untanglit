"use client"

import Image from "next/image"
import Link from "next/link"
import { examples } from "@/lib/examples"
import { SectionDecorations } from "@/components/section-decorations"

export function ExamplesSection() {
  return (
    <section id="examples" className="relative overflow-hidden border-t border-border bg-muted/30 py-16">
      <SectionDecorations variant="examples" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Sites we&apos;ve built
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We adapt one of these for you or start from scratch—either way, it&apos;s built for your project.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
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
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{t.name}</h3>
                  <span className="mt-2 inline-block text-sm font-medium text-primary">
                    See this site →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center">
          <Link
            href="/templates"
            className="text-sm font-medium text-primary hover:underline"
          >
            See all examples →
          </Link>
        </p>
      </div>
    </section>
  )
}
