"use client";

import Container from "./Container";
import { Button } from "./Button";
import Typography from "./Typography";
import Input from "./Input";
import Textarea from "./Textarea";
import Image from "next/image";
import RevealTextEffect from "./RevealTextEffect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ReactNode } from "react";
import Loader from "./Loader";

const FieldError = ({ children }: { children: ReactNode }) => {
  return children ? (
    <p className="text-xs text-red-400 mt-1.5">{children}</p>
  ) : null;
};

const contactFormSchema = yup
  .object({
    name: yup.string().required("This field is Required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is Required"),
    affair: yup.string().required("This field is Required"),
    message: yup
      .string()
      .required("This field is Required")
      .min(20, "Message should be of atleast 20 characters"),
  })
  .required();

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("form submitted");
        reset();
      }, 4000);
    });
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={isSubmitting}>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <Input placeholder="Name" {...register("name")} />
              <FieldError>{errors?.name?.message}</FieldError>
            </div>

            <div>
              <Input placeholder="Email*" {...register("email")} />
              <FieldError>{errors?.email?.message}</FieldError>
            </div>

            <div className="col-span-2">
              <Input placeholder="Affair" {...register("affair")} />
              <FieldError>{errors?.affair?.message}</FieldError>
            </div>

            <div className="pt-2 col-span-2">
              <Textarea
                placeholder="Message"
                className="resize-none h-[20rem]"
                {...register("message")}
              />
              <FieldError>{errors?.message?.message}</FieldError>
            </div>
          </div>
        </fieldset>

        <Button
          disabled={isSubmitting}
          type="submit"
          className="mt-12 mb-5 p-0 dark:hover:bg-transparent dark:hover:border-white dark:hover:text-white h-14 max-w-[11rem] w-full justify-center flex items-center"
        >
          {isSubmitting ? (
            <Loader className="stroke-black dark:stroke-primary" />
          ) : (
            "SEND"
          )}
        </Button>
      </form>
      {isSubmitted ? (
        <div className="py-3 px-6 bg-green-300 rounded-md text-black font-medium mb-5">
          <p>Form Submitted Succesfully</p>
        </div>
      ) : null}

      <Typography
        asChild
        variant="super-heading"
        className="font-medium lh-1_3"
      >
        <h1>
          <RevealTextEffect
            text="Any questions, comments or general inquiries? We really appreciate
            your suggestions, contact us!"
          />
        </h1>
      </Typography>
    </Container>
  );
}

export default Contact;
