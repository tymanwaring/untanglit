"use client"

import Link from "next/link"
import { BrandKnotIcon } from "@/components/brand-knot-icon"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function ReturnToUntanglit() {
  return (
    <Popover>
      <PopoverTrigger
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary-hover hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 [&_svg]:text-primary-foreground [&_path]:text-primary-foreground [&_circle]:text-primary-foreground"
        aria-label="Open menu to return to Untanglit"
      >
        <BrandKnotIcon size={62} />
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={8}
        className="w-52 p-2"
      >
        <Link
          href="/"
          className="block rounded-full bg-primary/85 px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
        >
          Return to Untanglit
        </Link>
      </PopoverContent>
    </Popover>
  )
}
