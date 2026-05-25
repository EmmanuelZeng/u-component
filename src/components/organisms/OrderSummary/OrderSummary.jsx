
import React from "react";
import PropTypes from "prop-types";
import CardSurface from "../../atoms/CardSurface/CardSurface.jsx";

const OrderSummary = ({ items, subtotal, taxes, total, className }) => (
  <CardSurface className={`space-y-4 rounded-3xl border p-6 ${className}`}>
    <h3 className="text-lg font-semibold text-dark">Résumé de la commande</h3>
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between text-sm text-gray4">
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
    <div className="space-y-2 border-t border-gray2 pt-4 text-sm text-gray4">
      <div className="flex justify-between"><span>Sous-total</span><span>{subtotal}</span></div>
      <div className="flex justify-between"><span>Taxes</span><span>{taxes}</span></div>
    </div>
    <div className="flex justify-between text-lg font-semibold text-dark">
      <span>Total</span>
      <span>{total}</span>
    </div>
  </CardSurface>
);

OrderSummary.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string, price: PropTypes.string })),
  subtotal: PropTypes.string,
  taxes: PropTypes.string,
  total: PropTypes.string,
  className: PropTypes.string,
};

OrderSummary.defaultProps = {
  items: [],
  subtotal: "",
  taxes: "",
  total: "",
  className: "",
};

export default OrderSummary;
