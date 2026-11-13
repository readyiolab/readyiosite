import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { JsonLd } from "@/components/site/JsonLd"
import { SITE_URL } from "@/lib/site"

export type BreadcrumbCrumb = {
  name: string
  /** Path used for links and BreadcrumbList JSON-LD (e.g. `/solutions`). */
  href?: string
}

function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "/" : path}`
}

export function PageBreadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbCrumb[]
  className?: string
}) {
  const crumbs = [{ name: "Home", href: "/" }, ...items]

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <div className={className ?? "border-b border-border/60 bg-background/80"}>
        <div className="mx-auto max-w-7xl container-p py-3 pt-[calc(4.5rem+0.75rem)] sm:pt-[calc(5rem+0.75rem)]">
          <Breadcrumb>
            <BreadcrumbList>
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1
                return (
                  <BreadcrumbItem key={`${crumb.name}-${index}`}>
                    {index > 0 ? <BreadcrumbSeparator /> : null}
                    {isLast || !crumb.href ? (
                      <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </BreadcrumbItem>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  )
}
