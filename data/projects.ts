export type ProjectKind = "platform" | "website";

export interface Project {
  id: string;
  title: string;
  category: string;
  label?: string;
  description: string;
  results: string[];
  tags: string[];
  image: string;
  link: string;
  kind: ProjectKind;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "igrowbig",
    title: "iGrowBig",
    category: "Digital Platform",
    label: "Distributor Enablement Platform",
    description:
      "A subscription platform giving direct-selling teams personalised websites, lead management, automated follow-ups and centrally managed training.",
    results: [
      "Ready to use business website for NHT Global",
      "Lead capture, lead sales-ready product system",
      "Tools to grow, train your global network",
    ],
    tags: ["Multi-user SaaS", "CRM", "Training Hub", "Automation", "Subscriptions"],
    image: "/igrowbig.png",
    link: "https://igrowbig.com/",
    kind: "platform",
    featured: true,
  },
  {
    id: "arbilo",
    title: "Arbilo",
    category: "Crypto Platform",
    label: "Crypto Arbitrage Intelligence",
    description:
      "A real-time platform that analyses exchange data and trading pairs to surface arbitrage opportunities and actionable signals.",
    results: [
      "Real-time arbitrage signals every 5 minutes",
      "Unique pair-based algorithm for higher profits",
      "Track price gaps & trading cycles across exchanges",
    ],
    tags: ["Algorithms", "Live Data", "Analytics", "Dashboards"],
    image: "/arbiloprojct.png",
    link: "https://arbilo.com/",
    kind: "platform",
  },
  {
    id: "freedomma",
    title: "Freedom M&A",
    category: "AI & Automation",
    label: "AI-Powered Engagement",
    description:
      "An intelligent M&A enquiry system with AI callbacks, lead qualification, automated responses and workflow routing.",
    results: [
      "AI Agent & Chatbot Integration",
      "Twilio Integration for Automated Calls",
      "Seamless Lead Automation System",
    ],
    tags: ["AI Voice", "Twilio", "Lead Qualification", "CRM Workflow"],
    image: "/dave.png",
    link: "https://www.freedommergers.com/",
    kind: "platform",
  },
  {
    id: "empowerlife",
    title: "Empower Life",
    category: "Health & Wellness",
    description:
      "A clean, conversion-focused e-commerce website for a wellness brand.",
    results: [
      "Conversion-focused financial services landing page",
      "Trust-driven UI with metrics & education blocks",
      "Scalable design built for long-term advisory",
    ],
    tags: ["Finance", "Advisory", "Landing Page"],
    image: "/singhkarman.png",
    link: "https://singhkarman.com/",
    kind: "website",
  },
  {
    id: "shinakaur",
    title: "Shina Kaur",
    category: "Author & Speaker",
    description:
      "A personal brand website showcasing books, speaking and media appearances.",
    results: [
      "Private Coaching for Sacred Pivots",
      "Digital Toolkit for self-inquiry",
      "Live Workshops for organizations",
    ],
    tags: ["Coaching", "Wellness", "Strategy"],
    image: "/shina.png",
    link: "https://shinakaur.com/",
    kind: "website",
  },
  {
    id: "cedento",
    title: "Cedento",
    category: "Technology Services",
    description:
      "A professional corporate website for a technology and consulting company.",
    results: [
      "Custom-designed, mobile-ready websites",
      "Integrated booking & practice management",
      "AI-driven SEO & social media strategies",
    ],
    tags: ["Dental", "Marketing", "SEO"],
    image: "/cedento.png",
    link: "https://cedento.com/",
    kind: "website",
  },
];

export const PLATFORM_PROJECTS = PROJECTS.filter((p) => p.kind === "platform");
export const WEBSITE_PROJECTS = PROJECTS.filter((p) => p.kind === "website");
