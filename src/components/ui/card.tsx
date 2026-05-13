import { cn } from "@/lib/utils";
import React from "react";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-[28px] bg-card text-white shadow-sm p-6", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
