"use client";

import { StickyBanner } from "../ui/sticky-banner";

export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <StickyBanner
      hideOnScroll
      className="bg-gradient-to-b from-purple-600 to-violet-800 text-center"
    >
      {children}
    </StickyBanner>
  );
}
