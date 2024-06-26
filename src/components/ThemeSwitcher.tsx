"use client";

import { cn } from "./../lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Btn = ({ imgSrc, className, isActive, ...props }: any) => {
  return (
    <button
      {...props}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
        className,
        isActive
          ? "bg-primary"
          : "opacity-30 dark:opacity-20 invert dark:invert-0"
      )}
    >
      <Image
        src={imgSrc}
        alt="Theme Switcher"
        width={30}
        height={30}
        className={cn(
          "w-[30px] h-[30px] transition-all duration-300",
          isActive ? null : "size-[25px]"
        )}
      />
    </button>
  );
};

function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="h-[48px] bg-white dark:bg-body-dark rounded-full flex items-center justify-center px-1.5 space-x-1.5">
        <Btn
          isActive={resolvedTheme === "light"}
          onClick={() => {
            setTheme("light");
          }}
          type="button"
          imgSrc="/images/sun.svg"
        />
        <Btn
          isActive={resolvedTheme === "dark"}
          onClick={() => setTheme("dark")}
          type="button"
          imgSrc="/images/moon.svg"
        />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
