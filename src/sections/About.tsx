"use client";

import Container from "components/Container";
import Heading from "components/Heading";
import RevealTextEffect from "components/RevealTextEffect";
import StrokedText from "components/StrokedText";
import Typography from "components/Typography";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("Home.About");
  return (
    <section>
      <Container>
        <Heading>
          <StrokedText className="font-bold mb-6 text-center uppercase">
            {t("Title")}
          </StrokedText>
        </Heading>

        <Typography
          variant="super-heading"
          className="lh-1_3 max-w-[1209px] mx-auto w-full max-lg:text-center"
        >
          <RevealTextEffect text={t("Description")} />
        </Typography>
      </Container>
    </section>
  );
}

export default About;
