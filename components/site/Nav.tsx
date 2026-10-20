"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Monitor,
  LayoutGrid,
  Cloud,
  Zap,
  FileText,
  Mail,
  PenLine,
  GitBranch,
  MonitorDown,
  Menu,
  X,
  ExternalLink,
  Layers,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

export const SOLUTIONS_ITEMS = [
  {
    title: "Website Development",
    desc: "Modern, high-converting websites for growing businesses.",
    badge: "High Performance",
    href: "/solutions#websites",
    icon: Monitor,
  },
  {
    title: "Web Application Development",
    desc: "Custom web applications tailored to your workflows.",
    badge: "Custom Workflows",
    href: "/solutions#web-apps",
    icon: LayoutGrid,
  },
  {
    title: "Cloud & Desktop Software Development",
    desc: "Scalable cloud and desktop software solutions.",
    badge: "Resilient Arch",
    href: "/solutions#cloud-desktop",
    icon: Cloud,
  },
  {
    title: "Business & AI Automation",
    desc: "Automate processes and unlock new efficiency with AI.",
    badge: "AI Powered",
    href: "/solutions#automation",
    icon: Zap,
  },
];

export const SOFTWARE_ITEMS = [
  {
    title: "VigoPDF",
    desc: "Create, edit, convert and manage PDF documents.",
    href: "https://pdf.zuvigo.com/",
    icon: FileText,
    badge: "Documents",
    external: true,
  },
  {
    title: "eSign",
    desc: "Prepare, sign and manage electronic documents.",
    href: "https://pdf.zuvigo.com/esign",
    icon: PenLine,
    badge: "Signatures",
    external: true,
  },
  {
    title: "VigoFlow",
    desc: "Flowcharts, process maps and diagrams.",
    href: "https://pdf.zuvigo.com/diagrams",
    icon: GitBranch,
    badge: "Canvas",
    external: true,
  },
  {
    title: "VigoLetters",
    desc: "Create personalized letters and documents in bulk.",
    href: "https://pdf.zuvigo.com/letters",
    icon: Mail,
    badge: "Bulk Mail",
    external: true,
  },
  {
    title: "Productivity Suite",
    desc: "VigoPDF, eSign, VigoFlow, VigoLetters and more in one workspace.",
    href: "https://pdf.zuvigo.com/workspace",
    icon: LayoutGrid,
    flagship: true,
    external: true,
  },
  {
    title: "Desktop Software",
    desc: "Downloadable PDF and diagram applications.",
    href: "https://pdf.zuvigo.com/desktop",
    icon: MonitorDown,
    badge: "Offline",
    external: true,
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<"solutions" | "software" | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "software" | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMobileSubmenu = (menu: "solutions" | "software") => {
    setOpenMobileSubmenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setOpenMobileSubmenu(null);
  }, [pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOpen = (menu: "solutions" | "software") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleScheduleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleImmediateClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
  };

  const isSolutionsActive = pathname.startsWith("/solutions") || pathname.startsWith("/services");
  const isSoftwareActive = pathname.startsWith("/software");
  const isCTAExplore = pathname.startsWith("/software");

  return (
    <>
      {/* ================= DESKTOP & SCROLLED FLOATING HEADER ================= */}
      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${scrolled
            ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl py-3 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)]"
            : "border-b border-slate-100/60 bg-white/75 backdrop-blur-md py-4 sm:py-5"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


          <div className="flex items-center justify-between">
            {/* Logo */}
            <div onMouseEnter={handleImmediateClose}>
              <Logo />
            </div>

            {/* Center Navigation Links */}
            <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
              {/* 1. SOLUTIONS DROPDOWN TRIGGER */}
              <div
                className="relative"
                onMouseEnter={() => handleOpen("solutions")}
                onMouseLeave={handleScheduleClose}
              >
                <Link
                  href="/solutions"
                  onClick={() => setActiveDropdown(null)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${isSolutionsActive
                    ? "bg-blue-50/90 text-[#2563EB] font-semibold shadow-2xs"
                    : activeDropdown === "solutions"
                      ? "text-gray-950 bg-gray-100/70"
                      : "text-gray-700 hover:text-gray-950 hover:bg-gray-50/80"
                    }`}
                >
                  Solutions
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[#2563EB]" : ""
                      }`}
                  />
                </Link>

                {/* Solutions Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-3 w-[400px] z-50"
                    >
                      <div className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl p-3.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.04)]">
                        <div className="flex items-center justify-between px-2 pb-2.5 mb-1.5 border-b border-gray-100">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                            Solutions &amp; Capabilities
                          </span>
                          <Link
                            href="/solutions"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
                          >
                            All solutions →
                          </Link>
                        </div>

                        <div className="space-y-1">
                          {SOLUTIONS_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/30 hover:shadow-xs border border-transparent hover:border-blue-100/70"
                              >
                                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-blue-100/90 bg-blue-50/80 text-[#2563EB] shadow-2xs group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-[#2563EB] transition-colors">
                                      {item.title}
                                    </span>
                                    <ArrowRight className="h-3.5 w-3.5 text-gray-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#2563EB] transition-all" />
                                  </div>
                                  <p className="text-[11px] text-gray-500 leading-snug mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>


                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. SOFTWARE DROPDOWN TRIGGER */}
              <div
                className="relative"
                onMouseEnter={() => handleOpen("software")}
                onMouseLeave={handleScheduleClose}
              >
                <Link
                  href="/software"
                  onClick={() => setActiveDropdown(null)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${isSoftwareActive
                    ? "bg-blue-50/90 text-[#2563EB] font-semibold shadow-2xs"
                    : activeDropdown === "software"
                      ? "text-gray-950 bg-gray-100/70"
                      : "text-gray-700 hover:text-gray-950 hover:bg-gray-50/80"
                    }`}
                >
                  Software
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "software" ? "rotate-180 text-[#2563EB]" : ""
                      }`}
                  />
                </Link>

                {/* Software Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === "software" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute -left-20 sm:left-0 top-full pt-3 w-[480px] z-50"
                    >
                      <div className="rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl p-3.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.04)]">
                        <div className="flex items-center justify-between px-2 pb-2.5 mb-1.5 border-b border-gray-100">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                            Productivity Software Suite
                          </span>
                          <Link
                            href="/software"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-semibold text-[#2563EB] hover:text-blue-700 transition-colors"
                          >
                            Software overview →
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          {SOFTWARE_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-start gap-2.5 rounded-xl p-2.5 transition-all hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-indigo-50/30 hover:shadow-xs border border-transparent hover:border-blue-100/70"
                              >
                                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-blue-100/90 bg-blue-50/80 text-[#2563EB] shadow-2xs group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-semibold text-gray-900 group-hover:text-[#2563EB] transition-colors truncate">
                                      {item.title}
                                    </span>
                                    {item.flagship && (
                                      <span className="shrink-0 text-[8px] font-semibold uppercase bg-gradient-to-r from-blue-600 to-blue-500 text-white px-1.5 py-0.2 rounded-full shadow-2xs">
                                        Flagship
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[10px] text-gray-500 leading-snug mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>


                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other standard nav links with smooth pill hover */}
              <Link
                href="/#work"
                onMouseEnter={handleImmediateClose}
                className="rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-100/60 transition-all"
              >
                Our Work
              </Link>

              <Link
                href="/#about"
                onMouseEnter={handleImmediateClose}
                className="rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-100/60 transition-all"
              >
                About
              </Link>

              <Link
                href="/blog"
                onMouseEnter={handleImmediateClose}
                className="rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-100/60 transition-all"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onMouseEnter={handleImmediateClose}
                className="rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-950 hover:bg-gray-100/60 transition-all"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Button */}
            <div
              className="flex items-center gap-2.5"
              onMouseEnter={handleImmediateClose}
            >
              {isCTAExplore ? (
                <Link
                  href="/software"
                  className="group relative hidden items-center gap-2 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 shadow-[0_4px_16px_rgba(37,99,235,0.22)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
                >
                  <span className="relative flex items-center gap-1.5 rounded-full bg-[#0B0F19] px-4 sm:px-5 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-[#070A12]">
                    <span>Explore Software</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 text-blue-400 group-hover:text-white" />
                  </span>
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="group relative hidden items-center gap-2 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 shadow-[0_4px_16px_rgba(37,99,235,0.22)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
                >
                  <span className="relative flex items-center gap-1.5 rounded-full bg-[#0B0F19] px-4 sm:px-5 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-[#070A12]">
                    <span>Let&apos;s Talk</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 text-blue-400 group-hover:text-white" />
                  </span>
                </Link>
              )}

              {/* Mobile Menu Pill Button */}
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs md:hidden"
              >
                {open ? (
                  <>
                    <X className="h-4 w-4" />
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="h-4 w-4" />
                    <span>Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= UNIQUE MOBILE MENU SHEET ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-md md:hidden"
            />

            {/* Left Side Slide-in Drawer Container */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-sm flex-col bg-white border-r border-slate-200/80 shadow-2xl md:hidden overflow-hidden"
            >
              {/* Header inside Mobile Sheet */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Mobile Navigation Menu List (Menu & Submenus) */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2">

                {/* 1. SOLUTIONS (MENU ITEM WITH SUBMENU) */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 overflow-hidden transition-all">
                  <div className="flex items-center justify-between p-3.5">
                    <Link
                      href="/solutions"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 text-base font-bold text-slate-900 hover:text-[#2563EB]"
                    >
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100/70 text-[#2563EB]">
                        <Monitor className="h-4 w-4" />
                      </div>
                      <span>Solutions</span>
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle Solutions submenu"
                      onClick={() => toggleMobileSubmenu("solutions")}
                      className="grid h-8 w-8 place-items-center rounded-lg hover:bg-slate-200/60 text-slate-500 transition-transform"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${openMobileSubmenu === "solutions" ? "rotate-180 text-[#2563EB]" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {/* Solutions Submenu Accordion */}
                  <AnimatePresence>
                    {openMobileSubmenu === "solutions" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200/70 bg-white p-3 space-y-1.5"
                      >
                        {SOLUTIONS_ITEMS.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-blue-50/50 transition-colors"
                            >
                              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-blue-50 text-[#2563EB]">
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-slate-800">
                                  {item.title}
                                </div>
                                <div className="text-[10px] text-slate-500 line-clamp-1">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}

                        <div className="pt-2 border-t border-slate-100">
                          <Link
                            href="/solutions"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between px-2.5 py-1.5 text-xs font-bold text-[#2563EB]"
                          >
                            <span>Explore all capabilities</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. SOFTWARE (MENU ITEM WITH SUBMENU) */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 overflow-hidden transition-all">
                  <div className="flex items-center justify-between p-3.5">
                    <Link
                      href="/software"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 text-base font-bold text-slate-900 hover:text-[#2563EB]"
                    >
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100/70 text-[#2563EB]">
                        <LayoutGrid className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Software</span>
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#2563EB]">
                          6 Apps
                        </span>
                      </div>
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle Software submenu"
                      onClick={() => toggleMobileSubmenu("software")}
                      className="grid h-8 w-8 place-items-center rounded-lg hover:bg-slate-200/60 text-slate-500 transition-transform"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${openMobileSubmenu === "software" ? "rotate-180 text-[#2563EB]" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {/* Software Submenu Accordion */}
                  <AnimatePresence>
                    {openMobileSubmenu === "software" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200/70 bg-white p-3 space-y-1.5"
                      >
                        {SOFTWARE_ITEMS.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-xl p-2.5 hover:bg-blue-50/50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-blue-50 text-[#2563EB]">
                                  <Icon className="h-3.5 w-3.5" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-slate-800">
                                    {item.title}
                                  </div>
                                  <div className="text-[10px] text-slate-500 line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                              </div>
                              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                            </a>
                          );
                        })}

                        <div className="pt-2 border-t border-slate-100">
                          <Link
                            href="/software"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between px-2.5 py-1.5 text-xs font-bold text-[#2563EB]"
                          >
                            <span>View software suite</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. DIRECT MENU ITEMS */}
                <div className="pt-2 space-y-1">
                  <Link
                    href="/#work"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl p-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span>Our Work</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl p-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span>About Zuvigo</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl p-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span>Blog</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl p-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span>Contact</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                </div>

              </div>

              {/* Bottom Sticky CTA inside Mobile Sheet */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/80">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B0F19] py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-colors"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
