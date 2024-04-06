import { cn } from "@/lib/utils";
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className } = props;

  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        "border-b h-[38px] block w-full border-black/30 dark:border-white/60 text-sm bg-transparent outline-none focus:border-primary dark:focus:border-primary disabled:opacity-60",
        className
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
