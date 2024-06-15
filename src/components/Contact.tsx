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
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
const FieldError = ({ children }: { children: ReactNode }) => {
  return children ? (
    <p className="text-xs text-red-400 mt-1.5">{children}</p>
  ) : null;
};

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
          alt="Contact Image"
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
  const t = useTranslations("Home.Contact");
  const t2 = useTranslations("Home.contactForm");
  const contactFormSchema = yup
    .object({
      //   name: yup
      //     .string()
      //     .required(t2("fieldRequired"))
      //     .min(2, t2("nameMinLength")) // Assuming you have a translation for minimum length
      //     .max(100, t2("nameMaxLength")),
      //   email: yup
      //     .string()
      //     .email(t2("invalidEmail"))
      //     .required(t2("fieldRequired"))
      //     .min(5, t2("emailMinLength")) // Assuming you have a translation for minimum length
      //     .max(254, t2("emailMaxLength")),
      //   affair: yup
      //     .string()
      //     .required(t2("fieldRequired"))
      //     .min(5, t2("affairMinLength")) // Assuming you have a translation for minimum length
      //     .max(200, t2("affairMaxLength")),
      //   message: yup
      //     .string()
      //     .required(t2("fieldRequired"))
      //     .min(20, t2("messageMinLength"))
      //     .max(2000, t2("messageMaxLength")),
      // })
      // .required();
      name: yup
        .string()
        .required(t2("fieldRequired"))
        .min(2, t2("nameMinLength"))
        .max(100, t2("nameMaxLength")),
      email: yup
        .string()
        .email(t2("invalidEmail"))
        .required(t2("fieldRequired"))
        .min(5, t2("emailMinLength"))
        .max(254, t2("emailMaxLength")),
      affair: yup
        .string()
        .required(t2("fieldRequired"))
        .min(5, t2("affairMinLength"))
        .max(200, t2("affairMaxLength")),
      message: yup
        .string()
        .required(t2("fieldRequired"))
        .min(20, t2("messageMinLength"))
        .max(2000, t2("messageMaxLength")),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (data: Record<string, any>) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Email sent successfully");
        reset();
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email", error);
      toast.error("Failed to send email");
    }
  };

  return (
    <Container className="max-w-[1209px] border-t border-black/30 dark:border-white/60 pt-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-12">
        <Card
          title={t("Mail")}
          subtitle={t("MailInfo")}
          imgSrc="/images/mail-icon.png"
        />
        <Card
          title={t("Location")}
          subtitle={t("mailSubtitle")}
          imgSrc="/images/location-icon.png"
        />
        <Card
          title={t("Phone")}
          subtitle={t("phoneSubtitle")}
          imgSrc="/images/phone.svg"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={isSubmitting}>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <Input placeholder={t("placeholderName")} {...register("name")} />
              <FieldError>{errors?.name?.message}</FieldError>
            </div>

            <div>
              <Input
                placeholder={t("placeholderEmail")}
                {...register("email")}
              />
              <FieldError>{errors?.email?.message}</FieldError>
            </div>

            <div className="col-span-2">
              <Input
                placeholder={t("placeholderAffair")}
                {...register("affair")}
              />
              <FieldError>{errors?.affair?.message}</FieldError>
            </div>

            <div className="pt-2 col-span-2 mb-8">
              <Textarea
                placeholder={t("placeholderMessage")}
                className="resize-none h-[20rem]"
                {...register("message")}
              />
              <FieldError>{errors?.message?.message}</FieldError>
            </div>
          </div>
        </fieldset>
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="mt-12 mb-5 p-0 dark:hover:bg-transparent dark:hover:border-white dark:hover:text-white h-14 max-w-[11rem] w-full justify-center flex items-center"
        >
          {isSubmitting ? (
            <Loader className="stroke-black dark:stroke-primary" />
          ) : (
            t("send")
          )}
        </Button>
      </form>
      {isSubmitted ? (
        <div className="py-3 px-6 bg-green-300 rounded-md text-black font-medium mb-5">
          <p>{t("FormSubmitted")}</p>
        </div>
      ) : null}

      <Typography variant="super-heading" className="font-medium lh-1_3">
        <RevealTextEffect text={t("Description")} />
      </Typography>
    </Container>
  );
}

export default Contact;
