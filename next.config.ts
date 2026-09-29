import type { NextConfig } from "next"

const BLOG_URL = (process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.readyio.com").replace(/\/$/, "")
const isDev = process.env.NODE_ENV !== "production"

const contentSecurityPolicy = [
  "default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval'",
  `connect-src 'self' https: wss: https://cloudflareinsights.com https://static.cloudflareinsights.com${isDev ? " http://localhost:* ws://localhost:*" : ""}`,
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://assets.calendly.com https://static.cloudflareinsights.com https://cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  `img-src 'self' data: https: blob:${isDev ? " http://localhost:*" : ""}`,
  "frame-src 'self' https://calendly.com https://www.googletagmanager.com",
].join("; ")

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    qualities: [75],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "**.digitaloceanspaces.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/blog/:slug",
        destination: `${BLOG_URL}/:slug`,
        permanent: true,
      },
    ]
  },
}

export default nextConfig
