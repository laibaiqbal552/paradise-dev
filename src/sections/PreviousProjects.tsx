"use client";

import Container from "components/Container";
import { cn } from "lib/utils";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

const tabs = ["Desarollo Web", "UI/UX Design", "Applications"] as const;

type Tab = (typeof tabs)[number];

interface TabButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive?: boolean;
}

const TabButton = ({
  children,
  className,
  isActive,
  ...props
}: TabButtonProps) => {
  return (
    <button
      {...props}
      style={{ writingMode: "vertical-rl" }}
      className={cn(
        "flex items-center justify-center w-full text-base sm:text-2xl font-medium p-4 transition-all duration-300",
        className,
        isActive ? "bg-primary text-white" : null
      )}
    >
      <span className="rotate-180 block">{children}</span>
    </button>
  );
};

const Card = ({
  title,
  subtitle,
  imgSrc,
  link,
}: {
  title: string;
  subtitle: string;
  imgSrc: string;
  link: string;
}) => {
  return (
    <div>
      <h2 className="text-base sm:text-[2rem] mb-3 sm:mb-5 font-bold">
        {title}
      </h2>
      <p className="text-sm sm:text-xl sm:h-[60px] max-sm:mb-6">{subtitle}</p>

      <div className="relative">
        <img src={imgSrc} className="w-full" alt="img" />

        <a
          href={link}
          target="_blank"
          className="absolute top-0 left-0 w-full h-full z-40 transition-all duration-500 bg-black/25 hover:bg-black/75 cursor-pointer flex items-center justify-center group"
        >
          <span className="text-[2rem] font-medium transition-all duration-500 opacity-0 group-hover:opacity-100">
            Open Site
          </span>
        </a>
      </div>
    </div>
  );
};

function PreviousProjects() {
  const [tab, setTab] = useState<Tab>("Desarollo Web");

  const t = useTranslations("Projects");

  const locale = useParams().locale;

  return (
    <div>
      <Container className="max-w-[1920px]">
        <h1 className="text-center font-bold mb-12 sm:mb-16 text-3xl sm:text-4xl lg:text-[3.5rem]">
          {t("Title")}
        </h1>

        <div className="grid grid-cols-[50px_1fr] sm:grid-cols-[72px_1fr] gap-6 sm:gap-10 items-start">
          <aside className="border rounded-r-2xl divide-y-2 overflow-hidden">
            {tabs.map((item) => (
              <TabButton
                isActive={item === tab}
                key={item}
                onClick={() => setTab(item)}
              >
                {item}
              </TabButton>
            ))}
          </aside>

          <main
            key={tab}
            id="fade-in-animation"
            className="space-y-16 lg:space-y-6 max-lg:border max-lg:px-2 max-lg:py-4 max-lg:border-black/5 max-lg:dark:border-white/5"
          >
            {projects[tab]
              .map((_: any, i: any) =>
                i % 3 === 0 ? projects[tab].slice(i, i + 3) : null
              )
              .filter((item: any) => item !== null && item)
              .map((items: any, _i: any) => (
                <div
                  key={_i}
                  className="grid lg:grid-cols-3 gap-16 lg:gap-5 lg:border lg:rounded-lg lg:p-4 dark:border-white/30"
                >
                  {items.map((item: any, a: any) => (
                    <Card
                      key={a}
                      title={item.name[locale as keyof typeof item.name]}
                      subtitle={
                        item.description[
                          locale as keyof typeof item.description
                        ]
                      }
                      imgSrc={item.image}
                      link={item.url}
                    />
                  ))}
                </div>
              ))}
          </main>
        </div>
      </Container>
    </div>
  );
}

export default PreviousProjects;

