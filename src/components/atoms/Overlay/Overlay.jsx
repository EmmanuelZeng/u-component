import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing } from "../../../lib/utils";

const overlayVariants = cva("fixed inset-0 z-40 flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-backdrop",
      light: "bg-white/60 backdrop-blur-sm",
      dark: "bg-black/70",
      transparent: "bg-transparent",
    },
    blur: {
      true: "backdrop-blur-sm",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    blur: false,
  },
});

const Overlay = forwardRef(
  (
    {
      open = true,
      variant,
      blur,
      onClose,
      closeOnClick = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    if (!open) return null;

    return (
      <div
        ref={ref}
        role="presentation"
        className={cn(overlayVariants({ variant, blur }), className)}
        onClick={closeOnClick ? onClose : undefined}
        onKeyDown={(e) => e.key === "Escape" && onClose?.()}
        {...props}
      >
        <div
          role="dialog"
          aria-modal="true"
          className="relative z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }
);

Overlay.displayName = "Overlay";

Overlay.propTypes = {
  open: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "light", "dark", "transparent"]),
  blur: PropTypes.bool,
  onClose: PropTypes.func,
  closeOnClick: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Overlay.defaultProps = {
  open: true,
  variant: "default",
  blur: false,
  closeOnClick: true,
  className: "",
};

export default Overlay;
export { overlayVariants };
