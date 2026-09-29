import Link from "next/link"

import { SectionHeading } from "@/components/site/SectionHeading"
import { getAllPublishedPosts } from "@/lib/blog"
import { pageMetadata } from "@/lib/metadata"
import { FOOTER_LINKS, NAV_LINKS, blogPostUrl } from "@/lib/site"

export const revalidate = 300

export const metadata = pageMetadata({
  title: "Sitemap | Readyio",
  description: "All pages on the Readyio website.",
  path: "/sitemap",
})

const LEGAL_PATHS = new Set(["/privacy", "/cookies", "/terms"])

const linkClass = "block py-[0.4rem] text-[0.925rem] text-foreground no-underline hover:text-primary"

export default async function SitemapPage() {
  const posts = await getAllPublishedPosts()
  const connectLinks = FOOTER_LINKS.filter((l) => l.external)
  const legalLinks = FOOTER_LINKS.filter((l) => LEGAL_PATHS.has(l.href))

  return (
    <section className="pt-36 pb-24 md:pt-44">
      <div className="mx-auto max-w-5xl container-p">
        <SectionHeading eyebrow="Sitemap" as="h1" title="Every page on Readyio" align="left" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <Col title="Site">
            <Link href="/" className={linkClass}>Home</Link>
            {NAV_LINKS.map((l) => (
              <Link key={l.to} href={l.to} className={linkClass}>{l.label}</Link>
            ))}
          </Col>
          <Col title="Connect">
            {connectLinks.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {l.label}
              </a>
            ))}
          </Col>
          <Col title="Legal">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>{l.label}</Link>
            ))}
          </Col>
          <Col title="Articles">
            {posts.length === 0 ? (
              <p className="py-[0.4rem] text-[0.925rem] text-muted-foreground">New articles coming soon.</p>
            ) : (
              posts.map((p) => (
                <a key={p.slug} href={blogPostUrl(p.slug)} className={linkClass}>
                  {p.title}
                </a>
              ))
            )}
          </Col>
        </div>
      </div>
    </section>
  )
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  )
}
