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
import { Toaster } from "react-hot-toast";

export default function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <SetupPlugin />

      <Navbar />

      <div id="home" className="mt-10 sm:mt-[96px] mb-14 lg:mb-40">
        <Hero />
      </div>

      <div className="mb-20 lg:mb-40">
        <Features />
      </div>

      <div className="mb-20" id="about">
        <About />
      </div>

      <div id="service" className="mb-20">
        <ServicesWeProvide />
      </div>

      <div className="mb-20 lg:mb-40">
        <WeHandle />
      </div>

      <div id="process" className="mb-20">
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
