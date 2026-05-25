
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const CRUDManagementPanel = ({ items, onAdd, onEdit, onDelete, className }) => (
  <div className={`space-y-4 rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="text-lg font-semibold text-dark">Gestion CRUD</h3>
      <Button type="primary" size="sm" onClick={onAdd}>Ajouter</Button>
    </div>
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-gray2 p-4">
          <div>
            <p className="font-semibold text-dark">{item.title}</p>
            <p className="text-sm text-gray4">{item.description}</p>
          </div>
          <div className="flex gap-2">
            <Button type="secondary" size="sm" onClick={() => onEdit(item)}>
              Modifier
            </Button>
            <Button type="destructive" size="sm" onClick={() => onDelete(item)}>
              Supprimer
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

CRUDManagementPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, description: PropTypes.string })),
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  className: PropTypes.string,
};

CRUDManagementPanel.defaultProps = {
  items: [],
  onAdd: () => {},
  onEdit: () => {},
  onDelete: () => {},
  className: "",
};

export default CRUDManagementPanel;
