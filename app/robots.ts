import type { MetadataRoute } from "next"

import { BLOG_URL, SITE_URL } from "@/lib/site"

/**
 * Explicit allow rules for search + model-training crawlers (GEO/AEO).
 * Training bots are intentionally allowed so answer engines can cite Zuvigo.
 */
export default function robots(): MetadataRoute.Robots {
  const allowSite = {
    allow: "/",
    disallow: "/api/",
  } as const

  return {
    rules: [
      {
        userAgent: "*",
        ...allowSite,
      },
      // Search crawlers
      { userAgent: "Googlebot", ...allowSite },
      { userAgent: "Bingbot", ...allowSite },
      { userAgent: "OAI-SearchBot", ...allowSite },
      { userAgent: "PerplexityBot", ...allowSite },
      { userAgent: "Applebot", ...allowSite },
      // Model-training crawlers (allowed for GEO)
      { userAgent: "GPTBot", ...allowSite },
      { userAgent: "ClaudeBot", ...allowSite },
      { userAgent: "Google-Extended", ...allowSite },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${BLOG_URL}/sitemap.xml`],
    host: SITE_URL,
  }
}
