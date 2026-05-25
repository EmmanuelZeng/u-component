
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import SelectInput from "../../atoms/SelectInput/SelectInput.jsx";

const SelectField = forwardRef(
  ({ label, helperText, error, className, fullWidth, size, variant, children, ...props }, ref) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-dark" htmlFor={props.id}>
          {label}
        </label>
      )}
      <SelectInput
        ref={ref}
        id={props.id}
        label=""
        variant={variant === "outline" || variant === "default" ? "outlined" : variant}
        size={size === "md" ? "medium" : size}
        fullWidth={fullWidth}
        disabled={props.disabled}
        {...props}
      >
        {children}
      </SelectInput>
      {helperText && <span className="text-xs text-gray2">{helperText}</span>}
    </div>
  )
);

SelectField.displayName = "SelectField";

SelectField.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["default", "filled", "flushed", "outline", "outlined"]),
  children: PropTypes.node,
};

SelectField.defaultProps = {
  className: "",
  fullWidth: true,
  size: "md",
  variant: "outline",
  error: false,
};

export default SelectField;
