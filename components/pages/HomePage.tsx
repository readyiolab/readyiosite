import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Monitor, Box, Cloud, Zap, Star } from "lucide-react";
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
          src="/saas-growth-dashboard.png"
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
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50/70 via-indigo-50/40 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left Text Column */}
          <div className="relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
              TECHNOLOGY FOR A BRIGHTER TOMORROW
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[58px]">
              Websites, applications and software that make business{" "}
              <span className="text-[#2563EB]">work better.</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Zuvigo builds modern websites, custom web applications, cloud and
              desktop software, business automation, and productivity tools for
              growing businesses.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/solutions"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_-5px_rgba(37,99,235,0.65)] active:scale-[0.98]"
              >
                <span className="flex items-center gap-2 rounded-full bg-[#0B0F19] px-7 py-3.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#0B0F19]/90">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span>Explore Solutions</span>
                  <ArrowRight className="h-4 w-4 text-blue-400 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/software"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 backdrop-blur-xs px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Software</span>
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Client Rating */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-gray-800">4.9 / 5</span>
              <span>client rating</span>
              <span className="text-gray-300">|</span>
              <span>Trusted by growing businesses worldwide</span>
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
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Two ways we help businesses
            </h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            From custom development and automation to powerful software products,
            Zuvigo gives you the technology to grow, operate and achieve more.
          </p>
        </div>

        {/* 2 Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Solutions */}
          <Link
            href="/solutions"
            className="group relative flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.12)]"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/70 text-[#2563EB] shadow-xs group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all">
                <Monitor className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                  Solutions — built for your business
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
                  Custom websites, web applications, cloud and desktop software,
                  and business automation tailored to your goals.
                </p>
              </div>
            </div>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-50 border border-slate-100 text-slate-500 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:translate-x-1 transition-all">
              <ChevronRight className="h-5 w-5" />
            </div>
          </Link>

          {/* Card 2: Software */}
          <Link
            href="/software"
            className="group relative flex items-center justify-between rounded-2xl border border-purple-200/80 bg-gradient-to-br from-white via-purple-50/20 to-indigo-50/20 p-7 sm:p-9 shadow-[0_4px_20px_rgba(124,58,237,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.15)]"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-indigo-50 text-[#7C3AED] shadow-xs group-hover:scale-105 group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] transition-all">
                <Box className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#7C3AED] transition-colors">
                  Software — built by Zuvigo
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
                  Powerful productivity tools like PDF Suite, eSign, Diagram Studio
                  and more, designed for modern teams.
                </p>
              </div>
            </div>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white border border-purple-100 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white group-hover:border-[#7C3AED] group-hover:translate-x-1 transition-all">
              <ChevronRight className="h-5 w-5" />
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
      desc: "Modern, high-converting websites for growing businesses.",
      badge: "High-Performance",
      icon: Monitor,
      href: "/solutions#websites",
    },
    {
      title: "Web Application Development",
      desc: "Custom web applications tailored to your workflows.",
      badge: "Custom SaaS",
      icon: Box,
      href: "/solutions#web-apps",
    },
    {
      title: "Cloud & Desktop Software Development",
      desc: "Scalable cloud and desktop software solutions.",
      badge: "Resilient Arch",
      icon: Cloud,
      href: "/solutions#cloud-desktop",
    },
    {
      title: "Business & AI Automation",
      desc: "Automate processes and unlock new efficiency with AI.",
      badge: "AI Powered",
      icon: Zap,
      href: "/solutions#automation",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-snug">
              Custom development for real business impact
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We design and build technology solutions that solve real problems,
              streamline operations and help your business grow.
            </p>
            <div className="pt-3">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B0F19] px-6 py-3 text-xs font-semibold text-white shadow-xs hover:bg-black transition-colors"
              >
                Explore all solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-blue-100 bg-blue-50/70 text-[#2563EB] group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {c.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2563EB]">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
