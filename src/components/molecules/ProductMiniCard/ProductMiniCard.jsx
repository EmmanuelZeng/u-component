
import React from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/Image.jsx";
import Badge from "../../atoms/Badge/Badge.jsx";

const ProductMiniCard = ({ image, title, price, badge, className, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group flex items-center gap-3 rounded-3xl border border-gray2 bg-white p-3 text-left transition hover:border-primary hover:bg-gray1 ${className}`}
  >
    {image && <Image src={image.src} alt={image.alt} className="h-16 w-16 rounded-2xl object-cover" />}
    <div className="min-w-0 flex-1">
      <p className="font-semibold text-dark truncate">{title}</p>
      <p className="text-sm text-gray4">{price}</p>
    </div>
    {badge && <Badge>{badge}</Badge>}
  </button>
);

ProductMiniCard.propTypes = {
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  title: PropTypes.string,
  price: PropTypes.string,
  badge: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ProductMiniCard.defaultProps = {
  image: {},
  title: "Produit",
  price: "",
  badge: "",
  className: "",
  onClick: () => {},
};

export default ProductMiniCard;
