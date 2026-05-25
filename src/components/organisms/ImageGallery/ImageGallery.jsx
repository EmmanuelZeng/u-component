
import React from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/Image.jsx";

const ImageGallery = ({ images, onSelect, className }) => (
  <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
    {images.map((image) => (
      <button key={image.id} type="button" onClick={() => onSelect(image)} className="overflow-hidden rounded-3xl border border-gray2 bg-gray1 transition hover:border-primary">
        <Image src={image.src} alt={image.alt} className="h-60 w-full object-cover" />
      </button>
    ))}
  </div>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, src: PropTypes.string, alt: PropTypes.string })),
  onSelect: PropTypes.func,
  className: PropTypes.string,
};

ImageGallery.defaultProps = {
  images: [],
  onSelect: () => {},
  className: "",
};

export default ImageGallery;
