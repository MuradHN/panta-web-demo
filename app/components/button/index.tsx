import { cn } from "@/app/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function PentaButton({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-bold transition-colors duration-200 px-6 py-2 max-xs:px-2 text-[16px]";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "min-h-[40px] max-xs:min-h-[36px] bg-primary text-text-dark hover:bg-primary-hover cursor-pointer disabled:bg-primary-disabled disabled:opacity-70 disabled:cursor-not-allowed",
    secondary:
      "min-h-[40px] max-xs:min-h-[36px] border border-primary text-text hover:border-secondary-hover hover:text-text cursor-pointer disabled:border-secondary-disabled disabled:text-secondary-disabled disabled:opacity-70 disabled:cursor-not-allowed",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
}
