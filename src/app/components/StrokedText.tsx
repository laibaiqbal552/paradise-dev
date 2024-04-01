import { cn } from "@/lib/utils";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  color?: string;
  strokeWidth?: number | string;
}

function StrokedText({
  strokeWidth = "1px",
  color = "rgba(255,255,255,.7)",
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={cn("text-transparent", className)}
      style={{
        WebkitTextStrokeWidth: strokeWidth,
        WebkitTextStrokeColor: color,
      }}
      {...props}
    >
      {children}
    </p>
  );
}

export default StrokedText;
