import { CookiePolicyPage } from "@/components/pages/CookiePolicyPage"
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Cookie Policy | Zuvigo",
  description: "Understand how Zuvigo uses cookies and other technologies to enhance your experience.",
  path: "/cookies",
})

export default function Page() {
  return (
    <>
      <PageBreadcrumbs items={[{ name: "Cookie Policy", href: "/cookies" }]} />
      <CookiePolicyPage />
    </>
  )
}
