import Container from "@/components/Container";
import React from "react";
import Marquee from "react-fast-marquee";

const clients = [
  { src: "/images/trusted/hil.png" },
  { src: "/images/trusted/suda.png" },
  { src: "/images/trusted/pura.png" },
  { src: "/images/trusted/las.png" },
  { src: "/images/trusted/chai.png" },
  { src: "/images/trusted/vita.png" },
  { src: "/images/trusted/laur.png" },
  { src: "/images/trusted/ika.svg" },
];

function TrustedClients() {
  return (
    <section>
      <Container className="max-w-[80rem] w-full mb-10">
        <p className="text-[3.5rem] font-semibold mb-5 text-center">
          Our Trusted Clients
        </p>
      </Container>

      <Marquee
        speed={140}
        autoFill
        className="flex items-center justify-between"
      >
        {clients.map((item, i) => (
          <img src={item.src} key={i} className="h-[80px] w-auto mx-6" />
        ))}
      </Marquee>
    </section>
  );
}

export default TrustedClients;
