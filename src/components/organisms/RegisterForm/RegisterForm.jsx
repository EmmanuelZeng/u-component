
import React from "react";
import PropTypes from "prop-types";
import EmailInput from "../../molecules/EmailInput/EmailInput.jsx";
import PasswordInput from "../../molecules/PasswordInput/PasswordInput.jsx";
import Input from "../../atoms/Input/Input.jsx";
import Label from "../../atoms/Label/Label.jsx";
import Button from "../../atoms/Button/Button.jsx";

const RegisterForm = ({ values, onChange, onSubmit, className }) => (
  <form className={`space-y-4 ${className}`} onSubmit={onSubmit}>
    <div className="flex flex-col gap-2">
      <Label htmlFor="name">Nom</Label>
      <Input
        id="name"
        type="text"
        placeholder="Votre nom"
        value={values.name}
        onChange={(event) => onChange({ ...values, name: event.target.value })}
      />
    </div>
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
    <Button type="primary" size="md" submit>
      S'inscrire
    </Button>
  </form>
);

RegisterForm.propTypes = {
  values: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string, password: PropTypes.string }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

RegisterForm.defaultProps = {
  values: { name: "", email: "", password: "" },
  onChange: () => {},
  onSubmit: () => {},
  className: "",
};

export default RegisterForm;
