"use client";

import Container from "@/components/Container";
import { useTheme } from "next-themes";
import React from "react";
import Marquee from "react-fast-marquee";

const clients = [
  { src: "/images/trusted/hil.png", lightSrc: "/images/trusted-light/hil.png" },
  {
    src: "/images/trusted/suda.png",
    lightSrc: "/images/trusted-light/suda.jpg",
  },
  {
    src: "/images/trusted/pura.png",
    lightSrc: "/images/trusted-light/pura.jpg",
  },
  { src: "/images/trusted/las.png", lightSrc: "/images/trusted-light/las.svg" },
  {
    src: "/images/trusted/chai.png",
    lightSrc: "/images/trusted-light/chai.jpg",
  },
  {
    src: "/images/trusted/vita.png",
    lightSrc: "/images/trusted-light/vita.png",
  },
  {
    src: "/images/trusted/laur.png",
    lightSrc: "/images/trusted-light/laur.png",
  },
  { src: "/images/trusted/ika.svg", lightSrc: "/images/trusted-light/ika.png" },
];

function TrustedClients() {
  const { theme } = useTheme();

  return (
    <section>
      <Container className="max-w-[80rem] w-full">
        <p className="text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-center mb-20">
          Our Trusted Clients
        </p>
      </Container>

      <Marquee
        speed={100}
        autoFill
        className="flex items-center justify-between"
      >
        {clients.map((item, i) => (
          <img
            src={theme === "dark" ? item.src : item.lightSrc}
            key={i}
            className="h-9 sm:h-14 xl:h-[80px] w-auto mx-1.5 sm:mx-3 xl:mx-6"
          />
        ))}
      </Marquee>
    </section>
  );
}

export default TrustedClients;
