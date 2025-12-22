import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 w-full rounded-[--radius] border border-[--line] bg-white px-4 text-[--ink] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand]",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
