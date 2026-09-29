import { ServicesPage } from "@/components/pages/ServicesPage"
import { JsonLd } from "@/components/site/JsonLd"
import { pageMetadata } from "@/lib/metadata"
import { SITE_URL } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Custom Web Development & Automated CRM Solutions | readyio",
  description:
    "Transform web traffic into revenue. Custom website design with native CRM automation, instant lead processing, and AI-driven user experience optimization.",
  path: "/services",
  imageAlt: "Readyio Services — Web, CRM and AI Solutions",
})

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Development & Automated CRM Solutions",
  provider: {
    "@type": "Organization",
    name: "Readyio",
    url: SITE_URL,
  },
  serviceType: "Web Development, CRM Systems & AI Automation",
  areaServed: "Global",
  description:
    "High-conversion websites, tailored CRM systems, and practical AI workflow automations delivered by one accountable engineering team.",
}

export default function Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServicesPage />
    </>
  )
}
