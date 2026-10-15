export const SITE = {
  name: "zuvigo",
  url: "https://zuvigo.com",
  tagline: "Websites, applications and software that make business work better",
  description:
    "Zuvigo builds modern websites, custom web applications, cloud and desktop software, business automation, and productivity tools for growing businesses.",
  email: "hello@zuvigo.com",
  phone: "+91 90543 97134",
  address: "India / Global Remote",
  bookingUrl: "/contact",
  social: {
    linkedin: "https://linkedin.com/company/zuvigo",
    instagram: "https://www.instagram.com/zuvigofficial?igsh=MWx0NG9rYXI0ajl4cQ==",
  },
  softwareUrls: {
    pdf: "https://pdf.zuvigo.com/",
    workspace: "https://pdf.zuvigo.com/workspace",
    esign: "https://pdf.zuvigo.com/esign",
    letters: "https://pdf.zuvigo.com/letters",
    diagrams: "https://pdf.zuvigo.com/diagrams",
    webreports: "https://pdf.zuvigo.com/webreports",
    enterprise: "https://pdf.zuvigo.com/enterprise",
    desktop: "https://pdf.zuvigo.com/desktop",
  },
};

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || SITE.url).replace(/\/$/, "");
export const BLOG_URL = (process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.zuvigo.com").replace(/\/$/, "");

export const blogPostUrl = (slug: string) => `${BLOG_URL}/${slug}`;

export const NAV_LINKS = [
  { to: "/solutions", label: "Solutions", hasDropdown: true },
  { to: "/software", label: "Software", hasDropdown: true },
  { to: "/#work", label: "Our Work" },
  { to: "/#about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Software", href: "/software" },
  { label: "Our Work", href: "/#work" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
  { label: "VigoPDF", href: "https://pdf.zuvigo.com/", external: true },
  { label: "Productivity Workspace", href: "https://pdf.zuvigo.com/workspace", external: true },
  { label: "eSign", href: "https://pdf.zuvigo.com/esign", external: true },
  { label: "VigoLetters", href: "https://pdf.zuvigo.com/letters", external: true },
  { label: "VigoFlow", href: "https://pdf.zuvigo.com/diagrams", external: true },
  { label: "Desktop Software", href: "https://pdf.zuvigo.com/desktop", external: true },
  { label: "Let's Talk", href: "/contact" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zuvigo", external: true },
  { label: "Instagram", href: "https://www.instagram.com/zuvigofficial?igsh=MWx0NG9rYXI0ajl4cQ==", external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms of Service", href: "/terms" },
];
