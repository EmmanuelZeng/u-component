import React from "react";
import PropTypes from "prop-types";
import "./../../../main.css";
/**
 * Component allowing to manage a button
 *
 * ### Usage
 *
 * ```jsx
 * <Button>
 *  My button
 * </Button>
 * ```
 */

const Button = ({
  fullWidth,
  isLoading,
  variant,
  children,
  type,
  size,
  submit,
  className,
  onclick,
  disabled,
  ...props
}) => {
  const WFull = fullWidth ? "w-full" : "";
  const styleButton =
    variant === "text"
      ? `btn-text-${type}`
      : variant === "outlined"
      ? `btn-outline-${type}`
      : `btn-${type}`;
  const dis = disabled ? true : isLoading ? true : false;
  return (
    <button
      onClick={onclick}
      {...props}
      type={`${submit ? "submit" : ""}`}
      disabled={dis}
      className={`
                btn ${styleButton}
                ${WFull}
                ${dis ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
                ${size}
                ${className}`}
    >
      {isLoading ? "Traitement..." : children}
    </button>
  );
};

Button.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.any.isRequired,
  /**
   * The color of component
   */
  type: PropTypes.oneOf(["default", "primary", "info", "danger", "success"]),
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["filled", "outlined", "text"]),
  /**
   * Loading state.
   */
  isLoading: PropTypes.bool,
  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  type: "default",
  children: "My button",
  fullWidth: false,
  variant: "filled",
  isLoading: false,
  size: "medium",
};

export default Button;
