import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-semibold whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        success: "bg-successLight text-success",
        warning: "bg-warningLight text-warning",
        danger: "bg-dangerLight text-danger",
        info: "bg-infoLight text-info",
        neutral: "bg-gray1 text-gray4",
        primary: "bg-primaryLight text-primary",
        // Rétrocompatibilité via intent/type
        default: "bg-defaultLight text-dark",
      },
      size: {
        xs: "text-[10px] px-1.5 py-0.5 rounded",
        sm: "text-xs px-2 py-0.5 rounded-md",
        md: "text-sm px-3 py-1 rounded-lg",
        lg: "text-base px-4 py-1.5 rounded-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
      rounded: "lg",
    },
  }
);

/** Mappe l'ancienne prop `type` vers `variant`. */
function resolveVariant(variant, type) {
  if (variant) return variant;
  const typeMap = {
    default: "neutral",
    primary: "primary",
    info: "info",
    danger: "danger",
    success: "success",
  };
  return typeMap[type] || "neutral";
}

const Badge = forwardRef(
  ({ children, variant, type, size, rounded, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        badgeVariants({ variant: resolveVariant(variant, type), size, rounded }),
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);

Badge.displayName = "Badge";

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "success", "warning", "danger", "info", "neutral", "primary", "default",
  ]),
  type: PropTypes.oneOf(["default", "primary", "info", "danger", "success"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
  className: PropTypes.string,
};

Badge.defaultProps = {
  variant: "neutral",
  size: "md",
  rounded: "lg",
  className: "",
};

export default Badge;
export { badgeVariants };
