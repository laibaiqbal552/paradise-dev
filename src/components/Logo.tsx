"use client";

import useThemeSwitcher from "hooks/useThemeSwitcher";
import Image, { ImageProps } from "next/image";

function Logo({
  width = 275,
  height = 70,
  alt = "logo",
  ...props
}: ImageProps) {
  const [theme] = useThemeSwitcher();
  const logo = [
    {
      src: "/images/ParadiseDev Negativo.svg",
      lightSrc: "/images/ParadiseDev Positivo.svg",
    },
  ];
  const src = theme === "light" ? logo[0].lightSrc : logo[0].src;

  return (
    <Image
      {...props}
      src={src}
      width={width}
      height={height}
      alt={alt || "alt"}
    />
  );
}

export default Logo;
