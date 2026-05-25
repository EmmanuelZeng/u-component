import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const fabVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full shadow-lg",
    "transition-all duration-200",
    "hover:shadow-xl hover:scale-105",
    "active:scale-95",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-darkBlue",
        secondary: "bg-white text-dark hover:bg-gray1 border border-gray2",
        destructive: "bg-danger text-white hover:bg-[#c32020]",
        gradient: "bg-gradient-to-r from-primary to-indigo text-white",
      },
      size: {
        sm: "h-10 w-10",
        md: "h-14 w-14",
        lg: "h-16 w-16",
      },
      position: {
        static: "",
        fixed: "fixed bottom-6 right-6 z-50",
      },
      elevation: {
        sm: "shadow-md",
        md: "shadow-lg",
        lg: "shadow-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      position: "static",
      elevation: "md",
    },
  }
);

const FloatingActionButton = forwardRef(
  (
    {
      children,
      variant,
      size,
      position,
      elevation,
      disabled,
      loading,
      extended,
      label,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      aria-label={ariaLabel || label}
      aria-busy={loading || undefined}
      className={cn(
        fabVariants({ variant, size, position, elevation }),
        extended && "w-auto rounded-full px-5 gap-2",
        loading && "cursor-wait opacity-80",
        className
      )}
      {...props}
    >
      {loading ? (
        <span
          className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        children
      )}
      {extended && label && <span className="text-sm font-semibold">{label}</span>}
    </button>
  )
);

FloatingActionButton.displayName = "FloatingActionButton";

FloatingActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "destructive", "gradient"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  position: PropTypes.oneOf(["static", "fixed"]),
  elevation: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  extended: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};

FloatingActionButton.defaultProps = {
  variant: "primary",
  size: "md",
  position: "static",
  elevation: "md",
  disabled: false,
  loading: false,
  extended: false,
  className: "",
};

export default FloatingActionButton;
export { fabVariants };
