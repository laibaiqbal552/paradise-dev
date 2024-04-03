import { Button } from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import StrokedText from "@/components/StrokedText";
import { cn } from "@/lib/utils";
import Image from "next/image";

const FeatureCard = ({
  imgSrc,
  title,
  desc,
  className,
}: {
  imgSrc: string;
  title: string;
  desc: any;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "lg:w-[19.688rem] flex-shrink-0 border max-lg:!bg-primary/5 bg-white border-black/40 dark:border-primary dark:bg-body p-[30px] rounded-xl max-lg:text-center",
        className
      )}
    >
      <Image
        src={imgSrc}
        alt="feature-icon"
        width={75}
        height={75}
        className="mb-5 max-lg:mx-auto max-sm:size-12"
      />
      <p className="text-xl sm:text-5xl font-medium max-sm:mb-3 max-lg:mb-6">
        {title}
      </p>

      <p className="lg:mt-[6.5rem] text-base sm:text-xl lh-1_2 font-medium">
        {desc}
      </p>
    </div>
  );
};

const Card = ({
  reverse,
  title,
  desc,
  btnTitle,
}: {
  reverse?: boolean;
  title: string;
  desc: string;
  btnTitle: string;
}) => {
  return (
    <div
      className={cn(
        "grid gap-5 auto-cols-[1fr]",
        reverse ? "lg:grid-cols-[1fr_.7fr]" : "lg:grid-cols-[.7fr_1fr]"
      )}
    >
      <div className={cn("", reverse ? "lg:order-2 flex-shrink-0" : "")}>
        <Image
          src="/images/work-with-us.png"
          className="rounded-3xl max-lg:w-full"
          alt="work-with-us"
          width={555}
          height={496}
        />
      </div>

      <div className="border border-primary flex flex-col justify-center py-6 px-8 lg:py-4 lg:px-12 rounded-2xl items-start">
        <h2 className="text-xl sm:text-[32px] font-semibold mb-6 lg:mb-3 text-primary dark:text-white">
          {title}
        </h2>

        <p className="opacity-70 mb-7">{desc}</p>

        <Button>{btnTitle}</Button>
      </div>
    </div>
  );
};

function Features() {
  return (
    <section>
      <Container asChild className="mb-10 lg:mb-28">
        <header>
          <Heading>
            <StrokedText className="font-bold mb-10 sm:mb-20 text-center uppercase">
              Features
            </StrokedText>
          </Heading>

          <div className="mx-auto grid max-lg:gap-6 lg:flex lg:space-x-8 mb-16">
            <FeatureCard
              imgSrc="/images/feature-icons/stars.svg"
              title="Trajectory"
              desc="Our 5 years of experience in the field support us."
              className="lg:rotate-[-14deg] z-20"
            />
            <FeatureCard
              imgSrc="/images/feature-icons/tick.png"
              title="Quality"
              desc="We take care of polishing every last detail of your project"
              className="lg:rotate-[-14deg] z-40"
            />
            <FeatureCard
              imgSrc="/images/feature-icons/location.svg"
              title="Attention"
              desc="24/7 support and office with customer service unlimited."
              className="lg:rotate-[14deg] z-30"
            />
            <FeatureCard
              imgSrc="/images/feature-icons/price.svg"
              title="Price"
              desc="We guarantee the best quality at the best price for you."
              className="lg:rotate-[14deg] z-50"
            />
          </div>

          <p className="text-3xl sm:text-[64px] text-center font-bold lh-1_2">
            <span className="text-primary">FEATURES</span> MAKE <br /> US
            DIFFERENT
          </p>
        </header>
      </Container>

      <Container asChild className="max-w-[1396px]">
        <main className="space-y-14 lg:space-y-10">
          <Card
            btnTitle="Send Sv"
            title="Work with us"
            desc="If you are a student or if you have advanced programming knowledge
          (Jr, Ssr, Sr) you can contact us to send your CV (Curriculum Vitae).
          it will be stored in our database for future searches for job
          profiles, and you will be recommended in the world ITEM. You can work
          with us regardless of your nationality, gender or orientation. We have
          an excellent work environment and we always add profiles to our
          projects."
          />
          <Card
            btnTitle="Start Now"
            reverse
            title="Each project is worked in a different way"
            desc="We take the time to analyze each project meticulously to provide the best proposal according to the client's needs. No project is worked in the same way. We are in constant communication to do our work in the most efficient way possible."
          />
          <Card
            btnTitle="Report Problem"
            title="Report a veneer ability"
            desc="One of our main activities is computer security. If you found any vulnerability in any system, website or service provider, you can report it to us. We are in constant contact with companies reporting these incidents, offering our services. You may be compensated accordingly for reporting the problem or even joining us to solve it."
          />
          <Card
            reverse
            btnTitle="Request support"
            title="Support 14/7"
            desc="Our dedicated support team is available 24/7 to address your needs promptly and efficiently, ensuring uninterrupted assistance whenever you require it. You can rely on us to provide round-the-clock support, delivering solutions whenever you reach out, day or night."
          />
        </main>
      </Container>
    </section>
  );
}

export default Features;