import React from "react";
import PropTypes from "prop-types";
import SearchInput from "../../atoms/SearchInput/SearchInput.jsx";
import Button from "../../atoms/Button/Button.jsx";

/**
 * SearchField molecule: input + search button
 */
const SearchField = ({ value, onChange, onSearch, placeholder, className, ...props }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <SearchInput value={value} onChange={onChange} placeholder={placeholder} {...props} />
      <Button onClick={onSearch} type="primary" size="small">
        Rechercher
      </Button>
    </div>
  );
};

SearchField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

SearchField.defaultProps = {
  value: "",
  onChange: () => {},
  onSearch: () => {},
  placeholder: "Rechercher...",
  className: "",
};

export default SearchField;
