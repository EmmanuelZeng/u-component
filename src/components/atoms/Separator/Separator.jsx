import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const separatorVariants = cva("shrink-0 bg-gray2", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full self-stretch",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    intent: {
      default: "bg-gray2",
      muted: "bg-gray1",
      primary: "bg-primary/20",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", size: "sm", className: "h-px" },
    { orientation: "horizontal", size: "md", className: "h-0.5" },
    { orientation: "horizontal", size: "lg", className: "h-1" },
    { orientation: "vertical", size: "sm", className: "w-px" },
    { orientation: "vertical", size: "md", className: "w-0.5" },
    { orientation: "vertical", size: "lg", className: "w-1" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    size: "sm",
    intent: "default",
  },
});

const Separator = forwardRef(
  ({ orientation, size, intent, decorative = true, className, ...props }, ref) => (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(separatorVariants({ orientation, size, intent }), className)}
      {...props}
    />
  )
);

Separator.displayName = "Separator";

Separator.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  intent: PropTypes.oneOf(["default", "muted", "primary"]),
  decorative: PropTypes.bool,
  className: PropTypes.string,
};

Separator.defaultProps = {
  orientation: "horizontal",
  size: "sm",
  intent: "default",
  decorative: true,
  className: "",
};

export default Separator;
export { separatorVariants };
