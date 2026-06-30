import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/95 shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:shadow-glow",
  secondary:
    "border border-[color:var(--bronze)]/40 text-foreground hover:border-[color:var(--bronze)] hover:bg-[color-mix(in_oklab,var(--bronze)_10%,transparent)]",
  outline:
    "border border-border text-foreground hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", size = "md", children, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium",
        "transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out",
        "hover:scale-[1.03] active:scale-[0.98] focus-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  ),
);
Button.displayName = "Button";
