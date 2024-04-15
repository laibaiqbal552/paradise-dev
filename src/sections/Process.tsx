"use client";

import Container from "components/Container";
import GearsImage from "components/GearsImage";
import Heading from "components/Heading";
import RevealTextEffect from "components/RevealTextEffect";
import StrokedText from "components/StrokedText";
import Typography from "components/Typography";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/legacy/image";

const processSteps = [
  {
    num: "01",
    text: {
      en: "The presentation will be made to the client detailing each point about how the project will be worked on, including the estimated time and budget for the work.",
      es: "Se hará la presentación hacia el cliente detallando cada punto sobre como se va a trabajar sobre el proyecto, incluyendo tiempo y presupuesto estimado del trabajo",
    },
  },
  {
    num: "02",
    text: {
      en: "If the client accepts, initial commissions will be charged, adding up to 60% of the main project in advance.",
      es: "Si el cliente acepta, se cobrarán las comisiones iniciales sumando el 60% anticipado del proyecto principal.",
    },
  },
  {
    num: "03",
    text: {
      en: "The contract will be signed between both parties to begin the development of the project.",
      es: "Se firmará el contrato entre ambas partes para dar inicio al desarrollo del proyecto.",
    },
  },
  {
    num: "04",
    text: {
      en: "There will be constant communication with the client as development progresses. There will be rounds of adjustments until the client is satisfied.",
      es: "There will be constant communication with the client as development progresses. There will be rounds of adjustments until the client is satisfied.",
    },
  },
  {
    num: "05",
    text: {
      en: "When the project is close to completion, the client must pay the remaining part of the settlement for the delivery of the work.",
      es: "Cuando el proyecto esté pronto a terminarse, el cliente deberá abonar la parte faltante de la liquidación para la entrega del trabajo.",
    },
  },
  {
    num: "06",
    text: {
      en: "Once the work is delivered with the client's approval, there will be 30 days of support and subsidized hosting. There will be a quick response for any future errors.",
      es: "Una vez entregado el trabajo con la aprobación del cliente, habrá 30 días de soporte y alojamiento bonificado. Habrá rápida respuesta para cualquier error futuro.",
    },
  },
];

const Card = ({ text, num }: { text: string; num: number | string }) => {
  return (
    <div
      id="single-card"
      className=" opacity-0 translate-y-[20px] border border-primary rounded-xl p-6 bg-white dark:bg-body relative z-40 transition-all duration-700 hover:bg-primary/20 dark:hover:bg-primary/20"
    >
      <StrokedText
        color="#bd9fe0"
        className="text-[52px] md:text-[104px] font-bold lh-1 mb-3  font-montserrat"
      >
        {num}
      </StrokedText>
      <p className="text-base md:text-xl lh-1_6">{text}</p>
    </div>
  );
};

function LocalProcess() {
  const container = useRef(null);
  const locale = useParams().locale;
  const t = useTranslations("Home.Process");

  useGSAP(
    () => {
      // gsap.set("#single-card", { opacity: 0, y: 20 });

      gsap.to("#single-card", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#cards",
        },
      });
    },
    { scope: container, dependencies: [t, locale] }
  );

  return (
    <section ref={container}>
      <Container className="max-w-[1209px]">
        <Typography
          variant="super-heading"
          className="max-lg:text-center lh-1_3 mb-20 lg:mb-40 max-lg:!leading-[2]"
        >
          <RevealTextEffect text={t("Description")} />
        </Typography>
      </Container>

      <Container className="relative">
        <div className="absolute top-[60%] right-0 -translate-y-1/2 max-lg:hidden ">
          <Image
            src="/images/badge.png"
            alt="Process Badge"
            className="w-full h-full object-cover"
            width={177}
            height={177}
            loading="lazy"
          />
        </div>

        <header className="mb-12 sm:mb-20">
          <Heading>
            <StrokedText className="uppercase text-center font-bold lh-1_4">
              {t("Title")}
            </StrokedText>
          </Heading>

          <h4 className="text-center text-5xl text-primary font-bold mb-7">
            {/* Our work process */}
            {t("SubTitle")}
          </h4>
          <p className="text-center text-lg max-w-[50ch] mx-auto">
            {t("Description")}
          </p>
        </header>

        <main className="max-w-[66rem] mx-auto z-20 max-lg:grid max-lg:gap-6">
          <div
            id="cards"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >
            {processSteps.slice(0, 3).map((step, i) => (
              <Card
                key={i}
                num={step.num}
                text={step.text[locale as keyof typeof step.text]}
              />
            ))}
          </div>

          <div className="relative max-lg:hidden">
            <div className="mx-auto w-[79%] -mb-8 -top-3 z-10 relative flex">
              <Image
                src="/images/connector-lines.png"
                className="w-full h-full object-cover"
                width={834 * 3}
                height={124 * 3}
                alt="Connector Lines"
                loading="lazy"
              />
            </div>

            <GearsImage />
            <div className="mx-auto w-[79%] rotate-180 top-3 z-10 relative flex">
              <Image
                className="w-full h-full object-cover"
                width={834 * 3}
                height={124 * 3}
                src="/images/connector-lines.png"
                alt="Connector Lines"
              />
            </div>
          </div>

          <div
            id="cards"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >
            {processSteps?.slice(3, 6)?.map((step, i) => (
              <Card
                key={i}
                num={step.num}
                text={step.text[locale as keyof typeof step.text]}
              />
            ))}
          </div>
        </main>
      </Container>
    </section>
  );
}

const Process = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) return <LocalProcess />;
};

export default dynamic(() => Promise.resolve(Process), {
  ssr: false,
});
