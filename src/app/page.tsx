import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Contact from "./components/Contact";
import TrustedClients from "./sections/TrustedClients";
import ProvideQuality from "./sections/ProvideQuality";
import Process from "./sections/Process";
import WeHandle from "./sections/WeHandle";
import About from "./sections/About";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import ServicesWeProvide from "./sections/ServicesWeProvide";
import PreviousProjects from "./sections/PreviousProjects";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="mt-[96px] mb-40">
        <Hero />
      </div>

      <div className="mb-40">
        <Features />
      </div>

      <div className="mb-20">
        <About />
      </div>

      <div className="mb-20">
        <ServicesWeProvide />
      </div>

      <div className="mb-40">
        <WeHandle />
      </div>

      <div className="mb-20">
        <Process />
      </div>

      <div className="mb-20">
        <ProvideQuality />
      </div>

      <div className="mb-20">
        <PreviousProjects />
      </div>

      <div className="mb-60">
        <TrustedClients />
      </div>

      <div className="mb-20">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
