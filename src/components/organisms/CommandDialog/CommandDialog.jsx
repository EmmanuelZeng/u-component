
import React from "react";
import PropTypes from "prop-types";
import Overlay from "../../atoms/Overlay/Overlay.jsx";
import SearchInput from "../../atoms/SearchInput/SearchInput.jsx";

const CommandDialog = ({ open, title, commands, query, onQueryChange, onSelect, onClose, className }) => {
  if (!open) return null;

  return (
    <Overlay className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
      <div className={`w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl ${className}`}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-dark">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Fermer">×</button>
        </div>
        <SearchInput value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Rechercher une commande" />
        <div className="mt-4 space-y-2 max-h-64 overflow-auto">
          {commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase())).map((command) => (
            <button
              key={command.label}
              type="button"
              className="w-full rounded-3xl border border-gray2 px-4 py-3 text-left transition hover:bg-gray1"
              onClick={() => onSelect(command)}
            >
              <p className="font-semibold text-dark">{command.label}</p>
              {command.description && <p className="text-sm text-gray4">{command.description}</p>}
            </button>
          ))}
        </div>
      </div>
    </Overlay>
  );
};

CommandDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  commands: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, description: PropTypes.string })),
  query: PropTypes.string,
  onQueryChange: PropTypes.func,
  onSelect: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

CommandDialog.defaultProps = {
  open: false,
  title: "",
  commands: [],
  query: "",
  onQueryChange: () => {},
  onSelect: () => {},
  onClose: () => {},
  className: "",
};

export default CommandDialog;
