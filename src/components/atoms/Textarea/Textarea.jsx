import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles, errorRing } from "../../../lib/utils";

const textareaVariants = cva(
  [
    "w-full text-dark placeholder:text-gray2 resize-y min-h-[80px]",
    "transition-colors duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border border-gray2 bg-white hover:border-gray3",
        filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
        flushed:
          "border-0 border-b-2 border-gray2 bg-transparent rounded-none hover:border-gray3 px-0",
        outline: "border-2 border-gray2 bg-white hover:border-primary/50",
        // Rétrocompatibilité
        outlined: "border border-gray2 bg-white hover:border-gray3",
      },
      size: {
        xs: "px-2.5 py-1.5 text-xs rounded-md min-h-[60px]",
        sm: "px-3 py-2 text-sm rounded-md min-h-[72px]",
        md: "px-4 py-2.5 text-sm rounded-lg min-h-[96px]",
        lg: "px-5 py-3 text-base rounded-lg min-h-[120px]",
        small: "px-3 py-2 text-sm rounded-md",
        medium: "px-4 py-2.5 text-sm rounded-lg",
        large: "px-5 py-3 text-base rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      error: {
        true: errorRing,
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: true,
      error: false,
    },
  }
);

/**
 * Composant textarea atomique.
 * Conserve l'API composée (label, helperText) pour la rétrocompatibilité.
 */
const Textarea = forwardRef(
  (
    {
      variant,
      value,
      onChange,
      style,
      label,
      id,
      fullWidth,
      size,
      required,
      placeholder,
      disabled,
      inputProps,
      labelProps,
      error,
      helperText,
      className,
      ...props
    },
    ref
  ) => {
    const textColor = error ? "text-danger" : "text-gray3";
    const width = fullWidth ? "w-full" : "w-fit";

    const textareaEl = (
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={style}
        disabled={disabled}
        id={id || undefined}
        aria-invalid={error || undefined}
        aria-describedby={error && helperText ? `${id}-error` : undefined}
        className={cn(
          textareaVariants({ variant, size, fullWidth, error }),
          props.className
        )}
        {...inputProps}
        {...props}
      />
    );

    if (!label && !error) {
      return textareaEl;
    }

    return (
      <div className={cn("relative flex flex-col gap-1", width, className)}>
        {label && (
          <label
            className={cn("text-sm mx-1", textColor)}
            htmlFor={id || undefined}
            {...labelProps}
          >
            {label}
            {required && <span className="text-danger ml-0.5">*</span>}
          </label>
        )}
        {textareaEl}
        {error && helperText && (
          <span id={`${id}-error`} className="text-danger text-xs ml-1" role="alert">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  variant: PropTypes.oneOf(["default", "filled", "flushed", "outline", "outlined"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  inputProps: PropTypes.object,
  labelProps: PropTypes.object,
};

Textarea.defaultProps = {
  variant: "outline",
  size: "md",
  fullWidth: true,
  required: false,
  disabled: false,
  error: false,
  helperText: "",
  inputProps: {},
  labelProps: {},
  className: "",
};

export default Textarea;
export { textareaVariants };