const projects: Record<Tab, any> = {
  Applications: [
    {
      name: {
        en: "Paradise Dev",
        fr: "Paradise Dev",
      },
      description: {
        en: "Here you are now!",
        fr: "Vous êtes ici maintenant !",
      },
      url: "https://paradisedev.webflow.io/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65fe5d48ce9ca62b68d27274_ParadiseDev%20_%20We%20develop%20your%20website%20extent%20(3).png",
    },
  ],

  "UI/UX Design": [
    {
      name: {
        en: "Paradise Dev",
        fr: "Paradise Dev",
      },
      description: {
        en: "Here you are now!",
        fr: "Vous êtes ici maintenant !",
      },
      url: "https://paradisedev.webflow.io/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65fe5d48ce9ca62b68d27274_ParadiseDev%20_%20We%20develop%20your%20website%20extent%20(3).png",
    },
    {
      name: {
        en: "Paradise Host",
        fr: "Paradise Host",
      },
      description: {
        en: "Hosting Services",
        fr: "Services d'hébergement",
      },
      url: "https://paradisehost.net/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd796eafb490c300af683f_paradisehost.png",
    },
    {
      name: {
        en: "Paradise Gaming",
        fr: "Paradise Gaming",
      },
      description: {
        en: "Online gaming community and influencer management",
        fr: "Communauté de jeux en ligne et gestion d'influenceurs",
      },
      url: "https://paradisegaming.net/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/6602a9a7f224f5ff2d3284d5_2c58e6a2-e1ed-4f26-8eab-9b39bd846cd9.png",
    },
    {
      name: {
        en: "Ika Developments",
        fr: "Ika Developments",
      },
      description: {
        en: "Architects studio",
        fr: "Studio d'architectes",
      },
      url: "https://ika.com.ar/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd7970e958a25792146d34_ika.png",
    },
    {
      name: {
        en: "Austral Refrigeration",
        fr: "Austral Réfrigération",
      },
      description: {
        en: "Cooling solutions",
        fr: "Solutions de refroidissement",
      },
      url: "https://australrefrigeracion.com/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65f96f059406c19c78bcb7b2_austral.png",
    },
    {
      name: {
        en: "Lauritsen",
        fr: "Lauritsen",
      },
      description: {
        en: "Study #1 in intellectual property, trademarks and patents",
        fr: "Étude n°1 en propriété intellectuelle, marques et brevets",
      },
      url: "https://lauritsen.com.ar/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd796edd10750a16539d65_lauritsen.png",
    },
    {
      name: {
        en: "Registra tu Marca",
        fr: "Enregistre ta Marque",
      },
      description: {
        en: "Brands and patents",
        fr: "Marques et brevets",
      },
      url: "https://registratumarca.com.ar/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd79707d0845821f9dbf82_registratumarca.png",
    },
    {
      name: {
        en: "trainingwhead",
        fr: "trainingwhead",
      },
      description: {
        en: "Train with science by Tomas Mazza",
        fr: "Entraînez-vous avec la science par Tomas Mazza",
      },
      url: "https://trainingwhead.paradisedev.net/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65f96f05a873a925a3748716_trainingwhead.png",
    },
    {
      name: {
        en: "Paradise Dev V1",
        fr: "Paradise Dev V1",
      },
      description: {
        en: "This is old version",
        fr: "Ceci est l'ancienne version",
      },
      url: "http://old.paradisedev.net",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd79707c0f3278655efe8e_paradisedev.png",
    },
  ],

  "Desarollo Web": [
    {
      name: {
        en: "Paradise Dev V2",
        fr: "Paradise Dev V2",
      },
      description: {
        en: "Here you are now!",
        fr: "Vous êtes ici maintenant !",
      },
      url: "https://paradisedev.webflow.io/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65fe5d48ce9ca62b68d27274_ParadiseDev%20_%20We%20develop%20your%20website%20extent%20(3).png",
    },
    {
      name: {
        en: "Paradise Host",
        fr: "Paradise Host",
      },
      description: {
        en: "Hosting Services",
        fr: "Services d'hébergement",
      },
      url: "https://paradisehost.net/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd796eafb490c300af683f_paradisehost.png",
    },
    {
      name: {
        en: "Paradise Gaming",
        fr: "Paradise Gaming",
      },
      description: {
        en: "Online gaming community and influencer management",
        fr: "Communauté de jeux en ligne et gestion d'influenceurs",
      },
      url: "https://paradisegaming.net/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/6602a9a7f224f5ff2d3284d5_2c58e6a2-e1ed-4f26-8eab-9b39bd846cd9.png",
    },
    {
      name: {
        en: "Ika Developments",
        fr: "Ika Developments",
      },
      description: {
        en: "Architects studio",
        fr: "Studio d'architectes",
      },
      url: "https://ika.com.ar/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd7970e958a25792146d34_ika.png",
    },
    {
      name: {
        en: "Austral Refrigeration",
        fr: "Austral Réfrigération",
      },
      description: {
        en: "Cooling solutions",
        fr: "Solutions de refroidissement",
      },
      url: "https://australrefrigeracion.com/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65f96f059406c19c78bcb7b2_austral.png",
    },
    {
      name: {
        en: "Lauritsen",
        fr: "Lauritsen",
      },
      description: {
        en: "Study #1 in intellectual property, trademarks and patents",
        fr: "Étude n°1 en propriété intellectuelle, marques et brevets",
      },
      url: "https://lauritsen.com.ar/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd796edd10750a16539d65_lauritsen.png",
    },
    {
      name: {
        en: "Registra tu Marca",
        fr: "Enregistre ta Marque",
      },
      description: {
        en: "Brands and patents",
        fr: "Marques et brevets",
      },
      url: "https://registratumarca.com.ar/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd79707d0845821f9dbf82_registratumarca.png",
    },
    {
      name: {
        en: "trainingwhead",
        fr: "trainingwhead",
      },
      description: {
        en: "Train with science by Tomas Mazza",
        fr: "Entraînez-vous avec la science par Tomas Mazza",
      },
      url: "https://trainingwhead.paradisedev.net/",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65f96f05a873a925a3748716_trainingwhead.png",
    },
    {
      name: {
        en: "Paradise Dev V1",
        fr: "Paradise Dev V1",
      },
      description: {
        en: "This is old version",
        fr: "Ceci est l'ancienne version",
      },
      url: "http://old.paradisedev.net",
      image:
        "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65dd79707c0f3278655efe8e_paradisedev.png",
    },
  ],
};
