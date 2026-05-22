import React from "react";
import PropTypes from "prop-types";
import "./../../../main.css";

/**
 * Component allowing to manage the Card
 *
 * ### Usage
 * ```jsx
 * <Card>
 *  Card content
 * </Card>
 * ```
 */

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The class name of the component.
   */
  className: PropTypes.string,
};

Card.defaultProps = {
  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
};
export default Card;