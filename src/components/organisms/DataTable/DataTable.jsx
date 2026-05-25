
import React from "react";
import PropTypes from "prop-types";

const DataTable = ({ columns, rows, className }) => (
  <div className={`overflow-auto rounded-3xl border border-gray2 bg-white ${className}`}>
    <table className="min-w-full divide-y divide-gray2">
      <thead className="bg-gray1">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray4">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray2">
        {rows.map((row, index) => (
          <tr key={index} className="hover:bg-gray1">
            {columns.map((column) => (
              <td key={column.key} className="px-4 py-3 text-sm text-dark">
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string.isRequired, title: PropTypes.string.isRequired, render: PropTypes.func })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

DataTable.defaultProps = {
  columns: [],
  rows: [],
  className: "",
};

export default DataTable;
