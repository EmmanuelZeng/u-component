import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles } from "../../../lib/utils";

const switchTrackVariants = cva(
  [
    "relative inline-flex shrink-0 cursor-pointer items-center",
    "rounded-full transition-colors duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
      intent: {
        default: "",
        primary: "",
        success: "",
        danger: "",
      },
      checked: {
        true: "",
        false: "bg-gray2",
      },
    },
    compoundVariants: [
      { checked: true, intent: "default", className: "bg-primary" },
      { checked: true, intent: "primary", className: "bg-primary" },
      { checked: true, intent: "success", className: "bg-success" },
      { checked: true, intent: "danger", className: "bg-danger" },
    ],
    defaultVariants: {
      size: "md",
      intent: "primary",
      checked: false,
    },
  }
);

const switchThumbVariants = cva(
  "pointer-events-none inline-block rounded-full bg-white shadow-sm transition-transform duration-200",
  {
    variants: {
      size: {
        sm: "h-4 w-4 translate-x-0.5",
        md: "h-5 w-5 translate-x-0.5",
        lg: "h-6 w-6 translate-x-0.5",
      },
      checked: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", checked: true, className: "translate-x-[18px]" },
      { size: "md", checked: true, className: "translate-x-[22px]" },
      { size: "lg", checked: true, className: "translate-x-[30px]" },
    ],
    defaultVariants: {
      size: "md",
      checked: false,
    },
  }
);

const Switch = forwardRef(
  (
    {
      checked,
      defaultChecked = false,
      onChange,
      disabled,
      size,
      intent,
      className,
      id,
      name,
      value,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : defaultChecked;

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        id={id}
        name={name}
        value={value}
        aria-checked={isChecked}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => {
          if (!disabled && onChange) {
            onChange(!isChecked);
          }
        }}
        className={cn(
          switchTrackVariants({ size, intent, checked: isChecked }),
          className
        )}
        {...props}
      >
        <span
          className={switchThumbVariants({ size, checked: isChecked })}
          aria-hidden="true"
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";

Switch.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  intent: PropTypes.oneOf(["default", "primary", "success", "danger"]),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

Switch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  size: "md",
  intent: "primary",
  className: "",
};

export default Switch;
export { switchTrackVariants };
