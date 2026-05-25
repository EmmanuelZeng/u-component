
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const Header = ({ title, subtitle, primaryAction, secondaryAction, className }) => (
  <header className={`space-y-4 rounded-3xl border border-gray2 bg-white p-8 ${className}`}>
    <div>
      <h1 className="text-3xl font-semibold text-dark">{title}</h1>
      {subtitle && <p className="mt-2 text-sm text-gray4">{subtitle}</p>}
    </div>
    <div className="flex flex-wrap gap-3">
      {primaryAction && (
        <Button type="primary" onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Button>
      )}
      {secondaryAction && (
        <Button type="secondary" onClick={secondaryAction.onClick}>
          {secondaryAction.label}
        </Button>
      )}
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primaryAction: PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func }),
  secondaryAction: PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func }),
  className: PropTypes.string,
};

Header.defaultProps = {
  title: "",
  subtitle: "",
  primaryAction: null,
  secondaryAction: null,
  className: "",
};

export default Header;
