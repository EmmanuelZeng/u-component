
import React from "react";
import PropTypes from "prop-types";
import EmailInput from "../../molecules/EmailInput/EmailInput.jsx";
import PasswordInput from "../../molecules/PasswordInput/PasswordInput.jsx";
import Button from "../../atoms/Button/Button.jsx";

const LoginForm = ({ values, onChange, onSubmit, onForgotPassword, className }) => (
  <form className={`space-y-4 ${className}`} onSubmit={onSubmit}>
    <EmailInput
      id="email"
      label="Email"
      value={values.email}
      onChange={(event) => onChange({ ...values, email: event.target.value })}
    />
    <PasswordInput
      id="password"
      label="Mot de passe"
      value={values.password}
      onChange={(event) => onChange({ ...values, password: event.target.value })}
    />
    <div className="flex flex-col items-end gap-2 sm:flex-row sm:justify-between">
      <button type="button" className="text-sm text-primary hover:underline" onClick={onForgotPassword}>
        Mot de passe oublié ?
      </button>
      <Button type="primary" size="md" submit>
        Se connecter
      </Button>
    </div>
  </form>
);

LoginForm.propTypes = {
  values: PropTypes.shape({ email: PropTypes.string, password: PropTypes.string }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onForgotPassword: PropTypes.func,
  className: PropTypes.string,
};

LoginForm.defaultProps = {
  values: { email: "", password: "" },
  onChange: () => {},
  onSubmit: () => {},
  onForgotPassword: () => {},
  className: "",
};

export default LoginForm;
