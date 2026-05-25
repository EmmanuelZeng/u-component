
import React from "react";
import PropTypes from "prop-types";
import Overlay from "../../atoms/Overlay/Overlay.jsx";

const Sheet = ({ open, title, children, onClose, position, className }) => {
  if (!open) return null;

  const placement = {
    bottom: "bottom-0 left-0 right-0 rounded-t-3xl",
    top: "top-0 left-0 right-0 rounded-b-3xl",
  }[position] || "bottom-0 left-0 right-0 rounded-t-3xl";

  return (
    <Overlay className="fixed inset-0 z-40 bg-black/40 p-4">
      <div className={`absolute ${placement} bg-white p-6 shadow-2xl ${className}`}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-dark">{title}</h2>
          <button type="button" className="text-xl" onClick={onClose} aria-label="Fermer">×</button>
        </div>
        {children}
      </div>
    </Overlay>
  );
};

Sheet.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(["top", "bottom"]),
  className: PropTypes.string,
};

Sheet.defaultProps = {
  open: false,
  title: "",
  children: null,
  onClose: () => {},
  position: "bottom",
  className: "",
};

export default Sheet;
