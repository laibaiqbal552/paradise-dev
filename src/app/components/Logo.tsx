"use client";

import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import Image, { ImageProps } from "next/image";

function Logo({
  width = 275,
  height = 70,
  alt = "logo",
  ...props
}: ImageProps) {
  const [theme] = useThemeSwitcher();
  const src = theme === "light" ? "/images/logo-black.svg" : "/images/logo.png";

  return <Image {...props} src={src} width={width} height={height} alt={alt} />;
}

export default Logo;
