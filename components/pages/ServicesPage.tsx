"use client";

import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Calculator,
  Check,
  CheckCircle2,
  Clock,
  CodeXml,
  LayoutDashboard,
  Layers,
  Smartphone,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/site/Reveal";
import { AuroraCTA } from "@/components/site/AuroraCTA";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import Image from "next/image";
import panelProduct from "@/assets/panel-product.jpg";
import panelCrm from "@/assets/panel-crm.jpg";
import panelAi from "@/assets/panel-ai.jpg";
import panelMobile from "@/assets/panel-mobile.jpg";

const SERVICES = [
  {
    id: "web",
    icon: CodeXml,
    tag: "Web & Product",
    title: "Websites & products people actually use",
    intro: "From high-converting marketing sites to full custom web applications, we design and build for performance, SEO, and revenue.",
    image: panelProduct,
    deliverables: [
      "Brand-aligned marketing sites",
      "Headless commerce & storefronts",
      "Custom web apps & dashboards",
      "Design systems & component libraries",
    ],
  },
  {
    id: "crm",
    icon: LayoutDashboard,
    tag: "CRM & ERP",
    title: "Internal platforms shaped around how your team really works",
    intro: "We build custom CRM, ERP and internal tools that model your actual process — not the process your software vendor wishes you had.",
    image: panelCrm,
    deliverables: [
      "Custom CRM with your real pipeline",
      "ERP for daily operations",
      "Data warehouses & reporting",
      "Integrations between existing tools",
    ],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    tag: "AI & Automation",
    title: "AI agents & automation that survive real customers",
    intro: "We ship AI in production — with retrieval, guardrails, and observability — so you get the win without the incident.",
    image: panelAi,
    deliverables: [
      "AI chat & voice agents",
      "Workflow automation (n8n, Zapier, custom)",
      "Retrieval-augmented search",
      "AI-powered analytics & reporting",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    tag: "Mobile Apps",
    title: "Native-feeling apps on iOS & Android",
    intro: "Cross-platform mobile from a single codebase — with the polish, gestures and performance users expect.",
    image: panelMobile,
    deliverables: [
      "iOS & Android from one codebase",
      "Native modules where they matter",
      "App Store & Play submission",
      "Ongoing scaling & maintenance",
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div aria-hidden className="absolute inset-0 -z-10 mesh-bg opacity-60" />
        <div className="mx-auto max-w-7xl container-p text-center">
          <SectionHeading
            eyebrow="Services"
            as="h1"
            title={<>Every system your business runs on — <span className="text-gradient">under one team</span>.</>}
            subtitle="Pick one capability or lean on all four. Readyio scales with the scope."
          />
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl container-p space-y-24 md:space-y-36">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.id}
                className={`grid scroll-mt-24 grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
              >
                <Reveal>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      <Icon className="h-3.5 w-3.5" /> {s.tag}
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl xl:text-5xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                      {s.intro}
                    </p>
                    <StaggerGroup className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <motion.div
                          key={d}
                          variants={staggerItem}
                          className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                          {d}
                        </motion.div>
                      ))}
                    </StaggerGroup>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={SITE.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider text-background transition-all hover:bg-primary"
                      >
                        Discuss this capability
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                      <a
                        href="#scope-calculator"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-accent/50 px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent transition-colors"
                      >
                        <Calculator className="h-3.5 w-3.5 text-primary" />
                        Estimate Scope
                      </a>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="relative">
                    <div aria-hidden className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
                    <div className="glass overflow-hidden rounded-3xl p-2 shadow-[var(--shadow-elevated)]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        className="aspect-square w-full rounded-2xl object-cover"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Project Scope & Quick Estimate Calculator */}
      <section id="scope-calculator" className="pb-28 md:pb-36 border-t border-border/60 pt-20 bg-accent/20">
        <div className="mx-auto max-w-5xl container-p">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <Calculator className="h-3.5 w-3.5" />
                Interactive Scoping
              </div>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight md:text-4xl text-foreground">
                Project Scope & Quick Estimate Calculator
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Get an instant estimate for timeline, architecture, and team composition before jumping on our discovery call.
              </p>
            </div>
          </Reveal>

          <ScopeEstimateCalculator />
        </div>
      </section>

      {/* Final Services CTA matching reference design */}
      <AuroraCTA
        id="services-cta"
        eyebrow="CUSTOM SYSTEM ENGINEERING"
        heading={
          <>
            Need a Dedicated Team for <br className="hidden sm:inline" />
            Your Next Build?
          </>
        }
        subtitle="From brand-defining web applications to custom CRM/ERP platforms and production AI agents — let's engineer the right solution for your stack."
        buttonText="Book Technical Scoping Call"
        buttonHref={SITE.bookingUrl}
      />
    </>
  );
}

type Capability = "web" | "crm" | "ai" | "mobile" | "fullstack";
type Scale = "mvp" | "growth" | "enterprise";
type Timeline = "rapid" | "standard" | "comprehensive";

function ScopeEstimateCalculator() {
  const [capability, setCapability] = useState<Capability>("fullstack");
  const [scale, setScale] = useState<Scale>("growth");
  const [timeline, setTimeline] = useState<Timeline>("standard");

  const estimates = {
    web: {
      title: "Web & Product Engineering",
      team: "1 Lead Architect · 2 Frontend Engineers · 1 QA Specialist",
      mvp: {
        time: "3 - 4 weeks",
        stack: "Modern SSR Web, Responsive UI, Core SEO & Analytics, Lead Routing Forms",
        phase1: "Wireframes & Design System",
        phase2: "Responsive Component Build",
        phase3: "SEO & Production Release",
      },
      growth: {
        time: "5 - 7 weeks",
        stack: "Custom CMS / Portal, Dynamic Component Library, Performance Tuning, Native CRM Sync",
        phase1: "Architecture & User Journeys",
        phase2: "Full-Stack Portal Implementation",
        phase3: "Load Testing, Integrations & Launch",
      },
      enterprise: {
        time: "8 - 12 weeks",
        stack: "Multi-tenant Portal, Headless Architecture, Microfrontends, Global CDN, SSO & RBAC",
        phase1: "Enterprise Security & Infrastructure",
        phase2: "Modular Feature Development",
        phase3: "Pen Testing, SLA & Multi-Region Deploy",
      },
    },
    crm: {
      title: "CRM & ERP Business Systems",
      team: "1 Systems Architect · 2 Full-Stack Engineers · 1 Integration Specialist",
      mvp: {
        time: "3 - 5 weeks",
        stack: "Tailored Lead Pipeline, Contact Profiles, Webhook Integrations, Real-Time Notifications",
        phase1: "Data Schema & Pipeline Mapping",
        phase2: "Custom Dashboard & DB Build",
        phase3: "Webhook Verification & Team Onboarding",
      },
      growth: {
        time: "6 - 9 weeks",
        stack: "Custom Sales Workflow, Team Roles, Financial Analytics Dashboard, Automated Email Triggers",
        phase1: "End-to-End Workflow Mapping",
        phase2: "Automated Rules & Role Engines",
        phase3: "Data Migration & Production Deployment",
      },
      enterprise: {
        time: "10 - 15 weeks",
        stack: "Full ERP Operations, Data Warehouse, Two-Way Legacy Sync, Enterprise SSO, Audit Logs",
        phase1: "Legacy System Audit & DB Design",
        phase2: "Core Service Bus & ERP Engine",
        phase3: "Compliance, Staging & Rollout",
      },
    },
    ai: {
      title: "AI & Autonomous Automations",
      team: "1 AI/ML Engineer · 1 Full-Stack Developer · 1 Prompt/Workflow Specialist",
      mvp: {
        time: "3 - 5 weeks",
        stack: "Grounded RAG AI Assistant, Context Guardrails, Automated Lead Qualification Agent",
        phase1: "Knowledge Ingestion & Guardrails",
        phase2: "Chat/Voice Agent Orchestration",
        phase3: "Evals, Accuracy Testing & Embedding",
      },
      growth: {
        time: "6 - 8 weeks",
        stack: "Multi-Tool AI Agents, n8n/Zapier Workflow Automation, Document Processing, CRM Sync",
        phase1: "Process Mining & Tool Design",
        phase2: "Multi-Agent Automation Fleet",
        phase3: "Human-in-the-Loop & Production Ops",
      },
      enterprise: {
        time: "10 - 14 weeks",
        stack: "Private Model Hosting, Autonomous Workflow Fleet, Observability Evals, Custom Fine-Tuning",
        phase1: "Private Cloud Infrastructure Setup",
        phase2: "Fine-Tuning & Multi-Agent Pods",
        phase3: "Latency Tuning & Enterprise SLA",
      },
    },
    mobile: {
      title: "Mobile & Cross-Platform Apps",
      team: "1 Mobile Architect · 2 React Native Engineers · 1 QA Device Tester",
      mvp: {
        time: "4 - 6 weeks",
        stack: "Cross-Platform iOS & Android, Core User Auth, Push Notifications, App Store Prep",
        phase1: "Mobile UX & Prototype Design",
        phase2: "Core Screens & Native APIs",
        phase3: "TestFlight, Play Console & Launch",
      },
      growth: {
        time: "7 - 10 weeks",
        stack: "Native Modules, Offline Cache, In-App Subscriptions, Telemetry Analytics, Backend Sync",
        phase1: "State & Offline Architecture",
        phase2: "Payment Gateways & Native Feats",
        phase3: "Store Compliance & Release",
      },
      enterprise: {
        time: "12 - 16 weeks",
        stack: "Deep Hardware Integration, Enterprise MDM, Multi-Region Deployment, Custom Security",
        phase1: "Hardware Specs & Security Layers",
        phase2: "Enterprise Mobile Pod Build",
        phase3: "MDM Deployment & Field Testing",
      },
    },
    fullstack: {
      title: "Complete Digital Operating System",
      team: "1 Lead Technical Architect · 3 Full-Stack Engineers · 1 QA & DevOps Lead",
      mvp: {
        time: "5 - 7 weeks",
        stack: "Connected Web App + Native CRM + Automated Lead Routing & Alerting",
        phase1: "Unified Architecture Blueprint",
        phase2: "Integrated App + CRM Build",
        phase3: "End-to-End Testing & Go-Live",
      },
      growth: {
        time: "8 - 12 weeks",
        stack: "Complete Digital Operating System: Web, CRM, Mobile & AI Assistants",
        phase1: "System Architecture & Data Schema",
        phase2: "Parallel Sprint Feature Execution",
        phase3: "Comprehensive E2E QA & Milestone Launch",
      },
      enterprise: {
        time: "14 - 20 weeks",
        stack: "End-to-End Enterprise Transformation with Dedicated Engineering Pod",
        phase1: "Enterprise Discovery & Infrastructure",
        phase2: "High-Volume Modular Delivery",
        phase3: "Security Audit, Multi-Region SLA & Handover",
      },
    },
  };

  const currentEst = estimates[capability][scale];
  const capInfo = estimates[capability];

  return (
    <div className="mt-14 rounded-3xl border border-border/80 bg-gradient-to-b from-card to-background p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Left Inputs Configurator */}
        <div className="lg:col-span-7 space-y-9">
          {/* Step 1: Capability */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  1
                </span>
                Select Primary Capability
              </label>
              <span className="text-[11px] font-semibold text-primary">
                {capInfo.title}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: "web", label: "Web & Product", desc: "High-speed web apps & converting interfaces", icon: CodeXml },
                { id: "crm", label: "CRM & ERP", desc: "Custom internal pipelines, databases & ops", icon: LayoutDashboard },
                { id: "ai", label: "AI & Automation", desc: "Autonomous chat/voice bots & agent workflows", icon: BrainCircuit },
                { id: "mobile", label: "Mobile Apps", desc: "iOS & Android native and cross-platform", icon: Smartphone },
                { id: "fullstack", label: "Full-Stack System", desc: "Connected Web + CRM + AI infrastructure", icon: Layers, highlight: true },
              ].map((item) => {
                const Icon = item.icon;
                const active = capability === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCapability(item.id as Capability)}
                    className={`group relative flex items-start gap-3 p-4 rounded-2xl border text-left transition-all duration-200 ${item.highlight && !active ? "sm:col-span-2 border-primary/40 bg-primary/[0.03]" : ""
                      } ${item.highlight && active ? "sm:col-span-2" : ""
                      } ${active
                        ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary/25 shadow-sm"
                        : "border-border bg-card/80 text-foreground hover:border-primary/50 hover:bg-card"
                      }`}
                  >
                    <div
                      className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl transition-colors ${active
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold truncate">{item.label}</span>
                        {item.highlight && (
                          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-primary">
                            Flagship
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Scale */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                2
              </span>
              Project Scale & Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: "mvp",
                  title: "MVP / Phase 1",
                  sub: "Fast to market",
                  badge: "Speed to Launch",
                  desc: "Core feature set, essential auth & streamlined release.",
                },
                {
                  id: "growth",
                  title: "Growth & Scale",
                  sub: "Full feature set",
                  badge: "Most Popular",
                  desc: "Advanced workflows, multi-role access, analytics & integrations.",
                },
                {
                  id: "enterprise",
                  title: "Enterprise",
                  sub: "Deep integration",
                  badge: "Mission Critical",
                  desc: "Legacy sync, high concurrency, strict security & SLA.",
                },
              ].map((item) => {
                const active = scale === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScale(item.id as Scale)}
                    className={`flex flex-col justify-between p-4 rounded-2xl border text-left transition-all duration-200 ${active
                        ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary/25 shadow-sm"
                        : "border-border bg-card/80 text-foreground hover:border-primary/50 hover:bg-card"
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${active
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-muted-foreground"
                            }`}
                        >
                          {item.badge}
                        </span>
                        {active && <Check className="h-3.5 w-3.5 text-primary" />}
                      </div>
                      <div className="mt-2 text-sm font-bold text-foreground">{item.title}</div>
                      <div className="text-[11px] font-semibold text-primary">{item.sub}</div>
                      <p className="mt-1.5 text-[11px] text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Preferred Timeline */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
              Desired Launch Window
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: "rapid", label: "Urgent (< 1 month)", note: "Rapid sprint pacing" },
                { id: "standard", label: "1 - 2 Months", note: "Standard sprint cycle" },
                { id: "comprehensive", label: "Flexible / Q3-Q4", note: "Multi-milestone roadmap" },
              ].map((item) => {
                const active = timeline === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimeline(item.id as Timeline)}
                    className={`p-3.5 rounded-2xl border text-center transition-all duration-200 ${active
                        ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary/25 shadow-sm"
                        : "border-border bg-card/80 text-foreground hover:border-primary/50 hover:bg-card"
                      }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{item.note}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Blueprint Cockpit Card */}
        <div className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-[#6C5CE7]/30 bg-gradient-to-br from-[#0F0C20] via-[#161233] to-[#251B4E] p-6 sm:p-8 text-white shadow-[0_20px_50px_rgba(108,92,231,0.25)] flex flex-col justify-between h-full">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#6C5CE7]/30 blur-2xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-[#10B981]/20 blur-2xl" />

          <div className="relative z-10 space-y-6">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C4B5FD]">
                Calculated Scope Blueprint
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur-sm border border-emerald-500/30">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                1 Accountable Team
              </span>
            </div>

            {/* Estimated Sprint Duration & Visual Timeline */}
            <div>
              <span className="text-xs font-medium text-gray-300">Estimated Sprint Duration:</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white flex items-center gap-2">
                  <Clock className="h-7 w-7 text-[#A78BFA]" />
                  {currentEst.time}
                </span>
              </div>

              {/* Sprint Phases Mini Roadmap */}
              <div className="mt-3.5 rounded-xl border border-white/10 bg-white/5 p-3 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-gray-300 font-semibold">
                  <span>Sprint Phasing:</span>
                  <span className="text-emerald-300 font-mono text-[10px]">Staging Preview Weekly</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-medium">
                  <div className="rounded-lg bg-white/10 p-1.5 text-[#C4B5FD] border border-[#6C5CE7]/30">
                    {currentEst.phase1}
                  </div>
                  <div className="rounded-lg bg-white/10 p-1.5 text-gray-200 border border-white/10">
                    {currentEst.phase2}
                  </div>
                  <div className="rounded-lg bg-emerald-500/20 p-1.5 text-emerald-300 border border-emerald-500/30">
                    {currentEst.phase3}
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture & Deliverables Box */}
            <div>
              <span className="text-xs font-medium text-gray-300">Architecture &amp; Deliverables:</span>
              <div className="mt-1.5 rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-md">
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-gray-100">
                  {currentEst.stack}
                </p>
              </div>
            </div>

            {/* Team Pod Breakdown */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C4B5FD] block mb-1">
                Dedicated Engineering Pod
              </span>
              <p className="text-xs text-gray-200 flex items-center gap-2">
                <Users className="h-4 w-4 text-[#A78BFA] flex-shrink-0" />
                <span>{capInfo.team}</span>
              </p>
            </div>

            {/* Core Commitments */}
            <div className="space-y-2 text-xs text-gray-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Sprint-based milestone delivery with live staging previews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>100% full source code ownership &amp; technical documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>30-day post-launch warranty and bug support included</span>
              </div>
            </div>
          </div>

          {/* Action CTA Block */}
          <div className="mt-8 pt-5 border-t border-white/10 relative z-10">
            <a
              href={`${SITE.bookingUrl}?a1=${encodeURIComponent(`${capability}-${scale}-${timeline}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#6C5CE7] to-[#8075FF] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(108,92,231,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(108,92,231,0.7)] active:scale-95"
            >
              <span>Lock In Scope On Discovery Call</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="mt-2.5 text-center text-[11px] text-gray-400">
              Response within 24 hours · Technical review with an engineering lead · Zero sales pressure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
