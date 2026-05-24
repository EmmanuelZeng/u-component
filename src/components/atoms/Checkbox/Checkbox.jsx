import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const checkboxVariants = cva(
  [
    "peer shrink-0 appearance-none",
    "border-2 border-gray2 bg-white",
    "checked:bg-primary checked:border-primary",
    "transition-colors duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-4 w-4 rounded",
        md: "h-5 w-5 rounded",
        lg: "h-6 w-6 rounded-md",
        small: "h-4 w-4 rounded",
        medium: "h-5 w-5 rounded",
        large: "h-6 w-6 rounded-md",
      },
      error: {
        true: "border-danger checked:bg-danger checked:border-danger",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

const Checkbox = forwardRef(
  (
    {
      name,
      label,
      value,
      onChange,
      checked,
      defaultChecked,
      fullWidth,
      required,
      disabled,
      labelProps = {},
      inputProps = {},
      id,
      size,
      error,
      className,
      ...props
    },
    ref
  ) => {
    const { labelClassName, ...otherLabelProps } = labelProps;
    const { inputClassName, ...otherInputProps } = inputProps;
    const inputId = id || `checkbox-${name || "input"}`;
    const width = fullWidth ? "w-full" : "w-fit";
    const textColor = error ? "text-danger" : "text-dark";

    return (
      <div className={cn("flex items-center gap-2", width, className)}>
        <div className="relative inline-flex items-center">
          <input
            ref={ref}
            type="checkbox"
            name={name}
            id={inputId}
            value={value}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-invalid={error || undefined}
            className={cn(checkboxVariants({ size, error }), inputClassName)}
            {...otherInputProps}
            {...props}
          />
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm cursor-pointer select-none",
              textColor,
              disabled && "opacity-50 cursor-not-allowed",
              labelClassName
            )}
            {...otherLabelProps}
          >
            {label}
            {required && <span className="text-danger ml-0.5">*</span>}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  id: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "small", "medium", "large"]),
  error: PropTypes.bool,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  name: "",
  labelProps: {},
  inputProps: {},
  error: false,
  size: "md",
  className: "",
};

export default Checkbox;
export { checkboxVariants };
