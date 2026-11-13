export type FaqItem = { q: string; a: string }

export const HOME_FAQS: FaqItem[] = [
  {
    q: "What services does Zuvigo specialize in?",
    a: "Zuvigo is a dedicated technology partner specializing in custom website design, high-performance web applications, tailored CRM/ERP systems, and AI-driven automation workflows. We handle architecture, UI/UX design, engineering, integration, and post-launch maintenance under one unified team.",
  },
  {
    q: "Why choose one accountable team instead of hiring multiple agencies?",
    a: "Splitting projects across multiple specialized agencies leads to translation loss, disjointed user experiences, conflicting technical stacks, and endless vendor coordination. Zuvigo ensures your marketing site, sales CRM, and AI automations seamlessly synchronize without handoff friction.",
  },
  {
    q: "How long does a typical custom website or CRM implementation take?",
    a: "Most custom marketing websites and initial product versions (MVPs) are designed, built, and launched in 3 to 6 weeks. Comprehensive custom CRM systems, ERPs, or advanced AI agents typically launch within 6 to 12 weeks with milestone-based delivery and continuous progress visibility.",
  },
  {
    q: "How do AI automations integrate with our existing CRM and software tools?",
    a: "We integrate directly with your current technology stack (HubSpot, Salesforce, custom PostgreSQL/MongoDB databases, Google Workspace, Slack, n8n, etc.) or deploy custom AI agents that automate repetitive customer support, lead qualification, and reporting tasks with strict guardrails.",
  },
  {
    q: "Can Zuvigo act as the technical partner for non-technical founders?",
    a: "Yes! Our 'For Founders' program is purpose-built for domain experts and entrepreneurs. We help you scope the right first version, choose the ideal tech stack, develop the product, and assist through launch without the overhead of hiring an in-house engineering team.",
  },
  {
    q: "How does pricing and engagement work?",
    a: "We offer transparent, milestone-based fixed pricing for scoped builds, as well as flexible monthly retainers for ongoing development and support. Schedule a free 30-minute discovery call to receive a detailed scope and estimate.",
  },
]

export const FOUNDER_FAQS: FaqItem[] = [
  {
    q: "How do you help validate my idea?",
    a: "We help you define your core value proposition, identify key user journeys, and build a high-converting validation website or MVP to test real market demand before heavy development.",
  },
  {
    q: "How do you decide what to build first?",
    a: "We prioritize features based on user impact and core business goals. Unnecessary complexity is deferred so you launch the smallest credible product fast.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, scalable web technologies like React, TypeScript, Node.js, Next.js/Vite, Tailwind, and MySQL/PostgreSQL paired with cloud infrastructure.",
  },
  {
    q: "How do you work together?",
    a: "We work as your dedicated technical delivery team. You get clear milestone-based scopes, regular demonstrations, and transparent communication throughout.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes! We stay with you after launch to monitor stability, improve feature sets based on user feedback, and scale infrastructure as your business grows.",
  },
]

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }
}
