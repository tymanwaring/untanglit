"use client"

/**
 * Per-section tangles and floating bubbles. Renders inside a section with
 * relative + overflow-hidden. Each variant has a unique layout.
 */
type Variant =
  | "hero"
  | "services"
  | "pricing"
  | "about"
  | "cases"
  | "examples"
  | "contact"

const strokeClass = (variant: Variant) =>
  variant === "about"
    ? "text-primary-foreground/10"
    : "text-primary/10"

const strokeSecondary = (variant: Variant) =>
  variant === "about"
    ? "text-primary-foreground/8"
    : "text-secondary/10"

const strokeAccent = (variant: Variant) =>
  variant === "about"
    ? "text-primary-foreground/6"
    : "text-accent/10"

const dotClass = (variant: Variant, opacity: string) =>
  variant === "about"
    ? `bg-primary-foreground/${opacity}`
    : `bg-primary/${opacity}`

const dotAccent = (variant: Variant, opacity: string) =>
  variant === "about"
    ? `bg-primary-foreground/${opacity}`
    : `bg-accent/${opacity}`

const dotSecondary = (variant: Variant, opacity: string) =>
  variant === "about"
    ? `bg-primary-foreground/${opacity}`
    : `bg-secondary/${opacity}`

interface SectionDecorationsProps {
  variant: Variant
}

