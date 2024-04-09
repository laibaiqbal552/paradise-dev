"use client";

import Container from "components/Container";
import GearsImage from "components/GearsImage";
import Heading from "components/Heading";
import RevealTextEffect from "components/RevealTextEffect";
import StrokedText from "components/StrokedText";
import Typography from "components/Typography";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ text, num }: { text: string; num: number | string }) => {
  return (
    <div className="border border-primary rounded-xl p-6 bg-white dark:bg-body relative z-40 transition-all duration-700 hover:bg-primary/20 dark:hover:bg-primary/20">
      <StrokedText
        color="#bd9fe0"
        className="text-[52px] md:text-[104px] font-bold lh-1 mb-3"
      >
        {num}
      </StrokedText>
      <p className="text-base md:text-xl lh-1_6">{text}</p>
    </div>
  );
};

function Process() {
  const container = useRef(null);

  useGSAP(
    () => {
      // const sections = gsap.utils.toArray("#cards") as HTMLElement[];

      // sections.forEach((section: HTMLElement) => {
      //   gsap.set(`#${section.id} > *`, { opacity: 0, y: 20 });

      //   gsap.to(`#${section.id} > *`, {
      //     y: 0,
      //     opacity: 1,
      //     stagger: 0.2,
      //     scrollTrigger: {
      //       trigger: section,
      //     },
      //   });
      // });

      gsap.set(`#cards > *`, { opacity: 0, y: 20 });

      gsap.to(`#cards > *`, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#cards",
        },
      });
    },
    { scope: container }
  );

  return (
    <section>
      <Container className="max-w-[1209px]">
        <Typography
          variant="super-heading"
          className="max-lg:text-center lh-1_3 mb-20 lg:mb-40 max-lg:!leading-[2]"
        >
          <RevealTextEffect
            text="This is our procedure once the work is accepted from us and the budget
          from the client. We will include you in each stage of the process for
          the best result!"
          />
        </Typography>
      </Container>

      <Container className="relative">
        <Image
          src="/images/badge.png"
          alt=""
          width={100}
          height={100}
          className="absolute top-[60%] right-0 -translate-y-1/2 max-lg:hidden"
        />

        <header className="mb-12 sm:mb-20">
          <Heading>
            <StrokedText className="uppercase text-center font-bold lh-1_4">
              Process
            </StrokedText>
          </Heading>

          <h4 className="text-center text-5xl text-primary font-bold mb-7">
            Our work process
          </h4>
          <p className="text-center text-lg max-w-[50ch] mx-auto">
            This is our procedure once the work is accepted from us and the
            budget from the client. We will include you in each stage of the
            process for the best result!
          </p>
        </header>

        <main
          ref={container}
          className="max-w-[66rem] mx-auto z-20 max-lg:grid max-lg:gap-6"
        >
          <div
            id="cards"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >
            <Card
              num={"01"}
              text="The presentation will be made to the client detailing each point about how the project will be worked on, including the estimated time and budget for the work."
            />
            <Card
              num={"02"}
              text="If the client accepts, initial commissions will be charged, adding up to 60% of the main project in advance."
            />
            <Card
              num={"03"}
              text="The contract will be signed between both parties to begin the development of the project."
            />
          </div>

          <div className="relative max-lg:hidden">
            <img
              src="/images/connector-lines.png"
              className="mx-auto w-[79%] relative -top-3 z-10 relative -mb-8"
              alt=""
            />

            <GearsImage />

            <img
              src="/images/connector-lines.png"
              className="mx-auto w-[79%] rotate-180 relative top-3 z-10 relative"
              alt=""
            />
          </div>

          <div
            id="cards"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >
            <Card
              num={"04"}
              text="There will be constant communication with the client as development progresses. There will be rounds of adjustments until the client is satisfied."
            />
            <Card
              num={"05"}
              text="When the project is close to completion, the client must pay the remaining part of the settlement for the delivery of the work."
            />
            <Card
              num={"06"}
              text="Once the work is delivered with the client's approval, there will be 30 days of support and subsidized hosting. There will be a quick response for any future errors."
            />
          </div>
        </main>
      </Container>
    </section>
  );
}

export default dynamic(() => Promise.resolve(Process), {
  ssr: false,
});
