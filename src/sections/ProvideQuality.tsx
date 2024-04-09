"use client";

import { Button } from "components/Button";
import Container from "components/Container";
import { useTranslations } from "next-intl";
import { Link as ScrollLink } from "react-scroll";

function ProvideQuality() {
  const t = useTranslations("Home.Quality");
  return (
    <section className="py-12 lg:py-20 bg-[url('/images/gradient-bg-light.png')] dark:bg-[url('/images/gradient-bg.png')] bg-cover bg-[#f9f7fb] dark:bg-transparent bg-[center_center]">
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
