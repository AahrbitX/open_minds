import React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      name="page-transition"
      share={{
        default: "default-transition",
        "nav-forward": "slide-forward",
        "nav-back": "slide-back",
      }}
    >
      {children}
    </ViewTransition>
  );
}

export default PageTransition;
