import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary hover:bg-primary-light text-gray-100",
  secondary: "bg-secondary hover:bg-secondary-light text-neutral-800",
  outline:
    "border border-primary hover:bg-primary-light text-neutral-800 hover:text-gray-100",
};

type Variant = keyof typeof variants;

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className">;

function Button<C extends React.ElementType = "button">({
  as,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps<C>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "py-3 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-md cursor-pointer duration-300 transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
