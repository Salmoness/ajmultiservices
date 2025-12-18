import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[130px] w-full rounded-[--radius] border border-[--line] bg-white p-4 text-[--ink] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand]",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
