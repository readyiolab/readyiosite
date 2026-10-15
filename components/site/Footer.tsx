"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { Linkedin, Instagram, XIcon, Github } from "./brand-icons";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-12 bg-white text-gray-900 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Floating Rounded Card matching reference design */}
        <div className="relative z-10 rounded-3xl border border-gray-100 bg-gray-50/50 p-8 sm:p-12 md:p-14 shadow-xs">
          {/* Main Top Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
            {/* Left Column: Brand, Tagline & Social Icons */}
            <div className="flex flex-col justify-between">
              <div>
                <Logo />
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
                  Zuvigo builds modern websites, custom web applications, cloud
                  and desktop software, business automation, and productivity
                  tools for growing businesses.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8 flex items-center gap-4 text-gray-600">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="transition-colors hover:text-[#2563EB]"
                >
                  <XIcon className="h-4 w-4" />
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[#2563EB]"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-[#2563EB]"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:text-[#2563EB]"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Columns: 3 Navigation Link Columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
              {/* Solutions */}
              <div>
                <h3 className="font-heading text-sm font-bold tracking-tight text-gray-900">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <li>
                    <Link href="/solutions#websites" className="transition-colors hover:text-[#2563EB]">
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions#web-apps" className="transition-colors hover:text-[#2563EB]">
                      Web Applications
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions#cloud-desktop" className="transition-colors hover:text-[#2563EB]">
                      Cloud &amp; Desktop Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions#automation" className="transition-colors hover:text-[#2563EB]">
                      Business &amp; AI Automation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Software Suite (Direct Links) */}
              <div>
                <h3 className="font-heading text-sm font-bold tracking-tight text-gray-900">
                  Software
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <li>
                    <a
                      href="https://pdf.zuvigo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#2563EB]"
                    >
                      VigoPDF
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pdf.zuvigo.com/workspace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#2563EB]"
                    >
                      Productivity Suite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pdf.zuvigo.com/esign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#2563EB]"
                    >
                      eSign
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pdf.zuvigo.com/letters"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#2563EB]"
                    >
                      VigoLetters
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pdf.zuvigo.com/diagrams"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#2563EB]"
                    >
                      VigoFlow
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pdf.zuvigo.com/desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#2563EB]"
                    >
                      Desktop Software
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="font-heading text-sm font-bold tracking-tight text-gray-900">
                  Company
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <li>
                    <Link href="/#about" className="transition-colors hover:text-[#2563EB]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#work" className="transition-colors hover:text-[#2563EB]">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="transition-colors hover:text-[#2563EB]">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="transition-colors hover:text-[#2563EB]"
                    >
                      Let&apos;s Talk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal Links */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200/60 pt-6 text-xs text-gray-500 sm:flex-row">
            <div>
              &copy; {currentYear} {SITE.name}. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacy" className="transition-colors hover:text-[#2563EB]">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-[#2563EB]">
                Cookie Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-[#2563EB]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
