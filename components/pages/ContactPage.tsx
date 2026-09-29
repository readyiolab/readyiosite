"use client";

import { useState, type FormEvent } from "react";
import {
  Check,
  Globe,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Calendar,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { AuroraCTA } from "@/components/site/AuroraCTA";
import { Logo } from "@/components/site/Logo";
import { Linkedin, Instagram, Twitter } from "@/components/site/brand-icons";
import { SITE } from "@/lib/site";
import { submitContactForm } from "@/lib/api";
import { toast } from "sonner";

type Status = "idle" | "loading" | "success";

const SERVICES_OPTIONS = [
  "Website & Web App",
  "CRM & ERP Systems",
  "AI Automation & Agents",
  "Mobile Apps",
  "UI/UX & Design Systems",
  "Other",
];

export function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Website & Web App",
    "UI/UX & Design Systems",
  ]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in your name, email, and project details.");
      return;
    }

    setStatus("loading");

    try {
      const res = await submitContactForm({
        name,
        email,
        company: "Direct Contact Form",
        service: selectedServices.length > 0 ? selectedServices.join(", ") : "General Inquiry",
        message,
      });

      if (res.success) {
        setStatus("success");
        toast.success(res.message || "Thank you! Your project request has been submitted.");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        toast.error(res.error || "Submission failed. Please try again.");
        setStatus("idle");
      }
    } catch (err) {
      toast.error(
        (err instanceof Error && err.message) ||
          "An unexpected error occurred. Please try again."
      );
      setStatus("idle");
    }
  };

  return (
    <>
      {/* Main Reference Layout Frame */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl container-p">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border border-border/80 bg-card p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.1fr_1.6fr] lg:gap-14">
                
                {/* Left Column: Brand, Contact Channels & Socials */}
                <div className="flex flex-col justify-between py-2 sm:py-4">
                  {/* Top: Brand Logo */}
                  <div>
                    <div className="flex items-center gap-3">
                      <Logo />
                    </div>

                    {/* Middle: 3 Contact Info Cards */}
                    <div className="mt-10 sm:mt-14 space-y-8 sm:space-y-10">
                      {/* Chat to us */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-accent/40 text-primary">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-bold text-foreground">
                            Chat to us
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            Our friendly team is here to help.
                          </p>
                          <a
                            href={`mailto:${SITE.email}`}
                            className="mt-1.5 inline-block text-sm font-semibold text-primary hover:underline"
                          >
                            {SITE.email}
                          </a>
                        </div>
                      </div>

                      {/* Visit us */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-accent/40 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-bold text-foreground">
                            Visit us
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            Come say hello at our office HQ.
                          </p>
                          <p className="mt-1.5 text-sm font-semibold text-foreground">
                            {SITE.address}
                          </p>
                        </div>
                      </div>

                      {/* Call us */}
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-accent/40 text-primary">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-bold text-foreground">
                            Call us
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            Mon-Fri from 9am to 6pm IST.
                          </p>
                          <a
                            href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                            className="mt-1.5 inline-block text-sm font-semibold text-primary hover:underline"
                          >
                            {SITE.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Social Icons Row matching reference design */}
                  <div className="mt-12 sm:mt-16 flex items-center gap-3">
                    {SITE.social.linkedin && (
                      <a
                        href={SITE.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {SITE.social.instagram && (
                      <a
                        href={SITE.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent hover:text-primary"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={SITE.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Calendly Live Booking"
                      title="Book a Discovery Call"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent hover:text-primary"
                    >
                      <Calendar className="h-4 w-4" />
                    </a>
                    <a
                      href={SITE.url}
                      aria-label="Website"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent hover:text-primary"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Signature Readyio Brand Colored Card matching reference */}
                <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#7464F2] via-[#6C5CE7] to-[#5949CE] p-8 sm:p-12 lg:p-14 text-white shadow-2xl">
                  {/* Subtle ambient light bleed for depth */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
                  />

                  {/* Form Heading */}
                  <div className="relative z-10">
                    <h2 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                      Got ideas? We&apos;ve got the skills. Let&apos;s team up.
                    </h2>
                    <p className="mt-3 text-sm text-purple-100 sm:text-base leading-relaxed">
                      Tell us more about yourself and what you&apos;ve got in mind.
                    </p>

                    {/* Interactive Form */}
                    <form onSubmit={onSubmit} className="mt-10 sm:mt-12 space-y-7">
                      {/* Name input */}
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-transparent border-b border-white/35 pb-3 text-white placeholder-white/60 focus:outline-none focus:border-white text-base transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="relative pt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full bg-transparent border-b border-white/35 pb-3 text-white placeholder-white/60 focus:outline-none focus:border-white text-base transition-colors"
                        />
                      </div>

                      {/* Message input */}
                      <div className="relative pt-2">
                        <textarea
                          id="message"
                          name="message"
                          rows={2}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us a little about the project..."
                          className="w-full bg-transparent border-b border-white/35 pb-2 text-white placeholder-white/60 focus:outline-none focus:border-white text-base resize-none transition-colors"
                        />
                      </div>

                      {/* "How can we help?" Section */}
                      <div className="pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-purple-200">
                          How can we help?
                        </p>
                        <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                          {SERVICES_OPTIONS.map((service) => {
                            const isSelected = selectedServices.includes(service);
                            return (
                              <button
                                key={service}
                                type="button"
                                onClick={() => toggleService(service)}
                                className="flex items-center gap-3 text-left cursor-pointer select-none group"
                              >
                                <div
                                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition-all duration-200 ${
                                    isSelected
                                      ? "bg-white border-white text-[#6C5CE7]"
                                      : "border-white/45 group-hover:border-white bg-transparent"
                                  }`}
                                >
                                  {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                                  {service}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full py-4 rounded-xl bg-[#0F141E] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl hover:bg-black active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span>Sending message...</span>
                            </>
                          ) : (
                            <span>Let&apos;s get started!</span>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Direct Calendar Booking CTA Banner */}
      <AuroraCTA
        id="contact-calendar-cta"
        eyebrow="INSTANT CALENDAR ACCESS"
        heading={
          <>
            Prefer to Talk Directly <br className="hidden sm:inline" />
            With an Engineer?
          </>
        }
        subtitle="Skip the back-and-forth email thread. Book a 30-minute discovery call directly on our live calendar — no sales pitches, just an honest technical roadmap."
        buttonText="Claim Your Free 30-Min Call"
        buttonHref={SITE.bookingUrl}
      />
    </>
  );
}
