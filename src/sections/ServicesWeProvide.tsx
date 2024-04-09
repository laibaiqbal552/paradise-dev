"use client";

import Container from "components/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";

const data = [
  {
    paragraph: "UI/UX Design",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65ea9bf6dd14ef04a15a1058_Frame%20(2).svg",
    heading: "Design proposals for web or applications",
  },
  {
    paragraph: "Web Development",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65ea9c5132f0a018a720e686_Frame%20(4).svg",
    heading: "E-Commerce, business, portfolios, landing, events",
  },
  {
    paragraph: "Applications",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65f450969be961ba6c606f9b_Frame%20(45).png",
    heading: "Apps for iOS and Android in Kotlin, React and Swift",
  },
  {
    paragraph: "Support",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65f53097b018f5d03d87dea6_Frame.png",
    heading: "Personalized 24/7 for companies and businesses",
  },
  {
    paragraph: "Datacenter",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65ea9c6822515f8fc3406833_Frame%20(5).svg",
    heading: "Own servers provided by ParadiseHost®",
  },
  {
    paragraph: "SSL",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65ea9c2c9fa5ab7932d542e8_Frame%20(1).png",
    heading: "SSL certificates for the security of your website.",
  },
  {
    paragraph: "SEO",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65ea9d35968954ebaf19a3fa_Frame%20(3).png",
    heading: "Your website in the first positions of Google",
  },
  {
    paragraph: "Advertising",
    logoSrc:
      "https://assets-global.website-files.com/65bf563f6bb1c09b8eeba7e2/65ea9d5d58e514604bb2b972_Frame%20(6).svg",
    heading: "Meta Business (Instagram/Facebook) Google Ads",
  },
];

const Card = ({
  imgSrc,
  title,
  desc,
}: {
  imgSrc: string;
  title: string;
  desc: any;
}) => {
  return (
    <div
      id="card"
      className="border border-primary rounded-xl p-7 z-10 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 bg-white dark:bg-body lg:w-[20rem]"
    >
      <header className="flex max-lg:flex-col-reverse items-center lg:space-x-4 justify-between">
        <p className="text-lg sm:text-xl font-medium max-lg:mt-4">{title}</p>
        <Image
          src={imgSrc}
          alt="icon"
          className="size-16 lg:size-[90px] flex-shrink-0"
          width={90}
          height={90}
        />
      </header>

      <main className="mt-4 lg:mt-32 max-lg:text-center">
        <p className="font-medium text-base lg:text-xl">{desc}</p>
      </main>
    </div>
  );
};

function ServicesWeProvide() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to("#card", {
          rotate: (index) => {
            if (index % 2 === 0) {
              return 14;
            }
            return -14;
          },
          x: (index, elem: HTMLElement) => {
            if (index % 2 === 0) {
              return (elem.clientWidth / 2) * (index === 0 ? 1.2 : index + 1.2);
              // return Number(1 * 40 * (index + 1)) + "%";
            }

            // return Number(-1 * 40 * (index + 1.4)) + "%";
            return (
              -1 * ((elem.clientWidth / 2) * (index === 0.8 ? 1.8 : index))
            );
          },
          scrollTrigger: {
            trigger: "#main",
            scrub: 0.2,
            start: "top 60%",
            end: "50% center",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <Container>
        <h1 className="text-center uppercase font-bold text-3xl sm:text-[64px] lh-1_2 mb-10 lg:mb-20">
          <span className="text-primary">Services</span> We <br /> Provide
        </h1>

        <main
          id="main"
          className="max-lg:grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:gap-5 lg:flex lg:[&>*]:min-w-[20rem] lg:justify-center lg:h-[25rem] relative"
        >
          {data.map((item, i) => (
            <Card
              key={i}
              title={item.paragraph}
              imgSrc={item.logoSrc}
              desc={item.heading}
            />
          ))}
        </main>
      </Container>
    </section>
  );
}

// export default ServicesWeProvide;

export default dynamic(() => Promise.resolve(ServicesWeProvide), {
  ssr: false,
});
