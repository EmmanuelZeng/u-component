import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing } from "../../../lib/utils";

const headingVariants = cva("font-bold tracking-tight text-dark", {
  variants: {
    level: {
      1: "text-4xl sm:text-5xl",
      2: "text-3xl sm:text-4xl",
      3: "text-2xl sm:text-3xl",
      4: "text-xl sm:text-2xl",
      5: "text-lg sm:text-xl",
      6: "text-base sm:text-lg",
    },
    intent: {
      default: "text-dark",
      primary: "text-primary",
      muted: "text-gray3",
      danger: "text-danger",
      success: "text-success",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    level: 2,
    intent: "default",
    align: "left",
  },
});

const TAG_MAP = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

/**
 * Composant titre sémantique avec variants typographiques.
 */
const Heading = forwardRef(
  ({ as, level, intent, align, className, children, ...props }, ref) => {
    const Tag = as || TAG_MAP[level] || "h2";

    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, intent, align }), focusRing, className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  intent: PropTypes.oneOf(["default", "primary", "muted", "danger", "success"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 2,
  intent: "default",
  align: "left",
  className: "",
};

export default Heading;
export { headingVariants };
