"use client";

import { Button } from "components/Button";
import Container from "components/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

function ProvideQuality() {
  const t = useTranslations("Home.Quality");
  return (
    <section className="relative py-12 lg:py-20 bg-[url('/images/gradient-bg-light.png')]  bg-cover bg-[#f9f7fb] dark:bg-transparent bg-[center_center]">
      <Image
        src="/images/ring.svg"
        height={90}
        width={90}
        alt="ring"
        className="absolute top-1/3 left-[5%] z-10 max-sm:hidden"
      />
      <Image
        src="/images/ring.svg"
        height={120}
        width={120}
        alt="ring"
        className="absolute bottom-[10%] right-[5%] z-10 max-sm:hidden"
      />
      <Container>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium mb-7">
          {t("Title")}
        </h1>

        <p className="text-center text-base md:text-lg font-medium mb-6 max-w-lg mx-auto">
          {t("Description")}
        </p>

        <Button
          className="uppercase mx-auto block cursor-pointer w-fit"
          variant="primary"
          padding="16_32"
          asChild
        >
          <ScrollLink to="contact">{t("ButtonText")}</ScrollLink>
        </Button>
      </Container>
    </section>
  );
}

export default ProvideQuality;
