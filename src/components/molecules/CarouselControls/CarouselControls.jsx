
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const CarouselControls = ({ onPrev, onNext, className }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <Button type="secondary" size="sm" onClick={onPrev} aria-label="Précédent">
      Précédent
    </Button>
    <Button type="secondary" size="sm" onClick={onNext} aria-label="Suivant">
      Suivant
    </Button>
  </div>
);

CarouselControls.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  className: PropTypes.string,
};

CarouselControls.defaultProps = {
  onPrev: () => {},
  onNext: () => {},
  className: "",
};

export default CarouselControls;
