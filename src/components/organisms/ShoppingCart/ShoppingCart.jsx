
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const ShoppingCart = ({ items, total, onCheckout, className }) => (
  <section className={`space-y-4 rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <h2 className="text-lg font-semibold text-dark">Panier</h2>
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-3 rounded-3xl border border-gray2 p-4">
          <div>
            <p className="font-semibold text-dark">{item.title}</p>
            <p className="text-sm text-gray4">{item.quantity} × {item.price}</p>
          </div>
          <p className="font-semibold text-dark">{item.total}</p>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between border-t border-gray2 pt-4">
      <span className="text-sm text-gray4">Total</span>
      <span className="text-lg font-semibold text-dark">{total}</span>
    </div>
    <Button type="primary" size="md" fullWidth onClick={onCheckout}>
      Passer à la caisse
    </Button>
  </section>
);

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, quantity: PropTypes.number, price: PropTypes.string, total: PropTypes.string })),
  total: PropTypes.string,
  onCheckout: PropTypes.func,
  className: PropTypes.string,
};

ShoppingCart.defaultProps = {
  items: [],
  total: "",
  onCheckout: () => {},
  className: "",
};

export default ShoppingCart;
