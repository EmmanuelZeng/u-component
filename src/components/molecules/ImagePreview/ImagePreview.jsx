
import React from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/Image.jsx";

const ImagePreview = ({ src, alt, caption, onRemove, className }) => (
  <div className={`group relative overflow-hidden rounded-3xl border border-gray2 bg-white ${className}`}>
    <Image src={src} alt={alt} className="h-56 w-full object-cover" />
    {caption && <div className="p-3 text-sm text-gray4">{caption}</div>}
    {onRemove && (
      <button
        type="button"
        onClick={onRemove}
        className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray5 transition hover:bg-white"
        aria-label="Supprimer l'image"
      >
        ×
      </button>
    )}
  </div>
);

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  onRemove: PropTypes.func,
  className: PropTypes.string,
};

ImagePreview.defaultProps = {
  alt: "Image preview",
  caption: "",
  onRemove: null,
  className: "",
};

export default ImagePreview;
