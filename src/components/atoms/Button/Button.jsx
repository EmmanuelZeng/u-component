import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg",
    "transition-all duration-200",
    "active:scale-[0.98]",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-darkBlue active:bg-dark",
        secondary: "bg-gray1 text-dark hover:bg-gray2/30 active:bg-gray2/50",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primaryLight active:bg-primary/10",
        ghost: "bg-transparent text-dark hover:bg-gray1 active:bg-gray2/20",
        destructive:
          "bg-danger text-white hover:bg-[#c32020] active:bg-[#a81a1a]",
        gradient:
          "bg-gradient-to-r from-primary to-indigo text-white hover:opacity-90 active:opacity-100",
        // Rétrocompatibilité avec l'ancienne API
        filled: "",
        outlined: "",
        text: "",
      },
      size: {
        xs: "text-xs px-2.5 py-1.5 min-h-[28px]",
        sm: "text-sm px-3 py-2 min-h-[32px]",
        md: "text-base px-4 py-2.5 min-h-[40px]",
        lg: "text-lg px-6 py-3 min-h-[48px]",
        xl: "text-xl px-8 py-4 min-h-[56px]",
        // Rétrocompatibilité
        small: "text-sm px-4 py-2 min-h-[32px]",
        medium: "text-base px-6 py-3 min-h-[40px]",
        large: "text-lg px-8 py-3 min-h-[48px]",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },
      elevation: {
        none: "",
        sm: "shadow-sm hover:shadow-md",
        md: "shadow-md hover:shadow-lg",
        lg: "shadow-lg hover:shadow-xl",
      },
    },
    compoundVariants: [
      { variant: "filled", className: "bg-default text-dark hover:bg-gray1" },
      {
        variant: "outlined",
        className:
          "border-2 border-gray2 bg-transparent text-dark hover:bg-gray1",
      },
      {
        variant: "text",
        className: "bg-transparent text-dark hover:bg-gray1",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      rounded: "md",
      elevation: "none",
    },
  }
);

/** Mappe l'ancienne API type + variant vers la nouvelle variante. */
function resolveVariant(variant, type) {
  if (["primary", "secondary", "outline", "ghost", "destructive", "gradient"].includes(variant)) {
    return variant;
  }
  if (variant === "outlined") return "outline";
  if (variant === "text") return "ghost";
  if (variant === "filled" && type) {
    const typeMap = {
      primary: "primary",
      danger: "destructive",
      success: "primary",
      info: "primary",
      default: "secondary",
    };
    return typeMap[type] || "primary";
  }
  return variant || "primary";
}

const Button = forwardRef(
  (
    {
      children,
      variant,
      type,
      size,
      fullWidth,
      rounded,
      elevation,
      isLoading,
      loading,
      disabled,
      className,
      onclick,
      onClick,
      submit,
      leftIcon,
      rightIcon,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading || loading;
    const resolvedVariant = resolveVariant(variant, type);
    const handleClick = onClick || onclick;

    return (
      <button
        ref={ref}
        type={submit ? "submit" : props.type || "button"}
        disabled={isDisabled}
        aria-busy={isLoading || loading || undefined}
        aria-disabled={isDisabled || undefined}
        aria-label={ariaLabel}
        onClick={handleClick}
        className={cn(
          buttonVariants({ variant: resolvedVariant, size, fullWidth, rounded, elevation }),
          (isLoading || loading) && "relative cursor-wait opacity-80",
          className
        )}
        {...props}
      >
        {leftIcon && !isLoading && !loading && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {isLoading || loading ? (
          <span className="inline-flex items-center gap-2">
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
            {typeof children === "string" ? children : "Chargement..."}
          </span>
        ) : (
          children
        )}
        {rightIcon && !isLoading && !loading && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary", "secondary", "outline", "ghost", "destructive", "gradient",
    "filled", "outlined", "text",
  ]),
  type: PropTypes.oneOf(["default", "primary", "info", "danger", "success"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "full"]),
  elevation: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  isLoading: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onclick: PropTypes.func,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

Button.defaultProps = {
  variant: "primary",
  type: "default",
  size: "md",
  fullWidth: false,
  rounded: "md",
  elevation: "none",
  isLoading: false,
  loading: false,
  disabled: false,
  className: "",
  submit: false,
};

export default Button;
export { buttonVariants };
