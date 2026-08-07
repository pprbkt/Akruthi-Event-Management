import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-500 outline-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] tracking-[0.12em] uppercase [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-[#8c352e] text-primary-foreground shadow-[0_18px_45px_rgba(110,31,28,0.22)] hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(110,31,28,0.3)]",
        outline:
          "border border-[rgba(185,146,67,0.34)] bg-transparent text-foreground hover:bg-[rgba(185,146,67,0.08)] hover:border-[rgba(185,146,67,0.55)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 shadow-sm",
        ghost:
          "hover:bg-[rgba(185,146,67,0.08)] hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-2 text-[11px]",
        lg: "h-14 px-8 py-3 text-[12px]",
        icon: "size-11",
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
