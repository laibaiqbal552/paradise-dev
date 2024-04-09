"use client";

import { Button } from "components/Button";
import Container from "components/Container";
import { Link as ScrollLink } from "react-scroll";

function ProvideQuality() {
  return (
    <section className="py-12 lg:py-20 bg-[url('/images/gradient-bg-light.png')] dark:bg-[url('/images/gradient-bg.png')] bg-cover bg-[#f9f7fb] dark:bg-transparent bg-[center_center]">
      <Container>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium mb-7">
          We provide quality
        </h1>

        <p className="text-center text-base md:text-lg font-medium mb-6">
          Leave it in the hands of our team, we have the solution tailored{" "}
          <br /> to you. Consult now without any obligation.
        </p>

        <Button
          className="uppercase mx-auto block cursor-pointer w-fit"
          variant="primary"
          padding="16_32"
          asChild
        >
          <ScrollLink to="contact">Get In Touch</ScrollLink>
        </Button>
      </Container>
    </section>
  );
}

export default ProvideQuality;
