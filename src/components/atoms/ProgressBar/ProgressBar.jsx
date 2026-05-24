import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const progressBarVariants = cva("w-full overflow-hidden bg-gray1", {
  variants: {
    size: {
      xs: "h-1 rounded-full",
      sm: "h-1.5 rounded-full",
      md: "h-2 rounded-full",
      lg: "h-3 rounded-full",
    },
    intent: {
      default: "",
      primary: "",
      success: "",
      warning: "",
      danger: "",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    intent: "primary",
    rounded: "full",
  },
});

const fillVariants = cva("h-full transition-all duration-300 ease-out", {
  variants: {
    intent: {
      default: "bg-gray3",
      primary: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
    },
    indeterminate: {
      true: "w-1/3 animate-[progress-indeterminate_1.5s_ease-in-out_infinite]",
      false: "",
    },
  },
  defaultVariants: {
    intent: "primary",
    indeterminate: false,
  },
});

const ProgressBar = forwardRef(
  (
    {
      value = 0,
      max = 100,
      size,
      intent,
      rounded,
      indeterminate,
      showLabel,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className={cn("w-full", className)}>
        {showLabel && !indeterminate && (
          <div className="mb-1 flex justify-between text-xs text-gray3">
            <span>Progression</span>
            <span aria-hidden="true">{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label="Barre de progression"
          className={cn(progressBarVariants({ size, intent, rounded }))}
          {...props}
        >
          <div
            className={cn(
              fillVariants({ intent, indeterminate }),
              !indeterminate && "rounded-inherit"
            )}
            style={indeterminate ? undefined : { width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

ProgressBar.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  intent: PropTypes.oneOf(["default", "primary", "success", "warning", "danger"]),
  rounded: PropTypes.oneOf(["none", "sm", "md", "full"]),
  indeterminate: PropTypes.bool,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  value: 0,
  max: 100,
  size: "md",
  intent: "primary",
  rounded: "full",
  indeterminate: false,
  showLabel: false,
  className: "",
};

export default ProgressBar;
export { progressBarVariants };
