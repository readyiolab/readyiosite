"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { Linkedin, Instagram, XIcon, Github } from "./brand-icons";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-12 bg-transparent text-foreground">
      <div className="mx-auto max-w-7xl container-p">
        
        {/* Floating Rounded Card matching reference design */}
        <div className="relative z-10 rounded-[2.25rem] sm:rounded-[2.75rem] border border-border/80 bg-card p-8 sm:p-12 md:p-14 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          
          {/* Main Top Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
            
            {/* Left Column: Brand, Tagline & Social Icons */}
            <div className="flex flex-col justify-between">
              <div>
                <Logo />
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground font-normal">
                  Readyio builds high-converting websites, bespoke web applications, customized CRM platforms, and production AI automation — all through one accountable technology team.
                </p>
              </div>

              {/* Social Media Icons matching the reference style */}
              <div className="mt-8 flex items-center gap-4 text-foreground/80">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="transition-colors hover:text-primary"
                >
                  <XIcon className="h-4 w-4" />
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Columns: 3 Navigation Link Columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
              
              {/* Product */}
              <div>
                <h3 className="font-heading text-sm font-bold tracking-tight text-foreground">
                  Product
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <Link href="/services" className="transition-colors hover:text-primary">
                      Web &amp; Product
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#crm" className="transition-colors hover:text-primary">
                      CRM &amp; ERP Platforms
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#ai" className="transition-colors hover:text-primary">
                      AI &amp; Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#mobile" className="transition-colors hover:text-primary">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#scope-calculator" className="transition-colors hover:text-primary">
                      Scope Estimator
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-heading text-sm font-bold tracking-tight text-foreground">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <Link href="/blog" className="transition-colors hover:text-primary">
                      Insights &amp; Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/for-founders" className="transition-colors hover:text-primary">
                      For Founders
                    </Link>
                  </li>
                  <li>
                    <Link href="/#work" className="transition-colors hover:text-primary">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <a
                      href={SITE.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      Discovery Call
                    </a>
                  </li>
                  <li>
                    <Link href="/contact" className="transition-colors hover:text-primary">
                      Technical Architecture
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="font-heading text-sm font-bold tracking-tight text-foreground">
                  Company
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <Link href="/#about" className="transition-colors hover:text-primary">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="transition-colors hover:text-primary">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="transition-colors hover:text-primary"
                    >
                      Careers &amp; Network
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="transition-colors hover:text-primary"
                    >
                      Partner With Us
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Divider & Bottom Row */}
          <div className="mt-12 sm:mt-16 border-t border-border/70 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {currentYear} Readyio. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Link href="/privacy" className="transition-colors hover:text-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-foreground hover:underline">
                Terms of Service
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-foreground hover:underline">
                Cookies Settings
              </Link>
            </div>
          </div>

        </div>

        {/* Giant Subtle Brand Watermark behind/underneath the card */}
        <div className="relative -mt-6 sm:-mt-10 select-none pointer-events-none overflow-hidden opacity-[0.05] dark:opacity-[0.035] text-center">
          <span className="font-heading text-[17vw] font-black tracking-tighter leading-none text-foreground block">
            Readyio
          </span>
        </div>

      </div>
    </footer>
  );
}
