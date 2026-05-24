import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const spinnerVariants = cva("animate-spin rounded-full border-current border-t-transparent", {
  variants: {
    size: {
      xs: "h-3 w-3 border",
      sm: "h-4 w-4 border-2",
      md: "h-6 w-6 border-2",
      lg: "h-8 w-8 border-[3px]",
      xl: "h-12 w-12 border-4",
    },
    intent: {
      default: "text-primary",
      primary: "text-primary",
      white: "text-white",
      muted: "text-gray2",
      danger: "text-danger",
      success: "text-success",
    },
  },
  defaultVariants: {
    size: "md",
    intent: "default",
  },
});

const Spinner = forwardRef(
  ({ size, intent, label = "Chargement...", className, ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <span className={cn(spinnerVariants({ size, intent }))} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  )
);

Spinner.displayName = "Spinner";

Spinner.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: PropTypes.oneOf(["default", "primary", "white", "muted", "danger", "success"]),
  label: PropTypes.string,
  className: PropTypes.string,
};

Spinner.defaultProps = {
  size: "md",
  intent: "default",
  label: "Chargement...",
  className: "",
};

export default Spinner;
export { spinnerVariants };
