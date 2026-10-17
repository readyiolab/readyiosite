"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { HeroVisualSolutions } from "@/components/pages/HeroVisualSolutions";
import { AuroraCTA } from "@/components/site/AuroraCTA";

export function SolutionsPage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#111827]">
      {/* 1. HERO SECTION */}
      <SolutionsHero />

      {/* 2. FOUR SOLUTIONS ROW WITH RICH HIGHLIGHTS */}
      <FourSolutionsRow />

      {/* 2.5 ENGINEERING & ARCHITECTURE SHOWCASE */}
      <EngineeringShowcaseSection />

      {/* 3. WHAT WE BUILD (2x3 GRID WITH ACCENTS) */}
      <WhatWeBuildSection />

      {/* 4. HOW WE WORK (TIMELINE PROCESS CARDS) */}
      <HowWeWorkSection />

      {/* 5. READY TO DISCUSS BANNER */}
      <ReadyToDiscussBanner />
    </div>
  );
}

/* ---------------- 1. Solutions Hero ---------------- */
function SolutionsHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Subtle radial ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 right-10 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left Text */}
          <div className="relative z-10 text-center sm:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-gradient-to-r from-blue-50 to-sky-50 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB] shadow-2xs">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#2563EB] animate-pulse" />
              SOLUTIONS BUILT FOR YOUR BUSINESS
            </div>

            {/* Headline */}
            <h1 className="mt-4 sm:mt-5 font-heading text-[26px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[58px] font-bold leading-[1.12] sm:leading-[1.1] tracking-tight text-[#111827]">
              Custom digital solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
                real business needs.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 sm:mt-5 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-lg mx-auto sm:mx-0">
              Zuvigo builds websites, web applications, cloud and desktop
              software, and business &amp; AI automation — helping businesses
              work smarter, move faster, and achieve more.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/contact"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-[1.5px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_-5px_rgba(37,99,235,0.65)] active:scale-[0.98]"
              >
                <span className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#0B0F19] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#0B0F19]/90">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="h-4 w-4 text-blue-400 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>

              <a
                href="#how-we-work"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/90 backdrop-blur-xs px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-gray-800 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="h-3.5 w-3.5 fill-gray-800 text-gray-800 transition-transform group-hover:scale-110" />
                <span>See How We Work</span>
              </a>
            </div>
          </div>

          {/* Right Mockup Graphic */}
          <div className="relative">
            <HeroVisualSolutions />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Four Solutions Row (High-End Polish) ---------------- */
