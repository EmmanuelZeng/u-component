
import React from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SelectField from "../SelectField/SelectField.jsx";

const FilterBar = ({ searchValue, onSearchChange, onSearch, filters, selectedFilter, onFilterChange, className }) => (
  <div className={`flex flex-col gap-4 rounded-3xl border border-gray2 bg-white p-4 sm:flex-row sm:items-center ${className}`}>
    <SearchBar value={searchValue} onChange={onSearchChange} onSearch={onSearch} className="flex-1" />
    <SelectField
      label="Filtrer"
      value={selectedFilter}
      onChange={onFilterChange}
      className="w-full sm:w-64"
    >
      {filters.map((filter) => (
        <option key={filter.value} value={filter.value}>
          {filter.label}
        </option>
      ))}
    </SelectField>
  </div>
);

FilterBar.propTypes = {
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func,
  onSearch: PropTypes.func,
  filters: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  selectedFilter: PropTypes.string,
  onFilterChange: PropTypes.func,
  className: PropTypes.string,
};

FilterBar.defaultProps = {
  searchValue: "",
  onSearchChange: () => {},
  onSearch: () => {},
  filters: [],
  selectedFilter: "",
  onFilterChange: () => {},
  className: "",
};

export default FilterBar;
