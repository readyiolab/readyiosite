"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Database, Globe, Plus, Send } from "lucide-react";
import { SITE } from "@/lib/site";

export function HeroVisual() {
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
                src="/hero-building.webp"
                alt="Modern enterprise digital platform architecture"
                className="h-full w-full object-cover object-center"
                width={600}
                height={600}
                priority
                sizes="(max-width: 640px) 50vw, 300px"
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
