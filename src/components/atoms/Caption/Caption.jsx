import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const captionVariants = cva("block leading-snug", {
  variants: {
    size: {
      xs: "text-[10px]",
      sm: "text-xs",
      md: "text-sm",
    },
    intent: {
      default: "text-gray3",
      muted: "text-gray2",
      danger: "text-danger",
      success: "text-success",
      primary: "text-primary",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "sm",
    intent: "default",
    align: "left",
  },
});

const Caption = forwardRef(
  ({ as, size, intent, align, className, children, ...props }, ref) => {
    const Tag = as || "span";

    return (
      <Tag
        ref={ref}
        className={cn(captionVariants({ size, intent, align }), className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Caption.displayName = "Caption";

Caption.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["span", "figcaption", "p"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  intent: PropTypes.oneOf(["default", "muted", "danger", "success", "primary"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
};

Caption.defaultProps = {
  as: "span",
  size: "sm",
  intent: "default",
  align: "left",
  className: "",
};

export default Caption;
export { captionVariants };
