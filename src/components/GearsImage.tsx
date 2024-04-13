"use client";

import useThemeSwitcher from "hooks/useThemeSwitcher";
import Image from "next/image";

const GearsImage = () => {
  const [theme] = useThemeSwitcher();

  return (
    <Image
      width={100}
      height={100}
      src={theme === "light" ? "/images/gears-white.png" : "/images/gears.png"}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48"
      alt="Gears Image"
    />
  );
};

export default GearsImage;
