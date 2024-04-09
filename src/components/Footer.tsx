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

function Footer() {
  return (
    <footer className="bg-primary dark:bg-body-light pb-16 sm:pb-28 pt-12 sm:pt-28">
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
                      className="text-2xl text-primary bg-white"
                      asChild
                    >
                      <a href={item.link} target="_blank">
                        <item.Icon />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <main className="border-t border-b-2 border-white/50 dark:border-white/5 py-10 pb-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-y-14 gap-x-8 text-white [&_a]:text-white/60 [&_a:hover]:text-white">
            <aside className="max-lg:col-span-full">
              <p className="dark:opacity-60">
                ParadiseDev® is a subdivision of Paradise{" "}
                <br className="max-lg:hidden" /> Host S.A. and a registered
                trademark
              </p>
            </aside>

            <div className="space-y-4">
              <p>About</p>
              <ul className="space-y-3">
                <li>
                  <a href="#">Us</a>
                </li>
                <li>
                  <a href="#">Conditions</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
                <li>
                  <a href="#">Gaming</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p>Browse</p>
              <ul className="space-y-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Process</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p>Our Services</p>
              <ul className="space-y-3">
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">Applications</a>
                </li>
              </ul>
            </div>
          </main>

          <div className="mt-14 flex max-sm:flex-col-reverse items-start sm:items-center justify-between sm:space-x-6 text-sm text-white/70">
            <p>Copyright 2024© | All rights reserved</p>

            <p>
              Site designed and developed by the Paradise Dev® team | Hosted by
              Paradise Host®
            </p>

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
