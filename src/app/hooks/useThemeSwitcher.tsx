"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState<any>("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, setTheme];
};

export default useThemeSwitcher;
