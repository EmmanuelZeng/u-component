
import React from "react";
import PropTypes from "prop-types";

const DataCell = ({ children, className, ...props }) => (
  <td className={`px-4 py-3 align-top ${className}`} {...props}>
    {children}
  </td>
);

DataCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DataCell.defaultProps = {
  className: "",
};

export default DataCell;
