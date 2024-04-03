"use client";

import Container from "@/components/Container";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const skills = [
  {
    img: "/images/skills/angular.png",
    imgLight: "/images/skills-light/angular.svg",
  },
  {
    img: "/images/skills/react.png",
    imgLight: "/images/skills-light/react.png",
  },
  {
    img: "/images/skills/nextjs.svg",
    imgLight: "/images/skills-light/nextjs.svg",
  },
  {
    img: "/images/skills/mysql.png",
    imgLight: "/images/skills-light/mysql.png",
  },
  {
    img: "/images/skills/swift.png",
    imgLight: "/images/skills-light/swift.png",
  },
  {
    img: "/images/skills/astro.png",
    imgLight: "/images/skills-light/astro.png",
  },
  { img: "/images/skills/meta.png", imgLight: "/images/skills-light/meta.png" },
  { img: "/images/skills/m.png", imgLight: "/images/skills-light/m.svg" },
  {
    img: "/images/skills/shopify.png",
    imgLight: "/images/skills-light/shopify.png",
  },
  { img: "/images/skills/html.png", imgLight: "/images/skills-light/html.png" },
  { img: "/images/skills/css.png", imgLight: "/images/skills-light/css.svg" },
  { img: "/images/skills/js.png", imgLight: "/images/skills-light/js.png" },
  {
    img: "/images/skills/jquery.png",
    imgLight: "/images/skills-light/jquery.svg",
  },
  { img: "/images/skills/php.svg", imgLight: "/images/skills-light/php.png" },
  { img: "/images/skills/node.png", imgLight: "/images/skills-light/node.png" },
  { img: "/images/skills/python.png", imgLight: null },
];

function WeHandle() {
  const { theme } = useTheme();

  return (
    <section>
      <Container className="mb-10">
        <h1 className="text-3xl md:text-[56px] text-center font-semibold">
          Tech’s & Platforms We Handle
        </h1>
      </Container>

      <Marquee
        speed={120}
        className="flex items-center justify-between"
        autoFill
      >
        {skills.map((item, i) =>
          item.imgLight ? (
            <Image
              src={theme === "dark" ? item.img : item.imgLight}
              key={i}
              alt="skill"
              width={112}
              height={112}
              className="mx-5 max-sm:size-12 max-xl:size-16"
            />
          ) : null
        )}
      </Marquee>
    </section>
  );
}

export default WeHandle;
