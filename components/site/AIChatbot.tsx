"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ArrowRight, Calendar, Loader2, User, Bot } from "lucide-react";
import { sendChatMessage, submitChatBooking } from "@/lib/api";
import { toast } from "sonner";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  time: string;
  cta?: { label: string; url: string };
  isLeadForm?: boolean;
}

let messageSeq = 0;
const nextMessageId = () => `msg-${++messageSeq}`;

const QUICK_PROMPTS = [
  "📅 Book Consultation",
  "🌐 Web & App Development",
  "📊 Custom CRM Systems",
  "⚡ AI Agents & Automation",
  "💰 Pricing & Timeline",
];

// Animated AI Bot Avatar Component
function AIBotAvatar({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const containerSize = size === "sm" ? "h-6 w-6" : size === "lg" ? "h-11 w-11" : "h-8 w-8";
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-6 w-6" : "h-4.5 w-4.5";

  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${containerSize}`}>
      {/* Animated Pulse Aura */}
      <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#6C5CE7] to-[#7C3AED] opacity-70 blur-xs animate-pulse" />

      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className={`relative grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-[#6C5CE7] via-[#7C3AED] to-[#4F46E5] text-white shadow-md shadow-[#6C5CE7]/30 border border-white/20`}
      >
        <Bot className={`${iconSize} drop-shadow-xs`} />
      </motion.div>
    </div>
  );
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);
  const [input, setInput] = React.useState("");

  // Lead Form State
  const [leadName, setLeadName] = React.useState("");
  const [leadEmail, setLeadEmail] = React.useState("");
  const [leadPhone, setLeadPhone] = React.useState("");
  const [isSubmittingLead, setIsSubmittingLead] = React.useState(false);

  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "init-1",
      sender: "ai",
      text: "Hi! 👋 I'm Readyio's AI Assistant. How can I help you today? Ask me about our Web Apps, CRM Systems, AI Automation, or click below to book a free project consultation!",
      time: "Just now",
    },
  ]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Handle Lead Form Submission from Chat Window
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim() || !leadEmail.includes("@")) {
      toast.error("Please enter a valid Name and Email.");
      return;
    }

    setIsSubmittingLead(true);

    try {
      const res = await submitChatBooking({
        name: leadName.trim(),
        email: leadEmail.trim(),
        phone: leadPhone.trim() || undefined,
        note: "Submitted via AI Chatbot inline lead form",
      });

      if (res.success) {
        toast.success(`Thank you ${leadName}! Your request is received.`);

        const timeStr = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const userMsg: Message = {
          id: nextMessageId(),
          sender: "user",
          text: `Submitted Consultation Request: ${leadName} (${leadEmail})`,
          time: timeStr,
        };

        const aiMsg: Message = {
          id: nextMessageId(),
          sender: "ai",
          text: `✅ Thank you ${leadName}! Your consultation request has been submitted.\n\nA confirmation email has been sent to ${leadEmail}, and our project team will reach out within 24 hours.`,
          time: timeStr,
          cta: { label: "Explore Our Work", url: "/#work" },
        };

        setMessages((prev) => [...prev.filter((m) => !m.isLeadForm), userMsg, aiMsg]);
        setLeadName("");
        setLeadEmail("");
        setLeadPhone("");
      } else {
        toast.error(res.error || "Failed to submit booking. Please try again.");
      }
    } catch {
      toast.error("Failed to submit lead. Please check your connection.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const showLeadFormCard = () => {
    const timeStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: nextMessageId(),
        sender: "ai",
        text: "Fill in your details below to schedule a free 15-minute consultation with our product team:",
        time: timeStr,
        isLeadForm: true,
      },
    ]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    if (query === "📅 Book Consultation") {
      showLeadFormCard();
      setInput("");
      return;
    }

    const timeStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add User Message
    const userMsg: Message = {
      id: nextMessageId(),
      sender: "user",
      text: query,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    // Check for automatic Email extraction from text
    const emailMatch = query.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      const capturedEmail = emailMatch[0];
      submitChatBooking({
        name: "Valued Visitor",
        email: capturedEmail,
        note: query,
      });

      const aiMsg: Message = {
        id: nextMessageId(),
        sender: "ai",
        text: `Got it! I've noted down your email (${capturedEmail}). Our team will send you complete project scope and pricing details within 24 hours.`,
        time: timeStr,
        cta: { label: "View Services", url: "/services" },
      };
      setMessages((prev) => [...prev, aiMsg]);
      return;
    }

    setIsTyping(true);

    try {
      const history = messages
        .filter((m) => !m.isLeadForm)
        .map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        }));

      // Call Backend API /api/chat
      const response = await sendChatMessage({
        message: query,
        conversationHistory: history,
      });

      const responseText =
        response.data?.text ||
        response.message ||
        "Thanks for reaching out! We build high-converting web apps, custom CRMs, and practical AI automation.";
      const bookingIntent = response.bookingIntent;

      const aiMsg: Message = {
        id: nextMessageId(),
        sender: "ai",
        text: responseText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        cta: { label: "Book a Project Call", url: "/contact" },
      };

      setMessages((prev) => [...prev, aiMsg]);

      // If user expressed booking intent, automatically append the Lead Capture Form card!
      if (bookingIntent) {
        setTimeout(() => showLeadFormCard(), 600);
      }
    } catch (err) {
      console.error("Error communicating with AI Chatbot backend:", err);

      const fallbackMsg: Message = {
        id: nextMessageId(),
        sender: "ai",
        text: "Thanks for reaching out! We build high-converting websites, custom CRMs, and practical AI automation tailored to your business needs.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        cta: { label: "Schedule a Call", url: "/contact" },
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button with AI Avatar */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              type="button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D0A22] via-[#170E3B] to-[#6C5CE7] p-2 pr-5 text-white shadow-[0_10px_35px_rgba(108,92,231,0.45)] border border-white/10 transition-all hover:shadow-[0_14px_40px_rgba(108,92,231,0.65)]"
              aria-label="Open AI Chatbot"
            >
              {/* Animated AI Bot Icon */}
              <AIBotAvatar size="md" />

              {/* Online Pulse Indicator */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-[#0D0A22]" />
              </span>

              <span className="text-xs font-bold tracking-wide">Ask AI</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 flex h-[570px] w-[90vw] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-[#0D0A22] to-[#170E3B] px-4 py-3.5 text-white dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <AIBotAvatar size="md" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0D0A22]" />
                </div>
                <div>
                  <h3 className="font-heading text-xs font-extrabold text-white flex items-center gap-1.5">
                    Readyio AI Assistant
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online & Ready
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-7 w-7 place-items-center rounded-xl bg-white/10 text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close Chatbot"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Body / Messages List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F9F8FD] dark:bg-gray-950/60">
              {messages.map((m) => {
                const isUser = m.sender === "user";
                return (
                  <div
                    key={m.id}
                    className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar Icon */}
                    {!isUser ? (
                      <AIBotAvatar size="sm" />
                    ) : (
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-[#6C5CE7]/20 text-[#6C5CE7] flex-shrink-0 dark:bg-[#6C5CE7]/30 dark:text-white">
                        <User className="h-3.5 w-3.5" />
                      </div>
                    )}

                    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
                      <div
                        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-xs ${isUser
                          ? "bg-[#6C5CE7] text-white rounded-br-none"
                          : "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-gray-700/60"
                          }`}
                      >
                        <p className="whitespace-pre-line">{m.text.replace(/\*\*/g, "")}</p>

                        {/* Inline Lead Capture Form */}
                        {m.isLeadForm && (
                          <form
                            onSubmit={handleLeadSubmit}
                            className="mt-3 space-y-2 rounded-xl border border-[#6C5CE7]/30 bg-[#F0EDF9]/60 p-3 dark:border-[#6C5CE7]/40 dark:bg-gray-900/90"
                          >
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#6C5CE7] dark:text-[#9b8eff]">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>Request Project Call</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Your Name *"
                              required
                              value={leadName}
                              onChange={(e) => setLeadName(e.target.value)}
                              className="w-full rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-800 outline-none focus:border-[#6C5CE7] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            />
                            <input
                              type="email"
                              placeholder="Your Email *"
                              required
                              value={leadEmail}
                              onChange={(e) => setLeadEmail(e.target.value)}
                              className="w-full rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-800 outline-none focus:border-[#6C5CE7] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            />
                            <input
                              type="tel"
                              placeholder="Phone / WhatsApp (optional)"
                              value={leadPhone}
                              onChange={(e) => setLeadPhone(e.target.value)}
                              className="w-full rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-800 outline-none focus:border-[#6C5CE7] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            />
                            <button
                              type="submit"
                              disabled={isSubmittingLead}
                              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#6C5CE7] py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#5B4BC4] disabled:opacity-50"
                            >
                              {isSubmittingLead ? (
                                <>
                                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                  <span>Submitting...</span>
                                </>
                              ) : (
                                <>
                                  <span>Submit Request</span>
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </>
                              )}
                            </button>
                          </form>
                        )}

                        {/* Optional Call to Action Link */}
                        {m.cta && !m.isLeadForm && (
                          <div className="mt-2.5 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                            <Link
                              href={m.cta.url}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-[#6C5CE7]/10 px-2.5 py-1 text-[10px] font-bold text-[#6C5CE7] transition-all hover:bg-[#6C5CE7] hover:text-white dark:bg-[#6C5CE7]/20 dark:text-[#A78BFA]"
                            >
                              <span>{m.cta.label}</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        )}
                      </div>
                      <span className="mt-1 text-[9px] text-gray-400 px-1">
                        {m.time}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2.5">
                  <AIBotAvatar size="sm" />
                  <div className="flex items-center gap-1.5 rounded-2xl bg-white px-3.5 py-2.5 text-xs text-gray-500 shadow-xs border border-gray-100 max-w-[70px] dark:bg-gray-800 dark:border-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7] animate-bounce" />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7] animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7] animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Carousel */}
            <div className="border-t border-gray-100 bg-white p-2 overflow-x-auto whitespace-nowrap scrollbar-none dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-1.5 text-[10px]">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className={`rounded-full border px-2.5 py-1 font-semibold transition-colors ${prompt.includes("Book")
                      ? "border-[#6C5CE7] bg-[#6C5CE7]/10 text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white dark:bg-[#6C5CE7]/20 dark:text-[#9b8eff]"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-[#6C5CE7] hover:bg-[#F0EDF9] hover:text-[#6C5CE7] dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Footer */}
            <div className="border-t border-gray-100 bg-white p-2.5 dark:border-gray-800 dark:bg-gray-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2 rounded-2xl bg-gray-100/80 px-3 py-1.5 border border-transparent focus-within:border-[#6C5CE7]/40 dark:bg-gray-800/80"
              >
                <input
                  type="text"
                  id="chatbot-query-input"
                  name="chatbot-query"
                  aria-label="Ask AI Assistant or share your email"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask AI or share your email..."
                  className="w-full bg-transparent text-xs text-gray-800 placeholder-gray-400 outline-none dark:text-white"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label="Send message to AI Assistant"
                  className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-xl bg-[#6C5CE7] text-white shadow-xs transition-all hover:bg-[#5B4BC4] disabled:opacity-40 disabled:hover:bg-[#6C5CE7]"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
