import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

function Heading({ children, className, ...props }: Props) {
  return (
    <h1
      className={cn("text-5xl sm:text-[56px] lg:text-[104px]", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Heading;
