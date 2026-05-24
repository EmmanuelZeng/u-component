import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles, errorRing } from "../../../lib/utils";

const inputVariants = cva(
  [
    "w-full text-dark placeholder:text-gray2",
    "transition-colors duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border border-gray2 bg-white hover:border-gray3",
        filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
        flushed:
          "border-0 border-b-2 border-gray2 bg-transparent rounded-none hover:border-gray3 px-0",
        outline:
          "border-2 border-gray2 bg-white hover:border-primary/50",
      },
      size: {
        xs: "h-8 px-2.5 text-xs rounded-md",
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-5 text-base rounded-lg",
        xl: "h-14 px-6 text-lg rounded-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      error: {
        true: errorRing,
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: true,
      error: false,
    },
  }
);

const Input = forwardRef(
  (
    {
      variant,
      size,
      fullWidth,
      error,
      className,
      type = "text",
      ...props
    },
    ref
  ) => (
    <input
      ref={ref}
      type={type}
      aria-invalid={error || undefined}
      className={cn(inputVariants({ variant, size, fullWidth, error }), className)}
      {...props}
    />
  )
);

Input.displayName = "Input";

Input.propTypes = {
  variant: PropTypes.oneOf(["default", "filled", "flushed", "outline"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  variant: "default",
  size: "md",
  fullWidth: true,
  error: false,
  className: "",
};

export default Input;
export { inputVariants };
