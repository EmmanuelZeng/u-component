
import React from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/Image.jsx";
import Button from "../../atoms/Button/Button.jsx";

const ProductDetailsSection = ({ product, onAddToCart, className }) => (
  <section className={`grid gap-8 rounded-3xl border border-gray2 bg-white p-6 lg:grid-cols-[1.2fr_0.8fr] ${className}`}>
    <div className="space-y-4">
      <Image src={product.image.src} alt={product.image.alt} className="h-96 w-full rounded-3xl object-cover" />
      <div>
        <h2 className="text-2xl font-semibold text-dark">{product.title}</h2>
        <p className="mt-2 text-sm text-gray4">{product.description}</p>
      </div>
    </div>
    <div className="space-y-4 rounded-3xl border border-gray2 bg-gray1 p-6">
      <div>
        <p className="text-sm text-gray4">Prix</p>
        <p className="mt-2 text-3xl font-semibold text-dark">{product.price}</p>
      </div>
      <Button type="primary" size="lg" fullWidth onClick={onAddToCart}>
        Ajouter au panier
      </Button>
    </div>
  </section>
);

ProductDetailsSection.propTypes = {
  product: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string, price: PropTypes.string, image: PropTypes.object }),
  onAddToCart: PropTypes.func,
  className: PropTypes.string,
};

ProductDetailsSection.defaultProps = {
  product: { title: "", description: "", price: "", image: {} },
  onAddToCart: () => {},
  className: "",
};

export default ProductDetailsSection;
