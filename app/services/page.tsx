import { SolutionsPage } from "@/components/pages/SolutionsPage"
import { JsonLd } from "@/components/site/JsonLd"
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs"
import { pageMetadata } from "@/lib/metadata"
import { solutionsServiceJsonLd } from "@/lib/schema"

export const metadata = pageMetadata({
  title: "Custom Digital Solutions for Real Business Needs | zuvigo",
  description:
    "Zuvigo builds websites, web applications, cloud and desktop software, and business & AI automation — helping businesses work smarter, move faster, and achieve more.",
  path: "/services",
})

export default function Page() {
  return (
    <>
      <JsonLd data={solutionsServiceJsonLd()} />
      <PageBreadcrumbs items={[{ name: "Services", href: "/services" }]} />
      <SolutionsPage />
    </>
  )
}
