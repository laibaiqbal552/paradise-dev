"use client";

import useThemeSwitcher from "hooks/useThemeSwitcher";

const GearsImage = () => {
  const [theme] = useThemeSwitcher();

  return (
    <img
      src={theme === "light" ? "/images/gears-white.png" : "/images/gears.png"}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48"
      alt=""
    />
  );
};

export default GearsImage;
