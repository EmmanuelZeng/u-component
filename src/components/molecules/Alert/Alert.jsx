
import React from "react";
import PropTypes from "prop-types";
import AlertAtom from "../../atoms/Alert/Alert.jsx";

const Alert = ({ variant, title, description, icon, className, ...props }) => (
  <AlertAtom
    type={variant === "danger" ? "danger" : variant === "warning" ? "warning" : variant === "success" ? "success" : "default"}
    className={className}
    {...props}
  >
    <div className="flex items-start gap-3">
      {icon && <span className="mt-1">{icon}</span>}
      <div>
        {title && <p className="font-semibold text-dark">{title}</p>}
        {description && <p className="text-sm text-gray4">{description}</p>}
      </div>
    </div>
  </AlertAtom>
);

Alert.propTypes = {
  variant: PropTypes.oneOf(["default", "success", "warning", "danger", "info"]),
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
};

Alert.defaultProps = {
  variant: "default",
  title: "",
  description: "",
  icon: null,
  className: "",
};

export default Alert;