export function SectionDecorations({ variant }: SectionDecorationsProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {variant === "hero" && (
        <>
          <svg
            className={`absolute -top-10 right-0 h-80 w-80 md:h-[500px] md:w-[500px] ${strokeClass(variant)}`}
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M100 50C200 50 300 100 280 200C260 300 150 320 100 280C50 240 80 150 150 150C220 150 250 220 200 250C150 280 100 250 80 200"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M200 80C250 120 320 160 300 230C280 300 200 330 160 300C120 270 140 200 190 180C240 160 280 200 260 250"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`absolute -bottom-10 -left-10 h-64 w-64 md:h-96 md:w-96 ${strokeSecondary(variant)}`}
            viewBox="0 0 300 300"
            fill="none"
          >
            <path
              d="M50 150C50 80 100 30 170 50C240 70 260 150 220 200C180 250 100 240 80 190C60 140 100 100 150 110C200 120 220 170 190 200"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className={`absolute left-[15%] top-[30%] h-3 w-3 rounded-full ${dotAccent(variant, "30")} animate-float`} />
          <div className={`absolute right-[20%] top-[45%] h-2 w-2 rounded-full ${dotClass(variant, "20")} animate-float-delayed`} />
          <div className={`absolute left-[60%] top-[20%] h-4 w-4 rounded-full ${dotSecondary(variant, "20")} animate-float`} />
        </>
      )}

      {variant === "services" && (
        <>
          <svg
            className={`absolute -left-10 top-[15%] h-56 w-56 md:h-72 md:w-72 ${strokeClass(variant)}`}
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M80 100C120 60 200 80 220 140C240 200 180 260 120 240C60 220 40 160 80 100"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`absolute -right-10 bottom-[20%] h-64 w-64 ${strokeSecondary(variant)}`}
            viewBox="0 0 300 300"
            fill="none"
          >
            <path
              d="M200 200C240 160 280 220 240 260C200 300 140 280 120 220C100 160 160 140 200 200"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className={`absolute left-[20%] top-[40%] h-2 w-2 rounded-full ${dotClass(variant, "15")} animate-float`} />
          <div className={`absolute right-[25%] top-[25%] h-3 w-3 rounded-full ${dotAccent(variant, "25")} animate-float-delayed`} />
          <div className={`absolute left-[70%] bottom-[30%] h-2 w-2 rounded-full ${dotSecondary(variant, "20")} animate-float`} />
          <div className={`absolute right-[15%] bottom-[25%] h-3 w-3 rounded-full ${dotClass(variant, "15")} animate-float-delayed`} />
        </>
      )}

      {variant === "pricing" && (
        <>
          <svg
            className={`absolute right-0 top-[10%] h-72 w-72 ${strokeClass(variant)}`}
            viewBox="0 0 300 300"
            fill="none"
          >
            <path
              d="M200 50C260 90 280 160 240 200C200 240 140 220 100 180C60 140 80 80 140 60"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`absolute left-0 bottom-[15%] h-48 w-48 ${strokeAccent(variant)}`}
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M40 120C80 80 140 100 160 140C180 180 140 200 100 180"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className={`absolute left-[30%] top-[35%] h-2 w-2 rounded-full ${dotSecondary(variant, "20")} animate-float-delayed`} />
          <div className={`absolute right-[30%] top-[55%] h-3 w-3 rounded-full ${dotAccent(variant, "25")} animate-float`} />
          <div className={`absolute left-[60%] bottom-[40%] h-2 w-2 rounded-full ${dotClass(variant, "15")} animate-float`} />
        </>
      )}

      {variant === "about" && (
        <>
          <svg
            className={`absolute left-0 top-0 h-48 w-48 ${strokeClass(variant)}`}
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M0 100C40 60 80 20 120 40C160 60 140 120 100 120C60 120 40 80 80 60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`absolute right-0 bottom-0 h-64 w-64 ${strokeSecondary(variant)}`}
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M180 100C140 140 80 120 40 80C0 40 60 0 100 40C140 80 160 140 180 100"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className={`absolute left-[70%] top-[20%] h-2 w-2 rounded-full ${dotClass(variant, "12")} animate-float`} />
          <div className={`absolute right-[20%] top-[60%] h-3 w-3 rounded-full ${dotAccent(variant, "15")} animate-float-delayed`} />
          <div className={`absolute left-[15%] bottom-[25%] h-2 w-2 rounded-full ${dotSecondary(variant, "12")} animate-float`} />
        </>
      )}

      {variant === "cases" && (
        <>
          <svg
            className={`absolute -top-10 left-[10%] h-52 w-52 ${strokeClass(variant)}`}
            viewBox="0 0 300 300"
            fill="none"
          >
            <path
              d="M50 80C90 40 150 60 180 100C210 140 180 200 130 220C80 240 40 200 50 80"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`absolute -bottom-10 right-[15%] h-56 w-56 ${strokeSecondary(variant)}`}
            viewBox="0 0 300 300"
            fill="none"
          >
            <path
              d="M220 220C180 260 120 240 80 200C40 160 60 100 100 80C140 60 200 100 220 220"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className={`absolute left-[15%] top-[60%] h-3 w-3 rounded-full ${dotAccent(variant, "25")} animate-float-delayed`} />
          <div className={`absolute right-[20%] top-[30%] h-2 w-2 rounded-full ${dotClass(variant, "20")} animate-float`} />
          <div className={`absolute left-[55%] bottom-[20%] h-2 w-2 rounded-full ${dotSecondary(variant, "15")} animate-float`} />
        </>
      )}

      {variant === "examples" && (
        <>
          <svg
            className={`absolute right-0 top-[25%] h-48 w-48 ${strokeClass(variant)}`}
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M160 40C120 80 80 60 60 100C40 140 80 180 120 160C160 140 180 80 160 40"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`absolute left-0 bottom-[30%] h-40 w-40 ${strokeAccent(variant)}`}
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M40 120C70 90 110 100 130 130C150 160 120 180 90 160"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className={`absolute left-[25%] top-[35%] h-2 w-2 rounded-full ${dotClass(variant, "20")} animate-float`} />
          <div className={`absolute right-[35%] bottom-[35%] h-3 w-3 rounded-full ${dotSecondary(variant, "20")} animate-float-delayed`} />
        </>
      )}

      {variant === "contact" && (
        <>
          <svg
            className={`absolute left-[5%] top-[20%] h-44 w-44 ${strokeClass(variant)}`}
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M30 100C60 60 120 80 150 120C180 160 140 200 90 180C40 160 20 120 30 100"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className={`absolute right-[5%] bottom-[25%] h-52 w-52 ${strokeSecondary(variant)}`}
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M160 140C130 170 80 160 50 130C20 100 40 50 80 30C120 10 170 50 160 140"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className={`absolute left-[60%] top-[25%] h-2 w-2 rounded-full ${dotAccent(variant, "30")} animate-float-delayed`} />
          <div className={`absolute right-[25%] top-[55%] h-3 w-3 rounded-full ${dotClass(variant, "20")} animate-float`} />
          <div className={`absolute left-[40%] bottom-[30%] h-2 w-2 rounded-full ${dotSecondary(variant, "15")} animate-float`} />
        </>
      )}
    </div>
  )
}
