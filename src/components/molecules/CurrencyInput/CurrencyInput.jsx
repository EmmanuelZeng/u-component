
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input.jsx";

const CurrencyInput = forwardRef(
  ({ label, helperText, currency, error, className, fullWidth, size, variant, ...props }, ref) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-dark" htmlFor={props.id}>
          {label}
        </label>
      )}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-gray3">
          {currency}
        </span>
        <Input
          ref={ref}
          id={props.id}
          type="number"
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          error={error}
          className="pl-12"
          aria-invalid={error || undefined}
          {...props}
        />
      </div>
      {helperText && <span className="text-xs text-gray2">{helperText}</span>}
    </div>
  )
);

CurrencyInput.displayName = "CurrencyInput";

CurrencyInput.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  currency: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["default", "filled", "flushed", "outline"]),
};

CurrencyInput.defaultProps = {
  currency: "€",
  className: "",
  fullWidth: true,
  size: "md",
  variant: "default",
  error: false,
};

export default CurrencyInput;
