import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const codeVariants = cva("font-mono", {
  variants: {
    variant: {
      inline: "inline rounded px-1.5 py-0.5 text-sm bg-gray1 text-dark",
      block: "block rounded-lg p-4 text-sm bg-dark text-white overflow-x-auto",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
    },
    intent: {
      default: "",
      primary: "text-primary",
      danger: "text-danger",
      success: "text-success",
    },
  },
  compoundVariants: [
    {
      variant: "block",
      intent: "default",
      className: "text-gray1",
    },
  ],
  defaultVariants: {
    variant: "inline",
    size: "sm",
    intent: "default",
  },
});

const Code = forwardRef(
  ({ as, variant, size, intent, className, children, ...props }, ref) => {
    const Tag = variant === "block" ? "pre" : "code";
    const InnerTag = variant === "block" ? "code" : React.Fragment;

    const content =
      variant === "block" ? (
        <code className="font-mono">{children}</code>
      ) : (
        children
      );

    return (
      <Tag
        ref={ref}
        className={cn(codeVariants({ variant, size, intent }), className)}
        {...props}
      >
        {content}
      </Tag>
    );
  }
);

Code.displayName = "Code";

Code.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["inline", "block"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  intent: PropTypes.oneOf(["default", "primary", "danger", "success"]),
  className: PropTypes.string,
};

Code.defaultProps = {
  variant: "inline",
  size: "sm",
  intent: "default",
  className: "",
};

export default Code;
export { codeVariants };
