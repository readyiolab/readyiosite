"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";
import {
  Check,
  CheckCircle2,
  ChevronUp,
  Code2,
  Database,
  Eye,
  FileText,
  Heart,
  Layout,
  Lightbulb,
  MinusCircle,
  Plus,
  Rocket,
  Target,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { AuroraCTA } from "@/components/site/AuroraCTA";

export function ForFoundersPage() {
  return (
    <div className="relative overflow-hidden bg-[#F7F5F1] text-[#111827] dark:bg-[#0B0F17] dark:text-white">
      <FounderHero />
      <FounderProblem />
      <FounderJourney />
      <WhatWeCanBuild />
      <FounderDiscovery />
      <WhyFoundersWorkWithUs />
      <WhoThisIsFor />
      <SelectedFounderWork />
      <FounderFAQ />
      <FounderFinalCTA />
    </div>
  );
}

/* ---------------- 1. Founder Hero ---------------- */

function FounderHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      {/* Soft background aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 -z-10 h-[600px] w-[800px] rounded-full bg-gradient-to-bl from-[#6C5CE7]/10 via-[#7C3AED]/5 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl container-p">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <div>
            <Reveal>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#6C5CE7]">
                FOR FOUNDERS
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl dark:text-white">
                Turn your idea into<br />a working product.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#5A6376] dark:text-gray-300">
                You bring the idea, industry knowledge and understanding of the customer. We help you shape the right first version, choose the technology and build a product you can launch—without hiring a complete technology team.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#6C5CE7] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#5B4BC4] active:scale-95"
                >
                  Discuss Your Idea
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#6C5CE7]/30 bg-transparent px-7 py-3.5 text-xs sm:text-sm font-bold text-[#6C5CE7] transition-all hover:bg-[#6C5CE7]/5 active:scale-95 dark:text-[#A78BFA] dark:border-[#A78BFA]/30"
                >
                  See How It Works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-bold text-[#475569] dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#6C5CE7]" />
                  Clear scope
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#6C5CE7]" />
                  Milestone-based delivery
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#6C5CE7]" />
                  Support after launch
                </span>
              </div>
            </Reveal>
          </div>

          {/* Visual flow: Idea -> Wireframe -> Working Product */}
          <Reveal delay={0.2}>
            <div>
              {/* Desktop Connected 3D Layout (lg and above) */}
              <div className="hidden lg:flex relative min-h-[420px] w-full items-center justify-end select-none">

                {/* Connecting SVG Line with Purple Nodes */}
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-none z-10"
                  viewBox="0 0 580 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Curve 1: From Idea Card to Wireframe Card */}
                  <path
                    d="M 145 220 Q 185 220, 185 170 T 235 170"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Node 1 */}
                  <circle cx="235" cy="170" r="5" fill="#6C5CE7" stroke="white" strokeWidth="2" />

                  {/* Curve 2: From Wireframe Card to Working Product Card */}
                  <path
                    d="M 375 160 Q 415 160, 415 100 T 455 100"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Node 2 */}
                  <circle cx="455" cy="100" r="5" fill="#6C5CE7" stroke="white" strokeWidth="2" />
                </svg>

                {/* 1. Idea Card */}
                <div className="absolute left-[0%] top-[38%] z-20 w-[150px] rounded-2xl border border-gray-100/90 bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center gap-1.5 text-[#0F172A] dark:text-white">
                    <Lightbulb className="h-4 w-4 text-[#6C5CE7]" />
                    <span className="text-xs font-bold">Idea</span>
                  </div>
                  <p className="mt-2.5 text-[10px] leading-relaxed text-gray-500 dark:text-gray-400">
                    A solution that helps coaches manage clients and sessions.
                  </p>
                  <div className="mt-3.5 space-y-1.5">
                    <div className="h-1 w-full rounded-full bg-gray-100 dark:bg-gray-800" />
                    <div className="h-1 w-5/6 rounded-full bg-gray-100 dark:bg-gray-800" />
                    <div className="h-1 w-2/3 rounded-full bg-gray-100 dark:bg-gray-800" />
                  </div>
                </div>

                {/* 2. Wireframe Card */}
                <div className="absolute left-[33%] top-[12%] z-20 w-[175px] rounded-2xl border border-gray-100/90 bg-white p-3.5 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 dark:border-gray-800">
                    <div className="flex items-center gap-1.5 text-[#0F172A] dark:text-white">
                      <Layout className="h-4 w-4 text-[#6C5CE7]" />
                      <span className="text-xs font-bold">Wireframe</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>

                  {/* Wireframe Mock Layout */}
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full rounded-xs bg-gray-100 dark:bg-gray-800" />
                    <div className="h-12 w-full rounded-md bg-gray-50 dark:bg-gray-800/60" />
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="h-12 rounded-md bg-gray-50 dark:bg-gray-800/60" />
                      <div className="h-12 rounded-md bg-gray-50 dark:bg-gray-800/60" />
                    </div>
                    <div className="grid grid-cols-3 gap-1 pt-1">
                      <div className="h-3 rounded-xs bg-gray-100 dark:bg-gray-800" />
                      <div className="h-3 rounded-xs bg-gray-100 dark:bg-gray-800" />
                      <div className="h-3 rounded-xs bg-gray-100 dark:bg-gray-800" />
                    </div>
                  </div>
                </div>

                {/* 3. Working Product Card */}
                <div className="absolute right-0 top-[0%] z-30 w-[260px] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center gap-2 border-b border-gray-100 bg-[#FAF9FD] px-4 py-3 dark:border-gray-800 dark:bg-gray-900/80">
                    <Layout className="h-4 w-4 text-[#6C5CE7]" />
                    <span className="text-xs font-bold text-[#0F172A] dark:text-white">Working Product</span>
                  </div>

                  {/* Dashboard layout simulator */}
                  <div className="flex h-[320px]">
                    {/* Left Sidebar */}
                    <div className="w-[80px] bg-[#0E131F] p-2.5 text-white flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-[#6C5CE7]" />
                          <span className="text-[7px] font-extrabold tracking-wider">APP</span>
                        </div>
                        <div className="mt-4 space-y-1.5">
                          <div className="flex items-center gap-1 rounded-md bg-[#6C5CE7] p-1 text-[7px] font-bold">
                            <span>Dashboard</span>
                          </div>
                          <div className="px-1 text-[7px] text-gray-400 font-medium">Clients</div>
                          <div className="px-1 text-[7px] text-gray-400 font-medium">Sessions</div>
                          <div className="px-1 text-[7px] text-gray-400 font-medium">Payments</div>
                          <div className="px-1 text-[7px] text-gray-400 font-medium">Messages</div>
                          <div className="px-1 text-[7px] text-gray-400 font-medium">Reports</div>
                          <div className="px-1 text-[7px] text-gray-400 font-medium">Settings</div>
                        </div>
                      </div>
                    </div>

                    {/* Main Panel content */}
                    <div className="flex-1 bg-white p-3.5 dark:bg-gray-950 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-extrabold text-[#0F172A] dark:text-white">Dashboard</h4>

                        {/* Active Sessions & Clients */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="rounded-xl border border-gray-100 bg-[#FAF9FD] p-2 dark:border-gray-800 dark:bg-gray-900/60">
                            <span className="text-[8px] text-gray-400 font-medium block">Upcoming Sessions</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white block mt-0.5">12</span>
                            <span className="text-[7px] text-gray-400 block mt-0.5">This Week</span>
                          </div>
                          <div className="rounded-xl border border-gray-100 bg-[#FAF9FD] p-2 dark:border-gray-800 dark:bg-gray-900/60">
                            <span className="text-[8px] text-gray-400 font-medium block">Active Clients</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-white block mt-0.5">48</span>
                            <span className="text-[7px] text-emerald-500 font-bold block mt-0.5">▲ +12%</span>
                          </div>
                        </div>

                        {/* Recent Activities */}
                        <div className="mt-3.5">
                          <span className="text-[8px] text-gray-400 font-extrabold block">Recent Activity</span>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-between text-[8px]">
                              <span className="text-gray-700 font-medium dark:text-gray-300">New session booked</span>
                              <span className="text-gray-400">2h ago</span>
                            </div>
                            <div className="flex items-center justify-between text-[8px]">
                              <span className="text-gray-700 font-medium dark:text-gray-300">Payment received</span>
                              <span className="text-gray-400">1d ago</span>
                            </div>
                            <div className="flex items-center justify-between text-[8px]">
                              <span className="text-gray-700 font-medium dark:text-gray-300">Client signed up</span>
                              <span className="text-gray-400">2d ago</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mini Sparkline Chart */}
                      <div className="mt-4 border-t border-gray-50 pt-2 dark:border-gray-800">
                        <div className="flex items-center justify-between text-[7px]">
                          <span className="text-gray-400 font-bold">Revenue Overview</span>
                          <span className="text-gray-400">This Month</span>
                        </div>
                        <svg className="w-full h-10 mt-1 text-[#6C5CE7]" viewBox="0 0 100 30" fill="none">
                          <path d="M0 25 L15 20 L30 22 L45 10 L60 15 L75 5 L90 12 L100 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M0 25 L15 20 L30 22 L45 10 L60 15 L75 5 L90 12 L100 2 L100 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
                        </svg>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

              {/* Mobile Card Stack Layout (< lg screens) */}
              <div className="lg:hidden mt-6 flex flex-col gap-4 w-full">
                {/* 01. Idea Card */}
                <div className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#0F172A] dark:text-white">
                      <Lightbulb className="h-4 w-4 text-[#6C5CE7]" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">01. Idea</span>
                    </div>
                    <span className="rounded-full bg-[#6C5CE7]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#6C5CE7]">Concept</span>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                    A solution that helps coaches manage clients and sessions.
                  </p>
                </div>

                {/* 02. Wireframe Card */}
                <div className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-[#0F172A] dark:text-white">
                      <Layout className="h-4 w-4 text-[#6C5CE7]" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">02. Wireframe</span>
                    </div>
                    <span className="rounded-full bg-[#6C5CE7]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#6C5CE7]">UX Wireframe</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-3 w-full rounded-xs bg-gray-100 dark:bg-gray-800" />
                    <div className="h-10 w-full rounded-md bg-gray-50 dark:bg-gray-800/60" />
                  </div>
                </div>

                {/* 03. Working Product Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="flex items-center justify-between border-b border-gray-100 bg-[#FAF9FD] px-5 py-3.5 dark:border-gray-800 dark:bg-gray-900/80">
                    <div className="flex items-center gap-2 text-[#0F172A] dark:text-white">
                      <Layout className="h-4 w-4 text-[#6C5CE7]" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">03. Working Product</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600">Live App</span>
                  </div>
                  <div className="p-5 bg-white dark:bg-gray-950">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-gray-100 bg-[#FAF9FD] p-3.5 dark:border-gray-800 dark:bg-gray-900">
                        <span className="text-xs text-gray-400 font-medium block">Upcoming Sessions</span>
                        <span className="text-lg font-extrabold text-gray-900 dark:text-white block mt-0.5">12</span>
                      </div>
                      <div className="rounded-xl border border-gray-100 bg-[#FAF9FD] p-3.5 dark:border-gray-800 dark:bg-gray-900">
                        <span className="text-xs text-gray-400 font-medium block">Active Clients</span>
                        <span className="text-lg font-extrabold text-gray-900 dark:text-white block mt-0.5">48 <span className="text-xs text-emerald-500 font-bold">▲ +12%</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Founder Problem ---------------- */

function FounderProblem() {
  const CARDS = [
    {
      icon: Target,
      text: "What problem are we really solving?",
    },
    {
      icon: Users,
      text: "Who is the first user and what do they need?",
    },
    {
      icon: Database,
      text: "What should we build first—and what not to?",
    },
    {
      icon: Wallet,
      text: "What will it cost and how long will it take?",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAF9FD] dark:bg-gray-950/60">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6C5CE7]">
              FROM IDEA TO EXECUTION
            </span>
            <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl dark:text-white">
                A good idea is only<br className="hidden sm:inline" /> the beginning.
              </h2>
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#5A6376] dark:text-gray-300">
                Founders often face uncertainty about what to build, which technology to choose, how much it will cost and how to avoid overbuilding.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.text} delay={idx * 0.1}>
                <div className="flex h-full min-h-[170px] flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-7 shadow-xs transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="text-[#6C5CE7] dark:text-[#A78BFA]">
                    <Icon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <h4 className="mt-8 font-heading text-sm sm:text-base font-bold leading-snug text-[#0F172A] dark:text-white">
                    {card.text}
                  </h4>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Founder Journey ---------------- */

function FounderJourney() {
  const STEPS = [
    {
      num: "01",
      title: "Shape the idea",
      desc: "We understand the problem, customer and goals to define the right direction.",
      icon: Lightbulb,
    },
    {
      num: "02",
      title: "Define the first version",
      desc: "We prioritize features, choose the right technology and plan for impact.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Design and build",
      desc: "We design, build and test your product in close collaboration with you.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Launch and improve",
      desc: "We help you launch, learn from real users and keep improving what matters.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#0A0D18] p-6 sm:p-12 lg:p-16 text-white shadow-2xl border border-white/10">
            {/* Ambient background glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 right-0 h-[450px] w-[500px] rounded-full bg-gradient-to-br from-[#6C5CE7]/25 via-[#7C3AED]/10 to-transparent blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 left-0 h-[450px] w-[500px] rounded-full bg-gradient-to-tr from-[#6C5CE7]/20 via-[#4F46E5]/10 to-transparent blur-3xl"
            />

            {/* Section Header */}
            <div className="relative z-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#9B8EFF]">
                HOW WE HELP
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                From idea to first version.
              </h2>
            </div>

            {/* 4 Steps Timeline Flow */}
            <div className="relative z-10 mt-14 sm:mt-16">

              {/* Horizontal Connecting Glow Line (Desktop) */}
              <div
                aria-hidden
                className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#6C5CE7]/30 via-[#8B5CF6] to-[#6C5CE7]/30 z-0"
              />

              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {STEPS.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.num} delay={idx * 0.1}>
                      <div className="relative flex flex-col items-start lg:items-center text-left lg:text-center group">

                        {/* Circular Glowing Icon Node */}
                        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#8B5CF6]/50 bg-[#12112A] text-[#A78BFA] shadow-[0_0_30px_rgba(108,92,231,0.4)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#8B5CF6] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                          <Icon className="h-7 w-7 stroke-[1.75]" />
                          <span className="absolute -bottom-1 h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
                        </div>

                        {/* Step Number & Title */}
                        <span className="mt-6 font-heading text-xs font-extrabold text-[#A78BFA]">
                          {s.num}
                        </span>
                        <h3 className="mt-1 font-heading text-base font-bold text-white">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-gray-400 max-w-[240px]">
                          {s.desc}
                        </p>

                      </div>
                    </Reveal>
                  );
                })}
              </div>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4. What We Can Build for Founders ---------------- */

function WhatWeCanBuild() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9FD] dark:bg-gray-950/60">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6C5CE7]">
              HOW WE CAN BUILD
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl dark:text-white">
              The right technology for the stage you are in.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {/* Card 1: Validation Websites */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100/90 bg-white p-4 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              {/* Mockup Preview */}
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-[#091510] p-2.5 text-white">
                <div className="flex items-center justify-between text-[7px] text-gray-300 border-b border-white/10 pb-1">
                  <span className="font-bold text-emerald-400">GreenScale</span>
                  <div className="flex gap-2 text-[6px] opacity-70">
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <h5 className="font-heading text-[10px] font-extrabold leading-tight">
                    Better facilities.<br />Stronger schools.
                  </h5>
                  <p className="text-[6px] text-gray-400 max-w-[110px] leading-tight">
                    Clean modern landing page designed for fast idea validation.
                  </p>
                  <button className="mt-2.5 rounded-sm bg-white px-2 py-0.5 text-[6px] font-bold text-gray-900">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#0F172A] dark:text-white">
                    Validation Websites
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5A6376] dark:text-gray-400">
                    Fast, high-converting websites to validate your idea, test messaging and attract early users.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Web Applications & SaaS */}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100/90 bg-white p-4 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              {/* Mockup Preview */}
              <div className="relative flex h-44 w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="w-[38px] bg-[#121824] p-1.5 text-white">
                  <div className="h-1 w-4 rounded-xs bg-white/30" />
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 w-full rounded-xs bg-[#6C5CE7]" />
                    <div className="h-1 w-3/4 rounded-xs bg-white/20" />
                    <div className="h-1 w-5/6 rounded-xs bg-white/20" />
                    <div className="h-1 w-2/3 rounded-xs bg-white/20" />
                  </div>
                </div>
                <div className="flex-1 p-2 bg-[#FAF9FD] dark:bg-gray-900/40">
                  <span className="text-[8px] font-extrabold text-gray-800 dark:text-white">Overview</span>
                  <div className="mt-2 rounded-lg bg-white p-2 shadow-2xs dark:bg-gray-800">
                    <span className="text-[6px] text-gray-400 block">Active Users</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">1,240</span>
                    <svg className="w-full h-8 mt-1 text-[#6C5CE7]" viewBox="0 0 100 30" fill="none">
                      <path d="M0 25 L20 18 L40 22 L60 8 L80 14 L100 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M0 25 L20 18 L40 22 L60 8 L80 14 L100 4 L100 30 L0 30 Z" fill="currentColor" fillOpacity="0.1" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#0F172A] dark:text-white">
                    Web Applications & SaaS
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5A6376] dark:text-gray-400">
                    Custom web apps and SaaS products built for usability, scalability and long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Marketplaces & Portals */}
          <Reveal delay={0.3}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100/90 bg-white p-4 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              {/* Mockup Preview */}
              <div className="relative flex h-44 w-full flex-col overflow-hidden rounded-2xl bg-[#090C19] p-2.5 text-white">
                <span className="text-[7px] text-gray-400">EXPERT HUB</span>
                <h5 className="mt-1 font-heading text-[9px] font-extrabold leading-tight">
                  Find the right expert<br />for your project
                </h5>
                <div className="mt-2.5 flex items-center gap-1 rounded-md bg-white/10 p-1">
                  <div className="h-1.5 flex-1 rounded-xs bg-white/20" />
                  <div className="rounded-xs bg-[#6C5CE7] px-1.5 py-0.5 text-[5px] font-bold">Search</div>
                </div>
                <div className="mt-3">
                  <span className="text-[6px] text-gray-400 block">Popular Categories</span>
                  <div className="mt-1 grid grid-cols-4 gap-1">
                    <div className="h-6 rounded-md bg-white/5 flex items-center justify-center text-[8px]">💼</div>
                    <div className="h-6 rounded-md bg-white/5 flex items-center justify-center text-[8px]">⚡</div>
                    <div className="h-6 rounded-md bg-white/5 flex items-center justify-center text-[8px]">📊</div>
                    <div className="h-6 rounded-md bg-white/5 flex items-center justify-center text-[8px]">🚀</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#0F172A] dark:text-white">
                    Marketplaces & Portals
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5A6376] dark:text-gray-400">
                    Two-sided platforms and portals that connect users, simplify workflows and create value.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 4: AI-Powered Products */}
          <Reveal delay={0.4}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100/90 bg-white p-4 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              {/* Mockup Preview */}
              <div className="relative flex h-44 w-full flex-col overflow-hidden rounded-2xl bg-[#FAF9FD] p-2.5 dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#6C5CE7]/20 text-[#6C5CE7] flex items-center justify-center text-[6px]">⚡</div>
                  <span className="text-[8px] font-extrabold text-gray-800 dark:text-white">Insights</span>
                </div>
                <div className="mt-2 rounded-lg bg-white p-2 shadow-2xs dark:bg-gray-900 border border-gray-50 dark:border-gray-800">
                  <span className="text-[6px] text-gray-400 block">Summary</span>
                  <div className="mt-1 flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[6px] font-bold text-gray-700 dark:text-gray-200">Dataset benchmarked</span>
                  </div>
                  <svg className="w-full h-10 mt-2 text-[#6C5CE7]" viewBox="0 0 100 30" fill="none">
                    <path d="M0 20 L25 25 L50 10 L75 18 L100 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#0F172A] dark:text-white">
                    AI-Powered Products
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5A6376] dark:text-gray-400">
                    Intelligent features and workflows that use AI to deliver better outcomes for your users.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 5: CRM & Business Platforms */}
          <Reveal delay={0.5}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100/90 bg-white p-4 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              {/* Mockup Preview */}
              <div className="relative flex h-44 w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="w-[38px] bg-[#121824] p-1.5 text-white">
                  <div className="h-1 w-4 rounded-xs bg-white/30" />
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 w-full rounded-xs bg-[#6C5CE7]" />
                    <div className="h-1 w-3/4 rounded-xs bg-white/20" />
                  </div>
                </div>
                <div className="flex-1 p-2 bg-[#FAF9FD] dark:bg-gray-900/40">
                  <span className="text-[8px] font-extrabold text-gray-800 dark:text-white">Deals</span>
                  <div className="mt-2 grid grid-cols-3 gap-1">
                    <div className="rounded-md bg-white p-1 shadow-2xs dark:bg-gray-800 space-y-1">
                      <span className="text-[5px] text-gray-400 font-bold block">Candidate</span>
                      <div className="h-1 rounded-xs bg-gray-100 dark:bg-gray-700" />
                      <div className="h-1 rounded-xs bg-gray-100 dark:bg-gray-700" />
                    </div>
                    <div className="rounded-md bg-white p-1 shadow-2xs dark:bg-gray-800 space-y-1">
                      <span className="text-[5px] text-gray-400 font-bold block">Progress</span>
                      <div className="h-1 rounded-xs bg-[#6C5CE7]/30" />
                      <div className="h-1 rounded-xs bg-gray-100 dark:bg-gray-700" />
                    </div>
                    <div className="rounded-md bg-white p-1 shadow-2xs dark:bg-gray-800 space-y-1">
                      <span className="text-[5px] text-emerald-500 font-bold block">Won</span>
                      <div className="h-1 rounded-xs bg-emerald-100 dark:bg-emerald-900/40" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#0F172A] dark:text-white">
                    CRM & Business Platforms
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5A6376] dark:text-gray-400">
                    Custom CRM and business platforms to manage leads, customers, operations and revenue.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. Founder Discovery ---------------- */

function FounderDiscovery() {
  const PLAN_ITEMS = [
    "Customer & problem understanding",
    "User journeys & key flows",
    "First-version feature set",
    "Technology recommendation",
    "Roadmap & milestones",
    "Cost & timeline estimate",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#EDE8FF] p-6 sm:p-12 lg:p-16 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40 shadow-sm">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.25fr]">
              {/* Left Column */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#6C5CE7] dark:text-[#A78BFA]">
                  START WITH CLARITY
                </span>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl dark:text-white">
                  Start with the right<br />first version.
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A6376] dark:text-gray-300 max-w-md">
                  Our discovery helps you make confident decisions before investing in development.
                </p>
                <div className="mt-8">
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#6C5CE7] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#5B4BC4] active:scale-95"
                  >
                    Start With Discovery
                  </a>
                </div>
              </div>

              {/* Right Column: 3x2 Grid of Clear Plan Items */}
              <div>
                <h4 className="font-heading text-sm sm:text-base font-extrabold text-[#0F172A] dark:text-white mb-5">
                  You&apos;ll get a clear plan, including:
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {PLAN_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3.5 rounded-2xl bg-white p-4.5 shadow-2xs border border-white/80 dark:border-gray-800 dark:bg-gray-900"
                    >
                      <div className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-[#6C5CE7]/10 text-[#6C5CE7] flex-shrink-0 dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold leading-snug text-[#0F172A] dark:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 6. Why Founders Work With Readyio ---------------- */

function WhyFoundersWorkWithUs() {
  const POINTS = [
    {
      title: "Business-first thinking",
      desc: "We focus on outcomes that create real value for your customers.",
      icon: Target,
    },
    {
      title: "No unnecessary overbuilding",
      desc: "We build only what matters for your next milestone.",
      icon: MinusCircle,
    },
    {
      title: "One accountable team",
      desc: "Design, development and delivery—aligned under one team.",
      icon: UserCheck,
    },
    {
      title: "Transparent delivery",
      desc: "Clear scope, regular updates and decisions made together.",
      icon: Eye,
    },
    {
      title: "Support beyond launch",
      desc: "We stay with you to improve, iterate and help you grow.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9FD] dark:bg-gray-950/60">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6C5CE7]">
              OUR PRINCIPLES
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl leading-tight dark:text-white">
              A technology partner that thinks about the business.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {POINTS.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <Reveal key={pt.title} delay={idx * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#6C5CE7]/10 text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                      <Icon className="h-6 w-6 stroke-[1.75]" />
                    </div>
                    <h3 className="mt-5 font-heading text-base font-extrabold text-[#0F172A] leading-snug dark:text-white">
                      {pt.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#5A6376] dark:text-gray-300">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. Who This Is For ---------------- */

function WhoThisIsFor() {
  const FITS = [
    "Understand the problem they want to solve",
    "Are prepared to invest in a credible first version",
    "Can participate in product decisions and feedback",
    "Want a long-term technology partner",
    "Prefer phased development over building everything at once",
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6C5CE7]">
              WHO THIS IS FOR
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl dark:text-white">
              Readyio is a good fit for founders who:
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FITS.map((item, idx) => (
            <Reveal key={item} delay={idx * 0.1}>
              <div className="flex items-center gap-3.5 rounded-2xl border border-gray-200 bg-white p-5 shadow-xs dark:border-gray-800 dark:bg-gray-900">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#6C5CE7]" />
                <span className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. Selected Founder Work ---------------- */

function SelectedFounderWork() {
  const FOUNDER_PROJECTS = [
    {
      title: "iGrowBig",
      idea: "Independent distributors needed a reliable digital system to establish an online presence and manage leads.",
      built: "Complete web platform with lead capture, member management and automated notifications.",
      status: "Active & Scaling",
      image: "/igrowbig.png",
    },
    {
      title: "Arbilo",
      idea: "Crypto traders lacked a simple, readable interface to visualize arbitrage market data.",
      built: "Analytics web app displaying real-time arbitrage matrices and market insights.",
      status: "Live Product",
      image: "/arbiloprojct.png",
    },
    {
      title: "Freedom M&A",
      idea: "M&A advisory needed automated lead qualification and communication pipelines.",
      built: "AI-assisted CRM with automated phone/SMS workflows via Twilio integration.",
      status: "Live Product",
      image: "/dave.png",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F0EDF9]/40 dark:bg-gray-900/40">
      <div className="mx-auto max-w-7xl container-p">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7]">
              SELECTED FOUNDER WORK
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl dark:text-white">
              Products built for founders.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FOUNDER_PROJECTS.map((fp, idx) => (
            <Reveal key={fp.title} delay={idx * 0.1}>
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div>
                  <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={fp.image}
                      alt={fp.title}
                      className="aspect-video w-full object-cover"
                      width={600}
                      height={338}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                      {fp.title}
                    </h3>
                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      {fp.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs text-[#4B5563] dark:text-gray-300">
                    <p><strong className="text-[#111827] dark:text-white">Problem:</strong> {fp.idea}</p>
                    <p><strong className="text-[#111827] dark:text-white">Solution Built:</strong> {fp.built}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. Founder FAQ ---------------- */

function FounderFAQ() {
  const FAQS = [
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
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#FAF9FD] dark:bg-gray-950/60">
      <div className="mx-auto max-w-7xl container-p">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.8fr] lg:items-start">
          <Reveal>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6C5CE7]">
                FOUNDER FAQ
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl dark:text-white">
                Answers to common<br />questions.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-gray-100/90 bg-white divide-y divide-gray-100 shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:divide-gray-800">
              {FAQS.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={faq.q} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-4.5 sm:p-5 text-left font-heading text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white hover:text-[#6C5CE7] dark:hover:text-[#A78BFA] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <div className="ml-4 text-[#6C5CE7] dark:text-[#A78BFA]">
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-[#5A6376] dark:text-gray-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. Founder Final CTA Banner ---------------- */

function FounderFinalCTA() {
  return (
    <AuroraCTA
      id="founder-cta"
      eyebrow="LET'S BUILD YOUR IDEA"
      heading={
        <>
          Turn Your Vision Into a <br className="hidden sm:inline" />
          Working Product.
        </>
      }
      subtitle="From day-one architecture to MVP launch in weeks. Built with founder speed, senior engineering leadership, and zero technical bloat."
      buttonText="Discuss Your Idea"
      buttonHref={SITE.bookingUrl}
    />
  );
}
