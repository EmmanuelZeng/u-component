
import React from "react";
import PropTypes from "prop-types";
import ClickAway from "../../atoms/ClickAway/ClickAway.jsx";

const Popover = ({ triggerLabel, content, className, position, ...props }) => (
  <ClickAway
    {...props}
    triggerLabel={triggerLabel}
    triggerVariant="outline"
    popoverClassName={`rounded-3xl border border-gray2 bg-white p-3 shadow-lg ${className}`}
    position={position}
    getListContent={(close) => (
      <div className="space-y-2">{content}</div>
    )}
  />
);

Popover.propTypes = {
  triggerLabel: PropTypes.node,
  content: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(["left", "right", "center"]),
};

Popover.defaultProps = {
  triggerLabel: "Ouvrir",
  content: null,
  className: "",
  position: "left",
};

export default Popover;
