
import React, { useState } from "react";
import PropTypes from "prop-types";

const MediaUploadZone = ({ onDrop, children, className }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    onDrop(Array.from(event.dataTransfer.files));
  };

  return (
    <div
      className={`flex min-h-[180px] flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 py-10 text-center transition ${dragging ? "border-primary bg-primary/10" : "border-gray2 bg-white"} ${className}`}
      onDragEnter={handleDragEnter}
      onDragOver={(event) => event.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children || (
        <>
          <p className="font-semibold text-dark">Glissez et déposez vos fichiers ici</p>
          <p className="mt-2 text-sm text-gray4">ou cliquez pour sélectionner manuellement</p>
        </>
      )}
    </div>
  );
};

MediaUploadZone.propTypes = {
  onDrop: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

MediaUploadZone.defaultProps = {
  onDrop: () => {},
  children: null,
  className: "",
};

export default MediaUploadZone;
