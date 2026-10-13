"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Something didn&apos;t load
        </h1>
        {error?.message && (
          <p className="mt-2 text-xs font-mono text-rose-500 bg-rose-50 dark:bg-rose-950/40 p-2 rounded-lg max-w-sm mx-auto overflow-auto text-left">
            {error.message}
          </p>
        )}
        <p className="mt-2 text-sm text-muted-foreground">
          Try again, or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              try {
                if (typeof reset === "function") {
                  reset();
                } else {
                  window.location.reload();
                }
              } catch {
                window.location.reload();
              }
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover cursor-pointer"
          >
            Try again
          </button>
          <Link
            href="/"
            onClick={() => {
              setTimeout(() => window.location.reload(), 100);
            }}
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent cursor-pointer"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
