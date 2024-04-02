"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

function Logo({
  width = 275,
  height = 70,
  alt = "logo",
  ...props
}: ImageProps) {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/images/logo.png" : "/images/logo-black.svg";

  return <Image {...props} src={src} width={width} height={height} alt={alt} />;
}

export default Logo;
