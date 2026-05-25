import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing } from "../../../lib/utils";

const tagVariants = cva(
  [
    "inline-flex items-center gap-1.5 font-medium",
    "transition-colors duration-200",
    focusRing,
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-gray1 text-dark hover:bg-gray2/30",
        primary: "bg-primaryLight text-primary hover:bg-primary/10",
        success: "bg-successLight text-success hover:bg-success/10",
        warning: "bg-warningLight text-warning hover:bg-warning/10",
        danger: "bg-dangerLight text-danger hover:bg-danger/10",
        outline: "border border-gray2 bg-white text-dark hover:bg-gray1",
      },
      size: {
        sm: "text-xs px-2 py-0.5 rounded-md",
        md: "text-sm px-2.5 py-1 rounded-md",
        lg: "text-base px-3 py-1.5 rounded-lg",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      removable: {
        true: "pr-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
      removable: false,
    },
  }
);

const Tag = forwardRef(
  (
    {
      children,
      variant,
      size,
      rounded,
      removable,
      onRemove,
      disabled,
      className,
      ...props
    },
    ref
  ) => (
    <span
      ref={ref}
      className={cn(
        tagVariants({ variant, size, rounded, removable }),
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
      {removable && (
        <button
          type="button"
          disabled={disabled}
          aria-label="Supprimer le tag"
          onClick={onRemove}
          className="inline-flex items-center justify-center rounded-full p-0.5 hover:bg-black/10 transition-colors"
        >
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            <path d="M3 3l6 6M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  )
);

Tag.displayName = "Tag";

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full"]),
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Tag.defaultProps = {
  variant: "default",
  size: "md",
  rounded: "md",
  removable: false,
  disabled: false,
  className: "",
};

export default Tag;
export { tagVariants };
