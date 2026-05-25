
import React from "react";
import PropTypes from "prop-types";
import CardSurface from "../../atoms/CardSurface/CardSurface.jsx";
import Button from "../../atoms/Button/Button.jsx";

const Toast = ({ variant, title, description, onClose, className, ...props }) => {
  const variantStyles = {
    default: "bg-white border border-gray2",
    success: "bg-emerald-50 border-emerald-200",
    warning: "bg-amber-50 border-amber-200",
    danger: "bg-red-50 border-red-200",
    info: "bg-sky-50 border-sky-200",
  };

  return (
    <CardSurface className={`p-4 ${variantStyles[variant] || variantStyles.default} ${className}`} {...props}>
      <div className="flex items-start justify-between gap-3">
        <div>
          {title && <p className="font-semibold text-dark">{title}</p>}
          {description && <p className="mt-1 text-sm text-gray4">{description}</p>}
        </div>
        {onClose && (
          <Button type="ghost" size="sm" onClick={onClose} aria-label="Fermer la notification">
            ×
          </Button>
        )}
      </div>
    </CardSurface>
  );
};

Toast.propTypes = {
  variant: PropTypes.oneOf(["default", "success", "warning", "danger", "info"]),
  title: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

Toast.defaultProps = {
  variant: "default",
  title: "",
  description: "",
  onClose: null,
  className: "",
};

export default Toast;
