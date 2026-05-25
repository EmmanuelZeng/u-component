import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const sliderVariants = cva(
  [
    "w-full appearance-none cursor-pointer",
    "bg-gray2 rounded-full",
    "transition-colors duration-200",
    focusRing,
    disabledStyles,
    "[&::-webkit-slider-thumb]:appearance-none",
    "[&::-webkit-slider-thumb]:rounded-full",
    "[&::-webkit-slider-thumb]:bg-primary",
    "[&::-webkit-slider-thumb]:cursor-pointer",
    "[&::-webkit-slider-thumb]:shadow-md",
    "[&::-webkit-slider-thumb]:transition-transform",
    "[&::-webkit-slider-thumb]:hover:scale-110",
    "[&::-moz-range-thumb]:rounded-full",
    "[&::-moz-range-thumb]:bg-primary",
    "[&::-moz-range-thumb]:border-0",
    "[&::-moz-range-thumb]:cursor-pointer",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-1 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3",
        md: "h-1.5 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",
        lg: "h-2 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5",
      },
      intent: {
        default: "[&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:bg-primary",
        success: "[&::-webkit-slider-thumb]:bg-success [&::-moz-range-thumb]:bg-success",
        danger: "[&::-webkit-slider-thumb]:bg-danger [&::-moz-range-thumb]:bg-danger",
      },
      error: {
        true: "bg-danger/20",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      intent: "default",
      error: false,
    },
  }
);

const Slider = forwardRef(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      onChange,
      size,
      intent,
      error,
      disabled,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const handleChange = useCallback(
      (e) => onChange?.(Number(e.target.value)),
      [onChange]
    );

    return (
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-invalid={error || undefined}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value ?? defaultValue}
        onChange={handleChange}
        className={cn(sliderVariants({ size, intent, error }), className)}
        {...props}
      />
    );
  }
);

Slider.displayName = "Slider";

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  intent: PropTypes.oneOf(["default", "success", "danger"]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  size: "md",
  intent: "default",
  error: false,
  disabled: false,
  className: "",
};

export default Slider;
export { sliderVariants };
