
import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductCardGrid = ({ products, className }) => (
  <div className={`grid gap-4 sm:grid-cols-2 xl:grid-cols-3 ${className}`}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

ProductCardGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

ProductCardGrid.defaultProps = {
  products: [],
  className: "",
};

export default ProductCardGrid;
