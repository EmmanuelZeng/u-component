import React from "react";
import PropTypes from "prop-types";
import "./../../../main.css";

const SelectInput = ({
  children,
  variant,
  size,
  required,
  placeholder,
  fullWidth,
  disabled,
  label,
  id,
  labelprops,
  error,
  helperText,
  className,
  ...others
}) => {
  const textColor = error ? 'danger' : 'gray5';
  const Variant = variant === "outlined" ? `border border-gray2` : "bg-gray1";
  const width = fullWidth ? "w-full" : "w-fit";
  return (
    <div className={`relative flex flex-col ${width} ${className}`}>
      <label
        className={`text-small text-${textColor} mx-2`} {...labelprops} htmlFor={`${id ? id : ''}`}
      >
        {label}{required ? <span className='text-danger'>*</span> : ""}
      </label>
      <select
        className={`${Variant} text-${textColor} text-sm focus:outline-none w-full rounded-lg ${size} px-5`}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        {...others}
      >
        {children}
      </select>
      {
        error &&
        <span className='text-danger text-xs ml-2'>{helperText}</span>
      }
    </div>
  );
};

SelectInput.propTypes = {
  /**
     * The size of the component.
     */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * The variant of the component.
   */
  variant: PropTypes.oneOf(["filled", "outlined"]),
  /**
   * The state of the component width
   */
  fullWidth: PropTypes.bool,
  /**
   * Whether the input is required or not
   */
  required: PropTypes.bool,
  /**
   * The input disabled state
   */
  disabled: PropTypes.bool,
  /**
   * The label of the input
   */
  label: PropTypes.string,
  /**
   * An object containg the other props of the label
   */
  labelprops: PropTypes.object,
  /**
   * The input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * An object containg the other props of the input
   */
  error: PropTypes.bool,
  /**
   * The helper text
   */
  helperText: PropTypes.string,
  /**
   * The class name of the container div 
   */
  className: PropTypes.string
};

SelectInput.defaultProps = {
  size: "medium",
  variant: "outlined",
  labelprops: {}
};

export default SelectInput;