"use client";

import { Button } from "components/Button";
import Container from "components/Container";
import Heading from "components/Heading";
import StrokedText from "components/StrokedText";
import { cn } from "lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";

const FeatureCard = ({
  imgSrc,
  title,
  desc,
  className,
}: {
  imgSrc: string;
  title: string;
  desc: any;
  className?: string;
}) => {
  return (
    <div
      id="feature-card"
      className={cn(
        "lg:w-[19.688rem] flex-shrink-0 border max-lg:!bg-primary/5 bg-white border-black/40 dark:border-primary dark:bg-body p-[30px] rounded-xl max-lg:text-center lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-10 max-lg:transform-none lg:left-1/2 lg:-translate-x-1/2",
        className
      )}
    >
      <Image
        src={imgSrc}
        alt="feature-icon"
        width={75}
        height={75}
        className="mb-5 max-lg:mx-auto max-sm:size-12"
      />
      <p className="text-xl sm:text-5xl font-medium max-sm:mb-3 max-lg:mb-6">
        {title}
      </p>

      <p className="lg:mt-[6.5rem] text-base sm:text-xl lh-1_2 font-medium">
        {desc}
      </p>
    </div>
  );
};

const Card = ({
  reverse,
  title,
  desc,
  children,
}: {
  reverse?: boolean;
  title: string;
  desc: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid gap-5 auto-cols-[1fr]",
        reverse ? "lg:grid-cols-[1fr_.7fr]" : "lg:grid-cols-[.7fr_1fr]"
      )}
    >
      <div className={cn("", reverse ? "lg:order-2 flex-shrink-0" : "")}>
        <Image
          src="/images/work-with-us.png"
          className="rounded-3xl max-lg:w-full"
          alt="work-with-us"
          width={555}
          height={496}
        />
      </div>

      <div className="border border-primary flex flex-col justify-center py-6 px-8 lg:py-4 lg:px-12 rounded-2xl items-start">
        <h2 className="text-xl sm:text-[32px] font-semibold mb-6 lg:mb-3 text-primary dark:text-white">
          {title}
        </h2>

        <p className="opacity-70 mb-7">{desc}</p>

        {children}
      </div>
    </div>
  );
};

function Features() {
  const { resolvedTheme } = useTheme();
  const featureCardContainer = useRef(null);

  const locale = useParams().locale;

  const t = useTranslations("Home.Features");

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to("#feature-card", {
          rotateZ: (index) => {
            if (index % 2 === 0) {
              return -14;
            }
            return 14;
          },
          x: (index) => {
            if (index === 0) return "-160%";
            if (index === 1) return "67%";
            if (index === 2) return "-50%";
            return "176%";
          },

          scrollTrigger: {
            trigger: featureCardContainer.current,
            scrub: 1,
            end: "center 50%",
            start: "center 80%",
          },
        });
      });
    },
    { scope: featureCardContainer }
  );

  return (
    <section>
      <Container asChild className="mb-10 lg:mb-28">
        <header>
          <Heading>
            <StrokedText className="font-bold mb-10 sm:mb-20 text-center uppercase font-montserrat">
              {t("Title")}
            </StrokedText>
          </Heading>

          <div
            ref={featureCardContainer}
            className="mx-auto grid max-lg:gap-6 lg:flex mb-16 lg:h-[26rem] relative"
          >
            {featureData?.map((item, index) => (
              <FeatureCard
                key={index}
                // imgSrc={item.imgSrc[resolvedTheme as keyof typeof item.imgSrc]}
                imgSrc={
                  resolvedTheme
                    ? item?.imgSrc[resolvedTheme as keyof typeof item.imgSrc]
                    : item?.imgSrc?.light
                }
                title={item.title[locale as keyof typeof item.title]}
                desc={item.desc[locale as keyof typeof item.desc]}
              />
            ))}
          </div>

          <h3 className="text-3xl sm:text-[64px] text-center font-bold lh-1_2 uppercase max-w-xl mx-auto">
            <span className="text-primary">
              {" "}
              {t("SecondaryTitle").split(" ")[0]}
            </span>{" "}
            {t("SecondaryTitle").split(" ").slice(1).join(" ")}
          </h3>
        </header>
      </Container>

      <Container asChild className="max-w-[1396px]">
        <main className="space-y-14 lg:space-y-10">
          {cardData?.map((item, index) => (
            <Card
              reverse={index % 2 === 0}
              key={index}
              title={item.title[locale as keyof typeof item.title]}
              desc={item.desc[locale as keyof typeof item.desc]}
            >
              <Button asChild className="cursor-pointer">
                <ScrollLink to={item.link}>
                  {item.button[locale as keyof typeof item.button]}
                </ScrollLink>
              </Button>
            </Card>
          ))}
        </main>
      </Container>
    </section>
  );
}

export default Features;

