import React from "react";
import PropTypes from "prop-types";

const IconExemple = () => {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const IconButton = ({ children, size, type, variant, className, onClick, ...other }) => {
  const styleButton =
    variant === "outlined" ? `btn-outline-${type}` : `btn-${type}`;
  const padding = size === 'smaller' ? '1' : size === 'small' ? '2' : size === 'medium' ? '2' : '4';
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styleButton} ${className} focus:outline-none font-medium rounded-md text-sm text-center inline-flex items-center p-${padding}`}
      {...other}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.object.isRequired,
  /**
   * The color of component
   */
  type: PropTypes.oneOf(["default", "primary", "info", "danger", "success"]),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["contained", "outlined"]),
  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

IconButton.defaultProps = {
  type: "default",
  children: IconExemple(),
  variant: "contained",
  size: 'medium'
};

export default IconButton;