import React from "react";
import PropTypes from "prop-types";

/**
 * Simple toggle switch atom
 */
const Toggle = ({ checked, onChange, disabled, className, ...props }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange && onChange(!checked)}
      disabled={disabled}
      className={`relative inline-flex items-center h-6 rounded-full transition-colors focus:outline-none ${
        checked ? "bg-primary" : "bg-gray-300"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      {...props}
    >
      <span
        className={`inline-block w-5 h-5 bg-white rounded-full transform transition-transform ${
          checked ? "translate-x-3" : "translate-x-0"
        }`}
      />
    </button>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Toggle.defaultProps = {
  checked: false,
  onChange: () => {},
  disabled: false,
  className: "",
};

export default Toggle;
