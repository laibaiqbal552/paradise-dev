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
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

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

  const locale = useParams().locale;

  const t = useTranslations("Home.Process");

  return (
    <section>
      <Container className="max-w-[1209px]">
        <Typography
          variant="super-heading"
          className="max-lg:text-center lh-1_3 mb-20 lg:mb-40 max-lg:!leading-[2]"
        >
          <RevealTextEffect text={t("Description")} />
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

        <main
          ref={container}
          className="max-w-[66rem] mx-auto z-20 max-lg:grid max-lg:gap-6"
        >
          <div
            id="cards"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
          >
            {processSteps.slice(0, 3).map((step) => (
              <Card
                key={step.num}
                num={step.num}
                text={step.text[locale as keyof typeof step.text]}
              />
            ))}
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
            {processSteps?.slice(3, 6)?.map((step) => (
              <Card
                key={step.num}
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

export default dynamic(() => Promise.resolve(Process), {
  ssr: false,
});

const processSteps = [
  {
    num: "01",
    text: {
      en: "The presentation will be made to the client detailing each point about how the project will be worked on, including the estimated time and budget for the work.",
      sp: "La présentation sera faite au client en détaillant chaque point sur la manière dont le projet sera travaillé, y compris le temps estimé et le budget pour le travail.",
    },
  },
  {
    num: "02",
    text: {
      en: "If the client accepts, initial commissions will be charged, adding up to 60% of the main project in advance.",
      sp: "Si le client accepte, des commissions initiales seront facturées, s'ajoutant à 60% du projet principal à l'avance.",
    },
  },
  {
    num: "03",
    text: {
      en: "The contract will be signed between both parties to begin the development of the project.",
      sp: "Le contrat sera signé entre les deux parties pour commencer le développement du projet.",
    },
  },
  {
    num: "04",
    text: {
      en: "There will be constant communication with the client as development progresses. There will be rounds of adjustments until the client is satisfied.",
      sp: "Il y aura une communication constante avec le client à mesure que le développement progresse. Il y aura des séries d'ajustements jusqu'à ce que le client soit satisfait.",
    },
  },
  {
    num: "05",
    text: {
      en: "When the project is close to completion, the client must pay the remaining part of the settlement for the delivery of the work.",
      sp: "Lorsque le projet est proche de l'achèvement, le client doit payer la partie restante du règlement pour la livraison du travail.",
    },
  },
  {
    num: "06",
    text: {
      en: "Once the work is delivered with the client's approval, there will be 30 days of support and subsidized hosting. There will be a quick response for any future errors.",
      sp: "Une fois le travail livré avec l'approbation du client, il y aura 30 jours de support et d'hébergement subventionné. Il y aura une réponse rapide pour toute erreur future.",
    },
  },
];
