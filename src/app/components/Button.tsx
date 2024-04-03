import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-full text-xl transition-all duration-300", {
  variants: {
    variant: {
      white: "bg-primary dark:bg-white font-medium text-white dark:text-black",
      primary: "text-white bg-primary font-medium",
      ghost: "",
    },
    padding: {
      "5": "p-5",
      "4_12": "py-4 px-12",
      "16_32": "py-4 px-8",
    },
    shape: {
      button: "",
      icon: "size-[36px] sm:size-[46px] p-0 flex items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "white",
    padding: "4_12",
    shape: "button",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, padding, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, padding, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
