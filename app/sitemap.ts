import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/site"

const PAGES: Array<{ path: string; changeFrequency: "daily" | "weekly" | "monthly" | "yearly"; priority: number }> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/for-founders", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "/" : page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
