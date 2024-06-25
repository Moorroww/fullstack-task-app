import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[13px]",
  {
    variants: {
      variant: {
        default:
          "bg-kbPurpleMain font-bold hover:bg-kbPurpleSecondary heading-m !text-white",
        primaryS:
          "bg-kbPurpleMain font-bold hover:bg-kbPurpleSecondary text-white",
        secondary:
          "bg-kbPurpleMain/10 text-kbPurpleMain hover:bg-kbPurpleMain/25 dark:bg-white dark:hover:bg-white dark:text-kbPurpleMain",
        destructive: "bg-kbRed hover:bg-kbRedSecondary text-white ",
        link: "bg-transparent text-kbPurpleMain underline",
        ghost: "bg-transparent hover:bg-kbPurpleMain/10 text-kbPurpleMain",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
