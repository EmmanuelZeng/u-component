
import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input.jsx";
import Button from "../../atoms/Button/Button.jsx";

const PasswordInput = forwardRef(
  ({ label, helperText, error, className, fullWidth, size, variant, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-dark" htmlFor={props.id}>
            {label}
          </label>
        )}
        <div className="relative w-full">
          <Input
            ref={ref}
            id={props.id}
            type={visible ? "text" : "password"}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            error={error}
            aria-invalid={error || undefined}
            {...props}
          />
          <Button
            type="ghost"
            size="sm"
            rounded="full"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => setVisible((current) => !current)}
            aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            {visible ? "Masquer" : "Afficher"}
          </Button>
        </div>
        {helperText && <span className="text-xs text-gray2">{helperText}</span>}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

PasswordInput.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["default", "filled", "flushed", "outline"]),
};

PasswordInput.defaultProps = {
  className: "",
  fullWidth: true,
  size: "md",
  variant: "default",
  error: false,
};

export default PasswordInput;
