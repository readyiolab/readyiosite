import { ForFoundersPage } from "@/components/pages/ForFoundersPage"
import { JsonLd } from "@/components/site/JsonLd"
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs"
import { faqPageJsonLd, FOUNDER_FAQS } from "@/lib/faqs"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Tech Partner for Founders & Startups | Zuvigo",
  description:
    "Turn your idea into a working product. Zuvigo helps founders build, test, and launch their first version without technical complexity.",
  path: "/for-founders",
  imageAlt: "Zuvigo — Tech Partner for Founders & Startups",
})

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(FOUNDER_FAQS)} />
      <PageBreadcrumbs items={[{ name: "For Founders", href: "/for-founders" }]} />
      <ForFoundersPage />
    </>
  )
}
