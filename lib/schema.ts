import { SITE, SITE_URL } from "@/lib/site"

export function solutionsServiceJsonLd() {
  const services = [
    {
      name: "Website Development",
      description:
        "Business websites, landing pages, and conversion-focused web experiences designed for growth.",
      url: `${SITE_URL}/solutions`,
    },
    {
      name: "Web Application Development",
      description:
        "Custom web applications, customer portals, and internal tools built around real workflows.",
      url: `${SITE_URL}/solutions`,
    },
    {
      name: "Cloud & Desktop Software Development",
      description:
        "Cloud platforms, private deployments, and offline-first desktop software for modern teams.",
      url: `${SITE_URL}/solutions`,
    },
    {
      name: "Business & AI Automation",
      description:
        "Practical AI assistants and workflow automations for leads, support, documents, and reporting.",
      url: `${SITE_URL}/solutions`,
    },
  ]

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zuvigo Digital Solutions",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE.name,
        },
      },
    })),
  }
}

export function softwareApplicationsJsonLd() {
  const products = [
    {
      name: "VigoPDF",
      description: "Document editing and PDF workflows for modern teams.",
      url: SITE.softwareUrls.pdf,
    },
    {
      name: "eSign",
      description: "Digital signatures and contract workflows.",
      url: SITE.softwareUrls.esign,
    },
    {
      name: "VigoFlow",
      description: "Diagrams and workflow tooling for process clarity.",
      url: SITE.softwareUrls.diagrams,
    },
    {
      name: "VigoLetters",
      description: "Letter and document automation at scale.",
      url: SITE.softwareUrls.letters,
    },
    {
      name: "Productivity Suite",
      description: "Unified workspace combining Zuvigo document and workflow tools.",
      url: SITE.softwareUrls.workspace,
    },
    {
      name: "Desktop Software",
      description: "Offline-first desktop applications for secure, local work.",
      url: SITE.softwareUrls.desktop,
    },
  ]

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zuvigo Software Products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        description: product.description,
        url: product.url,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Windows, macOS",
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE.name,
        },
      },
    })),
  }
}
