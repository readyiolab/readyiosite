export const SITE = {
  name: "Readyio",
  url: "https://readyio.com",
  tagline: "AI Website Design Company & Smart CRM Automation",
  description:
    "Build high-converting custom websites powered by AI workflows, seamless CRM integrations, and automated lead capture. Scalable web solutions built for growth.",
  email: "hello@readyio.com",
  phone: "+91 90543 97134",
  address: "India / Global Remote",
  bookingUrl: "https://calendly.com/jhanviraywork/30min",
  social: {
    linkedin: "https://linkedin.com/company/zuvigo",
    instagram: "https://www.instagram.com/zuvigofficial?igsh=MWx0NG9rYXI0ajl4cQ==",
  },
};

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || SITE.url).replace(/\/$/, "");
export const BLOG_URL = (process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.readyio.com").replace(/\/$/, "");

export const blogPostUrl = (slug: string) => `${BLOG_URL}/${slug}`;

export const NAV_LINKS = [
  { to: "/services", label: "Services" },
  { to: "/for-founders", label: "For Founders" },
  { to: "/#work", label: "Our Work" },
  { to: "/#about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "For Founders", href: "/for-founders" },
  { label: "Our Work", href: "/#work" },
  { label: "About Us", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book a 30-min Call", href: "https://calendly.com/jhanviraywork/30min", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/company/zuvigo", external: true },
  { label: "Instagram", href: "https://www.instagram.com/zuvigofficial?igsh=MWx0NG9rYXI0ajl4cQ==", external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms of Service", href: "/terms" },
];
