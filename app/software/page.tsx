import { SoftwarePage } from "@/components/pages/SoftwarePage"
import { JsonLd } from "@/components/site/JsonLd"
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs"
import { pageMetadata } from "@/lib/metadata"
import { softwareApplicationsJsonLd } from "@/lib/schema"

export const metadata = pageMetadata({
  title: "Practical Software for Documents & Workflows | zuvigo",
  description:
    "Zuvigo builds powerful software for modern teams. Products include VigoPDF, eSign, VigoFlow, VigoLetters, Productivity Suite and Desktop Software.",
  path: "/software",
})

export default function Page() {
  return (
    <>
      <JsonLd data={softwareApplicationsJsonLd()} />
      <PageBreadcrumbs items={[{ name: "Software", href: "/software" }]} />
      <SoftwarePage />
    </>
  )
}
