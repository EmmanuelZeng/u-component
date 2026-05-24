import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const radioVariants = cva(
  [
    "peer shrink-0 appearance-none",
    "border-2 border-gray2 bg-white rounded-full",
    "checked:border-primary",
    "transition-colors duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        small: "h-4 w-4",
        medium: "h-5 w-5",
        large: "h-6 w-6",
      },
      error: {
        true: "border-danger checked:border-danger",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

const Radio = forwardRef(
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
    const inputId = id || `radio-${name}-${value}`;
    const width = fullWidth ? "w-full" : "w-fit";
    const textColor = error ? "text-danger" : "text-dark";

    return (
      <div className={cn("flex items-center gap-2", width, className)}>
        <div className="relative inline-flex items-center">
          <input
            ref={ref}
            type="radio"
            name={name}
            id={inputId}
            value={value}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-invalid={error || undefined}
            className={cn(radioVariants({ size, error }), inputClassName)}
            {...otherInputProps}
            {...props}
          />
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 peer-checked:opacity-100"
            aria-hidden="true"
          />
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

Radio.displayName = "Radio";

Radio.propTypes = {
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

Radio.defaultProps = {
  name: "",
  labelProps: {},
  inputProps: {},
  error: false,
  size: "md",
  className: "",
};

export default Radio;
export { radioVariants };
