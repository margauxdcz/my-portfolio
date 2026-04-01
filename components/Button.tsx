import * as React from "react";
import { cn } from "../lib/utils"; // helper function to combine Tailwind classes

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "default" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "outline" && "border border-gray-300 hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}