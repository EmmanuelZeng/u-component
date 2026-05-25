
import React from "react";
import PropTypes from "prop-types";
import SelectField from "../SelectField/SelectField.jsx";

const SortSelector = ({ label, options, value, onChange, className }) => (
  <SelectField
    label={label}
    value={value}
    onChange={onChange}
    className={className}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </SelectField>
);

SortSelector.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

SortSelector.defaultProps = {
  label: "Trier",
  options: [],
  value: "",
  onChange: () => {},
  className: "",
};

export default SortSelector;
