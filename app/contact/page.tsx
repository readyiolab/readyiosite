import { ContactPage } from "@/components/pages/ContactPage"
import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Contact Zuvigo — Start Your Next Web, CRM or AI System",
  description:
    "Tell us what you're building. We reply within one business day with a scoped plan for what's possible, timelines, and technology architecture.",
  path: "/contact",
  ogTitle: "Contact Zuvigo — Start Your Next System",
  ogDescription: "Start your next system with a one-team technology partner.",
  imageAlt: "Contact Zuvigo",
})

export default function Page() {
  return (
    <>
      <PageBreadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <ContactPage />
    </>
  )
}
