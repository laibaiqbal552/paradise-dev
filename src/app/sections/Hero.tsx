"use client";

import { Typewriter } from "react-simple-typewriter";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "@/components/Button";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <section className="relative">
      <Container className="relative">
        <Image
          src="/images/ring.svg"
          height={70}
          width={70}
          alt="ring"
          className="absolute top-1/2 left-0"
        />

        <Image
          src="/images/hand.png"
          alt="hand"
          className="mx-auto mb-6"
          width={64}
          height={64}
        />

        <h3 className="text-center text-[56px] font-medium mb-7">
          Hello World
        </h3>

        <h1 className="text-[6.5rem] text-center font-semibold lh-1_2">
          WE PROPOSE YOU TO DEVELOP YOUR <br />
          <span className="text-primary">
            <Typewriter
              cursor
              loop
              words={["App", "Website", "Project", "Business", "Store"]}
            />
          </span>
        </h1>
      </Container>

      <ul className="flex items-center flex-col space-y-6 absolute top-1/2 -translate-y-1/2 right-8">
        <li>
          <Button shape="icon" className="text-2xl text-stone-800">
            <FaXTwitter />
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
            <FaLinkedinIn />
          </Button>
        </li>
      </ul>
    </section>
  );
}

export default Hero;
