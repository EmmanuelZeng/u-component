import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing } from "../../../lib/utils";

const optionVariants = cva(
  [
    "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer",
    "transition-colors duration-150",
    "hover:bg-gray1 active:bg-gray2/20",
    focusRing,
  ].join(" "),
  {
    variants: {
      selected: {
        true: "bg-primaryLight text-primary font-medium",
        false: "text-dark",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  }
);

const Option = forwardRef(
  (
    {
      children,
      value,
      selected,
      disabled,
      className,
      onSelect,
      ...props
    },
    ref
  ) => (
    <li
      ref={ref}
      role="option"
      aria-selected={selected}
      aria-disabled={disabled || undefined}
      data-value={value}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onSelect?.(value)}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect?.(value);
        }
      }}
      className={cn(optionVariants({ selected, disabled }), className)}
      {...props}
    >
      {selected && (
        <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {children}
    </li>
  )
);

Option.displayName = "Option";

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onSelect: PropTypes.func,
};

Option.defaultProps = {
  selected: false,
  disabled: false,
  className: "",
};

export default Option;
export { optionVariants };
