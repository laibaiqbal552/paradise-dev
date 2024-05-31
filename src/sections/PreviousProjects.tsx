"use client";

import Container from "components/Container";
import { cn } from "lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ResponsiveImage from "next/legacy/image";
import { useParams } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import Link from "next/link";

const tabs = [
  { en: "Web Development", es: "Desarrollo Web" },
  { en: "UI/UX Design", es: "Diseño UI/UX" },
  { en: "Applications", es: "Aplicaciones" },
] as const;

type Tab = (typeof tabs)[number]["en"] | (typeof tabs)[number]["es"];

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

interface CardProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  link: string;
  hoverText: string;
  showLink: boolean;
}

const Card = ({
  title,
  subtitle,
  imgSrc,
  link,
  hoverText,
  showLink,
}: CardProps) => {
  return (
    <div>
      <h2 className="text-base sm:text-[2rem] mb-3 sm:mb-5 font-bold">
        {title}
      </h2>
      <p className="text-sm sm:text-xl sm:h-[60px] max-sm:mb-6">{subtitle}</p>

      <div className="relative">
        <div className="flex">
          <ResponsiveImage
            src={imgSrc}
            className="w-full h-full object-cover"
            width={426 * 3}
            height={523 * 3}
            alt={title}
            loading="lazy"
          />
        </div>
        {showLink && (
          <Link
            href={link}
            target="_blank"
            aria-label="Open Site"
            className="absolute top-0 left-0 w-full h-full z-40 transition-all duration-500 bg-black/25 hover:bg-black/75 cursor-pointer flex items-center justify-center group"
          >
            <span className="text-[2rem] font-medium transition-all duration-500 opacity-0 group-hover:opacity-100">
              {hoverText}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

function PreviousProjects() {
  const t = useTranslations("Home.Projects");

  const { locale } = useParams();
  const currentLocale = locale as "en" | "es";
  const initialTab = tabs[0][currentLocale]; // Set initial tab based on locale
  const [tab, setTab] = useState<Tab>(initialTab);

  const showLink = tab !== tabs[1][currentLocale]; // Adjust logic as needed

  if (!projects[tab]) {
    console.error("No projects found for tab:", tab);
    return <div>No projects available for this category.</div>;
  }

  return (
    <div>
      <Container className="max-w-[1920px]">
        <h1 className="text-center capitalize font-bold mb-12 sm:mb-16 text-3xl sm:text-4xl lg:text-[3.5rem]">
          {t("Title")}
        </h1>

        <div className="grid grid-cols-[50px_1fr] sm:grid-cols-[72px_1fr] gap-6 sm:gap-10 items-start">
          <aside className="border rounded-r-2xl divide-y-2 overflow-hidden">
            {tabs.map((item) => (
              <TabButton
                isActive={item[currentLocale] === tab}
                key={item.en}
                onClick={() => setTab(item[currentLocale])}
              >
                {item[currentLocale]}
              </TabButton>
            ))}
          </aside>

          <main
            key={tab}
            id="fade-in-animation"
            className="space-y-16 lg:space-y-6 max-lg:border max-lg:px-2 max-lg:py-4 max-lg:border-black/5 max-lg:dark:border-white/5"
          >
            {projects[tab]
              .map((_, i) =>
                i % 3 === 0 ? projects[tab].slice(i, i + 3) : null
              )
              .filter((item) => item)
              .map((items, _i) => (
                <div
                  key={_i}
                  className="grid lg:grid-cols-3 gap-16 lg:gap-5 lg:border lg:rounded-lg lg:p-4 dark:border-white/30"
                >
                  {items?.map((item, a) => (
                    <Card
                      key={a}
                      title={item.name[currentLocale]}
                      subtitle={item.description[currentLocale]}
                      imgSrc={item.image}
                      link={item.url}
                      hoverText={item.hoverText[currentLocale]}
                      showLink={showLink}
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

const projects: Record<Tab, any[]> = {
  "Web Development": [
    {
      name: {
        en: "Paradise Dev",
        es: "Paradise Dev",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Here you are now!",
        es: "Here you are now!",
      },
      url: "https://paradisedev.webflow.io/",
      image: "/images/projects/paradise-dev.png",
    },
    {
      name: {
        en: "Paradise Host",
        es: "Paradise Host",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Hosting Services",
        es: "Hosting Services",
      },
      url: "https://paradisehost.net/",
      image: "/images/projects/hosting-services.png",
    },
    {
      name: {
        en: "Paradise Gaming",
        es: "Paradise Gaming",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Online gaming community and influencer management",
        es: "Comunidad de juegos online y gestión de influencers",
      },
      url: "https://paradisegaming.net/",
      image: "/images/projects/paradise-gaming.png",
    },
    {
      name: {
        en: "Ika Developments",
        es: "Ika Developments",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Architects studio",
        es: "Estudio de arquitectos",
      },
      url: "https://ika.com.ar/",
      image: "/images/projects/Ika-developments.png",
    },
    {
      name: {
        en: "Austral Refrigeration",
        es: "Austral Refrigeration",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Cooling solutions",
        es: "Soluciones de refrigeración",
      },
      url: "https://australrefrigeracion.com/",
      image: "/images/projects/austral-refrigeration.png",
    },
    {
      name: {
        en: "Lauritsen",
        es: "Lauritsen",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Study #1 in intellectual property, trademarks and patents",
        es: "Estudio #1 en propiedad intelectual, marcas y patentes",
      },
      url: "https://lauritsen.com.ar/",
      image: "/images/projects/lauritsen.png",
    },
    {
      name: {
        en: "Registra tu Marca",
        es: "Registra tu Marca",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Brands and patents",
        es: "Marcas y patentes",
      },
      url: "https://registratumarca.com.ar/",
      image: "/images/projects/Registra-tu-Marca.png",
    },
    {
      name: {
        en: "trainingwhead",
        es: "trainingwhead",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Train with science by Tomas Mazza",
        es: "Entrena con ciencia por Tomas Mazza",
      },
      url: "https://trainingwhead.paradisedev.net/",
      image: "/images/projects/trainingwhead.png",
    },
    {
      name: {
        en: "Paradise Dev V1",
        es: "Paradise Dev V1",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "This is old version",
        es: "Esta es la versión antigua",
      },
      url: "http://old.paradisedev.net",
      image: "/images/projects/Paradise-Dev-V1.png",
    },
  ],
  "Desarrollo Web": [
    {
      name: {
        en: "Paradise Dev",
        es: "Paradise Dev",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Here you are now!",
        es: "Here you are now!",
      },
      url: "https://paradisedev.webflow.io/",
      image: "/images/projects/paradise-dev.png",
    },
    {
      name: {
        en: "Paradise Host",
        es: "Paradise Host",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Hosting Services",
        es: "Hosting Services",
      },
      url: "https://paradisehost.net/",
      image: "/images/projects/hosting-services.png",
    },
    {
      name: {
        en: "Paradise Gaming",
        es: "Paradise Gaming",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Online gaming community and influencer management",
        es: "Comunidad de juegos online y gestión de influencers",
      },
      url: "https://paradisegaming.net/",
      image: "/images/projects/paradise-gaming.png",
    },
    {
      name: {
        en: "Ika Developments",
        es: "Ika Developments",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Architects studio",
        es: "Estudio de arquitectos",
      },
      url: "https://ika.com.ar/",
      image: "/images/projects/Ika-developments.png",
    },
    {
      name: {
        en: "Austral Refrigeration",
        es: "Austral Refrigeration",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Cooling solutions",
        es: "Soluciones de refrigeración",
      },
      url: "https://australrefrigeracion.com/",
      image: "/images/projects/austral-refrigeration.png",
    },
    {
      name: {
        en: "Lauritsen",
        es: "Lauritsen",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Study #1 in intellectual property, trademarks and patents",
        es: "Estudio #1 en propiedad intelectual, marcas y patentes",
      },
      url: "https://lauritsen.com.ar/",
      image: "/images/projects/lauritsen.png",
    },
    {
      name: {
        en: "Registra tu Marca",
        es: "Registra tu Marca",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Brands and patents",
        es: "Marcas y patentes",
      },
      url: "https://registratumarca.com.ar/",
      image: "/images/projects/Registra-tu-Marca.png",
    },
    {
      name: {
        en: "trainingwhead",
        es: "trainingwhead",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Train with science by Tomas Mazza",
        es: "Entrena con ciencia por Tomas Mazza",
      },
      url: "https://trainingwhead.paradisedev.net/",
      image: "/images/projects/trainingwhead.png",
    },
    {
      name: {
        en: "Paradise Dev V1",
        es: "Paradise Dev V1",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "This is old version",
        es: "Esta es la versión antigua",
      },
      url: "http://old.paradisedev.net",
      image: "/images/projects/Paradise-Dev-V1.png",
    },
  ],
  "UI/UX Design": [
    {
      name: {
        en: "Paradise Dev",
        es: "Paradise Dev",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Here you are now!",
        es: "Here you are now!",
      },
      url: "https://paradisedev.webflow.io/",
      image: "/images/projects/paradise-dev.png",
    },
    {
      name: {
        en: "Paradise Host",
        es: "Paradise Host",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Hosting Services",
        es: "Servicios de Hosting",
      },
      url: "https://paradisehost.net/",
      image: "/images/projects/hosting-services.png",
    },
    {
      name: {
        en: "Paradise Gaming",
        es: "Paradise Gaming",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Online gaming community and influencer management",
        es: "Comunidad de juegos online y gestión de influencers",
      },
      url: "https://paradisegaming.net/",
      image: "/images/projects/paradise-gaming.png",
    },
    {
      name: {
        en: "Paradise Store",
        es: "Paradise Store",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "E-commerce of digital assets",
        es: "E-commerce de activos digitales",
      },
      url: "https://paradisegaming.net/",
      image: "/images/projects/Paradise-Store.png",
    },
    {
      name: {
        en: "Ika Developments",
        es: "Ika Developments",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Architects studio",
        es: "Estudio de arquitectos",
      },
      url: "https://ika.com.ar/",
      image: "/images/projects/Ika-developments.png",
    },
    {
      name: {
        en: "Lauritsen",
        es: "Lauritsen",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Study #1 in intellectual property, trademarks and patents",
        es: "Estudio #1 en propiedad intelectual, marcas y patentes",
      },
      url: "https://lauritsen.com.ar/",
      image: "/images/projects/lauritsen.png",
    },
    {
      name: {
        en: "Registra tu Marca",
        es: "Registra tu Marca",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Brands and patents",
        es: "Marcas y patentes",
      },
      url: "https://registratumarca.com.ar/",
      image: "/images/projects/Registra-tu-Marca.png",
    },
    {
      name: {
        en: "Paradise App",
        es: "Paradise App",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Paradise Host Service Management App",
        es: "Paradise Host Service Management App",
      },
      url: "https://registratumarca.com.ar/",
      image: "/images/projects/paradise-app.png",
    },
    {
      name: {
        en: "Austral Refrigeration",
        es: "Austral Refrigeration",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Cooling solutions",
        es: "Soluciones de refrigeración",
      },
      url: "https://australrefrigeracion.com/",
      image: "/images/projects/austral-refrigeration.png",
    },
    {
      name: {
        en: "trainingwhead",
        es: "trainingwhead",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Train with science by Tomas Mazza",
        es: "Entrena con ciencia por Tomas Mazza",
      },
      url: "https://trainingwhead.paradisedev.net/",
      image: "/images/projects/trainingwhead.png",
    },
    {
      name: {
        en: "Paradise Dev V1",
        es: "Paradise Dev V1",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "This is old version",
        es: "Esta es la versión antigua",
      },
      url: "http://old.paradisedev.net",
      image: "/images/projects/Paradise-Dev-V1.png",
    },
  ],
  "Diseño UI/UX": [
    {
      name: {
        en: "Paradise Dev",
        es: "Paradise Dev",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Here you are now!",
        es: "Here you are now!",
      },
      url: "https://paradisedev.webflow.io/",
      image: "/images/projects/paradise-dev.png",
    },
    {
      name: {
        en: "Paradise Host",
        es: "Paradise Host",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Hosting Services",
        es: "Servicios de Hosting",
      },
      url: "https://paradisehost.net/",
      image: "/images/projects/hosting-services.png",
    },
    {
      name: {
        en: "Paradise Gaming",
        es: "Paradise Gaming",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Online gaming community and influencer management",
        es: "Comunidad de juegos online y gestión de influencers",
      },
      url: "https://paradisegaming.net/",
      image: "/images/projects/paradise-gaming.png",
    },
    {
      name: {
        en: "Paradise Store",
        es: "Paradise Store",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "E-commerce of digital assets",
        es: "E-commerce de activos digitales",
      },
      url: "https://paradisegaming.net/",
      image: "/images/projects/Paradise-Store.png",
    },
    {
      name: {
        en: "Ika Developments",
        es: "Ika Developments",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Architects studio",
        es: "Estudio de arquitectos",
      },
      url: "https://ika.com.ar/",
      image: "/images/projects/Ika-developments.png",
    },
    {
      name: {
        en: "Lauritsen",
        es: "Lauritsen",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Study #1 in intellectual property, trademarks and patents",
        es: "Estudio #1 en propiedad intelectual, marcas y patentes",
      },
      url: "https://lauritsen.com.ar/",
      image: "/images/projects/lauritsen.png",
    },
    {
      name: {
        en: "Registra tu Marca",
        es: "Registra tu Marca",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Brands and patents",
        es: "Marcas y patentes",
      },
      url: "https://registratumarca.com.ar/",
      image: "/images/projects/Registra-tu-Marca.png",
    },
    {
      name: {
        en: "Paradise App",
        es: "Paradise App",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Paradise Host Service Management App",
        es: "Paradise Host Service Management App",
      },
      url: "https://registratumarca.com.ar/",
      image: "/images/projects/paradise-app.png",
    },
    {
      name: {
        en: "Austral Refrigeration",
        es: "Austral Refrigeration",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Cooling solutions",
        es: "Soluciones de refrigeración",
      },
      url: "https://australrefrigeracion.com/",
      image: "/images/projects/austral-refrigeration.png",
    },
    {
      name: {
        en: "trainingwhead",
        es: "trainingwhead",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Train with science by Tomas Mazza",
        es: "Entrena con ciencia por Tomas Mazza",
      },
      url: "https://trainingwhead.paradisedev.net/",
      image: "/images/projects/trainingwhead.png",
    },
    {
      name: {
        en: "Paradise Dev V1",
        es: "Paradise Dev V1",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "This is old version",
        es: "Esta es la versión antigua",
      },
      url: "http://old.paradisedev.net",
      image: "/images/projects/Paradise-Dev-V1.png",
    },
  ],
  Applications: [
    {
      name: {
        en: "Paradise App",
        es: "Paradise App",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Paradise Host Service Management App",
        es: "Paradise Host Service Management App",
      },
      url: "/",
      image: "/images/projects/paradise-app.png",
    },
  ],
  Aplicaciones: [
    {
      name: {
        en: "Paradise App",
        es: "Paradise App",
      },
      hoverText: {
        en: "Open site",
        es: "Abrir sitio",
      },
      description: {
        en: "Paradise Host Service Management App",
        es: "Paradise Host Service Management App",
      },
      url: "/",
      image: "/images/projects/paradise-app.png",
    },
  ],
};
