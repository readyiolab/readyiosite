import { Reveal } from "@/components/site/Reveal";
import { Scale, ShieldAlert, FileCode, AlertTriangle, ExternalLink, Mail, RefreshCw, Layers } from "lucide-react";

export function TermsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl container-p">
        {/* Page Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/30 bg-[#F0EDF9] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
              <Scale className="h-3.5 w-3.5" />
              TERMS & CONDITIONS
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl dark:text-white">
              Terms of Service
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#4B5563] sm:text-lg dark:text-gray-300">
              Welcome to Readyio. Please read these terms carefully. They govern your access to our website, digital applications, and technology services.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#6B7280] dark:text-gray-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Effective Date: Readyio Technologies | All Rights Reserved</span>
            </div>
          </div>
        </Reveal>

        {/* Policy Content Card Grid */}
        <div className="mt-14 space-y-10">
          {/* Section 1: Agreement to Terms */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <Scale className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  1. Agreement to Terms
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  By accessing or using the website at <strong className="text-[#111827] dark:text-white">readyio.com</strong>, associated subdomains, or any digital services provided by <strong className="text-[#111827] dark:text-white">Readyio Technologies</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
                <p>
                  If you do not agree with any of these terms, you are prohibited from using or accessing this site. Separate formal Master Service Agreements (MSA) or Statements of Work (SOW) govern paid client development engagements.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 2: Intellectual Property & Ownership */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <FileCode className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  2. Intellectual Property Rights
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  All materials, logos, content, code architecture, designs, brand marks, and visual assets on this site are owned by or licensed to Readyio Technologies and are protected by applicable intellectual property laws.
                </p>
                <p>
                  <strong>Client Code Ownership:</strong> For custom software, websites, CRM systems, and AI workflows built for our clients, 100% IP and code ownership transfers to the client upon final milestone payment as specified in our individual project contracts.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 3: Acceptable Use & Conduct */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  3. Acceptable Use Policy
                </h2>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (a) Lawful Compliance
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    You agree to use this site strictly for lawful purposes and in compliance with local, national, and international laws.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (b) System Integrity
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    You agree not to disrupt, compromise server integrity, reverse-engineer, automated-scrape, or launch denial-of-service attacks.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (c) Form & AI Submissions
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Information submitted via contact forms or interactive AI assistants must be accurate and must not contain malicious code.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (d) Unauthorized Access
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Attempting to gain unauthorized access to non-public server infrastructure or administrative tools is strictly prohibited.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 4: Client Engagements */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <Layers className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  4. Development & Client Engagements
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  Services provided by Readyio Technologies (including Web & App Development, Custom CRM Systems, AI Automations, and Founder MVPs) are executed under written Statements of Work (SOW).
                </p>
                <p>
                  SOWs outline project scope, fixed milestone timelines, acceptance criteria, payment schedules, and ongoing support parameters.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 5: Disclaimer & Liability */}
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-[#111827] dark:text-white">
                    5. Disclaimer of Warranties
                  </h2>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                  Website materials are provided &quot;as is&quot;. Readyio makes no warranties, expressed or implied, regarding site availability or accuracy of third-party external links.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-[#111827] dark:text-white">
                    6. External Integrations
                  </h2>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                  Our applications may integrate third-party tools (e.g. Stripe, Twilio, Google Cloud). Readyio is not liable for service outages of external third-party infrastructure.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 6: Updates & Contact */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                    7. Modifications & Contact Information
                  </h2>
                </div>
              </div>
              <div className="mt-4 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300 space-y-3">
                <p>
                  Readyio Technologies reserves the right to revise these Terms of Service at any time. Continued usage of our website after modifications constitutes acceptance of the revised terms.
                </p>
                <p>
                  For any legal inquiries or questions regarding these terms, contact our team at:
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#F0EDF9] px-4 py-2 text-xs font-bold text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <Mail className="h-4 w-4" />
                  <span>hello@readyio.com</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
