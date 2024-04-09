"use client";

import { Typewriter } from "react-simple-typewriter";
import Container from "components/Container";
import Image from "next/image";
import { Button } from "components/Button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "lib/constants";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Home.Hero");

  const words = t("TypeWriter").split(",");

  return (
    <section className="relative">
      <Container className="relative z-10">
        <Image
          src="/images/ring.svg"
          height={70}
          width={70}
          alt="ring"
          className="absolute top-1/2 left-0 -z-10 max-sm:hidden"
        />

        <Image
          src="/images/hand.png"
          alt="hand"
          className="mx-auto mb-6 max-sm:size-14"
          width={64}
          height={64}
        />

        <h3 className="text-center text-[56px] font-medium mb-7 max-xl:text-[40px] max-sm:text-2xl">
          {/* {t["Title"]} */}
          {t("Title")}
        </h3>

        <h1 className="text-[6.5rem] text-center font-semibold lh-1_2 max-xl:text-6xl max-sm:text-[36px]">
          {t("Subtitle")}
          <br />
          <span className="text-primary">
            <Typewriter cursor loop words={words} />
          </span>
        </h1>
      </Container>

      <ul className="flex max-lg:flex-row items-center flex-col max-lg:space-x-4 lg:space-y-6 lg:absolute top-1/2 lg:-translate-y-1/2 lg:right-8 max-lg:justify-center max-lg:px-4 max-lg:mt-6 z-50">
        {socialLinks
          .filter((item) =>
            item.title === "tiktok" || item.title === "telegram" ? null : item
          )
          .map((item, i) => (
            <li key={i}>
              <Button asChild shape="icon" className="text-2xl">
                <a href={item.link} target="_blank">
                  <item.Icon />
                </a>
              </Button>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Hero;
