import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const dividerVariants = cva("flex items-center w-full", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col h-full",
    },
    intent: {
      default: "text-gray3",
      muted: "text-gray2",
      primary: "text-primary/40",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    intent: "default",
  },
});

const lineVariants = cva("flex-1 bg-current opacity-30", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
    thickness: {
      thin: "",
      medium: "",
      thick: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", thickness: "thin", className: "h-px" },
    { orientation: "horizontal", thickness: "medium", className: "h-0.5" },
    { orientation: "horizontal", thickness: "thick", className: "h-1" },
    { orientation: "vertical", thickness: "thin", className: "w-px" },
    { orientation: "vertical", thickness: "medium", className: "w-0.5" },
    { orientation: "vertical", thickness: "thick", className: "w-1" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    thickness: "thin",
  },
});

const Divider = forwardRef(
  ({ label, orientation, intent, thickness, className, ...props }, ref) => {
    if (!label) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation={orientation}
          className={cn(lineVariants({ orientation, thickness }), "opacity-100 bg-gray2", className)}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(dividerVariants({ orientation, intent }), "gap-3", className)}
        {...props}
      >
        <span className={cn(lineVariants({ orientation, thickness }))} aria-hidden="true" />
        <span className="text-xs font-medium shrink-0">{label}</span>
        <span className={cn(lineVariants({ orientation, thickness }))} aria-hidden="true" />
      </div>
    );
  }
);

Divider.displayName = "Divider";

Divider.propTypes = {
  label: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  intent: PropTypes.oneOf(["default", "muted", "primary"]),
  thickness: PropTypes.oneOf(["thin", "medium", "thick"]),
  className: PropTypes.string,
};

Divider.defaultProps = {
  orientation: "horizontal",
  intent: "default",
  thickness: "thin",
  className: "",
};

export default Divider;
export { dividerVariants };
