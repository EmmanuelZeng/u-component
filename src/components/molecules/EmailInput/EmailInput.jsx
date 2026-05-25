
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input.jsx";

const EmailInput = forwardRef(
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
        type="email"
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

EmailInput.displayName = "EmailInput";

EmailInput.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["default", "filled", "flushed", "outline"]),
};

EmailInput.defaultProps = {
  className: "",
  fullWidth: true,
  size: "md",
  variant: "default",
  error: false,
};

export default EmailInput;
