"use client";

import Container from "components/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useThemeSwitcher from "hooks/useThemeSwitcher";
import { useTranslations } from "next-intl";

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
  const [theme] = useThemeSwitcher();
  const t = useTranslations("Home.Platforms");

  return (
    <section>
      <Container className="mb-20">
        <h1 className="text-3xl md:text-[56px] text-center font-semibold">
          {t("Title")}
        </h1>
      </Container>

      {/* <Marquee
        speed={100}
        className="flex items-center justify-between"
        autoFill
      >
        {skills.map((item, i) =>
          item.imgLight ? (
            <Image
              src={theme === "dark" ? item.img : item.imgLight}
              key={i}
              alt="skill"
              width={100}
              height={100}
              className="mx-5 max-sm:size-12 max-xl:size-16"
            />
          ) : null
        )}
      </Marquee> */}
      <div className="flex items-center justify-center w-full">
        <Swiper
          slidesPerView={"auto"}
          modules={[Autoplay]}
          className="[&_.swiper-slide]:!w-fit [&_.swiper-slide]:h-auto"
          loop={true}
          autoplay={{
            disableOnInteraction: false,
            delay: 1000,
          }}
        >
          {skills.map((item, i) =>
            item.imgLight ? (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={theme === "dark" ? item.img : item.imgLight}
                    alt="skill"
                    width={100}
                    height={100}
                    className="mx-5 max-sm:size-12 max-xl:size-16"
                  />
                </div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default WeHandle;
