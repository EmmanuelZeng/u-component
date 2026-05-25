import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const paragraphVariants = cva("leading-relaxed", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    intent: {
      default: "text-dark",
      muted: "text-gray3",
      primary: "text-primary",
      danger: "text-danger",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    intent: "default",
    align: "left",
    weight: "normal",
  },
});

const Paragraph = forwardRef(
  ({ size, intent, align, weight, className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(paragraphVariants({ size, intent, align, weight }), className)}
      {...props}
    >
      {children}
    </p>
  )
);

Paragraph.displayName = "Paragraph";

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: PropTypes.oneOf(["default", "muted", "primary", "danger"]),
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  weight: PropTypes.oneOf(["normal", "medium", "semibold", "bold"]),
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  size: "md",
  intent: "default",
  align: "left",
  weight: "normal",
  className: "",
};

export default Paragraph;
export { paragraphVariants };
