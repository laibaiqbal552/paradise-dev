"use client";

import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  color?: string;
  strokeWidth?: number | string;
}

function StrokedText(props: Props) {
  const [theme] = useThemeSwitcher();

  const {
    strokeWidth = "1px",
    color = theme == "light" ? "black" : "rgba(255,255,255,.7)",
    children,
    className,
    ..._props
  } = props;

  return (
    <p
      className={cn("text-transparent", className)}
      style={{
        WebkitTextStrokeWidth: strokeWidth,
        WebkitTextStrokeColor: color,
      }}
      {..._props}
    >
      {children}
    </p>
  );
}

export default StrokedText;
