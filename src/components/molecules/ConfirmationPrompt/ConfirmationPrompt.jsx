
import React from "react";
import PropTypes from "prop-types";
import CardSurface from "../../atoms/CardSurface/CardSurface.jsx";
import Button from "../../atoms/Button/Button.jsx";

const ConfirmationPrompt = ({ title, description, confirmLabel, cancelLabel, onConfirm, onCancel, className }) => (
  <CardSurface className={`space-y-4 rounded-xl border p-6 ${className}`}>
    <div>
      {title && <h2 className="text-lg font-semibold text-dark">{title}</h2>}
      {description && <p className="mt-2 text-sm text-gray4">{description}</p>}
    </div>
    <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
      <Button type="secondary" size="sm" onClick={onCancel} className="w-full sm:w-auto">
        {cancelLabel}
      </Button>
      <Button type="destructive" size="sm" onClick={onConfirm} className="w-full sm:w-auto">
        {confirmLabel}
      </Button>
    </div>
  </CardSurface>
);

ConfirmationPrompt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string,
};

ConfirmationPrompt.defaultProps = {
  title: "Confirmer l'action",
  description: "Voulez-vous continuer ?",
  confirmLabel: "Confirmer",
  cancelLabel: "Annuler",
  onConfirm: () => {},
  onCancel: () => {},
  className: "",
};

export default ConfirmationPrompt;
