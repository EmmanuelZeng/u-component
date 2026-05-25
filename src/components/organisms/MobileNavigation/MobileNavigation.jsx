
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const MobileNavigation = ({ items, activeKey, onChange, className }) => (
  <nav className={`fixed bottom-0 left-0 right-0 z-30 border-t border-gray2 bg-white px-4 py-3 shadow-lg ${className}`}>
    <div className="flex justify-between gap-2">
      {items.map((item) => (
        <Button
          key={item.key}
          type={item.key === activeKey ? "primary" : "ghost"}
          size="sm"
          onClick={() => onChange(item.key)}
          className="flex-1"
        >
          {item.label}
        </Button>
      ))}
    </div>
  </nav>
);

MobileNavigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, label: PropTypes.node })),
  activeKey: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

MobileNavigation.defaultProps = {
  items: [],
  activeKey: "",
  onChange: () => {},
  className: "",
};

export default MobileNavigation;
