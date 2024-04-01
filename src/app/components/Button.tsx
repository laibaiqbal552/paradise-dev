import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-full text-xl transition-all duration-300", {
  variants: {
    variant: {
      primary: "py-4 px-12 bg-white font-medium text-black",
      ghost: "",
    },
    padding: {
      "5": "p-5",
      "4_12": "py-4 px-12",
    },
    shape: {
      button: "",
      icon: "w-[46px] h-[46px] p-0 flex items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "primary",
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