function FourSolutionsRow() {
  const items = [
    {
      id: "websites",
      title: "Website Development",
      desc: "Modern, high-converting websites that grow your business.",
      badge: "Fast & SEO-Driven",
      iconSrc: "/icons/website-development.webp",
      href: "/contact",
    },
    {
      id: "web-apps",
      title: "Web Application Development",
      desc: "Custom web applications tailored to your business goals.",
      badge: "Tailored Workflows",
      iconSrc: "/icons/web-application-development.webp",
      href: "/contact",
    },
    {
      id: "cloud-desktop",
      title: "Cloud & Desktop Software Development",
      desc: "Scalable cloud and desktop software built for your operations.",
      badge: "High Resilience",
      iconSrc: "/icons/cloud-desktop-software-development.webp",
      href: "/contact",
    },
    {
      id: "automation",
      title: "Business & AI Automation",
      desc: "Automate processes and unlock new efficiency with AI.",
      badge: "Smart Agents",
      iconSrc: "/icons/business-ai-automation.webp",
      href: "/contact",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 border-t border-slate-100 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle radial ambient glow behind header */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-6 left-1/2 -z-10 h-72 w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-100/60 via-sky-50/40 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-gradient-to-r from-blue-50/90 via-sky-50/80 to-indigo-50/90 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
            <span>CORE DEVELOPMENT &amp; SOLUTIONS</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            Specialized Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From high-conversion websites and custom web apps to resilient cloud infrastructure and AI automation—built for performance and long-term reliability.
          </p>

          {/* Capability Highlight Tags */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 border border-slate-200/90 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Fast &amp; SEO-Driven Web
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 border border-slate-200/90 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Bespoke Web Applications
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 border border-slate-200/90 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Cloud &amp; Desktop Systems
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 border border-slate-200/90 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              Autonomous AI &amp; Agents
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => {
            return (
              <Link
                key={item.id}
                id={item.id}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/80"
              >
                {/* Top subtle highlight gradient on card hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={item.iconSrc}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                      />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all duration-200" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2.5 Engineering & Architecture Showcase ---------------- */
function EngineeringShowcaseSection() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            ENGINEERED FOR SCALE
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Robust architecture &amp; intelligent systems
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-600 leading-relaxed">
            Every solution we build is backed by industrial-grade cloud infrastructure and modern AI capabilities designed to evolve with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Card 1: Cloud & API Microservices */}
          <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-slate-50/20 to-white p-4 sm:p-6 lg:p-7 shadow-sm">
            <div className="relative mb-5 sm:mb-6 h-44 sm:h-56 lg:h-60 w-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/30">
              <Image
                src="/isometric-api-infrastructure.webp"
                alt="Cloud database, REST APIs, and microservices architecture"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                APIS &amp; DATA SYSTEMS
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-gray-950">
                Cloud Architecture &amp; Scalable APIs
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                Multi-region cloud clusters, real-time REST/GraphQL APIs, and high-throughput databases built for 99.99% uptime.
              </p>

              <ul className="mt-4 sm:mt-5 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Automated container scaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Real-time traffic load balancing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Sub-millisecond query caching</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Cyber Security & Authentication */}
          <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-slate-50/20 to-white p-4 sm:p-6 lg:p-7 shadow-sm">
            <div className="relative mb-5 sm:mb-6 h-44 sm:h-56 lg:h-60 w-full overflow-hidden rounded-xl sm:rounded-2xl border border-blue-100/70 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/30">
              <Image
                src="/isometric-cyber-security.webp"
                alt="Biometric verification, cybersecurity shield, and encrypted authentication"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                CYBERSECURITY &amp; COMPLIANCE
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-gray-950">
                Enterprise Security &amp; Biometrics
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                Zero-trust authentication, biometric identity gates, and SHA-256 cryptographic audit trails to protect your operations.
              </p>

              <ul className="mt-4 sm:mt-5 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Zero-Trust RBAC &amp; SSO</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Biometric authentication gates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>SOC-2 &amp; GDPR compliance ready</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: AI & Autonomous Workflows */}
          <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-slate-50/20 to-white p-4 sm:p-6 lg:p-7 shadow-sm">
            <div className="relative mb-5 sm:mb-6 h-44 sm:h-56 lg:h-60 w-full overflow-hidden rounded-xl sm:rounded-2xl border border-blue-100/60 bg-gradient-to-b from-blue-50/30 via-white to-slate-50/30">
              <Image
                src="/isometric-ai-automation.webp"
                alt="AI automation, smart bots, and automated pipeline illustration"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600">
                WORKFLOW AUTOMATION
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-gray-950">
                Intelligent AI &amp; Automation
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                Eliminate manual overhead with custom autonomous agents, document intelligence, and multi-system automation.
              </p>

              <ul className="mt-4 sm:mt-5 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Autonomous AI review guards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Instant CRM &amp; ERP syncing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>Real-time anomaly self-healing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. What We Build Section (Rich 2x3 Grid) ---------------- */
function WhatWeBuildSection() {
  const cards = [
    {
      title: "Business websites",
      desc: "Engaging, high-performance websites that generate leads and build trust.",
      tag: "Lead Generation",
      iconSrc: "/icons/business-websites.webp",
    },
    {
      title: "Customer portals",
      desc: "Secure portals for customers, partners and members.",
      tag: "Role-Based Access",
      iconSrc: "/icons/customer-portals.webp",
    },
    {
      title: "Internal tools",
      desc: "Custom tools to streamline operations and increase productivity.",
      tag: "Ops & Analytics",
      iconSrc: "/icons/internal-tools.webp",
    },
    {
      title: "Workflow systems",
      desc: "Digitalise and automate complex business processes.",
      tag: "End-to-End Logic",
      iconSrc: "/icons/workflow-systems.webp",
    },
    {
      title: "Process automation",
      desc: "Save time and reduce manual work with intelligent automation.",
      tag: "Zero Redundancy",
      iconSrc: "/icons/process-automation.webp",
    },
    {
      title: "Custom integrations",
      desc: "Connect your systems and data for a seamless workflow.",
      tag: "API & Data Pipes",
      iconSrc: "/icons/custom-integrations.webp",
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 lg:py-28 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 sm:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-4 lg:sticky lg:top-28 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB] border border-blue-100/70">
              WHAT WE BUILD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              Digital solutions for every stage of your business.
            </h2>
            <p className="text-xs sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto sm:mx-0">
              From customer-facing websites to complex internal systems, we build
              practical, scalable solutions that solve real business challenges.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-black transition-colors w-full sm:w-auto"
              >
                Let&apos;s Talk about a custom build
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
            {cards.map((c) => {
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                      <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                        <Image
                          src={c.iconSrc}
                          alt={c.title}
                          width={48}
                          height={48}
                          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                        {c.tag}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">
                      {c.title}
                    </h4>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. How We Work Section (Timeline Polish) ---------------- */
function HowWeWorkSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We learn about your business, goals and challenges.",
      iconSrc: "/icons/discover.webp",
    },
    {
      num: "02",
      title: "Design",
      desc: "We define the solution, create UX/UI designs and plan the build.",
      iconSrc: "/icons/design.webp",
    },
    {
      num: "03",
      title: "Develop",
      desc: "We build, test and refine your solution with regular updates.",
      iconSrc: "/icons/develop.webp",
    },
    {
      num: "04",
      title: "Deploy & Support",
      desc: "We launch your solution and provide ongoing support to ensure long-term success.",
      iconSrc: "/icons/deploy-support.webp",
    },
  ];

  return (
    <section id="how-we-work" className="relative py-12 sm:py-20 lg:py-28 border-t border-slate-100 bg-slate-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14 text-center sm:text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            HOW WE WORK
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            A clear, proven process from idea to impact.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-600 leading-relaxed">
            We keep things simple and collaborative, so you always know what's
            happening and can move forward with confidence.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {steps.map((s, i) => {
            return (
              <div
                key={s.num}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-950 font-mono leading-none">
                      {s.num}
                    </span>
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                      <Image
                        src={s.iconSrc}
                        alt={s.title}
                        width={48}
                        height={48}
                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                      />
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    {s.title}
                  </h4>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-slate-300 font-bold z-10">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Ready To Discuss Banner ---------------- */
function ReadyToDiscussBanner() {
  return (
    <AuroraCTA
      eyebrow="LET'S BUILD SOMETHING GREAT"
      heading="Ready to discuss your project?"
      subtitle="Book a no-pitch discovery session. We will review your goals, map out technical feasibility, and propose an actionable timeline."
      buttonText="Let's Talk"
      buttonHref="/contact"
      secondaryButtonText="Send an Inquiry"
      secondaryButtonHref="/contact"
    />
  );
}
