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
  CheckSquare,
  ChevronDown,
  Database,
  FileCheck,
  Globe2,
  Globe,
  Layers,
  Lightbulb,
  Plus,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Star,
  Users,
  Bot,
  Cpu,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { AuroraCTA } from "@/components/site/AuroraCTA";
import {
  PLATFORM_PROJECTS,
  WEBSITE_PROJECTS,
  type Project,
} from "@/data/projects";

export function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#F7F5F1] text-[#111827] dark:bg-[#0B0F17] dark:text-white">
      <Hero />
      <BelowFoldTrustStrip />
      <ServicesSection />
      <ForFoundersBanner />
      <SelectedWork />
      <WhyReadyio />
      <ProcessSection />
      <HomepageFAQ />
      <FinalCTA />
    </div>
  );
}

/* ---------------- 1. Hero Section ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32">
      {/* Background glow effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#6C5CE7]/15 via-[#7C3AED]/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl container-p">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Hero Content */}
          <div className="relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/30 bg-[#6C5CE7]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                <span className="h-2 w-2 rounded-full bg-[#6C5CE7] animate-pulse" />
                TECHNOLOGY BUILT AROUND YOUR BUSINESS
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] dark:text-white">
                Websites, CRM and AI solutions that help businesses grow.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4B5563] sm:text-lg dark:text-gray-300">
                Readyio builds high-performing websites, practical web applications, customized CRM systems and AI automation—all through one accountable technology team.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discuss Your Project via Calendly (30 min call)"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#111827] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#6C5CE7] active:scale-95 dark:bg-white dark:text-[#111827] dark:hover:bg-[#6C5CE7] dark:hover:text-white"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  See Our Work
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#5A6376] dark:text-gray-400">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span><strong>4.9 / 5</strong> client rating · Free 30-min discovery call · No pitch</span>
              </div>
            </Reveal>
          </div>

          {/* Hero Visual Diagram (Connected Product Cards) */}
          <Reveal delay={0.2}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Below-The-Fold Trust Signals & Impact Strip ---------------- */

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
    <span ref={ref} className="tabular-nums font-black">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------------- Below-The-Fold Trust Signals & Impact Strip ---------------- */

