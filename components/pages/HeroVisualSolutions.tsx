"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  ChevronDown,
  Search,
  Bell,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export function HeroVisualSolutions() {
  const [activeMobileTab, setActiveMobileTab] = React.useState<"solutions" | "projects" | "inventory">("solutions");

  return (
    <div className="relative w-full max-w-2xl mx-auto py-2 sm:py-4 select-none">
      {/* Background Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-blue-500/20 blur-3xl opacity-80"
      />

      {/* Mobile Interactive Tab Bar (Phone Viewport Only) */}
      <div className="flex sm:hidden items-center justify-between gap-1 p-1 bg-slate-100/90 border border-slate-200/80 rounded-xl mb-3 shadow-2xs">
        <button
          type="button"
          onClick={() => setActiveMobileTab("solutions")}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
            activeMobileTab === "solutions"
              ? "bg-white text-blue-600 shadow-2xs font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Solutions
        </button>
        <button
          type="button"
          onClick={() => setActiveMobileTab("projects")}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
            activeMobileTab === "projects"
              ? "bg-white text-blue-600 shadow-2xs font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => setActiveMobileTab("inventory")}
          className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
            activeMobileTab === "inventory"
              ? "bg-white text-blue-600 shadow-2xs font-bold"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Inventory
        </button>
      </div>

      {/* SVG Connecting Circuit Lines */}
      <svg
        className="hidden sm:block pointer-events-none absolute inset-0 h-full w-full overflow-visible z-0"
        aria-hidden="true"
        viewBox="0 0 640 480"
      >
        <defs>
          <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Path connecting top-left "Websites" badge to left dashboard */}
        <path
          d="M 140 80 C 130 140, 150 190, 200 230"
          fill="none"
          stroke="url(#solGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Path connecting top-right "Cloud & Desktop" badge to right dashboard */}
        <path
          d="M 540 100 C 530 160, 500 200, 460 240"
          fill="none"
          stroke="url(#solGrad)"
          strokeWidth="1.5"
        />

        {/* Central junction dot */}
        <circle cx="330" cy="240" r="3.5" fill="#2563EB" />
      </svg>

      {/* Floating Badge Node 1: "Websites" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-4 left-16 z-20 hidden sm:flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-800 shadow-md border border-blue-100 backdrop-blur-xs"
      >
        <div className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-[#2563EB]">
          <Globe className="h-3 w-3" />
        </div>
        <span>Websites</span>
      </motion.div>

      {/* Floating Badge Node 2: "Cloud & Desktop" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-8 right-6 z-20 hidden sm:flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-800 shadow-md border border-blue-100 backdrop-blur-xs"
      >
        <div className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-[#2563EB]">
          <Cloud className="h-3 w-3" />
        </div>
        <span>Cloud &amp; Desktop</span>
      </motion.div>

      <div className="relative z-10 space-y-4">
        {/* ================= 1. BACKGROUND BROWSER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative ml-auto w-full max-w-lg rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-3.5 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${
            activeMobileTab === "solutions" ? "block" : "hidden sm:block"
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
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium text-gray-500">
              <span className="hover:text-gray-900 cursor-pointer">Home</span>
              <span className="hover:text-gray-900 cursor-pointer">Solutions</span>
              <span className="hover:text-gray-900 cursor-pointer">Industries</span>
              <span className="hover:text-gray-900 cursor-pointer">About</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#2563EB] px-2.5 py-0.5 text-[10px] font-semibold text-white">
              Get Started
            </span>
          </div>

          {/* Inner Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-center">
            <div className="space-y-1.5 sm:space-y-2">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                Turn your ideas into real business results.
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Custom digital solutions that help you grow, operate smarter and stay ahead.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#2563EB] px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-white shadow-xs">
                  Get Started →
                </span>
              </div>
            </div>

            {/* AI Cloud Solutions Architecture Screen */}
            <div className="relative h-24 sm:h-28 w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-900 group">
              <Image
                src="/ai-cloud-solutions.webp"
                alt="AI Cloud Architecture"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Animated scanline motion */}
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-indigo-400/25 to-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* ================= 2. LAYERED FRONT CARDS (OVERLAPPING ON DESKTOP, TABBED ON MOBILE) ================= */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 sm:-mt-8 lg:-mt-12 relative z-20 ${
          activeMobileTab === "solutions" ? "hidden sm:grid" : "grid"
        }`}>
          {/* LEFT CARD: Project Overview */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] ${
              activeMobileTab === "projects" ? "block" : "hidden sm:block"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold tracking-tight text-gray-900">zuvigo</span>
                <span className="text-[11px] text-gray-400">·</span>
                <span className="text-[11px] font-medium text-gray-600">Project Overview</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="flex gap-3">
              {/* Mini Sidebar */}
              <div className="hidden sm:flex flex-col gap-1 w-16 text-[9px] text-gray-500 border-r border-gray-100 pr-2">
                <span className="font-semibold text-[#2563EB] bg-blue-50/80 rounded px-1.5 py-0.5">Dashboard</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Projects</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Users</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Analytics</span>
                <span className="px-1.5 py-0.5 hover:text-gray-800">Settings</span>
              </div>

              {/* Content */}
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

                {/* Project Activity Chart */}
                <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-2">
                  <div className="flex items-center justify-between text-[9px] text-gray-600 font-medium mb-1.5">
                    <span>Project Activity</span>
                    <span className="flex items-center gap-0.5 text-gray-400 text-[8px]">
                      Last 6 months <ChevronDown className="h-2 w-2" />
                    </span>
                  </div>
                  <div className="flex items-end gap-1.5 h-12 pt-1">
                    {[35, 55, 45, 90, 65, 80, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-indigo-400 opacity-90 transition-all hover:opacity-100"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: Inventory Management */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] flex-col justify-between ${
              activeMobileTab === "inventory" ? "flex" : "hidden sm:flex"
            }`}
          >
            <div>
              {/* Top Bar with Search & User Profile */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2 text-xs">
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                  <Search className="h-3 w-3" />
                  <span>Search...</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-3 w-3 text-gray-400" />
                  <div className="h-5 w-5 rounded-full bg-blue-100 text-[#2563EB] font-bold text-[9px] grid place-items-center">
                    JD
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-bold text-gray-900 mb-2">
                Inventory Management
              </div>

              {/* 3 Stats */}
              <div className="grid grid-cols-3 gap-1.5 text-center mb-2.5">
                <div className="rounded-lg bg-gray-50 border border-gray-100 p-1">
                  <div className="text-[11px] font-bold text-gray-900">248</div>
                  <div className="text-[8px] text-gray-500">Total Products</div>
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-100/60 p-1">
                  <div className="text-[11px] font-bold text-[#2563EB]">1,429</div>
                  <div className="text-[8px] text-gray-500">Total Orders</div>
                </div>
                <div className="rounded-lg bg-emerald-50 border border-emerald-100/60 p-1">
                  <div className="text-[11px] font-bold text-emerald-600">98%</div>
                  <div className="text-[8px] text-gray-500">Fulfillment</div>
                </div>
              </div>

              {/* Recent Orders Table */}
              <div className="space-y-1 text-[9px]">
                <div className="text-gray-400 font-semibold uppercase text-[8px] mb-1">Recent Orders</div>
                <div className="flex items-center justify-between border-b border-gray-50 pb-1 text-gray-600">
                  <span className="font-semibold text-gray-800">#1042 Acme Co.</span>
                  <span className="rounded bg-emerald-50 px-1 py-0.2 text-[8px] font-medium text-emerald-600">
                    Completed
                  </span>
                  <span className="text-gray-400 text-[8px]">Apr 24, 2025</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-50 pb-1 text-gray-600">
                  <span className="font-semibold text-gray-800">#1041 Bright Ltd</span>
                  <span className="rounded bg-blue-50 px-1 py-0.2 text-[8px] font-medium text-[#2563EB]">
                    Processing
                  </span>
                  <span className="text-gray-400 text-[8px]">Apr 23, 2025</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span className="font-semibold text-gray-800">#1040 Global Tech</span>
                  <span className="rounded bg-emerald-50 px-1 py-0.2 text-[8px] font-medium text-emerald-600">
                    Completed
                  </span>
                  <span className="text-gray-400 text-[8px]">Apr 21, 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
