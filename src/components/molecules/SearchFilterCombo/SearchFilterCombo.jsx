
import React from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FilterBar from "../FilterBar/FilterBar.jsx";

const SearchFilterCombo = ({ searchValue, onSearchChange, onSearch, filters, selectedFilter, onFilterChange, className }) => (
  <div className={`space-y-4 ${className}`}>
    <SearchBar value={searchValue} onChange={onSearchChange} onSearch={onSearch} />
    <FilterBar
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
      filters={filters}
      selectedFilter={selectedFilter}
      onFilterChange={onFilterChange}
    />
  </div>
);

SearchFilterCombo.propTypes = {
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func,
  onSearch: PropTypes.func,
  filters: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  selectedFilter: PropTypes.string,
  onFilterChange: PropTypes.func,
  className: PropTypes.string,
};

SearchFilterCombo.defaultProps = {
  searchValue: "",
  onSearchChange: () => {},
  onSearch: () => {},
  filters: [],
  selectedFilter: "",
  onFilterChange: () => {},
  className: "",
};

export default SearchFilterCombo;
