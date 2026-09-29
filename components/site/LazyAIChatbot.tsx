"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const AIChatbot = dynamic(
  () => import("./AIChatbot").then((m) => m.AIChatbot),
  { ssr: false }
);

export function LazyAIChatbot() {
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    const trigger = () => setShouldLoad(true);
    const events = ["scroll", "pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(trigger, {
        timeout: 4000,
      });
      return () => {
        events.forEach((e) => window.removeEventListener(e, trigger));
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
      };
    } else {
      const timer = setTimeout(trigger, 3500);
      return () => {
        events.forEach((e) => window.removeEventListener(e, trigger));
        clearTimeout(timer);
      };
    }
  }, []);

  if (!shouldLoad) return null;
  return <AIChatbot />;
}