const featureData = [
  {
    imgSrc: {
      light: "/images/feature-icons/light/star1.svg",
      dark: "/images/feature-icons/dark/star1.svg",
    },
    title: {
      en: "Trajectory",
      es: "Trayectoria",
    },
    desc: {
      en: "Our 5 years of experience in the field support us.",
      es: "Nuestros 5 años de experiencia en el ramo nos avalan.",
    },
  },
  {
    imgSrc: {
      light: "/images/feature-icons/light/location.svg",
      dark: "/images/feature-icons/dark/location.svg",
    },
    title: {
      en: "Attention",
      es: "Atención",
    },
    desc: {
      en: "24/7 support and office with customer service unlimited.",
      es: "Soporte y oficina 24 horas al día, 7 días a la semana con atención al cliente ilimitada.",
    },
  },
  {
    imgSrc: {
      light: "/images/feature-icons/light/tick.png",
      dark: "/images/feature-icons/dark/tick.png",
    },
    title: {
      en: "Quality",
      es: "Calidad",
    },
    desc: {
      en: "We take care of polishing every last detail of your project.",
      es: "Nos encargamos de pulir hasta el último detalle de tu proyecto.",
    },
  },
  {
    imgSrc: {
      light: "/images/feature-icons/light/price.svg",
      dark: "/images/feature-icons/dark/price.svg",
    },
    title: {
      en: "Price",
      es: "Precio",
    },
    desc: {
      en: "We guarantee the best quality at the best price for you.",
      es: "Te garantizamos la mejor calidad al mejor precio.",
    },
  },
];

const cardData = [
  {
    title: {
      en: "Work with us",
      es: "Trabaja con nosotros",
    },
    desc: {
      en: "If you are a student or if you have advanced programming knowledge (Jr, Ssr, Sr) you can contact us to send your CV (Curriculum Vitae). It will be stored in our database for future searches for job profiles, and you will be recommended in the world ITEM. You can work with us regardless of your nationality, gender or orientation. We have an excellent work environment and we always add profiles to our projects.",
      es: "Si eres estudiante o si tienes conocimientos avanzados de programación (Jr, Ssr, Sr) puedes contactarnos para enviar tu CV (Curriculum Vitae). Quedará almacenado en nuestra base de datos para futuras búsquedas de perfiles laborales, y serás recomendado en el mundo ITEM. Puedes trabajar con nosotros independientemente de tu nacionalidad, género u orientación. Tenemos un excelente ambiente de trabajo y siempre sumamos perfiles a nuestros proyectos.",
    },
    button: {
      en: "Send Cv",
      es: "Enviar CV",
    },
    link: "contact",
  },
  {
    title: {
      en: "Each project is worked in a different way",
      es: "Cada proyecto se trabaja de una manera diferente.",
    },
    desc: {
      en: "We take the time to analyze each project meticulously to provide the best proposal according to the client's needs. No project is worked in the same way. We are in constant communication to do our work in the most efficient way possible.",
      es: "Nos tomamos el tiempo para analizar meticulosamente cada proyecto para brindar la mejor propuesta de acuerdo a las necesidades del cliente. Ningún proyecto se trabaja de la misma manera. Estamos en constante comunicación para realizar nuestro trabajo de la manera más eficiente posible.",
    },
    button: {
      en: "Start Now",
      es: "Empezar ahora",
    },
    link: "contact",
  },
  {
    title: {
      en: "Report a veneer ability",
      es: "Informar una capacidad de chapa",
    },
    desc: {
      en: "One of our main activities is computer security. If you found any vulnerability in any system, website or service provider, you can report it to us. We are in constant contact with companies reporting these incidents, offering our services. You may be compensated accordingly for reporting the problem or even joining us to solve it.",
      es: "Una de nuestras principales actividades es la seguridad informática. Si encontró alguna vulnerabilidad en algún sistema, sitio web o proveedor de servicios, puede informarnos. Estamos en constante contacto con empresas reportando estas incidencias, ofreciendo nuestros servicios. Es posible que reciba una compensación correspondiente por informar el problema o incluso unirse a nosotros para resolverlo.",
    },
    button: {
      en: "Report Problem",
      es: "Reportar problema",
    },
    link: "contact",
  },
  {
    title: {
      en: "Support 14/7",
      es: "Soporte 14/7",
    },
    desc: {
      en: "Our dedicated support team is available 24/7 to address your needs promptly and efficiently, ensuring uninterrupted assistance whenever you require it. You can rely on us to provide round-the-clock support, delivering solutions whenever you reach out, day or night.",
      es: "Nuestro equipo de soporte dedicado está disponible las 24 horas del día, los 7 días de la semana para atender sus necesidades de manera rápida y eficiente, garantizando asistencia ininterrumpida cuando la necesite. Puede confiar en que le brindaremos soporte las 24 horas del día y le brindaremos soluciones cada vez que se comunique con usted, de día o de noche.",
    },
    button: {
      en: "Request support",
      es: "Pedir soporte",
    },
    link: "contact",
  },
];

// Since the variable 'cardData' is already declared, we will modify the existing structure to include translations for the 'button' attribute directly.
