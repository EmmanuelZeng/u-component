
import React from "react";
import PropTypes from "prop-types";

const AuditLogsViewer = ({ logs, className }) => (
  <div className={`rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <h3 className="mb-4 text-lg font-semibold text-dark">Journaux d'audit</h3>
    <div className="space-y-3">
      {logs.map((log) => (
        <div key={log.id} className="rounded-3xl border border-gray1 bg-gray1/50 p-4">
          <p className="text-sm font-semibold text-dark">{log.action}</p>
          <p className="text-xs text-gray5">{log.time} · {log.user}</p>
          <p className="mt-2 text-sm text-gray4">{log.detail}</p>
        </div>
      ))}
    </div>
  </div>
);

AuditLogsViewer.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, action: PropTypes.string, time: PropTypes.string, user: PropTypes.string, detail: PropTypes.string })),
  className: PropTypes.string,
};

AuditLogsViewer.defaultProps = {
  logs: [],
  className: "",
};

export default AuditLogsViewer;
