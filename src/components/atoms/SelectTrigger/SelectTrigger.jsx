import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles, errorRing } from "../../../lib/utils";

const selectTriggerVariants = cva(
  [
    "inline-flex items-center justify-between gap-2",
    "text-dark cursor-pointer",
    "transition-colors duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border border-gray2 bg-white hover:border-gray3",
        filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
        outline: "border-2 border-gray2 bg-white hover:border-primary/50",
      },
      size: {
        xs: "h-8 px-2.5 text-xs rounded-md",
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-5 text-base rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto min-w-[160px]",
      },
      error: {
        true: errorRing,
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: true,
      error: false,
    },
  }
);

const ChevronIcon = () => (
  <svg
    className="h-4 w-4 shrink-0 text-gray3"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const SelectTrigger = forwardRef(
  (
    {
      children,
      placeholder = "Sélectionner...",
      variant,
      size,
      fullWidth,
      error,
      disabled,
      open,
      className,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      role="combobox"
      aria-expanded={open}
      aria-haspopup="listbox"
      disabled={disabled}
      aria-invalid={error || undefined}
      className={cn(
        selectTriggerVariants({ variant, size, fullWidth, error }),
        className
      )}
      {...props}
    >
      <span className={cn("truncate", !children && "text-gray2")}>
        {children || placeholder}
      </span>
      <ChevronIcon />
    </button>
  )
);

SelectTrigger.displayName = "SelectTrigger";

SelectTrigger.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["default", "filled", "outline"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  className: PropTypes.string,
};

SelectTrigger.defaultProps = {
  placeholder: "Sélectionner...",
  variant: "default",
  size: "md",
  fullWidth: true,
  error: false,
  disabled: false,
  open: false,
  className: "",
};

export default SelectTrigger;
export { selectTriggerVariants };
