import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const linkVariants = cva(
  "inline-flex items-center gap-1 transition-colors underline-offset-4 hover:underline active:opacity-80",
  {
    variants: {
      variant: {
        default: "text-dark hover:text-primary",
        primary: "text-primary hover:text-darkBlue",
        muted: "text-gray3 hover:text-dark",
        danger: "text-danger hover:text-[#c32020]",
        ghost: "text-dark no-underline hover:text-primary hover:underline",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      weight: "medium",
    },
  }
);

const Link = forwardRef(
  (
    {
      href,
      variant,
      size,
      weight,
      external,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    if (disabled) {
      return (
        <span
          ref={ref}
          role="link"
          aria-disabled="true"
          className={cn(
            linkVariants({ variant, size, weight }),
            disabledStyles,
            "pointer-events-none",
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size, weight }), focusRing, className)}
        {...externalProps}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(["default", "primary", "muted", "danger", "ghost"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  weight: PropTypes.oneOf(["normal", "medium", "semibold", "bold"]),
  external: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Link.defaultProps = {
  href: "#",
  variant: "primary",
  size: "md",
  weight: "medium",
  external: false,
  disabled: false,
  className: "",
};

export default Link;
export { linkVariants };