function BelowFoldTrustStrip() {
  return (
    <section className="relative border-y border-[#E5E0F8] bg-white py-12 dark:border-gray-800 dark:bg-gray-950/70">
      <div className="mx-auto max-w-7xl container-p">
        {/* Metric Badges Grid with Smooth Live Counters */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {/* Card 1: 100+ */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#FAFAFC] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6C5CE7]/30 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#6C5CE7]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#6C5CE7] dark:text-[#A78BFA]">
              <MetricCounter target={100} decimals={0} suffix="+" />
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              Systems & Web Apps Shipped
            </div>
            <div className="mt-1 text-[11px] text-[#6B7280] dark:text-gray-400">
              Websites, CRMs & AI workflows
            </div>
          </div>

          {/* Card 2: 99.4% */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#FAFAFC] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6C5CE7]/30 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#6C5CE7]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#6C5CE7] dark:text-[#A78BFA]">
              <MetricCounter target={99.4} decimals={1} suffix="%" />
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              On-Time Milestone Delivery
            </div>
            <div className="mt-1 text-[11px] text-[#6B7280] dark:text-gray-400">
              Clear scope, transparent sprint updates
            </div>
          </div>

          {/* Card 3: 4.9 / 5 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#FAFAFC] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6C5CE7]/30 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#6C5CE7]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#6C5CE7] dark:text-[#A78BFA]">
              <MetricCounter target={4.9} decimals={1} suffix=" / 5" />
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              Client Satisfaction Rating
            </div>
            <div className="mt-1 text-[11px] text-[#6B7280] dark:text-gray-400">
              Founder & enterprise verified reviews
            </div>
          </div>

          {/* Card 4: 1 Team */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#FAFAFC] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6C5CE7]/30 hover:bg-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60 dark:hover:border-[#6C5CE7]/50 dark:hover:bg-gray-900">
            <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#6C5CE7] dark:text-[#A78BFA]">
              <MetricCounter target={1} decimals={0} suffix=" Team" />
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white">
              Zero Vendor Finger-Pointing
            </div>
            <div className="mt-1 text-[11px] text-[#6B7280] dark:text-gray-400">
              End-to-end accountability from idea to launch
            </div>
          </div>
        </div>

        {/* Action Callout Bar - Lovable, Premium High-Converting Banner */}
        <div className="mt-10 relative overflow-hidden rounded-3xl border border-[#6C5CE7]/30 bg-gradient-to-br from-[#0F0C20] via-[#181335] to-[#251B4E] p-6 sm:p-8 lg:p-10 text-white shadow-[0_20px_50px_rgba(108,92,231,0.25)]">
          {/* Ambient background glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#6C5CE7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#10B981]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/40 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#C4B5FD] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                HIGH-CONVERTING ARCHITECTURE
              </div>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Turn your web traffic into qualified leads with smart CRM &amp; AI automation.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                Discovery calls are free, technical, and include a clear roadmap estimate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss Your Project via Calendly"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#6C5CE7] to-[#8075FF] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(108,92,231,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(108,92,231,0.7)] active:scale-95"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Hero Visual Component (Live & Interactive) ---------------- */

function HeroVisual() {
  const [leadList, setLeadList] = React.useState([
    { name: "Acme Ltd", status: "new" },
    { name: "Brightdev Co.", status: "new" },
    { name: "Northfield Inc.", status: "new" },
  ]);
  const [aiText, setAiText] = React.useState(
    "Hi! I can help with lead follow-ups, proposals, customer insights and reporting."
  );
  const [inputValue, setInputValue] = React.useState("");

  const handleAddLead = () => {
    const names = ["Apex Media", "Zenith Tech", "Vanguard Co", "Solstice Inc"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setLeadList((prev) => [...prev, { name: randomName, status: "new" }]);
  };

  const handleAiAsk = () => {
    if (!inputValue.trim()) return;
    setAiText(`Generating response for: "${inputValue}"... Done!`);
    setInputValue("");
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto py-2">
      {/* Connected Tree Line SVG Overlay (Desktop/Tablet) */}
      <svg
        className="hidden sm:block pointer-events-none absolute inset-0 h-full w-full overflow-visible z-0"
        aria-hidden="true"
        viewBox="0 0 600 480"
      >
        <defs>
          <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Main stem from Website bottom target down to junction in the middle gap */}
        <path
          d="M 300 230 L 300 258"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
        />

        {/* 2. Left Branch down to CRM Pipeline top center */}
        <path
          d="M 300 258 Q 300 268 290 268 L 155 268 Q 145 268 145 278 L 145 292"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
        />

        {/* 3. Right Branch down to AI Assistant top center */}
        <path
          d="M 300 258 Q 300 268 310 268 L 445 268 Q 455 268 455 278 L 455 292"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
        />

        {/* 4. Left Outer Loop up to Website left side center */}
        <path
          d="M 145 292 L 100 292 Q 82 292 82 274 L 82 135 Q 82 120 100 120 L 132 120"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
        />

        {/* Target Junction Node in the gap */}
        <circle cx="300" cy="258" r="6" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2.5" />
        <circle cx="300" cy="258" r="2.5" fill="#7C3AED" />

        {/* Connection endpoint dots */}
        <circle cx="132" cy="120" r="3.5" fill="#7C3AED" />
        <circle cx="145" cy="292" r="3.5" fill="#7C3AED" />
        <circle cx="455" cy="292" r="3.5" fill="#7C3AED" />
      </svg>

      <div className="relative z-10 flex flex-col gap-14">
        {/* ================= CARD 1: YOUR WEBSITE (TOP CENTER) ================= */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="relative mx-auto w-full max-w-lg rounded-3xl border border-[#E5E0F8] bg-white p-5 shadow-[0_12px_40px_rgba(108,92,231,0.08)] dark:border-gray-800 dark:bg-gray-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2.5">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <Globe className="h-4 w-4" />
              </div>
              <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                Your Website
              </span>
            </div>
            {/* Hamburger menu icon */}
            <div className="flex flex-col gap-1 cursor-pointer p-1">
              <span className="h-0.5 w-4 rounded-full bg-gray-700 dark:bg-gray-300" />
              <span className="h-0.5 w-4 rounded-full bg-gray-700 dark:bg-gray-300" />
              <span className="h-0.5 w-4 rounded-full bg-gray-700 dark:bg-gray-300" />
            </div>
          </div>

          {/* Inner Content Area */}
          <div className="relative mt-1 overflow-hidden rounded-2xl bg-[#F4F3F8] p-5 dark:bg-gray-800/70 sm:p-6">
            {/* Background Building Image positioned on the right side */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 sm:w-7/12 overflow-hidden rounded-r-2xl">
              <Image
                src="/hero-building.png"
                alt="Modern enterprise digital platform architecture"
                className="h-full w-full object-cover object-center"
                width={600}
                height={400}
                preload
              />
              {/* Gradient blend overlay to ensure left text is perfectly clear and legible */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4F3F8] via-[#F4F3F8]/80 to-transparent dark:from-gray-800 dark:via-gray-800/80 dark:to-transparent" />
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 max-w-[65%] sm:max-w-[60%]">
              <div className="font-heading text-xl font-extrabold leading-tight text-[#111827] sm:text-2xl dark:text-white">
                Elevate your business online
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#4B5563] sm:text-sm dark:text-gray-300">
                Modern websites that convert visitors into customers.
              </p>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Started with Readyio project discussion"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#6C5CE7] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#5B4BC4] active:scale-95"
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= BOTTOM ROW (CRM + AI ASSISTANT) ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* ================= CARD 2: CRM PIPELINE (BOTTOM LEFT) ================= */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E5E0F8] bg-white p-4 shadow-[0_12px_40px_rgba(108,92,231,0.08)] dark:border-gray-800 dark:bg-gray-900"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-3">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  <Database className="h-4 w-4" />
                </div>
                <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                  CRM Pipeline
                </span>
              </div>

              {/* Inner Kanban Grid */}
              <div className="mt-1 rounded-2xl bg-[#F4F3F8] p-3.5 dark:bg-gray-800/70 text-[11px]">
                <div className="grid grid-cols-3 gap-2">
                  {/* Column 1: New Leads */}
                  <div>
                    <span className="font-heading text-[11px] font-bold text-[#111827] dark:text-white">
                      New Leads
                    </span>
                    <div className="mt-2.5 space-y-2 text-[10px] text-[#4B5563] dark:text-gray-300">
                      {leadList.map((lead, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6C5CE7]" />
                          <span className="truncate">{lead.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: In Progress */}
                  <div>
                    <span className="font-heading text-[11px] font-bold text-[#111827] dark:text-white">
                      In Progress
                    </span>
                    <div className="mt-2.5 space-y-2 text-[10px] text-[#4B5563] dark:text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6C5CE7]" />
                        <span className="truncate">Nova Solutions</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span className="truncate">Summit Group</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Closed Won */}
                  <div>
                    <span className="font-heading text-[11px] font-bold text-[#111827] dark:text-white">
                      Closed Won
                    </span>
                    <div className="mt-2.5 space-y-2 text-[10px] text-[#4B5563] dark:text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        <span className="truncate">Omega Systems</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        <span className="truncate">BluePeak Ltd.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Add Lead Action */}
            <button
              type="button"
              onClick={handleAddLead}
              className="mt-3.5 flex items-center gap-1.5 px-1 text-xs font-bold text-[#6C5CE7] transition-colors hover:text-[#5B4BC4]"
            >
              <div className="grid h-4 w-4 place-items-center rounded-full border border-[#6C5CE7]">
                <Plus className="h-2.5 w-2.5" />
              </div>
              <span>Add Lead</span>
            </button>
          </motion.div>

          {/* ================= CARD 3: AI ASSISTANT (BOTTOM RIGHT) ================= */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between rounded-3xl border border-[#E5E0F8] bg-white p-4 shadow-[0_12px_40px_rgba(108,92,231,0.08)] dark:border-gray-800 dark:bg-gray-900"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-3">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  <Bot className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </div>
                <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                  AI Assistant
                </span>
              </div>

              {/* Inner Response Box */}
              <div className="mt-1 rounded-2xl bg-[#F4F3F8] p-4 text-xs leading-relaxed text-[#4B5563] dark:bg-gray-800/70 dark:text-gray-300">
                {aiText}
              </div>
            </div>

            {/* Bottom Input Box */}
            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#F4F3F8] pl-3.5 pr-1.5 py-1.5 border border-transparent focus-within:border-[#6C5CE7]/30 dark:bg-gray-800/70">
              <input
                type="text"
                id="hero-ai-query"
                name="ai-query"
                aria-label="Ask AI Assistant anything"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAiAsk()}
                placeholder="Ask anything..."
                className="w-full bg-transparent text-xs text-[#111827] placeholder-gray-400 outline-none dark:text-white"
              />
              <button
                type="button"
                onClick={handleAiAsk}
                aria-label="Send query to AI Assistant"
                className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-xl bg-[#6C5CE7] text-white shadow-sm transition-all hover:bg-[#5B4BC4] active:scale-95"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- 2. Services Section ---------------- */

function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-p">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7]">
              WHAT WE BUILD
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl dark:text-white">
              Three technology solutions. One accountable team.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg dark:text-gray-300">
              From attracting customers to managing leads and automating repetitive work, we build the technology your business needs to grow.
            </p>
          </div>
        </Reveal>

        {/* Business Journey summary badge */}
        <Reveal delay={0.1}>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#111827] shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-white">
            <span className="text-[#6C5CE7]">Attract</span>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <span className="text-[#6C5CE7]">Organize</span>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <span className="text-[#6C5CE7]">Automate</span>
          </div>
        </Reveal>

        {/* 3 Prominent Service Cards */}
        <div className="relative mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Horizontal connecting line behind cards (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-12 left-10 right-10 hidden h-0.5 bg-gradient-to-r from-[#6C5CE7]/30 via-[#7C3AED]/40 to-[#6C5CE7]/30 lg:block"
          />

          {/* Card 01: ATTRACT */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-7 shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20">
                      <Globe2 className="h-6 w-6" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-[#6C5CE7]/80">01</span>
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#6C5CE7]">
                      ATTRACT
                    </span>
                    <h3 className="mt-1.5 font-heading text-2xl font-extrabold text-[#111827] dark:text-white min-h-[64px] flex items-center">
                      Websites & Web Applications
                    </h3>
                    <p className="mt-2.5 font-semibold text-sm leading-snug text-[#111827] dark:text-gray-200 min-h-[42px] flex items-center">
                      Build your digital presence and turn more visitors into customers.
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400 min-h-[52px] flex items-center">
                      Business websites, e-commerce experiences, customer portals and custom web applications designed around your goals.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs font-medium text-[#374151] dark:text-gray-300 min-h-[92px] flex flex-col justify-around">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#6C5CE7]" />
                    <span>Business and lead-generation websites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#6C5CE7]" />
                    <span>E-commerce and customer portals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#6C5CE7]" />
                    <span>Custom web applications</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col justify-end">
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6C5CE7] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#5B4BC4]"
                >
                  Explore Websites & Web Applications
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {/* Interface Preview (Sized to match Card 03 preview height) */}
                <div className="mt-5 flex min-h-[185px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-[#111827] p-4 text-white shadow-inner dark:border-gray-800">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-400">readyio.com</span>
                  </div>
                  <div className="my-auto space-y-2.5 py-1">
                    <div className="font-heading text-sm font-bold leading-snug text-white">
                      Modern websites that convert visitors into customers.
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" className="rounded-lg bg-[#6C5CE7] px-3 py-1.5 text-[10px] font-bold text-white shadow-sm">
                        Get Started
                      </button>
                      <span className="text-[10px] font-semibold text-emerald-400">↑ 148% Growth</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-gray-800/60 px-3 py-1.5 text-[10px] text-gray-300">
                    <span>Active Now: 14 Visitors</span>
                    <span className="font-bold text-emerald-400">● Live</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Card 02: ORGANIZE */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-7 shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F0EDF9] text-[#2563EB] dark:bg-[#6C5CE7]/20">
                      <Users className="h-6 w-6" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-[#2563EB]/80">02</span>
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">
                      ORGANIZE
                    </span>
                    <h3 className="mt-1.5 font-heading text-2xl font-extrabold text-[#111827] dark:text-white min-h-[64px] flex items-center">
                      CRM & Business Systems
                    </h3>
                    <p className="mt-2.5 font-semibold text-sm leading-snug text-[#111827] dark:text-gray-200 min-h-[42px] flex items-center">
                      Keep every lead, customer and follow-up organized.
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400 min-h-[52px] flex items-center">
                      Simple CRM and business systems customized around how your team actually works—not unnecessary features and complicated processes.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs font-medium text-[#374151] dark:text-gray-300 min-h-[92px] flex flex-col justify-around">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#6C5CE7]" />
                    <span>CRM setup and customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#6C5CE7]" />
                    <span>Lead and customer management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#6C5CE7]" />
                    <span>Workflow integrations and dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col justify-end">
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#1D4ED8]"
                >
                  Explore CRM & Business Systems
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {/* Interface Preview (Sized to match Card 03 preview height) */}
                <div className="mt-5 flex min-h-[185px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-[#0F172A] p-4 text-white shadow-inner dark:border-gray-800">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-xs">
                    <span className="font-bold text-gray-200">Deals Pipeline</span>
                    <span className="rounded-lg bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                      + New Deal
                    </span>
                  </div>
                  <div className="my-auto grid grid-cols-3 gap-1.5 py-1 text-[10px]">
                    <div className="rounded-xl bg-gray-800/80 p-2 border border-gray-700/50">
                      <span className="text-[9px] font-semibold text-gray-400">New Lead</span>
                      <div className="mt-1 font-bold text-white">Acme Corp</div>
                      <div className="mt-0.5 text-[9px] font-bold text-[#6C5CE7]">$14.2k</div>
                    </div>
                    <div className="rounded-xl bg-gray-800/80 p-2 border border-gray-700/50">
                      <span className="text-[9px] font-semibold text-gray-400">Proposal</span>
                      <div className="mt-1 font-bold text-white">Summit Co</div>
                      <div className="mt-0.5 text-[9px] font-bold text-blue-400">$22.0k</div>
                    </div>
                    <div className="rounded-xl bg-blue-950/70 p-2 border border-blue-800/60">
                      <span className="text-[9px] font-semibold text-blue-300">Closed Won</span>
                      <div className="mt-1 font-bold text-blue-100">Omega Ltd</div>
                      <div className="mt-0.5 text-[9px] font-bold text-emerald-400">$38.5k</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-gray-800/60 px-3 py-1.5 text-[10px] text-gray-300">
                    <span>Pipeline Total: $74.7k</span>
                    <span className="font-bold text-blue-400">3 Deals Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Card 03: AUTOMATE */}
          <Reveal delay={0.3}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group relative flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-7 shadow-lg transition-all dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F0EDF9] text-[#10B981] dark:bg-[#6C5CE7]/20">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-[#10B981]/80">03</span>
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#10B981]">
                      AUTOMATE
                    </span>
                    <h3 className="mt-1.5 font-heading text-2xl font-extrabold text-[#111827] dark:text-white min-h-[64px] flex items-center">
                      AI & Automation
                    </h3>
                    <p className="mt-2.5 font-semibold text-sm leading-snug text-[#111827] dark:text-gray-200 min-h-[42px] flex items-center">
                      Reduce repetitive work and respond to customers faster.
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400 min-h-[52px] flex items-center">
                      Practical AI assistants and automations for lead response, customer support, documents, reporting and everyday workflows.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs font-medium text-[#374151] dark:text-gray-300 min-h-[92px] flex flex-col justify-around">
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

              <div className="mt-8 flex flex-col justify-end">
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#059669]"
                >
                  Explore AI & Automation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                {/* Interface Preview (Matching Card 01 & 02 preview height) */}
                <div className="mt-5 flex min-h-[185px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/80 bg-[#F8FAF7] p-3.5 dark:border-gray-800 dark:bg-gray-950/60">
                  {/* AI Assistant Card */}
                  <div className="relative z-10 rounded-xl border border-gray-200/80 bg-white p-2.5 shadow-xs dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#111827] dark:text-white">
                      <div className="flex items-center gap-1.5">
                        <Bot className="h-3.5 w-3.5 text-[#10B981]" />
                        <span>AI Assistant</span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-600">⚡ 12ms</span>
                    </div>

                    <div className="mt-1.5 rounded-lg bg-gray-50 p-2 text-[10px] leading-snug text-gray-600 dark:bg-gray-800/60 dark:text-gray-300">
                      I can draft proposals, summarize conversations, and follow up with leads.
                    </div>
                  </div>

                  {/* Flow Nodes Horizontal Row */}
                  <div className="mt-2.5 flex items-center justify-between gap-1 text-[9px] font-bold text-[#111827] dark:text-white">
                    <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-2xs dark:border-gray-800 dark:bg-gray-900">
                      <Users className="h-2.5 w-2.5 text-[#10B981]" />
                      <span>New Lead</span>
                    </div>
                    <span className="text-gray-400">→</span>
                    <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-2xs dark:border-gray-800 dark:bg-gray-900">
                      <FileCheck className="h-2.5 w-2.5 text-[#10B981]" />
                      <span>AI Follow-up</span>
                    </div>
                    <span className="text-gray-400">→</span>
                    <div className="flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-1 text-[#10B981] shadow-2xs dark:border-emerald-800 dark:bg-emerald-950/50">
                      <CheckSquare className="h-2.5 w-2.5 text-[#10B981]" />
                      <span>Task</span>
                    </div>
                  </div>
                </div>
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
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0D1322] border border-blue-900/30 p-8 text-white shadow-2xl md:p-14">
            {/* Background radial ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-72 w-96 -translate-y-1/2 rounded-full bg-[#6C5CE7]/20 blur-3xl"
            />

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
              {/* Left Content */}
              <div>
                <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  From idea to<br className="hidden sm:block" /> working product.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
                  We help founders shape the right first version, choose the technology and launch without unnecessary complexity.
                </p>

                <div className="mt-8">
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#6C5CE7] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(108,92,231,0.4)] transition-all hover:bg-[#5B4BC4] active:scale-95"
                  >
                    Discuss Your Idea
                  </a>
                </div>
              </div>

              {/* Right Content: Horizontal Connected Nodes */}
              <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-2 pt-4">
                {/* Connecting Line passing behind the circles (desktop & tablet) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-12 left-12 right-12 hidden sm:block h-[2px] bg-gradient-to-r from-[#6C5CE7] via-[#7C3AED] to-[#6C5CE7] shadow-[0_0_12px_#6C5CE7]"
                />

                {/* Node 1: Idea */}
                <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-[#6C5CE7] bg-[#171A2E] text-white shadow-[0_0_24px_rgba(108,92,231,0.5)]">
                    <Lightbulb className="h-7 w-7 text-white" />
                    <span className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-[#6C5CE7] ring-4 ring-[#0D1322] shadow-[0_0_8px_#6C5CE7]" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-white">
                    Idea
                  </h3>
                  <p className="mt-1.5 max-w-[140px] text-[11px] leading-snug text-gray-400">
                    Validate the problem and define the solution.
                  </p>
                </div>

                {/* Node 2: First version */}
                <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-[#6C5CE7] bg-[#171A2E] text-white shadow-[0_0_24px_rgba(108,92,231,0.5)]">
                    <Globe2 className="h-7 w-7 text-white" />
                    <span className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-[#6C5CE7] ring-4 ring-[#0D1322] shadow-[0_0_8px_#6C5CE7]" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-white">
                    First version
                  </h3>
                  <p className="mt-1.5 max-w-[140px] text-[11px] leading-snug text-gray-400">
                    Build the right first version and test with real users.
                  </p>
                </div>

                {/* Node 3: Launch */}
                <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-[#6C5CE7] bg-[#171A2E] text-white shadow-[0_0_24px_rgba(108,92,231,0.5)]">
                    <Rocket className="h-7 w-7 text-white" />
                    <span className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-[#6C5CE7] ring-4 ring-[#0D1322] shadow-[0_0_8px_#6C5CE7]" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-white">
                    Launch
                  </h3>
                  <p className="mt-1.5 max-w-[140px] text-[11px] leading-snug text-gray-400">
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
    <section id="work" className="py-24 md:py-32 bg-white dark:bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#6C5CE7]">
              SELECTED WORK
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-[2.75rem] md:leading-[1.15] dark:text-white">
              More Than Websites. Systems Built for Growth.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4B5563] dark:text-gray-300">
              From business websites to subscription platforms and AI-powered
              systems, we build technology around real commercial needs.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#6C5CE7] text-white shadow-md shadow-[#6C5CE7]/25"
                    : "border border-gray-200 bg-white text-[#4B5563] hover:border-[#6C5CE7]/40 hover:text-[#6C5CE7] dark:border-gray-700 dark:bg-transparent dark:text-gray-300"
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
              <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-gray-200 bg-[#FAFAFB] dark:border-gray-800 dark:bg-gray-950/40">
                {/* Featured platform — iGrowBig */}
                <div className="grid grid-cols-1 gap-6 border-b border-gray-200 p-5 md:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 dark:border-gray-800">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      className="aspect-[16/10] w-full object-cover object-top"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2 lg:pr-4">
                    {featured.label && (
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6C5CE7]">
                        {featured.label}
                      </span>
                    )}
                    <h3 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#111827] dark:text-white">
                      {featured.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                      {featured.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#6C5CE7]/25 bg-[#F0EDF9] px-3 py-1 text-[11px] font-semibold text-[#6C5CE7] dark:border-[#6C5CE7]/40 dark:bg-[#6C5CE7]/15 dark:text-[#A78BFA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#6C5CE7] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#6C5CE7]/25 transition-all hover:bg-[#5B4BD5]"
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
      className="group grid grid-cols-1 gap-5 p-5 transition-colors hover:bg-white/70 md:grid-cols-[0.95fr_1.05fr] md:p-6 dark:hover:bg-gray-900/50"
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
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6C5CE7]">
            {project.label}
          </span>
        )}
        <h3 className="mt-1.5 font-heading text-xl font-extrabold text-[#111827] dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300 sm:text-[13px]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-[#6C5CE7] dark:text-[#A78BFA]"
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
    <div className={expanded ? "mt-10" : "mt-16"}>
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-heading text-xl font-extrabold text-[#111827] sm:text-2xl dark:text-white">
            Selected Website Experiences
          </h3>
          {onViewAll && (
            <button
              type="button"
              onClick={onViewAll}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-[#5B4BD5]"
            >
              View all website projects
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        {WEBSITE_PROJECTS.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.08}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#FAFAFB] transition-all hover:border-[#6C5CE7]/30 hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950/40 dark:hover:bg-gray-900"
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
              <div className="relative flex flex-1 flex-col p-5">
                <h4 className="font-heading text-lg font-extrabold text-[#111827] dark:text-white">
                  {project.title}
                </h4>
                <p className="mt-0.5 text-sm font-medium text-[#6B7280] dark:text-gray-400">
                  {project.category}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                  {project.description}
                </p>
                <span className="mt-4 ml-auto grid h-8 w-8 place-items-center rounded-full bg-[#F0EDF9] text-[#6C5CE7] transition-transform group-hover:translate-x-0.5 dark:bg-[#6C5CE7]/20">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------- 5. Why Readyio ---------------- */

function WhyReadyio() {
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
    <section id="about" className="py-20 md:py-28 bg-[#F0EDF9]/40 dark:bg-gray-900/40">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7]">
              WHY READYIO
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl dark:text-white">
              Technology shaped around the business—not the other way around.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] sm:text-lg dark:text-gray-300">
              We take time to understand the business problem before recommending what to build. The result is a practical solution with clear ownership, fewer handoffs and technology your team can actually use.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((pt, idx) => (
            <Reveal key={pt.title} delay={idx * 0.1}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#6C5CE7]/40 dark:border-gray-800 dark:bg-gray-900">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7] dark:bg-[#6C5CE7]/20">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-[#111827] dark:text-white">
                  {pt.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6B7280] dark:text-gray-400">
                  {pt.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. Process Section ("HOW WE WORK") ---------------- */

function ProcessSection() {
  const STEPS = [
    {
      icon: Search,
      title: "Understand",
      desc: "We learn your goals, users and challenges to define the right plan.",
    },
    {
      icon: Layers,
      title: "Build",
      desc: "We design, build and test in close collaboration with you.",
    },
    {
      icon: Send,
      title: "Launch & Support",
      desc: "We launch with confidence and support you as you grow.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-extrabold text-[#111827] sm:text-4xl lg:text-5xl dark:text-white">
            Simple, transparent delivery.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-6 lg:gap-10">
          {STEPS.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div key={s.title} className="flex items-center gap-4">
                <Reveal delay={idx * 0.15}>
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA] shadow-xs">
                      <IconComp className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#111827] dark:text-white">
                        {s.title}
                      </h3>
                      <p className="mt-1 max-w-[220px] text-xs sm:text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Dotted Connector between steps */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden items-center gap-2 pl-3 md:flex">
                    <span className="h-2 w-2 rounded-full bg-[#6C5CE7]" />
                    <div className="h-0.5 w-12 border-t-2 border-dotted border-[#6C5CE7]/40 lg:w-20" />
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
      q: "What services does Readyio specialize in?",
      a: "Readyio is a dedicated technology partner specializing in custom website design, high-performance web applications, tailored CRM/ERP systems, and AI-driven automation workflows. We handle architecture, UI/UX design, engineering, integration, and post-launch maintenance under one unified team.",
    },
    {
      q: "Why choose one accountable team instead of hiring multiple agencies?",
      a: "Splitting projects across multiple specialized agencies leads to translation loss, disjointed user experiences, conflicting technical stacks, and endless vendor coordination. Readyio ensures your marketing site, sales CRM, and AI automations seamlessly synchronize without handoff friction.",
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
      q: "Can Readyio act as the technical partner for non-technical founders?",
      a: "Yes! Our 'For Founders' program is purpose-built for domain experts and entrepreneurs. We help you scope the right first version, choose the ideal tech stack, develop the product, and assist through launch without the overhead of hiring an in-house engineering team.",
    },
    {
      q: "How does pricing and engagement work?",
      a: "We offer transparent, milestone-based fixed pricing for scoped builds, as well as flexible monthly retainers for ongoing development and support. Schedule a free 30-minute discovery call to receive a detailed scope and estimate.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0B0F17]">
      <div className="mx-auto max-w-5xl container-p">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl dark:text-white">
              Everything you need to know about working with Readyio.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-base text-[#4B5563] dark:text-gray-300">
              Clear answers on how we design custom websites, build CRM infrastructure, and deploy AI workflows.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#FAFAFB] transition-colors hover:border-[#6C5CE7]/30 dark:border-gray-800 dark:bg-gray-900/60">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-5 text-left font-heading text-base sm:text-lg font-bold text-[#111827] dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`ml-4 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[#F0EDF9] text-[#6C5CE7] transition-transform duration-200 dark:bg-[#6C5CE7]/20 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm sm:text-base leading-relaxed text-[#4B5563] dark:text-gray-300 border-t border-gray-100 pt-3 dark:border-gray-800">
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
      eyebrow="READYIO DIGITAL SYSTEMS"
      heading={
        <>
          Build What Your Business <br className="hidden sm:inline" />
          Needs Next.
        </>
      }
      subtitle="Readyio builds high-performing websites, practical web applications, customized CRM platforms, and production AI automation — all through one accountable technology team."
      buttonText="Discuss Your Project"
      buttonHref={SITE.bookingUrl}
    />
  );
}
