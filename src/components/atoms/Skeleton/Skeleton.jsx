import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const skeletonVariants = cva("animate-pulse bg-gray1", {
  variants: {
    variant: {
      text: "h-4 rounded",
      circular: "rounded-full",
      rectangular: "rounded-none",
      rounded: "rounded-lg",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { variant: "text", size: "xs", className: "h-3" },
    { variant: "text", size: "sm", className: "h-3.5" },
    { variant: "text", size: "md", className: "h-4" },
    { variant: "text", size: "lg", className: "h-5" },
    { variant: "circular", size: "xs", className: "h-6 w-6" },
    { variant: "circular", size: "sm", className: "h-8 w-8" },
    { variant: "circular", size: "md", className: "h-10 w-10" },
    { variant: "circular", size: "lg", className: "h-12 w-12" },
  ],
  defaultVariants: {
    variant: "rounded",
    size: "md",
  },
});

const Skeleton = forwardRef(
  ({ variant, size, width, height, className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      aria-busy="true"
      className={cn(skeletonVariants({ variant, size }), className)}
      style={{
        width: width ?? (variant === "text" ? "100%" : undefined),
        height: height ?? undefined,
      }}
      {...props}
    />
  )
);

Skeleton.displayName = "Skeleton";

Skeleton.propTypes = {
  variant: PropTypes.oneOf(["text", "circular", "rectangular", "rounded"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  variant: "rounded",
  size: "md",
  className: "",
};

export default Skeleton;
export { skeletonVariants };
