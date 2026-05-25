
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import SearchInput from "../../atoms/SearchInput/SearchInput.jsx";
import Button from "../../atoms/Button/Button.jsx";

const SearchBar = forwardRef(
  ({ value, onChange, onSearch, placeholder, className, ...props }, ref) => (
    <div className={`flex flex-col gap-2 sm:flex-row sm:items-center ${className}`}>
      <SearchInput
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1"
        {...props}
      />
      <Button onClick={onSearch} type="primary" size="md" className="w-full sm:w-auto">
        Rechercher
      </Button>
    </div>
  )
);

SearchBar.displayName = "SearchBar";

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  value: "",
  onChange: () => {},
  onSearch: () => {},
  placeholder: "Rechercher...",
  className: "",
};

export default SearchBar;
