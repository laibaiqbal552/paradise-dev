import { cn } from "lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

function Container({ children, className, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn("max-w-[1490px] px-[10px] mx-auto", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Container;
