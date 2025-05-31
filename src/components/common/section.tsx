import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  className?: string;
};

function Section({ className, ...props }: SectionProps) {
  return (
    <section className={cn("my-10", className)} {...props}>
      {props.children}
    </section>
  );
}

export default Section;
