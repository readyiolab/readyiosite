import { TermsPage } from "@/components/pages/TermsPage"
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Terms of Service | Zuvigo",
  description: "Terms and conditions governing the use of the Zuvigo Technologies website and services.",
  path: "/terms",
})

export default function Page() {
  return (
    <>
      <PageBreadcrumbs items={[{ name: "Terms of Service", href: "/terms" }]} />
      <TermsPage />
    </>
  )
}
