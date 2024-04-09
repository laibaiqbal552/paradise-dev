import { cn } from "lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "super-heading": "text-base sm:text-2xl lg:text-[56px]",
      base: "text-base",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

interface Props
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

function Typography({ asChild, variant, className, ...props }: Props) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...props}
      className={cn(typographyVariants({ variant, className }))}
    />
  );
}

export default Typography;
