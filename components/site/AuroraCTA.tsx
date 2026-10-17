"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";

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
  heading = "Ready to make everyday business clearer and easier?",
  subtitle = "Zuvigo brings together comfort, connection, and smart support in one simple partner designed for real life and real business impact.",
  buttonText = "Get in touch",
  buttonHref = "/contact",
  secondaryButtonText = "Learn more",
  secondaryButtonHref = "/solutions",
  isExternal = false,
  eyebrow,
  id,
  className = "",
}: AuroraCTAProps) {
  const isPrimaryExt =
    isExternal || buttonHref.startsWith("http") || buttonHref.startsWith("mailto:");
  const isSecondaryExt =
    secondaryButtonHref.startsWith("http") || secondaryButtonHref.startsWith("mailto:");

  return (
    <section id={id} className={`py-10 sm:py-16 lg:py-20 relative bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Main Card with Subtle Border and Watermark Background */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] border border-gray-200/80 bg-white px-4 py-10 sm:px-12 sm:py-20 lg:py-28 text-center shadow-xs">
            {/* Subtle Eyeglasses / Infinity Optical Loop Background Watermark (Matching Reference) */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035] text-black select-none"
              viewBox="0 0 1200 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Lens Frame */}
              <rect
                x="60"
                y="60"
                width="460"
                height="380"
                rx="180"
                stroke="currentColor"
                strokeWidth="56"
              />
              {/* Right Lens Frame */}
              <rect
                x="680"
                y="60"
                width="460"
                height="380"
                rx="180"
                stroke="currentColor"
                strokeWidth="56"
              />
              {/* Bridge Curve */}
              <path
                d="M520 220 C 560 190, 640 190, 680 220"
                stroke="currentColor"
                strokeWidth="56"
                strokeLinecap="round"
              />
            </svg>

            {/* Optional Eyebrow Tag if provided */}
            {eyebrow && (
              <div className="relative z-10 mb-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700">
                {eyebrow}
              </div>
            )}

            {/* Main Headline */}
            <h2 className="relative z-10 mx-auto max-w-3xl font-heading text-[22px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-[#111827] leading-[1.18] sm:leading-[1.16]">
              {heading}
            </h2>

            {/* Subtitle Description */}
            {subtitle && (
              <p className="relative z-10 mx-auto mt-3 sm:mt-6 max-w-xl text-xs sm:text-base text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* Two Side-by-Side Pill Action Buttons matching Reference Image */}
            <div className="relative z-10 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Button 1: Outlined Pill Button (Like "Buy now") */}
              {isPrimaryExt ? (
                <a
                  href={buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-black bg-white px-7 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-black shadow-2xs hover:bg-slate-50 transition-all duration-200"
                >
                  {buttonText}
                </a>
              ) : (
                <Link
                  href={buttonHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-black bg-white px-7 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-black shadow-2xs hover:bg-slate-50 transition-all duration-200"
                >
                  {buttonText}
                </Link>
              )}

              {/* Button 2: Filled Black Pill Button (Like "Learn more") */}
              {isSecondaryExt ? (
                <a
                  href={secondaryButtonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-black px-7 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-neutral-800 transition-all duration-200"
                >
                  {secondaryButtonText}
                </a>
              ) : (
                <Link
                  href={secondaryButtonHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-black px-7 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-neutral-800 transition-all duration-200"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
