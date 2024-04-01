import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Contact from "./components/Contact";
import TrustedClients from "./sections/TrustedClients";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="h-screen"></div>

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
