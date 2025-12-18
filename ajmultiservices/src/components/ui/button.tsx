import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center shadow-sm whitespace-nowrap rounded-[--radius] text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[--brand] text-white hover:bg-[--brand-600] active:translate-y-px",
        accent: "bg-[--accent] text-white hover:bg-red-600 active:translate-y-px",
        outline: "border border-[--line] bg-white text-[--ink] hover:bg-slate-50",
        link: "bg-transparent text-[--brand] underline-offset-4 hover:underline",
      },
      size: {
        md: "h-11 px-5",
        sm: "h-10 px-4",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
);
Button.displayName = "Button";
