import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "transition-all duration-200",
    "active:scale-95",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-darkBlue active:bg-dark",
        secondary: "bg-gray1 text-dark hover:bg-gray2/30 active:bg-gray2/50",
        outline:
          "border border-gray2 bg-white text-dark hover:bg-gray1 active:bg-gray2/20",
        ghost: "bg-transparent text-dark hover:bg-gray1 active:bg-gray2/20",
        destructive:
          "bg-danger text-white hover:bg-[#c32020] active:bg-[#a81a1a]",
        // Rétrocompatibilité
        contained: "",
        outlined: "",
      },
      size: {
        xs: "h-7 w-7 p-1",
        sm: "h-8 w-8 p-1.5",
        md: "h-10 w-10 p-2",
        lg: "h-12 w-12 p-2.5",
        xl: "h-14 w-14 p-3",
        smaller: "h-6 w-6 p-1",
        small: "h-8 w-8 p-1.5",
        medium: "h-10 w-10 p-2",
        large: "h-12 w-12 p-2.5",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        className: "bg-default text-dark hover:bg-gray1",
      },
      {
        variant: "outlined",
        className: "border border-gray2 bg-white text-dark hover:bg-gray1",
      },
    ],
    defaultVariants: {
      variant: "ghost",
      size: "md",
      rounded: "md",
    },
  }
);

function resolveVariant(variant, type) {
  if (["primary", "secondary", "outline", "ghost", "destructive"].includes(variant)) {
    return variant;
  }
  if (variant === "outlined") return "outline";
  if (variant === "contained") {
    const typeMap = {
      primary: "primary",
      danger: "destructive",
      default: "secondary",
      info: "primary",
      success: "primary",
    };
    return typeMap[type] || "secondary";
  }
  return variant || "ghost";
}

const IconButton = forwardRef(
  (
    {
      children,
      variant,
      type,
      size,
      rounded,
      disabled,
      loading,
      className,
      onClick,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const resolvedVariant = resolveVariant(variant, type);

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-label={ariaLabel}
        onClick={onClick}
        className={cn(
          iconButtonVariants({ variant: resolvedVariant, size, rounded }),
          loading && "cursor-wait opacity-70",
          className
        )}
        {...props}
      >
        {loading ? (
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : (
          children
        )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary", "secondary", "outline", "ghost", "destructive",
    "contained", "outlined",
  ]),
  type: PropTypes.oneOf(["default", "primary", "info", "danger", "success"]),
  size: PropTypes.oneOf([
    "xs", "sm", "md", "lg", "xl", "smaller", "small", "medium", "large",
  ]),
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  "aria-label": PropTypes.string,
};

IconButton.defaultProps = {
  variant: "ghost",
  type: "default",
  size: "md",
  rounded: "md",
  disabled: false,
  loading: false,
  className: "",
};

export default IconButton;
export { iconButtonVariants };
