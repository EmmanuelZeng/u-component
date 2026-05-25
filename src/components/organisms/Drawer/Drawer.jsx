
import React from "react";
import PropTypes from "prop-types";
import Overlay from "../../atoms/Overlay/Overlay.jsx";
import Button from "../../atoms/Button/Button.jsx";

const Drawer = ({ open, title, children, onClose, className }) => {
  if (!open) return null;
  return (
    <Overlay className="fixed inset-0 z-40 bg-black/40 p-4">
      <div className={`absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto rounded-l-3xl bg-white p-6 shadow-2xl ${className}`}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-dark">{title}</h2>
          <Button type="ghost" size="sm" onClick={onClose} aria-label="Fermer le tiroir">×</Button>
        </div>
        {children}
      </div>
    </Overlay>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

Drawer.defaultProps = {
  open: false,
  title: "",
  children: null,
  onClose: () => {},
  className: "",
};

export default Drawer;
