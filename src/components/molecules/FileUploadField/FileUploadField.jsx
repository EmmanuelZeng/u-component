
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label.jsx";
import Button from "../../atoms/Button/Button.jsx";

const FileUploadField = forwardRef(
  ({ id, label, helperText, accept, disabled, fullWidth, className, onChange, buttonLabel, ...props }, ref) => (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={`flex flex-col sm:flex-row sm:items-center gap-2 ${fullWidth ? "w-full" : "w-fit"}`}>
        <input
          ref={ref}
          id={id}
          type="file"
          accept={accept}
          disabled={disabled}
          onChange={onChange}
          className="file:mr-4 file:rounded-full file:border-none file:bg-primary file:px-4 file:py-2 file:text-white file:transition file:hover:bg-primaryDark"
          {...props}
        />
        {buttonLabel && (
          <Button type="secondary" size="sm" disabled={disabled} onClick={() => ref?.current?.click()}>
            {buttonLabel}
          </Button>
        )}
      </div>
      {helperText && <span className="text-xs text-gray2">{helperText}</span>}
    </div>
  )
);

FileUploadField.displayName = "FileUploadField";

FileUploadField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  buttonLabel: PropTypes.string,
};

FileUploadField.defaultProps = {
  className: "",
  disabled: false,
  fullWidth: true,
  buttonLabel: "Sélectionner un fichier",
  onChange: () => {},
};

export default FileUploadField;
