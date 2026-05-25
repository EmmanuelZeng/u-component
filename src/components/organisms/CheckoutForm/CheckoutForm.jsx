
import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input.jsx";
import Label from "../../atoms/Label/Label.jsx";
import SelectField from "../../molecules/SelectField/SelectField.jsx";
import Button from "../../atoms/Button/Button.jsx";

const CheckoutForm = ({ values, onChange, onSubmit, paymentOptions, className }) => (
  <form className={`space-y-4 ${className}`} onSubmit={onSubmit}>
    <div className="flex flex-col gap-2">
      <Label htmlFor="fullname">Nom complet</Label>
      <Input
        id="fullname"
        value={values.fullname}
        onChange={(event) => onChange({ ...values, fullname: event.target.value })}
      />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="address">Adresse</Label>
      <Input
        id="address"
        value={values.address}
        onChange={(event) => onChange({ ...values, address: event.target.value })}
      />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="postal">Code postal</Label>
      <Input
        id="postal"
        value={values.postal}
        onChange={(event) => onChange({ ...values, postal: event.target.value })}
      />
    </div>
    <SelectField label="Mode de paiement" value={values.payment} onChange={(event) => onChange({ ...values, payment: event.target.value })}>
      {paymentOptions.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </SelectField>
    <Button type="primary" size="md" submit>
      Commander
    </Button>
  </form>
);

CheckoutForm.propTypes = {
  values: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  paymentOptions: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  className: PropTypes.string,
};

CheckoutForm.defaultProps = {
  values: {},
  onChange: () => {},
  onSubmit: () => {},
  paymentOptions: [],
  className: "",
};

export default CheckoutForm;
