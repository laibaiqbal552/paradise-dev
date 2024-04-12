import Image from "next/image";
import Container from "./Container";
import { Button } from "./Button";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeSwitcher from "./ThemeSwitcher";
import { socialLinks } from "./../lib/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Footer() {
  const t = useTranslations("Home.Footer");
  const pages1 = [
    { key: "Pages1.AboutUs", href: "#" },
    { key: "Pages1.Conditions", href: "#" },
    { key: "Pages1.Hosting", href: "#" },
    { key: "Pages1.Gaming", href: "#" },
    { key: "Pages1.FAQ", href: "#" },
  ];
  const pages2 = [
    { key: "Pages2.Home", href: "#" },
    { key: "Pages2.Services", href: "#" },
    { key: "Pages2.Portfolio", href: "#" },
    { key: "Pages2.Process", href: "#" },
    { key: "Pages2.ContactBrowse", href: "#" },
  ];
  const pages3 = [
    { key: "Pages3.WebDevelopment", href: "#" },
    { key: "Pages3.UIUXDesign", href: "#" },
    { key: "Pages3.Applications", href: "#" },
  ];

  return (
    <footer className="bg-primary dark:bg-body-light pb-16 sm:pb-28 pt-12 sm:pt-28 w-full">
      <Container asChild className="max-w-[1209px]">
        <div>
          <header className="flex max-lg:flex-col items-center justify-between max-lg:space-y-7 lg:space-x-5 mb-8">
            <Image src="/images/logo.png" width={275} height={72} alt="logo" />

            <div className="overflow-hidden">
              <ul className="flex items-center flex-wrap justify-center [&>*]:m-3 -m-3">
                {socialLinks.map((item, i) => (
                  <li key={i}>
                    <Button
                      shape="icon"
                      className="text-2xl text-primary bg-white hover:bg-[#2dcd1c]"
                      asChild
                    >
                      <Link
                        href={item.link}
                        target="_blank"
                        className=" text-primary z-10 relative"
                      >
                        <item.Icon />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <main className="border-t border-b-2 border-white/50 dark:border-white/5 py-10 pb-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-y-14 gap-x-8 text-white [&_a]:text-white/60 [&_a:hover]:text-white">
            <aside className="max-lg:col-span-full">
              <p className="dark:opacity-60">{t("Description")}</p>
            </aside>

            <div className="space-y-4">
              <p>{t("Pages1.heading")}</p>
              <ul className="space-y-3">
                {pages1.map((page) => (
                  <li key={page.key}>
                    <Link href={page.href}>{t(page.key)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p>{t("Pages2.heading")}</p>
              <ul className="space-y-3">
                {pages2.map((page) => (
                  <li key={page.key}>
                    <Link href={page.href}>{t(page.key)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p>{t("Pages3.heading")}</p>
              <ul className="space-y-3">
                {pages3.map((page) => (
                  <li key={page.key}>
                    <Link href={page.href}>{t(page.key)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </main>

          <div className="mt-14 flex max-sm:flex-col-reverse items-start sm:items-center justify-between sm:space-x-6 text-sm text-white/70">
            <p>{t("Copyright")}</p>

            <p>{t("DevelopedBy")}</p>

            <div className="max-sm:mb-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
