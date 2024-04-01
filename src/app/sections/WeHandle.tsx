import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const skills = [
  { img: "/images/skills/angular.png" },
  { img: "/images/skills/react.png" },
  { img: "/images/skills/nextjs.svg" },
  { img: "/images/skills/mysql.png" },
  { img: "/images/skills/swift.png" },
  { img: "/images/skills/astro.png" },
  { img: "/images/skills/meta.png" },
  { img: "/images/skills/m.png" },
  { img: "/images/skills/shopify.png" },
  { img: "/images/skills/html.png" },
  { img: "/images/skills/css.png" },
  { img: "/images/skills/js.png" },
  { img: "/images/skills/jquery.png" },
  { img: "/images/skills/php.svg" },
  { img: "/images/skills/node.png" },
  { img: "/images/skills/python.png" },
];

function WeHandle() {
  return (
    <section>
      <Container className="mb-10">
        <h1 className="text-[56px] text-center font-semibold">
          Tech’s & Platforms We Handle
        </h1>
      </Container>

      <Marquee
        speed={120}
        className="flex items-center justify-between"
        autoFill
      >
        {skills.map((item, i) => (
          <Image
            src={item.img}
            key={i}
            alt="skill"
            width={112}
            height={112}
            className="mx-5"
          />
        ))}
      </Marquee>
    </section>
  );
}

export default WeHandle;
