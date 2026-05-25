
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const AccountSecuritySection = ({ lastLogin, passwordAge, onChangePassword, onManageTwoFactor, className }) => (
  <section className={`space-y-4 rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <h3 className="text-lg font-semibold text-dark">Sécurité du compte</h3>
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-3xl border border-gray1 bg-gray1/50 p-4">
        <p className="text-sm text-gray4">Dernière connexion</p>
        <p className="mt-2 font-semibold text-dark">{lastLogin}</p>
      </div>
      <div className="rounded-3xl border border-gray1 bg-gray1/50 p-4">
        <p className="text-sm text-gray4">Âge du mot de passe</p>
        <p className="mt-2 font-semibold text-dark">{passwordAge}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-3">
      <Button type="secondary" size="sm" onClick={onChangePassword}>
        Changer le mot de passe
      </Button>
      <Button type="secondary" size="sm" onClick={onManageTwoFactor}>
        Gérer la 2FA
      </Button>
    </div>
  </section>
);

AccountSecuritySection.propTypes = {
  lastLogin: PropTypes.string,
  passwordAge: PropTypes.string,
  onChangePassword: PropTypes.func,
  onManageTwoFactor: PropTypes.func,
  className: PropTypes.string,
};

AccountSecuritySection.defaultProps = {
  lastLogin: "Inconnu",
  passwordAge: "Inconnu",
  onChangePassword: () => {},
  onManageTwoFactor: () => {},
  className: "",
};

export default AccountSecuritySection;
