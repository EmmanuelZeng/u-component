
import React from "react";
import PropTypes from "prop-types";

const RolesPermissionsTable = ({ roles, className }) => (
  <div className={`overflow-auto rounded-3xl border border-gray2 bg-white ${className}`}>
    <table className="min-w-full divide-y divide-gray2">
      <thead className="bg-gray1">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray4">Rôle</th>
          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray4">Permissions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray2">
        {roles.map((role) => (
          <tr key={role.key}>
            <td className="px-4 py-3 text-sm text-dark">{role.label}</td>
            <td className="px-4 py-3 text-sm text-gray4">{role.permissions.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

RolesPermissionsTable.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, label: PropTypes.string, permissions: PropTypes.arrayOf(PropTypes.string) })),
  className: PropTypes.string,
};

RolesPermissionsTable.defaultProps = {
  roles: [],
  className: "",
};

export default RolesPermissionsTable;
