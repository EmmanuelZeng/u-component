
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";
import Text from "../../atoms/Text/Text.jsx";

const EmptyState = ({ icon, title, description, actionLabel, onAction, className }) => (
  <div className={`flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-gray2 bg-white px-6 py-12 text-center ${className}`}>
    {icon && <div className="text-4xl text-primary">{icon}</div>}
    {title && <Text size="lg" weight="semibold">{title}</Text>}
    {description && <p className="max-w-md text-sm text-gray4">{description}</p>}
    {actionLabel && (
      <Button type="primary" size="md" onClick={onAction}>
        {actionLabel}
      </Button>
    )}
  </div>
);

EmptyState.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string,
};

EmptyState.defaultProps = {
  title: "Aucun contenu disponible",
  description: "Il n'y a rien à afficher pour le moment.",
  actionLabel: "Créer quelque chose",
  onAction: () => {},
  className: "",
};

export default EmptyState;
