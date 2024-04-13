"use client";

import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";

const Nested = ({ text }: { text: string }) => {
  const container = useRef(null);

  useGSAP(
    () => {
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
    { scope: container, dependencies: [text] }
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
};

function RevealTextEffect({ text }: { text: string }) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isMounted) return <Nested text={text} />;
}

export default dynamic(() => Promise.resolve(RevealTextEffect), {
  ssr: false,
});
