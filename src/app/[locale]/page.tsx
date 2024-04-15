import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Contact from "components/Contact";
import TrustedClients from "sections/TrustedClients";
import ProvideQuality from "sections/ProvideQuality";
import Process from "sections/Process";
import WeHandle from "sections/WeHandle";
import About from "sections/About";
import Features from "sections/Features";
import Hero from "sections/Hero";
import ServicesWeProvide from "sections/ServicesWeProvide";
import PreviousProjects from "sections/PreviousProjects";
import RevealTextEffect from "components/RevealTextEffect";
import SetupPlugin from "components/SetupPlugin";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <div>
      <SetupPlugin />

      <Navbar />

      <div className="mt-10 sm:mt-[96px] mb-14 lg:mb-40">
        <Hero />
      </div>

      <div className="mb-20 lg:mb-40">
        <Features />
      </div>

      <div className="mb-20" id="about">
        <About />
      </div>

      <div className="mb-20" id="service">
        <ServicesWeProvide />
      </div>

      <div className="mb-20 lg:mb-40">
        <WeHandle />
      </div>

      <div className="mb-20">
        <Process />
      </div>

      <div className="mb-20">
        <ProvideQuality />
      </div>

      <div id="portfolio" className="mb-20">
        <PreviousProjects />
      </div>

      <div className="mb-20 lg:mb-60">
        <TrustedClients />
      </div>

      <div id="contact" className="mb-10 sm:mb-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
