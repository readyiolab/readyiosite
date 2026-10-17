"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  PenLine,
  GitBranch,
  Mail,
  LayoutGrid,
  MonitorDown,
  Cloud,
  Monitor,
  Server,
  Bot,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { HeroVisualSoftware } from "@/components/pages/HeroVisualSoftware";
import { AuroraCTA } from "@/components/site/AuroraCTA";
import { SITE } from "@/lib/site";

export function SoftwarePage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#111827]">
      {/* 1. HERO SECTION */}
      <SoftwareHero />

      {/* 2. SIX PRODUCTS WITH RICH HIGHLIGHTS */}
      <SixProductsSection />

      {/* 3. THREE WAYS TO USE OUR SOFTWARE */}
      <DeploymentOptionsSection />

      {/* 4. FEATURED PRODUCT: VigoPDF */}
      <FeaturedVigoPdfSection />

      {/* 5. ENTERPRISE SOFTWARE CTA */}
      <AuroraCTA
        id="software-cta"
        eyebrow="ENTERPRISE &amp; BESPOKE SOFTWARE"
        heading="Need dedicated software built or deployed in your private cloud?"
        subtitle="Zuvigo licenses, customizes, and deploys high-performance document tools, offline-first desktop applications, and bespoke web platforms for your enterprise."
        buttonText="Let's Talk"
        buttonHref="/contact"
        secondaryButtonText="Send an Inquiry"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}

/* ---------------- 1. Software Hero Section ---------------- */
function SoftwareHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Radiant ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-100/60 via-sky-50/40 to-transparent blur-3xl opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-10 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left Text */}
          <div className="relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-gradient-to-r from-blue-50 to-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] shadow-2xs">
              <span className="text-[11px]">💬</span>
              SOFTWARE BUILT BY ZUVIGO
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-[50px] xl:text-[56px]">
              Practical software for documents, workflows{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
                and everyday productivity.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-lg">
              Zuvigo builds powerful software for modern teams. Our products
              include VigoPDF, eSign, VigoFlow, VigoLetters, Productivity
              Suite and Desktop Software — designed to help you work faster,
              simpler and more securely.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <a
                href="https://pdf.zuvigo.com/workspace"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-5px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_-5px_rgba(37,99,235,0.6)] active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span>Explore Productivity Suite</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="https://pdf.zuvigo.com/desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/90 backdrop-blur-xs px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Desktop Software</span>
                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual Mockup */}
          <div className="relative">
            <HeroVisualSoftware />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2. Six Products. One Connected Experience ---------------- */
