import { cn } from "@/app/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-bold transition-colors duration-200 px-6 py-2 max-xs:px-2 text-[16px]",
  {
    variants: {
      variant: {
        primary:
          "min-h-[40px] max-xs:min-h-[36px] bg-primary text-text-dark hover:bg-primary-hover cursor-pointer disabled:bg-primary-disabled disabled:opacity-70 disabled:cursor-not-allowed",
        secondary:
          "min-h-[40px] max-xs:min-h-[36px] border border-primary text-text hover:border-secondary-hover hover:text-text cursor-pointer disabled:border-secondary-disabled disabled:text-secondary-disabled disabled:opacity-70 disabled:cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function PentaButton({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
