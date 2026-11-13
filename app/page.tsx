import { HomePage } from "@/components/pages/HomePage"
import { JsonLd } from "@/components/site/JsonLd"
import { faqPageJsonLd, HOME_FAQS } from "@/lib/faqs"
import { pageMetadata } from "@/lib/metadata"
import { SITE_URL } from "@/lib/site"

const TITLE = "Websites, Applications & Software That Make Business Work Better | zuvigo"
const DESCRIPTION =
  "Zuvigo builds modern websites, custom web applications, cloud and desktop software, business automation, and productivity tools for growing businesses."

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  imageAlt: "zuvigo — Websites, Applications and Software",
})

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: TITLE,
  description: DESCRIPTION,
  datePublished: "2024-01-15T00:00:00Z",
  dateModified: "2026-11-13T00:00:00Z",
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
}

export default function Page() {
  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqPageJsonLd(HOME_FAQS)} />
      <HomePage />
    </>
  )
}
