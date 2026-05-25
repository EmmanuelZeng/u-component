
import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ children, className, ...props }) => (
  <tr className={className} {...props}>
    {children}
  </tr>
);

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TableRow.defaultProps = {
  className: "",
};

export default TableRow;
