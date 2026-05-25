
import React from "react";
import PropTypes from "prop-types";
import CardSurface from "../../atoms/CardSurface/CardSurface.jsx";

const InfoCard = ({ title, children, className }) => (
  <CardSurface className={`rounded-3xl border p-5 ${className}`}>
    {title && <h3 className="mb-3 text-lg font-semibold text-dark">{title}</h3>}
    <div className="text-sm text-gray4">{children}</div>
  </CardSurface>
);

InfoCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

InfoCard.defaultProps = {
  title: "",
  children: null,
  className: "",
};

export default InfoCard;