function SixProductsSection() {
  const products = [
    {
      title: "VigoPDF",
      desc: "Create, edit, convert, merge, compress and manage PDF documents effortlessly.",
      badge: "Document Suite",
      icon: FileText,
      href: "https://pdf.zuvigo.com/",
      flagship: false,
    },
    {
      title: "eSign",
      desc: "Prepare, sign and audit electronic signatures with strict compliance guardrails.",
      badge: "Secure Signatures",
      icon: PenLine,
      href: "https://pdf.zuvigo.com/esign",
      flagship: false,
    },
    {
      title: "VigoFlow",
      desc: "Interactive flowcharting, architectural diagrams, process mapping and mind maps.",
      badge: "Visual Canvas",
      icon: GitBranch,
      href: "https://pdf.zuvigo.com/diagrams",
      flagship: false,
    },
    {
      title: "VigoLetters",
      desc: "Generate personalized letters, contracts, and business documents in automated bulk.",
      badge: "Bulk Automation",
      icon: Mail,
      href: "https://pdf.zuvigo.com/letters",
      flagship: false,
    },
    {
      title: "Productivity Suite",
      desc: "VigoPDF, eSign, VigoFlow, VigoLetters, and team collaboration united in one single workspace.",
      badge: "All-In-One",
      icon: LayoutGrid,
      href: "https://pdf.zuvigo.com/workspace",
      flagship: true,
    },
    {
      title: "Desktop Software",
      desc: "Downloadable native desktop applications for offline speed and local file performance.",
      badge: "Offline Native",
      icon: MonitorDown,
      href: "https://pdf.zuvigo.com/desktop",
      flagship: false,
    },
  ];

  return (
    <section className="relative py-14 sm:py-24 lg:py-28 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2563EB] border border-blue-100/70">
            OUR SOFTWARE
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Six products. One connected experience.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            From document workflows to diagrams and automation, Zuvigo software
            helps you get more done with less complexity.
          </p>
        </div>

        {/* 6 Products Grid with elevated visual highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-start justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(37,99,235,0.18)] ${p.flagship
                  ? "border-blue-200/90 bg-gradient-to-br from-white via-blue-50/20 to-sky-50/30 shadow-[0_8px_25px_rgba(37,99,235,0.08)]"
                  : "border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-blue-300"
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/70 text-[#2563EB] shadow-2xs group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                        {p.title}
                      </h3>
                      {p.flagship ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white shadow-xs">
                          ✦ FLAGSHIP
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs">
                      {p.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#2563EB]">
                      <span>Launch tool</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>

                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:translate-x-1 transition-all">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. Three Ways To Use Our Software ---------------- */
function DeploymentOptionsSection() {
  const options = [
    {
      title: "Online",
      desc: "Access Zuvigo software through your browser. Always up to date, zero installation required.",
      icon: Cloud,
      features: ["Instant browser access", "Automated cloud backup", "Collaborative team rooms"],
      badge: "Zero Setup",
      href: "https://pdf.zuvigo.com/workspace",
    },
    {
      title: "Desktop",
      desc: "Download powerful desktop applications for offline use, native gestures and maximum performance.",
      icon: Monitor,
      features: ["100% offline functionality", "Zero file upload latency", "macOS & Windows native"],
      badge: "Fast & Offline",
      href: "https://pdf.zuvigo.com/desktop",
    },
    {
      title: "Your Cloud",
      desc: "Deploy in your own cloud environment or private cluster for greater control and data residency.",
      icon: Server,
      features: ["Dedicated VPC deployment", "Enterprise SSO & audit logs", "Full sovereignty"],
      badge: "Enterprise Grade",
      href: "https://pdf.zuvigo.com/enterprise",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            THREE WAYS TO USE OUR SOFTWARE
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Built for how you work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Choose the deployment option that fits your team's needs. Same
            powerful software, your way.
          </p>
        </div>

        {/* Unified Ecosystem Showcase Banner with 3D Isometric SaaS & Tools Illustration */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-blue-200/90 bg-gradient-to-br from-white via-blue-50/25 to-sky-50/20 p-6 sm:p-10 shadow-md">
          <div className="lg:col-span-6 relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-blue-100 bg-white">
            <Image
              src="/isometric-saas-tools.webp"
              alt="Connected SaaS productivity tools, PDF editor, digital contracts, and eSign workflows"
              fill
              className="object-contain p-3"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#2563EB] shadow-xs border border-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              INTEGRATED PRODUCTIVITY
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              ONE CONNECTED ECOSYSTEM
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Seamlessly switch between browser, desktop &amp; private cloud
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Whether you are converting confidential client proposals in VigoPDF, sending binding contracts via eSign, or orchestrating automated multi-step logic in VigoFlow — your assets remain synchronized with military-grade encryption.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="rounded-full bg-white border border-blue-100 px-3 py-1 shadow-2xs">Zero Document Lag</span>
              <span className="rounded-full bg-white border border-blue-100 px-3 py-1 shadow-2xs">SOC-2 Type Ready</span>
              <span className="rounded-full bg-white border border-blue-100 px-3 py-1 shadow-2xs">Native Offline Engines</span>
            </div>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <a
                key={opt.title}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/40 p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-100 bg-blue-50/80 text-[#2563EB] group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
                      {opt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                    {opt.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {opt.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-700">
                    {opt.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center justify-between text-xs font-semibold text-[#2563EB] pt-4 border-t border-slate-100">
                  <span>Get started</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4. Featured Product: VigoPDF ---------------- */
function FeaturedVigoPdfSection() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2563EB] border border-blue-100/70">
            FEATURED PRODUCT
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            VigoPDF
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            The complete PDF solution for modern teams
          </p>
        </div>

        {/* Big Mockup Container */}
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)]">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-bold text-[#2563EB] text-base tracking-tight">
                VigoPDF
              </span>
              <div className="hidden sm:flex items-center gap-2 font-medium text-slate-500 ml-4">
                <span className="text-slate-900 font-semibold px-2.5 py-1 rounded-md bg-slate-100">
                  Home
                </span>
                <span className="px-2 py-1 hover:text-slate-900 cursor-pointer">
                  Edit
                </span>
                <span className="px-2 py-1 hover:text-slate-900 cursor-pointer">
                  Convert
                </span>
                <span className="px-2 py-1 hover:text-slate-900 cursor-pointer">
                  Organize
                </span>
                <span className="px-2 py-1 hover:text-slate-900 cursor-pointer">
                  Sign
                </span>
                <span className="px-2 py-1 text-[#2563EB] flex items-center gap-1 font-semibold bg-blue-50 rounded-md">
                  AI Tools
                </span>
              </div>
            </div>

            <a
              href="https://pdf.zuvigo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors"
            >
              Open VigoPDF
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Inner Two Pane Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Document Pane */}
            <div className="lg:col-span-8 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-900">
                  Business_Agreement_2025.pdf
                </span>
                <span className="rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 font-medium text-emerald-700">
                  ✓ Valid signature attached
                </span>
              </div>

              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-900 shadow-inner group">
                <Image
                  src="/isometric-cyber-security.webp"
                  alt="Cryptographic signature and biometric verification preview"
                  fill
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                  sizes="600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Master Services &amp; Digital Solutions Agreement
                    </h4>
                    <p className="text-xs text-slate-200 mt-2.5 max-w-md leading-relaxed">
                      AI-assisted verification, automated signature routing, and
                      tamper-proof cryptographic audit trail.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
                    <span>Authorized Representative</span>
                    <span className="font-mono text-[11px] text-emerald-400">SHA-256 Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant Drawer Pane */}
            <div className="lg:col-span-4 rounded-2xl border border-blue-200/80 bg-gradient-to-b from-blue-50/50 to-white p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-2.5 border-b border-blue-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
                  <Bot className="h-4 w-4" />
                  AI Document Assistant
                </div>
                <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Online
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="rounded-xl bg-white p-3 border border-blue-100/90 shadow-2xs text-gray-700 leading-relaxed">
                  I analyzed this agreement. Key clauses: 99.9% uptime SLA,
                  data residency compliance, and bi-weekly sprint deliverables.
                </div>
                <div className="rounded-xl bg-white p-3 border border-blue-100/90 shadow-2xs text-gray-700 leading-relaxed">
                  Would you like to auto-fill the signature placeholders or export
                  an executive summary?
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://pdf.zuvigo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B0F19] px-4 py-3 text-xs font-semibold text-white shadow-xs hover:bg-black transition-colors"
                >
                  Launch in Browser
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
