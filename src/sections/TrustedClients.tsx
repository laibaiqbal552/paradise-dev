/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import Container from "components/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useThemeSwitcher from "hooks/useThemeSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
  const [theme] = useThemeSwitcher();

  const t = useTranslations("Home.TrustedClients");

  return (
    <section>
      <Container className="max-w-[80rem] w-full">
        <p className="text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-center mb-6 sm:mb-20">
          {t("Title")}
        </p>
      </Container>

      {/* <Marquee
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
      </Marquee> */}

      <Swiper
        slidesPerView={"auto"}
        modules={[Autoplay]}
        className="sm:[&_.swiper-slide]:!w-fit sm:[&_.swiper-slide]:h-auto [&_.swiper-slide]:flex [&_.swiper-slide]:justify-center [&_.swiper-slide]:items-center"
        loop={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 1000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },

          640: {
            slidesPerView: "auto",
          },
        }}
      >
        {clients.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              alt="Trusted Client"
              width={100}
              height={100}
              src={theme === "dark" ? item.src : item.lightSrc}
              className="sm:h-14 xl:h-[80px] sm:w-auto sm:mx-3 xl:mx-6 object-contain aspect-square max-sm:!w-[50%] max-sm:!h-[50%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TrustedClients;
