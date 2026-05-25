
import React from "react";
import PropTypes from "prop-types";
import DataTable from "../DataTable/DataTable.jsx";

const AdvancedTable = ({ columns, rows, toolbar, className }) => (
  <div className={`space-y-4 ${className}`}>
    {toolbar && <div className="flex flex-wrap items-center justify-between gap-3">{toolbar}</div>}
    <DataTable columns={columns} rows={rows} />
  </div>
);

AdvancedTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  toolbar: PropTypes.node,
  className: PropTypes.string,
};

AdvancedTable.defaultProps = {
  columns: [],
  rows: [],
  toolbar: null,
  className: "",
};

export default AdvancedTable;
