"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Container from "components/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import useThemeSwitcher from "hooks/useThemeSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTheme } from "next-themes";

const clients = [
  {
    img: "/images/trusted/hil.png",
    imgLight: "/images/trusted-light/hil.png",
  },
  {
    img: "/images/trusted/suda.png",
    imgLight: "/images/trusted-light/suda.svg",
  },
  {
    img: "/images/trusted/pura.png",
    imgLight: "/images/trusted-light/pura.png",
  },
  { img: "/images/trusted/las.png", imgLight: "/images/trusted-light/las.png" },
  {
    img: "/images/trusted/chai.png",
    imgLight: "/images/trusted-light/chai.png",
  },
  {
    img: "/images/trusted/vita.png",
    imgLight: "/images/trusted-light/vita.png",
  },
  {
    img: "/images/trusted/laur.png",
    imgLight: "/images/trusted-light/laur.png",
  },
  {
    img: "/images/trusted/ika.svg",
    imgLight: "/images/trusted-light/ika.png",
  },
];
function TrustedClients() {
  // const [theme] = useThemeSwitcher();

  const { resolvedTheme: theme } = useTheme();
  const t = useTranslations("Home.TrustedClients");

  return (
    <section>
      <Container className="max-w-[80rem] w-full">
        <p className="text-3xl sm:text-4xl lg:text-[3.5rem] font-semibold text-center mb-10 sm:mb-20">
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

      {/* <Swiper
        slidesPerView={"auto"}
        modules={[Autoplay]}
        className="sm:[&_.swiper-slide]:!w-fit [&_.swiper-slide]:h-auto"
        loop={true}
        spaceBetween={32}
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
            <div className="flex items-center justify-center h-full ">
            

              <img
                src={theme === "light" ? item.imgLight : item.img}
                className={`max-w-full ${
                  i === 1 ? "max-h-[48px]" : "max-h-[60px]"
                } sm:mx-3 xl:mx-6 object-contain max-h-[60px]`}
                alt="slides images"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Swiper
        slidesPerView={"auto"}
        modules={[Autoplay]}
        className="sm:[&_.swiper-slide]:!w-fit sm:[&_.swiper-slide]:h-auto"
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
        {clients.map((item, i) =>
          item.imgLight ? (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center h-full">
                <img
                  src={theme === "dark" ? item.img : item.imgLight}
                  className={`max-w-full ${
                    i === 1 ? "max-h-[48px]" : "max-h-[60px]"
                  } sm:mx-3 xl:mx-6 object-contain max-h-[60px]`}
                  alt="slides images"
                />
              </div>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </section>
  );
}

export default TrustedClients;
