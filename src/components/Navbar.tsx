"use client";

import Link from "next/link";
import Container from "./Container";
import { Button } from "./Button";
import Logo from "./Logo";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { cn } from "lib/utils";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { locales } from "../i18n";
// import {use} from "next-intl";
import { redirect, useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const locale = useParams().locale;
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = OutsideClickDetector(() => {
    setIsMenuOpen(false);
  }, isMenuOpen === true);
  const localeData = [
    { label: "English", locale: "en", image: "/images/en-flag.png" },
    { label: "Español", locale: "es", image: "/images/fr-flag.jpg" },
  ];

  const currentLocale = localeData?.find((item) => item.locale === locale);

  const [isLocaleOpen, setIsLocaleOpen] = useState<boolean>(false);
  const [locales, setLocales] = useState<any>(currentLocale || localeData[0]);

  const handleSetLocale = (locale: any) => {
    setLocales(locale);
    setIsLocaleOpen(false);
  };

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const t = useTranslations("Home.Navbar");
  const menuItems = [
    { key: "menu.Home", href: "/" },
    { key: "menu.Services", href: "/" },
    { key: "menu.AboutUs", href: "/" },
    { key: "menu.Portfolio", href: "/" },
    { key: "menu.Begin", href: "/" },
  ];

  return (
    <nav
      ref={containerRef}
      className="bg-white dark:bg-body-light relative z-[10000] "
    >
      <Container asChild>
        <div className="flex items-center bg-white dark:bg-body-light justify-between lg:space-x-5 py-4 sm:py-1">
          <Link href="/" className="relative sm:top-1.5" aria-label="Home">
            <Logo
              src="/images/logo.svg"
              alt={"logo"}
              className="max-md:w-[192px]"
            />
          </Link>
          <div className="flex items-center gap-5">
            <ul
              className={cn(
                "flex lg:items-center max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:-z-50 max-lg:flex-col transition-all duration-500 max-lg:-translate-y-full bg-white dark:bg-body-light",
                isMenuOpen ? "max-lg:translate-y-0" : null
              )}
            >
              <li>
                <Button
                  padding="5"
                  variant="ghost"
                  className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center block"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/" aria-label="Home">
                    {t("menu.Home")}
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  padding="5"
                  variant="ghost"
                  className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center cursor-pointer block"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ScrollLink offset={-100} to="service">
                    {t("menu.Services")}
                  </ScrollLink>
                </Button>
              </li>
              <li>
                <Button
                  padding="5"
                  variant="ghost"
                  className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center cursor-pointer block"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ScrollLink offset={-100} to="about">
                    {t("menu.AboutUs")}
                  </ScrollLink>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                  padding="5"
                  variant="ghost"
                  className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center cursor-pointer block"
                >
                  <ScrollLink offset={-100} to="portfolio">
                    {t("menu.Portfolio")}
                  </ScrollLink>
                </Button>
              </li>
              <li className="max-lg:w-fit max-lg:mx-auto">
                <Button
                  asChild
                  // onClick={() => setIsMenuOpen(false)}
                  className="uppercase cursor-pointer block"
                >
                  <ScrollLink to="contact">{t("menu.Begin")}</ScrollLink>
                </Button>
              </li>
            </ul>

            <button
              onClick={() => setIsMenuOpen((val) => !val)}
              className="max-lg:flex hidden text-2xl mr-4"
              aria-label="Menu"
            >
              <MdOutlineMenu />
            </button>

            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsLocaleOpen((val) => !val)}
                type="button"
                className="inline-flex justify-center items-center gap-1 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <Image
                  src={locales.image}
                  alt={locales.label || "alt"}
                  className="inline md:mr-2 mr-1"
                  width="20"
                  height="20"
                />
                {locales.label}
              </button>

              {isLocaleOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1 " role="none">
                    {localeData.map((locale, index) => (
                      <Link
                        onClick={() => handleSetLocale(locale)}
                        key={index}
                        aria-label={locale.label}
                        href={redirectedPathName(locale.locale)}
                        className="text-gray-700 px-4 flex items-center py-2 text-sm hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                        locale={locale.locale}
                        id="menu-item-0"
                      >
                        <div className="mr-2 ">
                          <Image
                            src={locale.image}
                            alt={locale.label || "alt"}
                            className="inline "
                            width="20"
                            height="20"
                          />
                        </div>
                        <div className="pt-1"> {locale.label}</div>
                      </Link>
                    ))}

                    {/* <Link
                    href=""
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                    locale="fr"
                  >
                    <Image
                      src="/images/flags/fr.png"
                      alt="Français"
                      className="inline mr-2"
                      width="20"
                      height="20"
                    />
                    Français
                  </Link> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
