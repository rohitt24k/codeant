import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-semibold font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: " bg-blue-1570ef text-white hover:bg-blue-1570ef/90  ",
        outline: "border border-gray-d5d7da hover:bg-gray-d5d7da/60",
        ghost: "hover:bg-gray-d5d7da/40 ",
      },
      size: {
        default: "px-3.5 py-2.5",
        sm: "px-3 py-2",
        // lg: "h-10 rounded-md px-8",
        // icon: "h-9 w-9",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={classNames(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
