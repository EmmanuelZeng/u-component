
import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchInput from "../../atoms/SearchInput/SearchInput.jsx";

const CommandPalette = ({ commands, onSelect, className }) => {
  const [query, setQuery] = useState("");
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={`rounded-3xl border border-gray2 bg-white p-4 ${className}`}>
      <SearchInput value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une commande" />
      <div className="mt-4 max-h-72 space-y-2 overflow-auto">
        {filtered.map((command) => (
          <button
            key={command.label}
            type="button"
            onClick={() => onSelect(command)}
            className="w-full rounded-2xl px-4 py-3 text-left text-sm text-dark transition hover:bg-gray1"
          >
            <div className="font-medium">{command.label}</div>
            {command.description && <div className="text-xs text-gray4">{command.description}</div>}
          </button>
        ))}
      </div>
    </div>
  );
};

CommandPalette.propTypes = {
  commands: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
  className: PropTypes.string,
};

CommandPalette.defaultProps = {
  commands: [],
  onSelect: () => {},
  className: "",
};

export default CommandPalette;
