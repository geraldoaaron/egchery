"use client";

import dynamic from "next/dynamic";

// Lazy load ScrollStorytelling on client-side only.
// ssr: false is allowed here because this is a Client Component.
const ScrollStorytelling = dynamic(
  () => import("@/components/home/ScrollStorytelling").then((m) => ({ default: m.ScrollStorytelling })),
  { ssr: false }
);

export function ScrollStorytellingLazy() {
  return <ScrollStorytelling />;
}
