
import React from "react";
import PropTypes from "prop-types";
import Text from "../../atoms/Text/Text.jsx";

const KeyValuePair = ({ label, value, className }) => (
  <div className={`grid gap-1 ${className}`}>
    <Text size="sm" className="font-semibold text-gray4">
      {label}
    </Text>
    <Text>{value}</Text>
  </div>
);

KeyValuePair.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
  className: PropTypes.string,
};

KeyValuePair.defaultProps = {
  value: "",
  className: "",
};

export default KeyValuePair;
