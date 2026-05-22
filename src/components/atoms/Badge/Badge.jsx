import React from "react";
import PropTypes from "prop-types";
import "./../../../main.css";

/**
 * Component allowing to manage the Badge in the app
 *
 * ### Usage
 * ```jsx
 * <Badge />
 * ```
 *
 * ```jsx
 * <Badge type="primary">
 *  Pending
 * </Badge>
 * ```
 */

const Badge = ({ children, type }) => {
  return (
    <span
      className={`bg-${type} bg-opacity-30 text-${type} px-3 py-1 text-sm rounded-lg font-semibold`}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.string.isRequired,
  /**
   * The color of component
   */
  type: PropTypes.oneOf(["default", "primary", "info", "danger", "success"]),
};

Badge.defaultProps = {
  children: "primary",
  type: "default",
};

export default Badge;