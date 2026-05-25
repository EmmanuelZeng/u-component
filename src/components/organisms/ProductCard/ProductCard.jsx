import React from "react";
import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card.jsx";
import Button from "../../atoms/Button/Button.jsx";

/**
 * Simple product card organism
 */
const ProductCard = ({ title, description, price, image, onAdd, className }) => {
  return (
    <Card className={`p-4 max-w-xs ${className}`}>
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded" />}
      <h3 className="text-lg font-medium mt-3">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-primary font-semibold">{price}</span>
        <Button type="primary" size="small" onClick={onAdd}>
          Ajouter
        </Button>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  onAdd: PropTypes.func,
  className: PropTypes.string,
};

ProductCard.defaultProps = {
  description: "",
  price: "",
  image: "",
  onAdd: () => {},
  className: "",
};

export default ProductCard;
