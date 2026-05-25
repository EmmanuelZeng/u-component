
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const Tabs = ({ items, activeKey, onTabChange, className }) => (
  <div className={`space-y-4 ${className}`}>
    <div className="flex flex-wrap gap-2 border-b border-gray2 pb-2">
      {items.map((item) => (
        <Button
          key={item.key}
          type={item.key === activeKey ? "primary" : "ghost"}
          size="sm"
          onClick={() => onTabChange(item.key)}
          className="rounded-full"
        >
          {item.label}
        </Button>
      ))}
    </div>
    <div>{items.find((item) => item.key === activeKey)?.content}</div>
  </div>
);

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      content: PropTypes.node,
    })
  ),
  activeKey: PropTypes.string,
  onTabChange: PropTypes.func,
  className: PropTypes.string,
};

Tabs.defaultProps = {
  items: [],
  activeKey: "",
  onTabChange: () => {},
  className: "",
};

export default Tabs;
