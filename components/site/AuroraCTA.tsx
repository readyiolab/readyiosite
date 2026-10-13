"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Mail,
  Clock,
  Code2,
  Check,
  Copy,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

export interface AuroraCTAProps {
  heading?: React.ReactNode;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  isExternal?: boolean;
  eyebrow?: string;
  id?: string;
  className?: string;
}

export function AuroraCTA({
  heading = "Ready to discuss your project?",
  subtitle = "Zuvigo builds modern websites, custom web applications, cloud & desktop software, and business automation — helping businesses operate smarter and scale faster.",
  buttonText = "Let's Talk",
  buttonHref = "/contact",
  secondaryButtonText = "hello@zuvigo.com",
  secondaryButtonHref = `mailto:${SITE.email}`,
  isExternal = false,
  eyebrow = "AVAILABLE FOR NEW PROJECTS",
  id,
  className = "",
}: AuroraCTAProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse spotlight coordinates
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    if (secondaryButtonHref.startsWith("mailto:")) {
      e.preventDefault();
      navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isPrimaryExt = isExternal || buttonHref.startsWith("http") || buttonHref.startsWith("mailto:");

  return (
    <section id={id} className={`py-16 sm:py-24 relative ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Outer Animated Iridescent Glow Wrapper */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] p-[1.5px] bg-gradient-to-r from-blue-600/35 via-purple-600/35 to-indigo-600/35 shadow-[0_30px_90px_-20px_rgba(15,23,42,0.5)] transition-all duration-500 hover:shadow-[0_35px_100px_-20px_rgba(37,99,235,0.3)]"
          >
            {/* Inner Main Obsidian Card */}
            <div className="relative overflow-hidden rounded-[calc(2.25rem-1.5px)] sm:rounded-[calc(2.75rem-1.5px)] bg-[#090D16] p-8 sm:p-12 md:p-14 lg:p-16 text-white">

              {/* Dynamic Interactive Cursor Spotlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
                style={{
                  opacity: isHovered ? 0.75 : 0.45,
                  background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(37, 99, 235, 0.22), rgba(124, 58, 237, 0.15) 35%, transparent 70%)`,
                }}
              />

              {/* Blueprint Matrix Grid Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-20 opacity-[0.08]"
                style={{
                  backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Ambient Aurora Glow Spheres */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-30 overflow-hidden"
              >
                {/* Electric Blue Orb */}
                <div
                  className="absolute -top-36 -right-20 h-[520px] w-[520px] sm:h-[680px] sm:w-[680px] rounded-full opacity-65 blur-[120px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(37, 99, 235, 0.85) 0%, rgba(99, 102, 241, 0.45) 45%, transparent 75%)",
                  }}
                />

                {/* Royal Purple Orb */}
                <div
                  className="absolute -bottom-36 right-16 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] rounded-full opacity-70 blur-[130px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(124, 58, 237, 0.75) 0%, rgba(79, 70, 229, 0.4) 40%, transparent 70%)",
                  }}
                />
              </div>

              {/* 2-Column Responsive Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14 relative z-10">

                {/* Left Column: Smart Headline + Description + Clean CTA Buttons */}
                <div className="lg:col-span-7">

                  {/* Top Status Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {eyebrow && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span>{eyebrow}</span>
                      </div>
                    )}
                    <span className="text-xs text-slate-400 font-medium">
                      Direct engineering response within 24h
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h2 className="font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                    {heading}
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg font-normal">
                    {subtitle}
                  </p>

                  {/* Smart Dual Action Buttons */}
                  <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                    {/* Primary Button */}
                    {isPrimaryExt ? (
                      <a
                        href={buttonHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_12px_35px_-5px_rgba(37,99,235,0.55)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_45px_-5px_rgba(37,99,235,0.7)] active:scale-[0.98]"
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                        <span>{buttonText}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link
                        href={buttonHref}
                        className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_12px_35px_-5px_rgba(37,99,235,0.55)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_45px_-5px_rgba(37,99,235,0.7)] active:scale-[0.98]"
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                        <span>{buttonText}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}

                    {/* Secondary Smart Action: Clickable / Copyable Contact */}
                    {secondaryButtonHref.startsWith("mailto:") ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/35 active:scale-[0.98] cursor-pointer"
                        title="Click to copy email address"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 text-emerald-400" />
                            <span className="text-emerald-300">Email Copied!</span>
                          </>
                        ) : (
                          <>
                            <Mail className="h-4 w-4 text-slate-300" />
                            <span>{secondaryButtonText}</span>
                            <Copy className="h-3.5 w-3.5 text-slate-400 ml-1 opacity-70" />
                          </>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={secondaryButtonHref}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/35 active:scale-[0.98]"
                      >
                        <Mail className="h-4 w-4 text-slate-300" />
                        <span>{secondaryButtonText}</span>
                      </Link>
                    )}
                  </div>

                  {/* Clean Trust Indicators Strip */}
                  <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-5 sm:gap-7 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Free discovery &amp; technical roadmap</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>100% Code &amp; IP Ownership</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>Zero recurring vendor lock-in</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: AI Architecture Console Visual with Motion HUD */}
                <div className="lg:col-span-5 relative">
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-slate-900/90 shadow-2xl">

                    {/* Background AI Command Infrastructure Graphic */}
                    <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden group">
                      <Image
                        src="/ai-command-center.jpg"
                        alt="Zuvigo AI Neural Cloud Architecture"
                        fill
                        className="object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 480px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/35 to-transparent" />

                      {/* Animated Laser Scanline Sweep */}
                      <motion.div
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                        className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"
                      />
                    </div>

                    {/* Floating Glassmorphic Engineering Spec Card */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-3.5 bottom-3.5 rounded-xl border border-white/20 bg-slate-950/85 backdrop-blur-xl p-4 shadow-xl space-y-3"
                    >
                      {/* Top Header of HUD */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                          </span>
                          <span className="text-xs font-bold text-white tracking-wide">
                            Zuvigo Delivery Spec
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-blue-300 bg-blue-500/15 border border-blue-500/30 px-2 py-0.5 rounded-full">
                          Sprint Ready
                        </span>
                      </div>

                      {/* Micro Metric Grid */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                          <div className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Clock className="h-3 w-3 text-amber-400" />
                            Avg. Turnaround
                          </div>
                          <div className="font-bold text-white text-xs sm:text-sm mt-0.5">
                            2 to 4 Weeks
                          </div>
                        </div>

                        <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                          <div className="text-[10px] text-slate-400 flex items-center gap-1">
                            <ShieldCheck className="h-3 w-3 text-emerald-400" />
                            Code Rights
                          </div>
                          <div className="font-bold text-white text-xs sm:text-sm mt-0.5">
                            100% Client IP
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] text-slate-300">
                        <span className="rounded bg-white/10 px-2 py-0.5 font-mono">Next.js 15</span>
                        <span className="rounded bg-white/10 px-2 py-0.5 font-mono">TypeScript</span>
                        <span className="rounded bg-white/10 px-2 py-0.5 font-mono">Cloud / AWS</span>
                        <span className="rounded bg-white/10 px-2 py-0.5 font-mono">Custom APIs</span>
                      </div>
                    </motion.div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
