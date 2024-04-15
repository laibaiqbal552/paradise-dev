"use client";

import { useTheme } from "next-themes";
import Image from "next/legacy/image";

// import useThemeSwitcher from "hooks/useThemeSwitcher";

const GearsImage = () => {
  // const [theme] = useThemeSwitcher();
  const { resolvedTheme: theme } = useTheme();

  return (
    <div className="flex max-w-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src={
          theme === "light" ? "/images/gears-white.png" : "/images/gears.png"
        }
        className="  object-cover w-full h-full "
        width={192 * 3}
        height={155.07 * 3}
        alt="Gears Image"
      />
    </div>
  );
};

export default GearsImage;
