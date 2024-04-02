import { Button } from "@/components/Button";
import Container from "@/components/Container";

function ProvideQuality() {
  return (
    <section className="py-20 bg-[url('/images/gradient-bg-light.png')] dark:bg-[url('/images/gradient-bg.png')] bg-cover bg-[#f9f7fb] dark:bg-transparent">
      <Container>
        <h1 className="text-center text-5xl font-medium mb-7">
          We provide quality
        </h1>

        <p className="text-center text-lg font-medium mb-6">
          Leave it in the hands of our team, we have the solution tailored{" "}
          <br /> to you. Consult now without any obligation.
        </p>

        <Button
          className="uppercase mx-auto block"
          variant="primary"
          padding="16_32"
        >
          Get In Touch
        </Button>
      </Container>
    </section>
  );
}

export default ProvideQuality;
