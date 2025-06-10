import React from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HGroupProps = {
  as?: HeadingLevel;
  subtitle?: string;
  subtitleClassName?: string;
  className?: string;
  children: React.ReactNode;
};

const sizeVariants: Record<HeadingLevel, string> = {
  h1: "text-5xl md:text-6xl lg:text-8xl",
  h2: "text-3xl md:text-4xl lg:text-5xl",
  h3: "text-2xl md:text-3xl lg:text-4xl",
  h4: "text-xl md:text-2xl lg:text-3xl",
};

function HGroup({
  as = "h1",
  children,
  className,
  subtitle,
  subtitleClassName,
}: HGroupProps) {
  const Component = as;

  return (
    <>
      <Component
        className={cn(
          sizeVariants[as],
          "font-heading font-semibold text-center mt-12 px-4",
          className
        )}
      >
        {children}
      </Component>
      {subtitle && (
        <p
          className={cn(
            "mt-2 px-6 text-pretty text-sm md:text-base lg:text-lg text-gray-700 text-center",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}

export default HGroup;
