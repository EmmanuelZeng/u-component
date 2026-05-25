
import React from "react";
import PropTypes from "prop-types";
import EmailInput from "../../molecules/EmailInput/EmailInput.jsx";
import Button from "../../atoms/Button/Button.jsx";

const ForgotPasswordForm = ({ email, onChange, onSubmit, className }) => (
  <form className={`space-y-4 ${className}`} onSubmit={onSubmit}>
    <EmailInput id="email" label="Email" value={email} onChange={(event) => onChange(event.target.value)} />
    <Button type="primary" size="md" submit>
      Réinitialiser le mot de passe
    </Button>
  </form>
);

ForgotPasswordForm.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

ForgotPasswordForm.defaultProps = {
  email: "",
  onChange: () => {},
  onSubmit: () => {},
  className: "",
};

export default ForgotPasswordForm;
