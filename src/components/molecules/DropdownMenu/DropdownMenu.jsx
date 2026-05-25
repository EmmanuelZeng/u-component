
import React from "react";
import PropTypes from "prop-types";
import ClickAway from "../../atoms/ClickAway/ClickAway.jsx";

const DropdownMenu = ({ triggerLabel, items, className, ...props }) => (
  <ClickAway
    {...props}
    triggerLabel={triggerLabel}
    triggerVariant="outline"
    popoverClassName={`min-w-[220px] rounded-xl bg-white p-2 shadow-lg ${className}`}
    getListContent={(close) => (
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => {
              item.onClick?.();
              close();
            }}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-dark transition hover:bg-gray1"
            disabled={item.disabled}
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
  />
);

DropdownMenu.propTypes = {
  triggerLabel: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
};

DropdownMenu.defaultProps = {
  triggerLabel: "Menu",
  items: [],
  className: "",
};

export default DropdownMenu;
