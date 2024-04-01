import Container from "@/components/Container";
import StrokedText from "@/components/StrokedText";

function About() {
  return (
    <section>
      <Container>
        <StrokedText className="text-[6.5rem] font-bold mb-2 text-center">
          ABOUT US
        </StrokedText>

        <p className="text-[3.5rem] lh-1_3 max-w-[1209px] mx-auto w-full">
          We are a division of the company Paradise Host SA specialized in
          programming, development and computer security. We offer services for
          businesses, companies and individuals.
        </p>
      </Container>
    </section>
  );
}

export default About;
