"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function SetupPlugin() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return null;
}

export default SetupPlugin;
