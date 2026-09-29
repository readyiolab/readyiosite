import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Cookie, Eye, Lock, RefreshCw, BarChart2, Settings, Mail, FileText } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl container-p">
        {/* Page Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/30 bg-[#F0EDF9] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
              <ShieldCheck className="h-3.5 w-3.5" />
              LEGAL & COMPLIANCE
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl dark:text-white">
              Privacy & Cookie Policy
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#4B5563] sm:text-lg dark:text-gray-300">
              Readyio respects your privacy and is committed to safeguarding the security of your personal data. Below is our detailed policy regarding cookies, data usage, and user rights.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#6B7280] dark:text-gray-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Effective Date: May 25, 2018 | Last Updated: Readyio Technologies</span>
            </div>
          </div>
        </Reveal>

        {/* Policy Content Card Grid */}
        <div className="mt-14 space-y-10">
          {/* Section 1: Purpose & Scope */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  1. Purpose & Scope
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  <strong className="text-[#111827] dark:text-white">Readyio</strong> respects your privacy and is committed to safeguarding the security of your personal data. We respect your need to understand how information is collected, used, disclosed, transferred, and stored. Thus, we have developed this Cookie and Privacy Policy to familiarize you with our practices. We advise you to carefully read this policy together with our Website Privacy Notice.
                </p>
                <p>
                  <strong>Scope:</strong> This policy is applicable to all individuals who visit our website (readyio.com) and to all information collected by means of cookies or digital interactions across our platforms.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 2: What is a Cookie? */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <Cookie className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  2. What is a Cookie?
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  Cookies are a feature of web browser software that allows web servers to temporarily store information within your browser. They are generally used to make websites work efficiently, keep track of your movements within the site, remember your preferences, and facilitate similar user activities.
                </p>
                <p>
                  Cookies allow websites to recognize the device through which the website is accessed. They can store your preferences and past actions to provide tailored options and improve your website experience. Cookies cannot access any other information on your computer.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 3: Types of Cookies We Use */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <Settings className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  3. Types of Cookies We Use
                </h2>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (a) First-Party & Third-Party Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    First-party cookies are stored directly by Readyio, while third-party cookies are stored by trusted external providers (e.g., analytics services).
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (b) Necessary Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Essential to allow technical operation, enabling page navigation and access to secure areas of the website.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (c) Performance Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Collect data on website performance, such as visitor counts, duration, and error diagnostics to help improve functionality.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (d) Functionality Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Enhance usability by remembering your chosen preferences (such as language, region, and layout settings).
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (e) Targeting / Advertising Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Used to present relevant content and measure the effectiveness of our marketing communications.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (f) Session & Persistent Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Session cookies expire when closing the browser; persistent cookies remain stored until manually deleted or upon reaching expiration.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 4: Information Collected & Purpose */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                  4. Information Collected & Our Purpose
                </h2>
              </div>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  To help us maintain and improve our services, Readyio&apos;s website, online services, applications, and communications may use cookies and related technologies:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong>Non-Personal Information:</strong> We may use cookies to record anonymous information regarding website visits to analyze site traffic, page entry/exit points, and campaign responsiveness.
                  </li>
                  <li>
                    <strong>Log Files:</strong> Like most web platforms, we automatically gather log data including IP addresses, browser type, Internet Service Provider (ISP), operating system, date/time stamps, and clickstream data to administer and optimize our website.
                  </li>
                  <li>
                    <strong>Click-Through URLs & Pixel Tags:</strong> Email communications may include tracked click-through links or pixel tags to confirm email opens and measure subscriber interest. You can opt out by avoiding clicking graphics or links in emails.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Section 5: Analytics & Controlling Cookies */}
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-[#111827] dark:text-white">
                    5. Analytics Tools
                  </h2>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                  We utilize analytics tools including Google Analytics to evaluate non-personal aggregate usage metrics. These third-party providers collect data under their privacy policies. You can opt-out of Google Analytics through their official browser add-on.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-[#111827] dark:text-white">
                    6. Controlling Cookies
                  </h2>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                  Most browsers automatically accept cookies, but you can modify settings in Chrome, Firefox, Safari, Edge, or Opera to warn or block cookies. Disabling cookies may affect website functionality across your devices.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 6: Policy Changes & Contact */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F0EDF9] text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                    7. Policy Changes & Contact Us
                  </h2>
                </div>
              </div>
              <div className="mt-4 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300 space-y-3">
                <p>
                  Readyio reserves the right to update or modify this Privacy & Cookie Policy. Any substantial updates will be communicated via email or through a prominent update notification on our website.
                </p>
                <p>
                  If you have questions or wish to exercise your data privacy rights, please reach out to us at:
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
