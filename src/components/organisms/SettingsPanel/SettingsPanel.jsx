
import React from "react";
import PropTypes from "prop-types";
import Switch from "../../atoms/Switch/Switch.jsx";

const SettingsPanel = ({ settings, onToggle, className }) => (
  <div className={`space-y-4 rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    {settings.map((setting) => (
      <div key={setting.key} className="flex items-center justify-between gap-4 rounded-3xl border border-gray1 bg-gray1/50 p-4">
        <div>
          <p className="font-semibold text-dark">{setting.label}</p>
          {setting.description && <p className="text-sm text-gray4">{setting.description}</p>}
        </div>
        <Switch checked={setting.enabled} onChange={() => onToggle(setting.key)} />
      </div>
    ))}
  </div>
);

SettingsPanel.propTypes = {
  settings: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, label: PropTypes.string, description: PropTypes.string, enabled: PropTypes.bool })),
  onToggle: PropTypes.func,
  className: PropTypes.string,
};

SettingsPanel.defaultProps = {
  settings: [],
  onToggle: () => {},
  className: "",
};

export default SettingsPanel;
