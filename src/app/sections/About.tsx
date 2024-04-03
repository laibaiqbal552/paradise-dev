"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import RevealTextEffect from "@/components/RevealTextEffect";
import StrokedText from "@/components/StrokedText";
import Typography from "@/components/Typography";

function About() {
  return (
    <section>
      <Container>
        <Heading>
          <StrokedText className="font-bold mb-6 text-center">
            ABOUT US
          </StrokedText>
        </Heading>

        <Typography
          variant="super-heading"
          className="lh-1_3 max-w-[1209px] mx-auto w-full max-lg:text-center"
        >
          <RevealTextEffect text="We are a division of the company Paradise Host SA specialized in programming, development and computer security. We offer services for businesses, companies and individuals." />
        </Typography>
      </Container>
    </section>
  );
}

export default About;
