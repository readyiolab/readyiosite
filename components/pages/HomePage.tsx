import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { HeroVisualHome } from "@/components/pages/HeroVisualHome";

const HomeSections = dynamic(
  () => import("@/components/pages/HomePage.client").then((m) => m.HomeSections),
  { ssr: true }
);

export function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#111827]">
      {/* 1. HERO SECTION (Matching Reference Image 1) */}
      <HeroSection />

      {/* 2. TWO WAYS WE HELP BUSINESSES (Matching Reference Image 1) */}
      <CapabilitiesSection />

      {/* 3. CUSTOM DEVELOPMENT FOR REAL BUSINESS IMPACT (Matching Reference Image 1) */}
      <SolutionsOverviewSection />

      {/* Additional sections (Our Work, Process, FAQ, CTA) */}
      <HomeSections />
    </div>
  );
}

/* ---------------- 1. Hero Section ---------------- */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Background Asset: SaaS Growth Dashboard clearly visible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <Image
          src="/saas-growth-dashboard.webp"
          alt="SaaS Growth Dashboard Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top-right opacity-60 sm:opacity-70"
        />
        {/* Subtle white fade on the left for text readability and soft bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent lg:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Top subtle radiant background mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left Text Column */}
          <div className="relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              TECHNOLOGY FOR A BRIGHTER TOMORROW
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.15] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-[50px] xl:text-[56px]">
              Websites, applications and software that make business{" "}
              <span className="text-[#2563EB]">work better.</span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-lg">
              Zuvigo builds modern websites, custom web applications, cloud and
              desktop software, business automation, and productivity tools for
              growing businesses.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <Link
                href="/solutions"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-[1.5px] bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_-5px_rgba(37,99,235,0.65)] active:scale-[0.98]"
              >
                <span className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0B0F19] px-7 py-3.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#0B0F19]/90">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span>Explore Solutions</span>
                  <ArrowRight className="h-4 w-4 text-blue-400 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/software"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/90 backdrop-blur-xs px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Software</span>
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>


          </div>

          {/* Right Hero Graphic Mockup */}
          <div className="relative">
            <HeroVisualHome />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Two Ways We Help Businesses ---------------- */
function CapabilitiesSection() {
  return (
    <section className="relative py-20 sm:py-24 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              OUR CAPABILITIES
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Two ways we help businesses
            </h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            From custom development and automation to powerful software products,
            Zuvigo gives you the technology to grow, operate and achieve more.
          </p>
        </div>

        {/* 2 Split Showcase Cards with 3D Isometric Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Solutions */}
          <Link
            href="/solutions"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.18)]"
          >
            {/* Top Visual Showcase */}
            <div className="relative mb-6 h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/30">
              <Image
                src="/isometric-software-dev.webp"
                alt="Solutions — 3D isometric custom software development, cloud servers, and analytics"
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

            </div>

            {/* Content Details */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-gray-950 group-hover:text-[#2563EB] transition-colors">
                  Solutions — built for your business
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Custom websites, scalable web applications, cloud infrastructure, and autonomous AI integrations engineered around your exact operational workflows.
              </p>


            </div>

            {/* Card Action Link */}
            <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#2563EB]">
              <span>Explore Custom Solutions</span>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 2: Software */}
          <Link
            href="/software"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-[0_10px_30px_rgba(37,99,235,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.18)]"
          >
            {/* Top Visual Showcase */}
            <div className="relative mb-6 h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/30">
              <Image
                src="/isometric-saas-tools.webp"
                alt="Software — 3D isometric productivity tools, VigoPDF, digital contracts and eSign"
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

            </div>

            {/* Content Details */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-gray-950 group-hover:text-[#2563EB] transition-colors">
                  Software — built by Zuvigo
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Ready-to-deploy software products including VigoPDF, digital eSign, and document automation workflows designed to empower modern business teams.
              </p>

            </div>

            {/* Card Action Link */}
            <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#2563EB]">
              <span>Explore Software Suite</span>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Custom Development For Real Business Impact ---------------- */
function SolutionsOverviewSection() {
  const cards = [
    {
      title: "Website Development",
      desc: "High-converting, responsive websites engineered for ultra-fast speeds, SEO authority, and seamless user experiences.",
      iconSrc: "/icons/website-development.webp",
      href: "/solutions#websites",
      isPrimary: true,
    },
    {
      title: "Web Application Development",
      desc: "Custom SaaS applications, client portals, and bespoke web software built to streamline complex business operations.",
      iconSrc: "/icons/web-application-development.webp",
      href: "/solutions#web-apps",
      isPrimary: false,
    },
    {
      title: "Cloud & Desktop Software",
      desc: "Scalable cloud infrastructure, desktop software, and high-throughput microservices architected for 99.99% uptime.",
      iconSrc: "/icons/cloud-desktop-software-development.webp",
      href: "/solutions#cloud-desktop",
      isPrimary: false,
    },
    {
      title: "Business & AI Automation",
      desc: "Autonomous AI workflows, custom integrations, and smart automations that eliminate manual tasks and accelerate growth.",
      iconSrc: "/icons/business-ai-automation.webp",
      href: "/solutions#automation",
      isPrimary: false,
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header matching reference image: Title & Subtitle on left, Pill Button on right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              SOLUTIONS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.15]">
              Custom development for real business impact
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              We design and build technology solutions that solve real problems,
              streamline operations, and help your business grow.
            </p>
          </div>

          <div className="shrink-0 self-start md:self-end">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1221] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#2563EB] transition-all duration-300"
            >
              Explore all solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => {
            if (c.isPrimary) {
              return (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group relative flex flex-col justify-between rounded-3xl bg-[#0B1221] p-7 sm:p-8 text-white shadow-md border border-slate-800 min-h-[380px] sm:min-h-[420px]"
                >
                  <div>
                    {/* Custom Asset Icon - Standalone, no border or bg */}
                    <div className="relative h-12 w-12 shrink-0">
                      <Image
                        src={c.iconSrc}
                        alt={c.title}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                    </div>

                    {/* Card Title */}
                    <h3 className="mt-8 text-2xl font-bold leading-snug tracking-tight text-white">
                      {c.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {c.desc}
                    </p>
                  </div>

                  {/* Bottom Pill Button */}
                  <div className="mt-8 pt-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-gray-950 shadow-xs">
                      Learn More
                    </span>
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={c.title}
                href={c.href}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#F8FAFC] p-7 sm:p-8 text-gray-900 shadow-xs border border-slate-200/90 min-h-[380px] sm:min-h-[420px]"
              >
                <div>
                  {/* Custom Asset Icon - Standalone, no border or bg */}
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={c.iconSrc}
                      alt={c.title}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-8 text-2xl font-bold leading-snug tracking-tight text-gray-950">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600">
                    {c.desc}
                  </p>
                </div>

                {/* Bottom Pill Button */}
                <div className="mt-8 pt-2">
                  <span className="inline-flex items-center justify-center rounded-full bg-[#0B1221] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs">
                    Learn More
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
