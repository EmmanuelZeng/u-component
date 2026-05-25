
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const FileManager = ({ files, onOpen, onUpload, className }) => (
  <div className={`space-y-4 rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="text-lg font-semibold text-dark">Gestion des fichiers</h3>
      <Button type="primary" size="sm" onClick={onUpload}>Téléverser</Button>
    </div>
    <div className="space-y-3">
      {files.map((file) => (
        <button key={file.id} type="button" onClick={() => onOpen(file)} className="flex w-full items-center justify-between rounded-3xl border border-gray2 p-4 text-left hover:bg-gray1">
          <div>
            <p className="font-semibold text-dark">{file.name}</p>
            <p className="text-sm text-gray4">{file.size}</p>
          </div>
          <span className="text-sm text-primary">Ouvrir</span>
        </button>
      ))}
    </div>
  </div>
);

FileManager.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string, size: PropTypes.string })),
  onOpen: PropTypes.func,
  onUpload: PropTypes.func,
  className: PropTypes.string,
};

FileManager.defaultProps = {
  files: [],
  onOpen: () => {},
  onUpload: () => {},
  className: "",
};

export default FileManager;
