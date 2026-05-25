import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const iconVariants = cva("inline-flex shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
    intent: {
      default: "text-dark",
      primary: "text-primary",
      muted: "text-gray3",
      danger: "text-danger",
      success: "text-success",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    intent: "default",
  },
});

const Icon = forwardRef(
  ({ as: Component = "svg", size, intent, className, children, label, ...props }, ref) => (
    <Component
      ref={ref}
      aria-hidden={!label}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn(iconVariants({ size, intent }), className)}
      {...props}
    >
      {children}
    </Component>
  )
);

Icon.displayName = "Icon";

Icon.propTypes = {
  as: PropTypes.elementType,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: PropTypes.oneOf(["default", "primary", "muted", "danger", "success", "white"]),
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
};

Icon.defaultProps = {
  as: "svg",
  size: "md",
  intent: "default",
  className: "",
};

export default Icon;
export { iconVariants };
