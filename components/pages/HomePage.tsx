import dynamic from "next/dynamic";
import { ArrowRight, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { HeroVisual } from "@/components/pages/HeroVisual";

const HomeSections = dynamic(
  () => import("@/components/pages/HomePage.client").then((m) => m.HomeSections),
  { ssr: true }
);

export function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#F7F5F1] text-[#111827] dark:bg-[#0B0F17] dark:text-white">
      <Hero />
      <HomeSections />
    </div>
  );
}

/* ---------------- 1. Hero Section ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32">
      {/* Background glow effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#6C5CE7]/15 via-[#7C3AED]/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl container-p">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/30 bg-[#6C5CE7]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#5B4BC4] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
              <span className="h-2 w-2 rounded-full bg-[#6C5CE7] animate-pulse" />
              TECHNOLOGY BUILT AROUND YOUR BUSINESS
            </div>

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] dark:text-white">
              Websites, CRM and AI solutions that help businesses grow.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4B5563] sm:text-lg dark:text-gray-300">
              Readyio builds high-performing websites, practical web applications, customized CRM systems and AI automation—all through one accountable technology team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss Your Project via Calendly (30 min call)"
                className="group inline-flex items-center gap-2 rounded-full bg-[#111827] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#6C5CE7] active:scale-95 dark:bg-white dark:text-[#111827] dark:hover:bg-[#6C5CE7] dark:hover:text-white"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-95 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                See Our Work
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#5A6376] dark:text-gray-400">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span><strong>4.9 / 5</strong> client rating · Free 30-min discovery call · No pitch</span>
            </div>
          </div>

          {/* Hero Visual Diagram (Connected Product Cards) */}
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
