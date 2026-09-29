import { HomePage } from "@/components/pages/HomePage"
import { JsonLd } from "@/components/site/JsonLd"
import { pageMetadata } from "@/lib/metadata"
import { SITE_URL } from "@/lib/site"

const TITLE = "AI Website Design Company & Smart CRM Automation | readyio"
const DESCRIPTION =
  "Build high-converting custom websites with AI workflows, seamless CRM integrations, and automated lead capture. Scalable solutions built for growth."

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  imageAlt: "Readyio — AI Website Design Company & Smart CRM Automation",
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
      name: "What services does Readyio specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Readyio is a full-stack digital partner specializing in custom website design, web applications, tailored CRM/ERP systems, and AI-driven automation workflows under one accountable team.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose one accountable team instead of separate agencies for web, CRM, and AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Splitting projects across multiple specialized vendors leads to translation loss, fragmented data pipelines, conflicting codebases, and endless coordination meetings. Readyio provides end-to-end delivery where your marketing site, sales CRM, and AI automations seamlessly communicate.",
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
