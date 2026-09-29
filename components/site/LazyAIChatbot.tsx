"use client";

import dynamic from "next/dynamic";

export const LazyAIChatbot = dynamic(
  () => import("./AIChatbot").then((m) => m.AIChatbot),
  { ssr: false }
);
