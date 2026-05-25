
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label.jsx";

const MultiSelect = forwardRef(
  ({ label, helperText, options, selected, onChange, className, fullWidth, size, disabled, ...props }, ref) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <select
        ref={ref}
        id={props.id}
        multiple
        value={selected}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-lg border border-gray2 bg-white px-4 py-2 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary ${fullWidth ? "w-full" : "w-auto"}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <span className="text-xs text-gray2">{helperText}</span>}
    </div>
  )
);

MultiSelect.displayName = "MultiSelect";

MultiSelect.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  selected: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  disabled: PropTypes.bool,
};

MultiSelect.defaultProps = {
  className: "",
  options: [],
  selected: [],
  onChange: () => {},
  fullWidth: true,
  size: "md",
  disabled: false,
};

export default MultiSelect;
