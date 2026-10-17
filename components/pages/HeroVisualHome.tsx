"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  FileText,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
  Settings,
  Edit3,
  RefreshCw,
  Layers,
  Minimize2,
  FileCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function HeroVisualHome() {
  const [activeMobileTab, setActiveMobileTab] = React.useState<"platform" | "dashboard" | "pdf">("platform");

  return (
    <div className="relative w-full max-w-2xl mx-auto py-2 sm:py-4 select-none">
      {/* Background Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-blue-500/20 blur-3xl opacity-80"
      />

      {/* Mobile Interactive Tab Bar (Phone Viewport Only) - Stripe-style sleek segmented pill */}
      <div className="flex sm:hidden items-center justify-between gap-1 p-1 bg-slate-100/90 border border-slate-200/80 rounded-full mb-3.5 shadow-2xs">
        <button
          type="button"
          onClick={() => setActiveMobileTab("platform")}
          className={`flex-1 py-1.5 px-2 rounded-full text-xs font-semibold transition-all ${
            activeMobileTab === "platform"
              ? "bg-white text-[#2563EB] shadow-2xs font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Platform
        </button>
        <button
          type="button"
          onClick={() => setActiveMobileTab("dashboard")}
          className={`flex-1 py-1.5 px-2 rounded-full text-xs font-semibold transition-all ${
            activeMobileTab === "dashboard"
              ? "bg-white text-[#2563EB] shadow-2xs font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Dashboard
        </button>
        <button
          type="button"
          onClick={() => setActiveMobileTab("pdf")}
          className={`flex-1 py-1.5 px-2 rounded-full text-xs font-semibold transition-all ${
            activeMobileTab === "pdf"
              ? "bg-white text-[#2563EB] shadow-2xs font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          VigoPDF
        </button>
      </div>

      {/* SVG Connecting Circuit Lines */}
      <svg
        className="hidden sm:block pointer-events-none absolute inset-0 h-full w-full overflow-visible z-0"
        aria-hidden="true"
        viewBox="0 0 640 480"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Curved connecting line between top left globe node and bottom cards */}
        <path
          d="M 120 70 C 100 120, 90 200, 180 230"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Curved connecting line from right node to VigoPDF card */}
        <path
          d="M 570 140 C 540 180, 520 220, 460 250"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
        />

        {/* Horizontal connecting line across dashboards */}
        <path
          d="M 320 290 C 350 290, 370 290, 400 290"
          fill="none"
          stroke="#818CF8"
          strokeWidth="1.5"
        />
        <circle cx="360" cy="290" r="3" fill="#6366F1" />
      </svg>

      {/* Floating Node 1: Globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute -top-1 left-24 z-20 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md border border-blue-100 text-[#2563EB]"
      >
        <Globe className="h-5 w-5" />
      </motion.div>

      {/* Floating Node 2: Document */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-16 -right-2 z-20 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md border border-blue-100 text-[#2563EB]"
      >
        <FileText className="h-5 w-5" />
      </motion.div>

      <div className="relative z-10 space-y-4">
        {/* ================= 1. BACKGROUND BROWSER: "Your Business" ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative mx-auto lg:ml-auto w-full max-w-lg rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-3.5 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${
            activeMobileTab === "platform" ? "block" : "hidden sm:block"
          }`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-bold text-[10px]">
                ▲
              </div>
              <span className="font-semibold text-gray-800">Your Business</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-gray-500">
              <span className="hover:text-gray-900 cursor-pointer">Home</span>
              <span className="hover:text-gray-900 cursor-pointer">Services</span>
              <span className="hover:text-gray-900 cursor-pointer">About</span>
              <span className="hover:text-gray-900 cursor-pointer">Contact</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>

          {/* Inner Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-center">
            <div className="space-y-1.5 sm:space-y-2">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                Build what's next for your business
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Modern websites and web applications that turn your ideas into real results.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#2563EB] px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-white shadow-xs cursor-pointer hover:bg-blue-700 transition-colors">
                  Get Started
                </span>
              </div>
            </div>

            {/* AI Modern Platform Screen */}
            <div className="relative h-24 sm:h-28 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-900 group">
              <Image
                src="/ai-business-platform.webp"
                alt="AI Platform Engineering"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Animated scanline motion */}
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* ================= 2. LAYERED FRONT CARDS (OVERLAPPING ON DESKTOP, TABBED ON MOBILE) ================= */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 sm:-mt-8 lg:-mt-12 relative z-20 ${
          activeMobileTab === "platform" ? "hidden sm:grid" : "grid"
        }`}>
          {/* LEFT CARD: Project Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] ${
              activeMobileTab === "dashboard" ? "block" : "hidden sm:block"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold tracking-tight text-gray-900">zuvigo</span>
                <span className="text-[11px] text-gray-400">·</span>
                <span className="text-[11px] font-medium text-gray-600">Project Dashboard</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              </div>
            </div>

            <div className="flex gap-3">
              {/* Mini Sidebar */}
              <div className="hidden sm:flex flex-col gap-1 w-16 text-[9px] text-gray-500 border-r border-gray-100 pr-2">
                <span className="font-semibold text-[#2563EB] bg-blue-50/80 rounded px-1.5 py-0.5">Dashboard</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Projects</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Tasks</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Team</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Reports</span>
              </div>

              {/* Main Dashboard Content */}
              <div className="flex-1 space-y-2.5">
                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="rounded-lg bg-blue-50/60 border border-blue-100/60 p-1">
                    <div className="text-[11px] font-bold text-gray-900">12</div>
                    <div className="text-[8px] text-gray-500 truncate">Active Projects</div>
                  </div>
                  <div className="rounded-lg bg-emerald-50/60 border border-emerald-100/60 p-1">
                    <div className="text-[11px] font-bold text-gray-900">8</div>
                    <div className="text-[8px] text-gray-500 truncate">Team Members</div>
                  </div>
                  <div className="rounded-lg bg-sky-50/60 border border-sky-100/60 p-1">
                    <div className="text-[11px] font-bold text-gray-900">24</div>
                    <div className="text-[8px] text-gray-500 truncate">Tasks Done</div>
                  </div>
                </div>

                {/* Progress Chart Mock */}
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-2">
                  <div className="flex items-center justify-between text-[9px] text-gray-600 font-medium mb-1.5">
                    <span>Project Progress</span>
                    <span className="text-[#2563EB] font-bold">84%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-10 pt-1">
                    {[40, 65, 50, 85, 70, 95, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-indigo-400 opacity-90 transition-all hover:opacity-100"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Recent Activity snippet */}
                <div className="text-[9px] text-gray-500 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 truncate">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Design updated
                    </span>
                    <span className="text-gray-400 text-[8px]">2h ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 truncate">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Development sprint
                    </span>
                    <span className="text-gray-400 text-[8px]">4h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: VigoPDF (Direct Link to https://pdf.zuvigo.com/) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] flex-col justify-between ${
              activeMobileTab === "pdf" ? "flex" : "hidden sm:flex"
            }`}
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span className="text-[11px] font-bold text-gray-900">VigoPDF</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-gray-200" />
                  <span className="h-2 w-2 rounded-full bg-gray-200" />
                  <span className="h-2 w-2 rounded-full bg-gray-200" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h5 className="text-xs font-bold text-gray-900">
                  Edit, convert and manage PDF documents
                </h5>
                <p className="text-[10px] text-gray-500 leading-snug">
                  A complete PDF toolkit for modern teams.
                </p>
              </div>

              {/* Action Button linking to pdf.zuvigo.com */}
              <div className="mt-2.5">
                <a
                  href="https://pdf.zuvigo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB] px-3.5 py-1 text-[11px] font-semibold text-white shadow-xs hover:bg-blue-700 transition-colors"
                >
                  Open Document
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>

            {/* 4 Tool Chips below */}
            <div className="mt-3 grid grid-cols-4 gap-1 pt-2.5 border-t border-gray-100 text-center">
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-100 bg-gray-50/80 p-1 hover:border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <div className="text-[8px] font-semibold text-gray-800">Edit PDF</div>
              </a>
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-100 bg-gray-50/80 p-1 hover:border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <div className="text-[8px] font-semibold text-gray-800">Convert</div>
              </a>
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-100 bg-gray-50/80 p-1 hover:border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <div className="text-[8px] font-semibold text-gray-800">Merge</div>
              </a>
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-100 bg-gray-50/80 p-1 hover:border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <div className="text-[8px] font-semibold text-gray-800">Compress</div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
