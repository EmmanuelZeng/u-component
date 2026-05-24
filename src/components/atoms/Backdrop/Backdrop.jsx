import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const backdropVariants = cva("fixed inset-0 z-30 transition-opacity duration-300", {
  variants: {
    variant: {
      default: "bg-backdrop",
      light: "bg-white/50",
      dark: "bg-black/80",
      blur: "bg-black/40 backdrop-blur-sm",
    },
    visible: {
      true: "opacity-100",
      false: "opacity-0 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "default",
    visible: true,
  },
});

const Backdrop = forwardRef(
  ({ open = true, variant, visible, onClick, className, ...props }, ref) => (
    <div
      ref={ref}
      role="presentation"
      aria-hidden={!open}
      onClick={onClick}
      className={cn(
        backdropVariants({ variant, visible: open && visible }),
        className
      )}
      {...props}
    />
  )
);

Backdrop.displayName = "Backdrop";

Backdrop.propTypes = {
  open: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "light", "dark", "blur"]),
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Backdrop.defaultProps = {
  open: true,
  variant: "default",
  visible: true,
  className: "",
};

export default Backdrop;
export { backdropVariants };
