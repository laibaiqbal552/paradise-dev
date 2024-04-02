import { cn } from "@/lib/utils";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={cn(
        "border block w-full border-black/30 dark:border-white/60 text-sm bg-transparent outline-none p-2 rounded-2xl",
        className
      )}
    />
  );
};

export default Textarea;
