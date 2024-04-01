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

function Footer() {
  return (
    <footer className="bg-body-light pb-28 pt-28">
      <Container asChild className="max-w-[1209px] px-0">
        <div>
          <header className="flex items-center justify-between space-x-5 mb-8">
            <Image src="/images/logo.png" width={275} height={72} alt="logo" />

            <ul className="flex items-center space-x-6">
              <li>
                <Button shape="icon" className="text-2xl text-stone-800">
                  <FaTiktok />
                </Button>
              </li>
              <li>
                <Button shape="icon" className="text-2xl text-stone-800">
                  <FaTelegramPlane />
                </Button>
              </li>
              <li>
                <Button shape="icon" className="text-2xl text-stone-800">
                  <FaFacebookF />
                </Button>
              </li>
              <li>
                <Button shape="icon" className="text-2xl text-stone-800">
                  <FaInstagram />
                </Button>
              </li>
              <li>
                <Button shape="icon" className="text-2xl text-stone-800">
                  <FaXTwitter />
                </Button>
              </li>
              <li>
                <Button shape="icon" className="text-2xl text-stone-800">
                  <FaLinkedinIn />
                </Button>
              </li>
            </ul>
          </header>

          <main className="border-t border-b-2 border-white/5 py-10 pb-20 grid grid-cols-[2fr_1fr_1fr_1fr] gap-8">
            <aside>
              <p className="opacity-60">
                ParadiseDev® is a subdivision of Paradise <br /> Host S.A. and a
                registered trademark
              </p>
            </aside>

            <div className="space-y-4">
              <p>About</p>
              <ul className="space-y-3 text-white/60">
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
              <ul className="space-y-3 text-white/60">
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
              <ul className="space-y-3 text-white/60">
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

          <div className="mt-14 flex items-center justify-between space-x-6 text-sm text-white/60">
            <p>Copyright 2024© | All rights reserved</p>

            <p>
              Site designed and developed by the Paradise Dev® team | Hosted by
              Paradise Host®
            </p>

            <span></span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
