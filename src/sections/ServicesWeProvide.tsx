"use client";

import Container from "components/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import StrokedText from "components/StrokedText";
import { useTheme } from "next-themes";
import Heading from "components/Heading";
// import { data } from "messages/fr.json";
// import { data as en } from "messages/en.json";

const data = [
  {
    paragraph: {
      en: "UI/UX Design",
      es: "Diseño UI/UX",
    },
    logoSrc: {
      light: "/images/services/light/8.png",
      dark: "/images/services/dark/5.svg",
    },
    heading: {
      en: "Design proposals for web or applications",
      es: "Propuestas de diseño para web o aplicaciones",
    },
  },
  {
    paragraph: {
      en: "Web Development",
      es: "Desarrollo Web",
    },
    logoSrc: {
      light: "/images/services/light/7.png",
      dark: "/images/services/dark/4.svg",
    },
    heading: {
      en: "E-Commerce, business, portfolios, landing, events",
      es: "E-Commerce, negocios, portafolios, páginas de aterrizaje, eventos",
    },
  },
  {
    paragraph: {
      en: "Applications",
      es: "Aplicaciones",
    },
    logoSrc: {
      light: "/images/services/light/3.png",
      dark: "/images/services/dark/6.png",
    },
    heading: {
      en: "Apps for iOS and Android in Kotlin, React and Swift",
      es: "Aplicaciones para iOS y Android en Kotlin, React y Swift",
    },
  },
  {
    paragraph: {
      en: "Support",
      es: "Soporte",
    },
    logoSrc: {
      light: "/images/services/light/6.png",
      dark: "/images/services/dark/3.png",
    },
    heading: {
      en: "Personalized 24/7 for companies and businesses",
      es: "Soporte personalizado 24/7 para empresas y negocios",
    },
  },
  {
    paragraph: {
      en: "Datacenter",
      es: "Centro de Datos",
    },
    logoSrc: {
      light: "/images/services/light/4.svg",
      dark: "/images/services/dark/8.svg",
    },
    heading: {
      en: "Own servers provided by ParadiseHost®",
      es: "Servidores propios proporcionados por ParadiseHost®",
    },
  },
  {
    paragraph: {
      en: "SSL",
      es: "SSL",
    },
    logoSrc: {
      light: "/images/services/light/5.png",
      dark: "/images/services/dark/2.png",
    },
    heading: {
      en: "SSL certificates for the security of your website.",
      es: "Certificados SSL para la seguridad de tu sitio web.",
    },
  },
  {
    paragraph: {
      en: "SEO",
      es: "SEO",
    },
    logoSrc: {
      light: "/images/services/light/9.png",
      dark: "/images/services/dark/7.png",
    },
    heading: {
      en: "Your website in the first positions of Google",
      es: "Tu sitio web en las primeras posiciones de Google",
    },
  },
  {
    paragraph: {
      en: "Advertising",
      es: "Publicidad",
    },
    logoSrc: {
      light: "/images/services/light/1.svg",
      dark: "/images/services/dark/1.svg",
    },
    heading: {
      en: "Meta Business (Instagram/Facebook) Google Ads",
      es: "Meta Business (Instagram/Facebook) Google Ads",
    },
  },
];

const Card = ({
  imgSrc,
  title,
  desc,
}: {
  imgSrc: string;
  title: string;
  desc: any;
}) => {
  return (
    <div
      id="card"
      className="border border-primary rounded-xl p-7 z-10 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 bg-white dark:bg-body lg:w-[20rem]"
    >
      <header className="flex max-lg:flex-col-reverse items-center lg:space-x-4 justify-between">
        <p className="text-lg sm:text-xl font-medium max-lg:mt-4">{title}</p>
        <Image
          src={imgSrc}
          alt="icon"
          className="size-16 lg:size-[90px] flex-shrink-0"
          width={90}
          height={90}
        />
      </header>

      <main className="mt-4 lg:mt-32 max-lg:text-center">
        <p className="font-medium text-base lg:text-xl">{desc}</p>
      </main>
    </div>
  );
};

function LocalServicesWeProvide() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to("#card", {
          rotate: (index) => {
            if (index % 2 === 0) {
              return 14;
            }
            return -14;
          },
          x: (index, elem: HTMLElement) => {
            if (index % 2 === 0) {
              return (elem.clientWidth / 2) * (index === 0 ? 1.2 : index + 1.2);
              // return Number(1 * 40 * (index + 1)) + "%";
            }

            // return Number(-1 * 40 * (index + 1.4)) + "%";
            return (
              -1 * ((elem.clientWidth / 2) * (index === 0.8 ? 1.8 : index))
            );
          },
          scrollTrigger: {
            trigger: "#main",
            scrub: 0.2,
            start: "top 60%",
            end: "50% center",
          },
        });
      });
    },
    { scope: containerRef }
  );

  const locale = useParams().locale;
  const t = useTranslations("Home.Services");
  const { resolvedTheme } = useTheme();
  return (
    <section ref={containerRef}>
      <Container>
        {/* <h1 className="text-center uppercase font-bold text-3xl sm:text-[64px] lh-1_2 mb-10 lg:mb-20 max-w-[597px] mx-auto">
          <StrokedText className="font-bold mb-10 sm:mb-20 text-center uppercase">
            {t("Title")}
          </StrokedText>
        </h1> */}
        <h3 className="text-3xl sm:text-[64px] text-center font-bold lh-1_2 uppercase max-w-xl mx-auto">
          <span className="text-primary"> {t("Title").split(" ")[0]}</span>{" "}
          {t("Title").split(" ").slice(1).join(" ")}
        </h3>
        <main
          id="main"
          className="max-lg:grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-5 lg:flex lg:[&>*]:min-w-[20rem] lg:justify-center lg:h-[25rem] relative"
        >
          {data.map((item, i) => (
            <Card
              key={i}
              title={item.paragraph[locale as keyof typeof item.paragraph]}
              imgSrc={
                resolvedTheme
                  ? item?.logoSrc[resolvedTheme as keyof typeof item.logoSrc]
                  : item?.logoSrc?.light
              }
              desc={item.heading[locale as keyof typeof item.heading]}
            />
          ))}
        </main>
      </Container>
    </section>
  );
}

const ServicesWeProvide = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) return <LocalServicesWeProvide />;
};

// export default ServicesWeProvide;

export default dynamic(() => Promise.resolve(ServicesWeProvide), {
  ssr: false,
});
