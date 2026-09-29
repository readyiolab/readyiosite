import { ContactPage } from "@/components/pages/ContactPage"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Contact Readyio — Start Your Next Web, CRM or AI System",
  description:
    "Tell us what you're building. We reply within one business day with a scoped plan for what's possible, timelines, and technology architecture.",
  path: "/contact",
  ogTitle: "Contact Readyio — Start Your Next System",
  ogDescription: "Start your next system with a one-team technology partner.",
  imageAlt: "Contact Readyio",
})

export default function Page() {
  return <ContactPage />
}
