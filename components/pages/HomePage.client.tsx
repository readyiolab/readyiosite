"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/lib/site";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Database,
  Globe,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { AuroraCTA } from "@/components/site/AuroraCTA";
import {
  PLATFORM_PROJECTS,
  WEBSITE_PROJECTS,
  type Project,
} from "@/data/projects";

export function HomeSections() {
  return (
    <>
      <BelowFoldTrustStrip />
      <ServicesSection />
      <ForFoundersBanner />
      <SelectedWork />
      <WhyZuvigo />
      <ProcessSection />
      <HomepageFAQ />
      <FinalCTA />
    </>
  );
}

/* ---------------- Animated Metric Counter Component ---------------- */

function MetricCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  React.useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // easeOutExpo for natural decelerating count-up
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = ease * target;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function BelowFoldTrustStrip() {
  return (
    <section className="relative border-y border-blue-100 bg-white py-8 sm:py-12 dark:border-gray-800 dark:bg-gray-950/70">
      <div className="mx-auto max-w-7xl container-p">
        {/* Metric Badges Grid with Smooth Live Counters */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-4">
          {/* Card 1: 100+ */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-[#FAFAFC] p-3 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#2563EB]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2563EB] dark:text-[#60A5FA]">
              <MetricCounter target={100} decimals={0} suffix="+" />
            </div>
            <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              Systems & Web Apps Shipped
            </div>
            <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[11px] text-[#6B7280] dark:text-gray-400">
              Websites, CRMs & AI workflows
            </div>
          </div>

          {/* Card 2: 99.4% */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-[#FAFAFC] p-3 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#2563EB]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2563EB] dark:text-[#60A5FA]">
              <MetricCounter target={99.4} decimals={1} suffix="%" />
            </div>
            <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              On-Time Milestone Delivery
            </div>
            <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[11px] text-[#6B7280] dark:text-gray-400">
              Clear scope, transparent sprint updates
            </div>
          </div>

          {/* Card 3: 4.9 / 5 */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-[#FAFAFC] p-3 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#2563EB]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2563EB] dark:text-[#60A5FA]">
              <MetricCounter target={4.9} decimals={1} suffix=" / 5" />
            </div>
            <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              Client Satisfaction Rating
            </div>
            <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[11px] text-[#6B7280] dark:text-gray-400">
              Founder & enterprise verified reviews
            </div>
          </div>

          {/* Card 4: 1 Team */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-[#FAFAFC] p-3 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#2563EB]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2563EB] dark:text-[#60A5FA]">
              <MetricCounter target={1} decimals={0} suffix=" Team" />
            </div>
            <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              Zero Vendor Finger-Pointing
            </div>
            <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[11px] text-[#6B7280] dark:text-gray-400">
              End-to-end accountability from idea to launch
            </div>
          </div>
        </div>

        {/* Action Callout Bar - Lovable, Premium High-Converting Banner */}
        <div className="mt-8 sm:mt-10 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#2563EB]/30 bg-gradient-to-br from-[#0B1221] via-[#0F172A] to-[#1E293B] p-5 sm:p-8 lg:p-10 text-white shadow-[0_20px_50px_rgba(37,99,235,0.20)]">
          {/* Ambient background glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2563EB]/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#10B981]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-2.5 sm:space-y-3 text-center lg:text-left">
              <h2 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
                Turn your web traffic into qualified leads with smart CRM &amp; AI automation.
              </h2>
              <p className="text-xs sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                Discovery calls are free, technical, and include a clear roadmap estimate.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 w-auto flex-shrink-0">
              <Link
                href="/contact"
                aria-label="Let's Talk"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-95"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Hero Visual Component (Live & Interactive) ---------------- */

export { HeroVisual } from "./HeroVisual";


/* ---------------- 2. Services Section ---------------- */

function ServicesSection() {
  return (
    <section id="services" className="relative py-14 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl container-p">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl text-center sm:text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              WHAT WE BUILD
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] dark:text-white">
              Three technology solutions. One accountable team.
            </h2>
            <p className="mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg leading-relaxed text-[#4B5563] dark:text-gray-300">
              From attracting customers to managing leads and automating repetitive work, we build the technology your business needs to grow.
            </p>
          </div>
        </Reveal>

        {/* Business Journey summary badge */}
        <Reveal delay={0.1}>
          <div className="mt-5 sm:mt-8 flex justify-center sm:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#111827] shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-white">
              <span className="text-black">Attract</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span className="text-black">Organize</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span className="text-black">Automate</span>
            </div>
          </div>
        </Reveal>

        {/* 3 Prominent Service Cards */}
        <div className="relative mt-8 sm:mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
          {/* Horizontal connecting line behind cards (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-12 left-10 right-10 hidden h-0.5 bg-gradient-to-r from-[#2563EB]/30 via-[#3B82F6]/40 to-[#2563EB]/30 lg:block"
          />

          {/* Card 01: ATTRACT */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-7 shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0">
                      <Image
                        src="/icons/websites-web-applications.webp"
                        alt="Websites & Web Applications"
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-black dark:text-white">01</span>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black">
                      ATTRACT
                    </span>
                    <h3 className="mt-1 font-heading text-lg sm:text-2xl font-bold text-[#111827] dark:text-white min-h-0 lg:min-h-[64px] flex items-center">
                      Websites & Web Applications
                    </h3>
                    <p className="mt-2 font-semibold text-xs sm:text-sm leading-snug text-[#111827] dark:text-gray-200 min-h-0 lg:min-h-[42px] flex items-center">
                      Build your digital presence and turn more visitors into customers.
                    </p>
                    <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400 min-h-0 lg:min-h-[52px] flex items-center">
                      Business websites, e-commerce experiences, customer portals and custom web applications designed around your goals.
                    </p>
                  </div>
                </div>

                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-2.5 text-xs font-medium text-[#374151] dark:text-gray-300 min-h-0 lg:min-h-[92px] flex flex-col justify-around">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#2563EB]" />
                    <span>Business and lead-generation websites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#2563EB]" />
                    <span>E-commerce and customer portals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#2563EB]" />
                    <span>Custom web applications</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col justify-end">
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  Explore Websites & Web Applications
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </Reveal>

          {/* Card 02: ORGANIZE */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-7 shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0">
                      <Image
                        src="/icons/crm-business-systems.webp"
                        alt="CRM & Business Systems"
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-black dark:text-white">02</span>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black">
                      ORGANIZE
                    </span>
                    <h3 className="mt-1 font-heading text-lg sm:text-2xl font-bold text-[#111827] dark:text-white min-h-0 lg:min-h-[64px] flex items-center">
                      CRM & Business Systems
                    </h3>
                    <p className="mt-2 font-semibold text-xs sm:text-sm leading-snug text-[#111827] dark:text-gray-200 min-h-0 lg:min-h-[42px] flex items-center">
                      Keep every lead, customer and follow-up organized.
                    </p>
                    <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400 min-h-0 lg:min-h-[52px] flex items-center">
                      Simple CRM and business systems customized around how your team actually works—not unnecessary features and complicated processes.
                    </p>
                  </div>
                </div>

                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-2.5 text-xs font-medium text-[#374151] dark:text-gray-300 min-h-0 lg:min-h-[92px] flex flex-col justify-around">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#2563EB]" />
                    <span>CRM setup and customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#2563EB]" />
                    <span>Lead and customer management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#2563EB]" />
                    <span>Workflow integrations and dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col justify-end">
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  Explore CRM & Business Systems
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </Reveal>

          {/* Card 03: AUTOMATE */}
          <Reveal delay={0.3}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-7 shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0">
                      <Image
                        src="/icons/ai-automation.webp"
                        alt="AI & Automation"
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-heading text-2xl sm:text-3xl font-bold text-black dark:text-white">03</span>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-black">
                      AUTOMATE
                    </span>
                    <h3 className="mt-1 font-heading text-lg sm:text-2xl font-bold text-[#111827] dark:text-white min-h-0 lg:min-h-[64px] flex items-center">
                      AI & Automation
                    </h3>
                    <p className="mt-2 font-semibold text-xs sm:text-sm leading-snug text-[#111827] dark:text-gray-200 min-h-0 lg:min-h-[42px] flex items-center">
                      Reduce repetitive work and respond to customers faster.
                    </p>
                    <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400 min-h-0 lg:min-h-[52px] flex items-center">
                      Practical AI assistants and automations for lead response, customer support, documents, reporting and everyday workflows.
                    </p>
                  </div>
                </div>

                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-2.5 text-xs font-medium text-[#374151] dark:text-gray-300 min-h-0 lg:min-h-[92px] flex flex-col justify-around">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981]" />
                    <span>AI chat and voice assistants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981]" />
                    <span>Lead and customer-support automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981]" />
                    <span>Document, data and reporting workflows</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col justify-end">
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  Explore AI & Automation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. For Founders Banner ---------------- */

function ForFoundersBanner() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0D1322] border border-blue-900/30 p-5 sm:p-8 text-white shadow-2xl md:p-14">
            {/* Background radial ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-72 w-96 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-3xl"
            />

            <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_1.3fr]">
              {/* Left Content */}
              <div className="text-center sm:text-left">
                <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                  From idea to<br className="hidden sm:block" /> working product.
                </h2>
                <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-base leading-relaxed text-gray-300 mx-auto sm:mx-0">
                  We help founders shape the right first version, choose the technology and launch without unnecessary complexity.
                </p>

                <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#2563EB] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-blue-600 active:scale-95"
                  >
                    <span>Discuss Your Idea</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Content: Connected Process Nodes */}
              <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-2 pt-2 sm:pt-4">
                {/* Horizontal Glowing Connection Line (desktop & tablet) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-[56px] -translate-y-1/2 left-[16.6%] right-[16.6%] hidden sm:block z-0"
                >
                  {/* Outer neon glow */}
                  <div className="absolute inset-x-0 -top-1 h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur-sm opacity-80" />
                  {/* Crisp bright laser line */}
                  <div className="relative h-[3px] w-full rounded-full bg-gradient-to-r from-blue-600 via-sky-300 to-blue-600 shadow-[0_0_16px_#38bdf8,0_0_30px_#2563eb]" />
                </div>

                {/* Vertical Glowing Connection Line (mobile) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[44px] bottom-[80px] w-[3px] sm:hidden z-0"
                >
                  <div className="absolute inset-y-0 -left-1 w-2 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 blur-sm opacity-80" />
                  <div className="relative h-full w-[3px] rounded-full bg-gradient-to-b from-blue-600 via-sky-300 to-blue-600 shadow-[0_0_16px_#38bdf8]" />
                </div>

                {/* Node 1: Idea */}
                <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full border-2 border-white/90 bg-white p-2 text-slate-900 shadow-[0_0_35px_rgba(255,255,255,0.35),0_12px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                    <Image
                      src="/icons/idea.webp"
                      alt="Idea"
                      width={54}
                      height={54}
                      className="h-11 w-11 sm:h-14 sm:w-14 object-contain"
                    />
                    <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[9px] sm:text-[10px] font-extrabold text-slate-900 ring-2 sm:ring-4 ring-[#0D1322] shadow-[0_0_10px_#3B82F6]">
                      01
                    </span>
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-heading text-sm sm:text-base font-bold text-white">
                    Idea
                  </h3>
                  <p className="mt-1 sm:mt-1.5 max-w-[140px] text-[10px] sm:text-[11px] leading-snug text-gray-400">
                    Validate the problem and define the solution.
                  </p>
                </div>

                {/* Node 2: First version */}
                <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full border-2 border-white/90 bg-white p-2 text-slate-900 shadow-[0_0_35px_rgba(255,255,255,0.35),0_12px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                    <Image
                      src="/icons/first-version.webp"
                      alt="First version"
                      width={54}
                      height={54}
                      className="h-11 w-11 sm:h-14 sm:w-14 object-contain"
                    />
                    <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[9px] sm:text-[10px] font-extrabold text-slate-900 ring-2 sm:ring-4 ring-[#0D1322] shadow-[0_0_10px_#3B82F6]">
                      02
                    </span>
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-heading text-sm sm:text-base font-bold text-white">
                    First version
                  </h3>
                  <p className="mt-1 sm:mt-1.5 max-w-[140px] text-[10px] sm:text-[11px] leading-snug text-gray-400">
                    Build the right first version and test with real users.
                  </p>
                </div>

                {/* Node 3: Launch */}
                <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full border-2 border-white/90 bg-white p-2 text-slate-900 shadow-[0_0_35px_rgba(255,255,255,0.35),0_12px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                    <Image
                      src="/icons/launch.webp"
                      alt="Launch"
                      width={54}
                      height={54}
                      className="h-11 w-11 sm:h-14 sm:w-14 object-contain"
                    />
                    <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[9px] sm:text-[10px] font-extrabold text-slate-900 ring-2 sm:ring-4 ring-[#0D1322] shadow-[0_0_10px_#3B82F6]">
                      03
                    </span>
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-heading text-sm sm:text-base font-bold text-white">
                    Launch
                  </h3>
                  <p className="mt-1 sm:mt-1.5 max-w-[140px] text-[10px] sm:text-[11px] leading-snug text-gray-400">
                    Launch, learn and keep improving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4. Selected Work ---------------- */

function SelectedWork() {
  const [activeTab, setActiveTab] = useState<"platforms" | "websites">(
    "platforms",
  );

  const featured = PLATFORM_PROJECTS.find((p) => p.featured) ?? PLATFORM_PROJECTS[0];
  const secondaryPlatforms = PLATFORM_PROJECTS.filter((p) => p.id !== featured.id);

  return (
    <section id="work" className="py-14 sm:py-20 md:py-32 bg-white dark:bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="max-w-3xl text-center sm:text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#2563EB]">
              SELECTED WORK
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-heading text-2xl sm:text-4xl md:text-[2.75rem] md:leading-[1.15] font-bold tracking-tight text-[#111827] dark:text-white">
              More Than Websites. Systems Built for Growth.
            </h2>
            <p className="mt-2.5 sm:mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-[#4B5563] dark:text-gray-300 mx-auto sm:mx-0">
              From business websites to subscription platforms and AI-powered
              systems, we build technology around real commercial needs.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-3">
            {(
              [
                { id: "platforms" as const, label: "Featured Platforms" },
                { id: "websites" as const, label: "Business Websites" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all ${activeTab === tab.id
                  ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/25"
                  : "border border-gray-200 bg-white text-[#4B5563] hover:border-[#2563EB]/40 hover:text-[#2563EB] dark:border-gray-700 dark:bg-transparent dark:text-gray-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {activeTab === "platforms" ? (
          <>
            <Reveal delay={0.08}>
              <div className="mt-8 sm:mt-10 overflow-hidden rounded-2xl sm:rounded-[1.5rem] border border-gray-200 bg-[#FAFAFB] dark:border-gray-800 dark:bg-gray-950/40">
                {/* Featured platform — iGrowBig */}
                <div className="grid grid-cols-1 gap-5 sm:gap-6 border-b border-gray-200 p-4 sm:p-5 md:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 dark:border-gray-800">
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      className="aspect-[16/10] w-full object-cover object-top"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="flex flex-col justify-center py-1 sm:py-2 lg:pr-4">
                    {featured.label && (
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                        {featured.label}
                      </span>
                    )}
                    <h3 className="mt-1.5 sm:mt-2 font-heading text-xl sm:text-3xl font-bold tracking-tight text-[#111827] dark:text-white">
                      {featured.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                      {featured.description}
                    </p>
                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#2563EB]/25 bg-blue-50 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-[#2563EB] dark:border-[#2563EB]/40 dark:bg-blue-900/20 dark:text-[#60A5FA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 sm:mt-7 inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8]"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Secondary platforms */}
                <div className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-gray-800">
                  {secondaryPlatforms.map((project) => (
                    <PlatformCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </Reveal>

            <WebsiteExperiences onViewAll={() => setActiveTab("websites")} />
          </>
        ) : (
          <WebsiteExperiences expanded />
        )}
      </div>
    </section>
  );
}

function PlatformCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 gap-4 sm:gap-5 p-4 sm:p-5 transition-colors hover:bg-white/70 md:grid-cols-[0.95fr_1.05fr] md:p-6 dark:hover:bg-gray-900/50"
    >
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          className="aspect-[16/11] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          width={640}
          height={440}
        />
      </div>
      <div className="flex flex-col justify-center">
        {project.label && (
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2563EB]">
            {project.label}
          </span>
        )}
        <h3 className="mt-1 sm:mt-1.5 font-heading text-lg sm:text-xl font-bold text-[#111827] dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300 sm:text-[13px]">
          {project.description}
        </p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-x-2.5 gap-y-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] font-semibold text-[#2563EB] dark:text-[#60A5FA]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function WebsiteExperiences({
  expanded = false,
  onViewAll,
}: {
  expanded?: boolean;
  onViewAll?: () => void;
}) {
  return (
    <div className={expanded ? "mt-8 sm:mt-10" : "mt-12 sm:mt-16"}>
      <Reveal>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-end sm:justify-between text-center sm:text-left">
          <h3 className="font-heading text-lg font-bold text-[#111827] sm:text-2xl dark:text-white">
            Selected Website Experiences
          </h3>
          {onViewAll && (
            <button
              type="button"
              onClick={onViewAll}
              className="inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
            >
              View all website projects
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </Reveal>

      <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
        {WEBSITE_PROJECTS.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.08}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#FAFAFB] transition-all hover:border-[#2563EB]/30 hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950/40 dark:hover:bg-gray-900"
            >
              <div className="overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  width={600}
                  height={375}
                />
              </div>
              <div className="relative flex flex-1 flex-col p-4 sm:p-5">
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#111827] dark:text-white">
                  {project.title}
                </h4>
                <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#6B7280] dark:text-gray-400">
                  {project.category}
                </p>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                  {project.description}
                </p>
                <span className="mt-3 sm:mt-4 ml-auto grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-blue-50 text-[#2563EB] transition-transform group-hover:translate-x-0.5 dark:bg-blue-900/30">
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------- 5. Why Zuvigo ---------------- */

function WhyZuvigo() {
  const POINTS = [
    {
      title: "Business-first thinking",
      desc: "We begin with your goals, customers and workflows before deciding on the technology.",
    },
    {
      title: "One accountable team",
      desc: "Website, CRM and automation work stay connected through one team and one delivery plan.",
    },
    {
      title: "Clear scope and communication",
      desc: "You receive defined deliverables, realistic milestones and regular visibility throughout the project.",
    },
    {
      title: "Support beyond launch",
      desc: "We can continue supporting, maintaining and improving what we build as your business grows.",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 bg-blue-50/40 dark:bg-gray-900/40">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="max-w-3xl mb-8 sm:mb-12 text-center sm:text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              WHY ZUVIGO
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] dark:text-white">
              Technology shaped around the business—not the other way around.
            </h2>
            <p className="mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg leading-relaxed text-[#4B5563] dark:text-gray-300">
              We take time to understand the business problem before recommending what to build. The result is a practical solution with clear ownership, fewer handoffs and technology your team can actually use.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Visual Illustration Showcase */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                <div className="relative h-52 sm:h-72 lg:h-80 w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-b from-blue-50/40 via-white to-blue-50/20">
                  <Image
                    src="/isometric-cloud-infra.webp"
                    alt="Cloud infrastructure, reliable servers and security architecture"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right 4 Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
            {POINTS.map((pt, idx) => (
              <Reveal key={pt.title} delay={idx * 0.1}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm transition-all hover:border-[#2563EB]/40 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mt-1 sm:mt-2 font-heading text-base sm:text-lg font-bold text-[#111827] dark:text-white">
                    {pt.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400">
                    {pt.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. Process Section ("HOW WE WORK") ---------------- */

function ProcessSection() {
  const STEPS = [
    {
      iconSrc: "/icons/understand.webp",
      title: "Understand",
      desc: "We learn your goals, users and challenges to define the right plan.",
    },
    {
      iconSrc: "/icons/build.webp",
      title: "Build",
      desc: "We design, build and test in close collaboration with you.",
    },
    {
      iconSrc: "/icons/launch-support.webp",
      title: "Launch & Support",
      desc: "We launch with confidence and support you as you grow.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <h2 className="text-center font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111827] dark:text-white">
            Simple, transparent delivery.
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center gap-6 sm:gap-10 md:flex-row md:gap-6 lg:gap-10">
          {STEPS.map((s, idx) => {
            return (
              <div key={s.title} className="flex items-center gap-4 w-full sm:w-auto">
                <Reveal delay={idx * 0.15}>
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="relative h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0">
                      <Image
                        src={s.iconSrc}
                        alt={s.title}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-lg font-bold text-[#111827] dark:text-white">
                        {s.title}
                      </h3>
                      <p className="mt-0.5 sm:mt-1 max-w-[220px] text-xs sm:text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Dotted Connector between steps */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden items-center gap-2 pl-3 md:flex">
                    <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                    <div className="h-0.5 w-12 border-t-2 border-dotted border-[#2563EB]/40 lg:w-20" />
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

/* ---------------- 6. Homepage FAQ Section ---------------- */

function HomepageFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const FAQS = [
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
  ];

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-white dark:bg-[#0B0F17]">
      <div className="mx-auto max-w-5xl container-p">
        <Reveal>
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111827] dark:text-white">
              Everything you need to know about working with Zuvigo.
            </h2>
            <p className="mt-2.5 sm:mt-4 mx-auto max-w-2xl text-xs sm:text-base text-[#4B5563] dark:text-gray-300">
              Clear answers on how we design custom websites, build CRM infrastructure, and deploy AI workflows.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-[#FAFAFB] transition-colors hover:border-[#2563EB]/30 dark:border-gray-800 dark:bg-gray-900/60">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-heading text-sm sm:text-lg font-bold text-[#111827] dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`ml-3 sm:ml-4 grid h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 place-items-center rounded-full bg-blue-50 text-[#2563EB] transition-transform duration-200 dark:bg-blue-900/30 ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-base leading-relaxed text-[#4B5563] dark:text-gray-300 border-t border-gray-100 pt-3 dark:border-gray-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. Final Call to Action ---------------- */

function FinalCTA() {
  return (
    <AuroraCTA
      heading="Ready to make everyday business clearer and easier?"
      subtitle="Zuvigo brings together modern engineering, intuitive design, and smart automation into tailored solutions designed for real business impact."
      buttonText="Get in touch"
      buttonHref="/contact"
      secondaryButtonText="Learn more"
      secondaryButtonHref="/solutions"
    />
  );
}
