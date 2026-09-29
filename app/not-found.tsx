import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found | Readyio",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          404
        </div>
        <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  )
}
