
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input.jsx";

const DatePickerInput = forwardRef(
  ({ label, helperText, error, className, fullWidth, size, variant, ...props }, ref) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-dark" htmlFor={props.id}>
          {label}
        </label>
      )}
      <Input
        ref={ref}
        id={props.id}
        type="date"
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        error={error}
        aria-invalid={error || undefined}
        {...props}
      />
      {helperText && <span className="text-xs text-gray2">{helperText}</span>}
    </div>
  )
);

DatePickerInput.displayName = "DatePickerInput";

DatePickerInput.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["default", "filled", "flushed", "outline"]),
};

DatePickerInput.defaultProps = {
  className: "",
  fullWidth: true,
  size: "md",
  variant: "default",
  error: false,
};

export default DatePickerInput;
