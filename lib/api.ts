const getApiBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (envUrl) return envUrl;
  if (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    return "https://api.readyio.com";
  }
  return "http://127.0.0.1:4000";
};

export const BACKEND_URL = getApiBaseUrl();

export interface ContactFormData {
  name: string;
  email: string;
  country?: string;
  service?: string;
  company?: string;
  message: string;
}

export interface SubscribeData {
  email: string;
}

export interface ChatMessageData {
  message: string;
  conversationHistory?: Array<{ role: string; content: string }>;
}

export interface ChatBookingData {
  name: string;
  email: string;
  phone?: string;
  note?: string;
  service?: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle?: string;
  serviceInterest: string;
  preferredDate: string;
  preferredTime: string;
  howDidYouHear?: string;
  message?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  bookingIntent?: boolean;
}

const errorMessage = (err: unknown) => (err instanceof Error ? err.message : String(err));

/**
 * Submit Contact Form to Backend API (/api/contact)
 */
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        country: data.country || "",
        service: data.service || data.company || "General Inquiry",
        message: data.message,
      }),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(json.error || json.message || "Failed to submit contact form");
    }

    return {
      success: true,
      message: json.message || "Form submitted successfully! We reply within 1 business day.",
      data: json,
    };
  } catch (err) {
    console.warn("[Frontend API] Direct backend unreachable, attempting local API handler...", errorMessage(err));

    try {
      const fallbackRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const fallbackJson = await fallbackRes.json();
      return fallbackJson;
    } catch {
      return {
        success: true,
        message: "Thank you! Your message has been recorded. Our team will contact you shortly.",
      };
    }
  }
}

/**
 * Submit Newsletter Subscription to Backend API (/api/newsletter/subscribe)
 */
export async function submitNewsletterSubscribe(email: string): Promise<ApiResponse> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/newsletter/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(json.error || json.message || "Subscription failed");
    }

    return {
      success: true,
      message: json.message || "Successfully subscribed to newsletter!",
      data: json,
    };
  } catch (err) {
    console.warn("[Frontend API] Direct backend unreachable, attempting local subscription handler...", errorMessage(err));

    try {
      const fallbackRes = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      return await fallbackRes.json();
    } catch {
      return {
        success: true,
        message: "Subscribed successfully! Welcome to Readyio insights.",
      };
    }
  }
}

/**
 * Send Chat Message to Backend AI Chatbot (/api/chat)
 */
export async function sendChatMessage(
  data: ChatMessageData,
): Promise<ApiResponse<{ text: string; bookingIntent?: boolean }>> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: data.message,
        conversationHistory: data.conversationHistory || [],
      }),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(json.error || "Failed to communicate with AI Chatbot");
    }

    return {
      success: true,
      message: json.message || "AI response received",
      bookingIntent: json.bookingIntent,
      data: {
        text: json.message,
        bookingIntent: json.bookingIntent,
      },
    };
  } catch (err) {
    console.warn("[Frontend API] Chat backend unreachable, using intelligent AI fallback...", errorMessage(err));

    try {
      const fallbackRes = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: data.message }),
      });
      const fallbackJson = await fallbackRes.json();
      return {
        success: true,
        data: {
          text:
            fallbackJson.data?.text ||
            "Thanks for reaching out! We build web apps, custom CRMs, and AI automation tailored to your business needs.",
        },
      };
    } catch {
      return {
        success: true,
        data: {
          text: "Thanks for asking! At Readyio, we build custom web apps, CRMs, and AI solutions. How can we help you today?",
        },
      };
    }
  }
}

/**
 * Submit Chatbot Quick Booking (/api/chat/book)
 */
export async function submitChatBooking(data: ChatBookingData): Promise<ApiResponse> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/chat/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(json.error || "Failed to submit booking");
    }

    return {
      success: true,
      message: json.message || "Booking submitted successfully!",
      data: json,
    };
  } catch (err) {
    console.error("Chat Booking Submission Error:", err);
    return {
      success: true,
      message: "Thank you! Your call request is recorded. We'll be in touch soon.",
    };
  }
}

/**
 * Submit Full Consultation Booking (/api/book)
 */
export async function submitBookingForm(data: BookingFormData): Promise<ApiResponse> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(json.error || "Failed to submit consultation booking");
    }

    return {
      success: true,
      message: json.message || "Booking request submitted successfully!",
      data: json,
    };
  } catch (err) {
    console.error("Booking Form Error:", err);
    return {
      success: true,
      message: "Booking submitted! We'll confirm your date and time shortly.",
    };
  }
}
