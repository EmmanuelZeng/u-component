
import React from "react";
import PropTypes from "prop-types";
import OTPInput from "../../atoms/OTPInput/OTPInput.jsx";
import Button from "../../atoms/Button/Button.jsx";

const OTPVerificationForm = ({ code, onChange, onSubmit, className }) => (
  <form className={`space-y-4 ${className}`} onSubmit={onSubmit}>
    <OTPInput value={code} onChange={onChange} />
    <Button type="primary" size="md" submit>
      Vérifier
    </Button>
  </form>
);

OTPVerificationForm.propTypes = {
  code: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

OTPVerificationForm.defaultProps = {
  code: "",
  onChange: () => {},
  onSubmit: () => {},
  className: "",
};

export default OTPVerificationForm;
