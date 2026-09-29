import type { Metadata, Viewport } from "next"
import { Manrope } from "next/font/google"

import "./globals.css"
import { Footer } from "@/components/site/Footer"
import { GoogleTagManager } from "@/components/site/GoogleTagManager"
import { JsonLd } from "@/components/site/JsonLd"
import { LazyAIChatbot } from "@/components/site/LazyAIChatbot"
import { Nav } from "@/components/site/Nav"
import { Toaster } from "@/components/site/Toaster"
import { SITE, SITE_URL } from "@/lib/site"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
})

const GTM_ID = "GTM-MGCXVKMP"
const DEFAULT_TITLE = "AI Website Design Company & Smart CRM Automation | readyio"
const OG_IMAGE_ALT = "Readyio — AI Website Design Company & Smart CRM Automation"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: SITE.description,
  authors: [{ name: "Readyio" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "D9f6h5lhFrpEi8E-OIyaeJBKEysFMmddnG8r_tBL_Qw",
  },
  openGraph: {
    siteName: SITE.name,
    type: "website",
    title: DEFAULT_TITLE,
    description: SITE.description,
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE.description,
    images: [{ url: "/og-image.jpg", alt: OG_IMAGE_ALT }],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }, { url: "/logo.webp", type: "image/webp" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#4F46E5",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/og-image.jpg`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "India / Global Remote",
  },
  sameAs: [SITE.social.linkedin, SITE.social.instagram],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE.name,
  url: `${SITE_URL}/`,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context" />
      </head>
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <div className="relative min-h-dvh bg-background text-foreground antialiased">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <LazyAIChatbot />
          <Toaster />
        </div>
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  )
}
