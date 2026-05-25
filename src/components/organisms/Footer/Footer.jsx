
import React from "react";
import PropTypes from "prop-types";

const Footer = ({ children, className }) => (
  <footer className={`border-t border-gray2 bg-white py-6 ${className}`}>
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-gray4 sm:flex-row">
      <div>{children}</div>
      <p>© {new Date().getFullYear()} Votre entreprise. Tous droits réservés.</p>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Footer.defaultProps = {
  children: null,
  className: "",
};

export default Footer;
