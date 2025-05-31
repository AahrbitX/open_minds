import React from "react";
import PageTransition from "@/components/common/page-transition";
import SmoothScroll from "@/components/custom/smooth-scroll";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <PageTransition>{children}</PageTransition>
    </SmoothScroll>
  );
}

export default AppProviders;
