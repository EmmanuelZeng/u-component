
import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

const MenuItem = ({ icon, label, active, disabled, onClick, className, ...props }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "flex items-center gap-2 rounded-lg px-3 py-2 text-left transition hover:bg-gray1 w-full",
      active ? "bg-primary text-white" : "text-dark hover:bg-gray2",
      disabled && "cursor-not-allowed opacity-60",
      className
    )}
    {...props}
  >
    {icon && <span className="inline-flex shrink-0">{icon}</span>}
    <span>{label}</span>
  </button>
);

MenuItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.node.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

MenuItem.defaultProps = {
  active: false,
  disabled: false,
  onClick: () => {},
  className: "",
};

export default MenuItem;
