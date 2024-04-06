import { cn } from "@/lib/utils";
import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

// const Textarea = ({ className, ...props }: TextareaProps) => {
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className } = props;

    return (
      <textarea
        ref={ref}
        {...props}
        className={cn(
          "border block w-full border-black/30 dark:border-white/60 text-sm bg-transparent outline-none p-2 rounded-2xl focus:border-primary dark:focus:border-primary disabled:opacity-60",
          className
        )}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
