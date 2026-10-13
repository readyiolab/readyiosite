import { HomePage } from "@/components/pages/HomePage"
import { JsonLd } from "@/components/site/JsonLd"
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
  dateModified: "2026-09-28T00:00:00Z",
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Zuvigo specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zuvigo specializes in custom website design, web applications, cloud & desktop software, and business automation, alongside productivity software like PDF Suite and Diagram Studio.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Zuvigo for solutions and software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zuvigo provides end-to-end delivery where your marketing site, custom web systems, software tools, and business automations seamlessly work together under one accountable technology partner.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical custom website or CRM implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most custom marketing websites and initial product versions (MVPs) are designed, built, and launched in 3 to 6 weeks. Comprehensive custom CRM systems, ERPs, or advanced AI agents typically launch within 6 to 12 weeks with milestone-based visibility.",
      },
    },
    {
      "@type": "Question",
      name: "How do AI automations integrate with our existing CRM and tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We integrate directly with your current technology stack (Salesforce, HubSpot, PostgreSQL/MongoDB databases, Google Workspace, Slack, n8n, etc.) or deploy custom AI agents that automate customer support, lead qualification, and reporting tasks with strict guardrails.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqJsonLd} />
      <HomePage />
    </>
  )
}
