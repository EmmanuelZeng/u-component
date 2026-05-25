
import React from "react";
import PropTypes from "prop-types";

const ChartsPanel = ({ title, children, className }) => (
  <div className={`rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    {title && <h3 className="mb-4 text-lg font-semibold text-dark">{title}</h3>}
    {children}
  </div>
);

ChartsPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

ChartsPanel.defaultProps = {
  title: "",
  children: null,
  className: "",
};

export default ChartsPanel;
