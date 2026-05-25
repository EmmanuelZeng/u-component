import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const cardSurfaceVariants = cva("bg-white transition-shadow duration-200", {
  variants: {
    variant: {
      default: "border border-gray1",
      elevated: "shadow-md hover:shadow-lg",
      outlined: "border-2 border-gray2",
      ghost: "bg-transparent",
      filled: "bg-gray1",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-lg",
      lg: "rounded-xl",
      xl: "rounded-2xl",
    },
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
    interactive: {
      true: "cursor-pointer hover:border-gray2 active:scale-[0.99]",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
    padding: "md",
    fullWidth: false,
    interactive: false,
  },
});

const CardSurface = forwardRef(
  (
    {
      as: Component = "div",
      variant,
      rounded,
      padding,
      fullWidth,
      interactive,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      className={cn(
        cardSurfaceVariants({ variant, rounded, padding, fullWidth, interactive }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

CardSurface.displayName = "CardSurface";

CardSurface.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(["default", "elevated", "outlined", "ghost", "filled"]),
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),
  padding: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),
  fullWidth: PropTypes.bool,
  interactive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

CardSurface.defaultProps = {
  as: "div",
  variant: "default",
  rounded: "md",
  padding: "md",
  fullWidth: false,
  interactive: false,
  className: "",
};

export default CardSurface;
export { cardSurfaceVariants };
