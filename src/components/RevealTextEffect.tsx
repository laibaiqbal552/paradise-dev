"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

function RevealTextEffect({ text }: { text: string }) {
  const container = useRef(null);

  useGSAP(
    () => {
      // gsap.set("span", { opacity: 0.1 });

      gsap.to("span", {
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.2,
          start: "center 70%",
          end: "center center",
        },
      });
    },
    { scope: container }
  );

  return (
    <p ref={container}>
      {text.split(" ").map((word, i) => (
        <React.Fragment key={i}>
          <span className="opacity-10">{word}</span>{" "}
        </React.Fragment>
      ))}
    </p>
  );
}

export default dynamic(() => Promise.resolve(RevealTextEffect), {
  ssr: false,
});
