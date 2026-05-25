import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const labelVariants = cva("inline-block font-medium transition-colors", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    intent: {
      default: "text-dark",
      muted: "text-gray3",
      danger: "text-danger",
      success: "text-success",
    },
    required: {
      true: "after:content-['*'] after:ml-0.5 after:text-danger",
      false: "",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    size: "sm",
    intent: "default",
    required: false,
    disabled: false,
  },
});

const Label = forwardRef(
  (
    { htmlFor, size, intent, required, disabled, className, children, ...props },
    ref
  ) => (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(labelVariants({ size, intent, required, disabled }), className)}
      {...props}
    >
      {children}
    </label>
  )
);

Label.displayName = "Label";

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  intent: PropTypes.oneOf(["default", "muted", "danger", "success"]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Label.defaultProps = {
  size: "sm",
  intent: "default",
  required: false,
  disabled: false,
  className: "",
};

export default Label;
export { labelVariants };
