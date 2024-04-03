import Container from "./Container";
import { Button } from "./Button";
import Typography from "./Typography";
import Input from "./Input";
import Textarea from "./Textarea";
import Image from "next/image";

const Card = ({
  title,
  subtitle,
  imgSrc,
}: {
  title: string;
  subtitle: any;
  imgSrc: string;
}) => {
  return (
    <div className="flex items-start space-x-6">
      <aside className="flex-shrink-0">
        <Image
          width={50}
          height={50}
          src={imgSrc}
          alt=""
          className="max-sm:size-10"
        />
      </aside>

      <main>
        <p className="text-base sm:text-xl font-bold mb-1">{title}</p>
        <p className="text-sm sm:text-lg">{subtitle}</p>
      </main>
    </div>
  );
};

function Contact() {
  return (
    <Container className="max-w-[1209px] border-t border-black/30 dark:border-white/60 pt-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-12">
        <Card
          title="Mail"
          subtitle="contact@paradisedev.net"
          imgSrc="/images/mail-icon.png"
        />
        <Card
          title="Location"
          subtitle="Suipacha 531 piso 8, Microcentro | Buenos Aires"
          imgSrc="/images/location-icon.png"
        />
        <Card title="Phone" subtitle="Coming soon" imgSrc="/images/phone.svg" />
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input placeholder="Name" />
        <Input placeholder="Email*" />
        <Input placeholder="Affair" className="col-span-2" />
        <div className="pt-2 col-span-2">
          <Textarea placeholder="Message" className="resize-none h-[20rem]" />
        </div>
      </div>
      <Button className="mt-12 mb-5 px-14">SEND</Button>

      <Typography
        asChild
        variant="super-heading"
        className="font-medium lh-1_3"
      >
        <h1>
          Any questions, comments or general inquiries? We really appreciate
          your suggestions, contact us!
        </h1>
      </Typography>
    </Container>
  );
}

export default Contact;
