"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Star,
  Monitor,
  Box,
  Cloud,
  Zap,
  Users,
  LayoutGrid,
  Settings,
  GitBranch,
  Link2,
  Search,
  PenTool,
  Code2,
  Rocket,
  Calendar,
  CheckCircle2,
  ChevronRight,
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
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Subtle radial ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 right-10 -z-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left Text */}
          <div className="relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/90 bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#7C3AED] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED] animate-pulse" />
              SOLUTIONS BUILT FOR YOUR BUSINESS
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[58px]">
              Custom digital solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                real business needs.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Zuvigo builds websites, web applications, cloud and desktop
              software, and business &amp; AI automation — helping businesses
              work smarter, move faster, and achieve more.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_-5px_rgba(37,99,235,0.65)] active:scale-[0.98]"
              >
                <span className="flex items-center gap-2 rounded-full bg-[#0B0F19] px-7 py-3.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#0B0F19]/90">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="h-4 w-4 text-blue-400 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>

              <a
                href="#how-we-work"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 backdrop-blur-xs px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="h-3.5 w-3.5 fill-gray-800 text-gray-800 transition-transform group-hover:scale-110" />
                <span>See How We Work</span>
              </a>
            </div>

            {/* Rating */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-gray-900">4.9 / 5</span>
              <span>client rating</span>
              <span className="text-gray-300">|</span>
              <span>Trusted by growing businesses worldwide</span>
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
      icon: Monitor,
      href: "/solutions#websites",
    },
    {
      id: "web-apps",
      title: "Web Application Development",
      desc: "Custom web applications tailored to your business goals.",
      badge: "Tailored Workflows",
      icon: Box,
      href: "/solutions#web-apps",
    },
    {
      id: "cloud-desktop",
      title: "Cloud & Desktop Software Development",
      desc: "Scalable cloud and desktop software built for your operations.",
      badge: "High Resilience",
      icon: Cloud,
      href: "/solutions#cloud-desktop",
    },
    {
      id: "automation",
      title: "Business & AI Automation",
      desc: "Automate processes and unlock new efficiency with AI.",
      badge: "Smart Agents",
      icon: Zap,
      href: "/solutions#automation",
    },
  ];

  return (
    <section className="relative py-14 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/60 text-[#2563EB] shadow-2xs group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2563EB]">
                  <span>Learn more</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
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
      icon: Monitor,
    },
    {
      title: "Customer portals",
      desc: "Secure portals for customers, partners and members.",
      tag: "Role-Based Access",
      icon: Users,
    },
    {
      title: "Internal tools",
      desc: "Custom tools to streamline operations and increase productivity.",
      tag: "Ops & Analytics",
      icon: LayoutGrid,
    },
    {
      title: "Workflow systems",
      desc: "Digitalise and automate complex business processes.",
      tag: "End-to-End Logic",
      icon: Settings,
    },
    {
      title: "Process automation",
      desc: "Save time and reduce manual work with intelligent automation.",
      tag: "Zero Redundancy",
      icon: GitBranch,
    },
    {
      title: "Custom integrations",
      desc: "Connect your systems and data for a seamless workflow.",
      tag: "API & Data Pipes",
      icon: Link2,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-4 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2563EB] border border-blue-100/70">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Digital solutions for every stage of your business.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
              From customer-facing websites to complex internal systems, we build
              practical, scalable solutions that solve real business challenges.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-black transition-colors"
              >
                Let&apos;s Talk about a custom build
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-blue-100 bg-blue-50/80 text-[#2563EB] group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide bg-white px-2 py-0.5 rounded border border-slate-100">
                      {c.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
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
      icon: Search,
    },
    {
      num: "02",
      title: "Design",
      desc: "We define the solution, create UX/UI designs and plan the build.",
      icon: PenTool,
    },
    {
      num: "03",
      title: "Develop",
      desc: "We build, test and refine your solution with regular updates.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Deploy & Support",
      desc: "We launch your solution and provide ongoing support to ensure long-term success.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-we-work" className="relative py-20 sm:py-28 border-t border-slate-100 bg-slate-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
            HOW WE WORK
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            A clear, proven process from idea to impact.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            We keep things simple and collaborative, so you always know what's
            happening and can move forward with confidence.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-lg font-black tracking-tight text-purple-600/70 font-mono">
                      {s.num}
                    </span>
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-purple-50 text-[#7C3AED] border border-purple-100 group-hover:scale-105 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-[#7C3AED] transition-colors">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
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
