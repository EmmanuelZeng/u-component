import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const blockquoteVariants = cva("border-l-4 pl-4 italic", {
  variants: {
    intent: {
      default: "border-gray2 text-gray4",
      primary: "border-primary text-primary",
      muted: "border-gray1 text-gray3 bg-gray1/50 py-2 pr-4 rounded-r-lg",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
  },
});

const Blockquote = forwardRef(
  ({ intent, size, cite, className, children, ...props }, ref) => (
    <blockquote
      ref={ref}
      cite={cite}
      className={cn(blockquoteVariants({ intent, size }), className)}
      {...props}
    >
      {children}
    </blockquote>
  )
);

Blockquote.displayName = "Blockquote";

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  intent: PropTypes.oneOf(["default", "primary", "muted"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  cite: PropTypes.string,
  className: PropTypes.string,
};

Blockquote.defaultProps = {
  intent: "default",
  size: "md",
  className: "",
};

export default Blockquote;
export { blockquoteVariants };
