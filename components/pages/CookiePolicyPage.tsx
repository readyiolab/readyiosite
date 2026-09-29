import { Reveal } from "@/components/site/Reveal";
import { Cookie } from "lucide-react";

export function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl container-p">
        {/* Page Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/30 bg-[#F0EDF9] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#6C5CE7] dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]">
              <Cookie className="h-3.5 w-3.5" />
              COOKIE POLICY
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl dark:text-white">
              Cookie Policy
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#4B5563] sm:text-lg dark:text-gray-300">
              Readyio Technologies respects your privacy and is committed to safeguarding the security of your personal data. Read below to understand how cookies are collected and managed.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#6B7280] dark:text-gray-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Effective Date: May 25, 2018 | Readyio Technologies</span>
            </div>
          </div>
        </Reveal>

        {/* Policy Content Card Grid */}
        <div className="mt-14 space-y-10">
          {/* Section 1: Purpose & Scope */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                1. Purpose & Scope
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  <strong>Readyio Technologies</strong> uses cookies and other technologies to enhance your experience when you use our website. We have developed this cookie policy to familiarize you with our practices. We advise you to carefully read this policy together with our Website Privacy Notice.
                </p>
                <p>
                  <strong>Scope:</strong> This policy is applicable to all individuals who visit our website and to all information collected by means of cookies.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 2: What is a Cookie? */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                2. What is a Cookie?
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  Cookies are a feature of web browser software that allows web servers to temporarily store information within your browser. They are generally used to make websites work, to keep track of your movements within the website, to remember your login details, and for similar activities. Most web browsers automatically accept cookies.
                </p>
                <p>
                  Cookies allow websites to recognize the device through which the website is accessed. Cookies can be used to store your preferences and past actions to provide specific functionalities suited to your preferences, thus improving your website experience. Cookies cannot access any other information on your computer.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 3: Types of cookies */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                3. Types of Cookies
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (a) First Party vs Third Party
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    First party cookies are stored by Readyio; third party cookies are stored by external service providers (e.g. analytics).
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (b) Necessary Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Necessary to allow the technical operation of a website, enabling navigation and feature usage.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (c) Performance Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Collect data on site performance, visitor count, duration, and error diagnostic logs.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (d) Functionality Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Increase website usability by remembering choices such as language, region, and preferences.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (e) Targeting / Advertising Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Enable a website to send personalized relevant content and measure campaign performance.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-[#F9F8FD] p-5 dark:border-gray-800 dark:bg-gray-800/60">
                  <span className="font-heading text-sm font-bold text-[#111827] dark:text-white">
                    (f) Session & Persistent Cookies
                  </span>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                    Session cookies erase upon closing browser; persistent cookies stay until manually deleted or expired.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 4: Information Collected */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                4. Information Collected & Purpose
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                <p>
                  Readyio&apos;s website, online services, applications, and communications may use cookies to gather anonymous information related to website usage to measure effectiveness, manage entry/exit points, track clickstream data, and evaluate search behavior.
                </p>
                <p>
                  Automatic log files collect Internet Protocol (IP) addresses, browser type/language, ISP, referring pages, OS, date/time stamps, and clickstream data to analyze demographic trends and optimize user experiences.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 5: Controlling Cookies & Analytics */}
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h2 className="font-heading text-lg font-bold text-[#111827] dark:text-white">
                  5. Analytics Tools
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                  We use third-party analytics services including Google Analytics to evaluate non-personal website metrics. You may opt out of Google Analytics via official Google Opt-Out links.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <h2 className="font-heading text-lg font-bold text-[#111827] dark:text-white">
                  6. Controlling Cookies
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-[#4B5563] dark:text-gray-300">
                  You can set preferences or disable cookies via browser settings in Chrome, Firefox, Internet Explorer / Edge, Opera, or Safari. Disabling cookies may impact functionality across your devices.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 6: Contact */}
          <Reveal>
            <div className="rounded-3xl border border-gray-200/90 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="font-heading text-xl font-bold text-[#111827] dark:text-white">
                7. Changes & Contact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563] dark:text-gray-300">
                Readyio reserves the right to update this policy periodically. Continued use of the website after modifications constitutes consent to the modified policy. For any questions, email us at <strong className="text-[#6C5CE7]">hello@readyio.com</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
