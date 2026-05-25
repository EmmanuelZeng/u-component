
import React from "react";
import PropTypes from "prop-types";
import CardSurface from "../../atoms/CardSurface/CardSurface.jsx";

const StatCard = ({ title, value, delta, description, className }) => (
  <CardSurface className={`rounded-3xl border p-5 ${className}`}>
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-gray4">{title}</p>
      <p className="text-3xl font-semibold text-dark">{value}</p>
      {delta && <span className="text-sm text-primary">{delta}</span>}
      {description && <p className="text-sm text-gray4">{description}</p>}
    </div>
  </CardSurface>
);

StatCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delta: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

StatCard.defaultProps = {
  title: "Statistique",
  value: "0",
  delta: "",
  description: "",
  className: "",
};

export default StatCard;
