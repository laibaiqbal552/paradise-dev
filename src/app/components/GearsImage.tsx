"use client";

import { useTheme } from "next-themes";

const GearsImage = () => {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "dark" ? "/images/gears.png" : "/images/gears-white.png"}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48"
      alt=""
    />
  );
};

export default GearsImage;
