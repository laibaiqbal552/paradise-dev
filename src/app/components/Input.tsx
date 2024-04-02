import { cn } from "@/lib/utils";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        "border-b h-[38px] block w-full border-black/30 dark:border-white/60 text-sm bg-transparent outline-none",
        className
      )}
    />
  );
};

export default Input;
