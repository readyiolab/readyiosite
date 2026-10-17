"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  PenTool,
  GitBranch,
  Search,
  Share2,
  FileDown,
  Edit2,
  RefreshCw,
  FolderTree,
  PenLine,
  Bot,
  ExternalLink,
} from "lucide-react";

export function HeroVisualSoftware() {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-4 select-none">
      {/* Background Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-blue-500/20 blur-3xl opacity-80"
      />

      {/* SVG Connecting Circuit Lines */}
      <svg
        className="hidden sm:block pointer-events-none absolute inset-0 h-full w-full overflow-visible z-0"
        aria-hidden="true"
        viewBox="0 0 640 480"
      >
        <defs>
          <linearGradient id="softGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Path connecting top-left PDF node */}
        <path
          d="M 160 80 C 140 130, 150 180, 200 220"
          fill="none"
          stroke="url(#softGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Path connecting right Diagram node */}
        <path
          d="M 580 120 C 560 170, 530 200, 480 230"
          fill="none"
          stroke="url(#softGrad)"
          strokeWidth="1.5"
        />

        {/* Center dot */}
        <circle cx="340" cy="220" r="3.5" fill="#2563EB" />
      </svg>

      {/* Floating Badge Node 1: PDF Document Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-8 left-14 z-20 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md border border-blue-100 text-[#2563EB]"
      >
        <FileText className="h-5 w-5" />
      </motion.div>

      {/* Floating Badge Node 2: Signature Pen Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25 }}
        className="absolute top-28 left-20 z-20 hidden sm:flex items-center justify-center h-9 w-9 rounded-full bg-white shadow-md border border-blue-100 text-[#2563EB]"
      >
        <PenLine className="h-4 w-4" />
      </motion.div>

      {/* Floating Badge Node 3: VigoFlow Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-12 right-6 z-20 hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md border border-blue-100 text-[#2563EB]"
      >
        <GitBranch className="h-5 w-5" />
      </motion.div>

      <div className="relative z-10 space-y-4">
        {/* ================= 1. BACKGROUND BROWSER: VigoPDF ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative ml-auto w-full max-w-xl rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-sm p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
        >
          {/* Top Bar with Tabs and Share */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#2563EB] text-sm tracking-tight">
                VigoPDF
              </span>
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-gray-500">
                <span className="text-gray-900 font-semibold px-2 py-0.5 rounded bg-gray-100">Home</span>
                <span className="hover:text-gray-900 cursor-pointer">Edit</span>
                <span className="hover:text-gray-900 cursor-pointer">Convert</span>
                <span className="hover:text-gray-900 cursor-pointer">Organize</span>
                <span className="hover:text-gray-900 cursor-pointer">Sign</span>
                <span className="hover:text-gray-900 cursor-pointer text-[#2563EB] flex items-center gap-0.5">
                  <Bot className="h-3 w-3" /> AI Tools
                </span>
              </div>
            </div>
            <a
              href="https://pdf.zuvigo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[#2563EB] px-3 py-1 text-[11px] font-semibold text-white shadow-xs hover:bg-blue-700"
            >
              Share
            </a>
          </div>

          {/* VigoPDF Inner Layout */}
          <div className="grid grid-cols-12 gap-3">
            {/* Left Nav */}
            <div className="col-span-3 hidden sm:flex flex-col gap-1 text-[10px] text-gray-500 border-r border-gray-100 pr-2">
              <span className="font-semibold text-gray-800 bg-gray-100/80 rounded px-1.5 py-1">Documents</span>
              <span className="px-1.5 py-0.5 hover:text-gray-800">Recent</span>
              <span className="px-1.5 py-0.5 hover:text-gray-800">Starred</span>
              <span className="px-1.5 py-0.5 hover:text-gray-800">Shared</span>
              <span className="px-1.5 py-0.5 hover:text-gray-800">Templates</span>
              <span className="px-1.5 py-0.5 text-[#2563EB] font-semibold">AI Assistant</span>
            </div>

            {/* Center Document Mockup */}
            <div className="col-span-12 sm:col-span-6 rounded-xl border border-gray-100 bg-gray-50/70 p-3 flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-gray-900 text-xs">Business Agreement</h5>
                <p className="text-[10px] text-gray-500 mt-0.5">
                  A modern approach to business documentation.
                </p>
                <div className="mt-2 relative h-20 w-full overflow-hidden rounded-lg border border-gray-100 group">
                  <Image
                    src="/ai-document-suite.webp"
                    alt="AI Document Suite"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-blue-400/25 to-transparent"
                  />
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[9px] text-gray-400">
                <span>Page 1 of 4</span>
                <span className="text-emerald-600 font-semibold">Ready to sign</span>
              </div>
            </div>

            {/* Right Tools Panel */}
            <div className="col-span-3 hidden sm:flex flex-col gap-1 text-[10px] text-gray-600 pl-1">
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-1 rounded hover:bg-blue-50 hover:text-[#2563EB]"
              >
                <FileDown className="h-3 w-3" /> Export PDF
              </a>
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-1 rounded hover:bg-blue-50 hover:text-[#2563EB]"
              >
                <Edit2 className="h-3 w-3" /> Edit PDF
              </a>
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-1 rounded hover:bg-blue-50 hover:text-[#2563EB]"
              >
                <RefreshCw className="h-3 w-3" /> Convert
              </a>
              <a
                href="https://pdf.zuvigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-1 rounded hover:bg-blue-50 hover:text-[#2563EB]"
              >
                <FolderTree className="h-3 w-3" /> Organize
              </a>
              <a
                href="https://pdf.zuvigo.com/esign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 p-1 rounded hover:bg-blue-50 hover:text-[#2563EB]"
              >
                <PenLine className="h-3 w-3" /> Add Signature
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= 2. FRONT FLOATING CARD: VigoFlow ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-lg mx-auto sm:ml-8 mt-4 sm:-mt-6 lg:-mt-10 rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] z-20"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2.5">
            <div className="flex items-center gap-2">
              <GitBranch className="h-3.5 w-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-bold text-gray-900">VigoFlow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                <span className="h-4 w-4 rounded-full bg-blue-400 border border-white" />
                <span className="h-4 w-4 rounded-full bg-sky-400 border border-white" />
              </div>
              <a
                href="https://pdf.zuvigo.com/diagrams"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#2563EB] px-2 py-0.5 text-[9px] font-semibold text-white"
              >
                Share
              </a>
            </div>
          </div>

          {/* Interactive Flowchart Diagram Mock */}
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-center text-[10px] font-semibold">
              {/* Start */}
              <div className="rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-[#2563EB]">
                Start
              </div>

              <span className="text-gray-400">→</span>

              {/* Decision */}
              <div className="rounded-lg bg-blue-50 border border-blue-200 px-3 py-1.5 text-blue-900 shadow-xs">
                User authenticated?
              </div>

              <span className="text-gray-400">→</span>

              {/* Out branches */}
              <div className="flex flex-col gap-1.5">
                <div className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] text-emerald-700">
                  Yes → Load dashboard
                </div>
                <div className="rounded bg-rose-50 border border-rose-200 px-2 py-0.5 text-[9px] text-rose-700">
                  No → Show login
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
