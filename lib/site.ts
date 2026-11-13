export const SITE = {
  name: "Zuvigo",
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
    pdf: "https://vigodesk.com/",
    workspace: "https://vigodesk.com/workspace",
    esign: "https://vigodesk.com/esign",
    letters: "https://vigodesk.com/letters",
    diagrams: "https://vigodesk.com/diagrams",
    webreports: "https://vigodesk.com/webreports",
    enterprise: "https://vigodesk.com/enterprise",
    desktop: "https://vigodesk.com/desktop",
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
  { label: "VigoPDF", href: "https://vigodesk.com/", external: true },
  { label: "Productivity Workspace", href: "https://vigodesk.com/workspace", external: true },
  { label: "eSign", href: "https://vigodesk.com/esign", external: true },
  { label: "VigoLetters", href: "https://vigodesk.com/letters", external: true },
  { label: "VigoFlow", href: "https://vigodesk.com/diagrams", external: true },
  { label: "Desktop Software", href: "https://vigodesk.com/desktop", external: true },
  { label: "Let's Talk", href: "/contact" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zuvigo", external: true },
  { label: "Instagram", href: "https://www.instagram.com/zuvigofficial?igsh=MWx0NG9rYXI0ajl4cQ==", external: true },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms of Service", href: "/terms" },
];
