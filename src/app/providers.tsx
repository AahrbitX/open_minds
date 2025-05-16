import SmoothScroll from "@/components/custom/smooth-scroll";
import React from "react";

function AppProviders({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}

export default AppProviders;
