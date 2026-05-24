import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles, errorRing } from "../../../lib/utils";

const comboboxTriggerVariants = cva(
  [
    "inline-flex items-center gap-2",
    "text-dark cursor-text",
    "transition-colors duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border border-gray2 bg-white hover:border-gray3",
        filled: "border border-transparent bg-gray1 hover:bg-gray1/80",
        outline: "border-2 border-gray2 bg-white hover:border-primary/50",
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-5 text-base rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto min-w-[200px]",
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

const SearchIcon = () => (
  <svg className="h-4 w-4 shrink-0 text-gray3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

const ComboboxTrigger = forwardRef(
  (
    {
      value,
      placeholder = "Rechercher...",
      onChange,
      variant,
      size,
      fullWidth,
      error,
      disabled,
      open,
      showSearchIcon = true,
      className,
      ...props
    },
    ref
  ) => (
    <div
      className={cn(
        comboboxTriggerVariants({ variant, size, fullWidth, error }),
        className
      )}
    >
      {showSearchIcon && <SearchIcon />}
      <input
        ref={ref}
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        aria-invalid={error || undefined}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className="flex-1 bg-transparent outline-none placeholder:text-gray2 min-w-0"
        {...props}
      />
    </div>
  )
);

ComboboxTrigger.displayName = "ComboboxTrigger";

ComboboxTrigger.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["default", "filled", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  showSearchIcon: PropTypes.bool,
  className: PropTypes.string,
};

ComboboxTrigger.defaultProps = {
  placeholder: "Rechercher...",
  variant: "default",
  size: "md",
  fullWidth: true,
  error: false,
  disabled: false,
  open: false,
  showSearchIcon: true,
  className: "",
};

export default ComboboxTrigger;
export { comboboxTriggerVariants };
