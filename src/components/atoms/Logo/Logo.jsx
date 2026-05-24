import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const logoVariants = cva("inline-flex items-center", {
  variants: {
    size: {
      xs: "h-6",
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
      xl: "h-16",
      // Rétrocompatibilité
      small: "w-20",
      medium: "w-36",
      large: "w-48",
    },
    variant: {
      default: "",
      monochrome: "grayscale",
      inverted: "brightness-0 invert",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

const Logo = forwardRef(
  ({ src, logo_url, alt = "Logo", size, variant, className, ...props }, ref) => {
    const imageSrc = src || logo_url;

    return (
      <div
        ref={ref}
        className={cn(logoVariants({ size, variant }), className)}
        {...props}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }
);

Logo.displayName = "Logo";

Logo.propTypes = {
  src: PropTypes.string,
  logo_url: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "small", "medium", "large"]),
  variant: PropTypes.oneOf(["default", "monochrome", "inverted"]),
  className: PropTypes.string,
};

Logo.defaultProps = {
  alt: "Logo",
  size: "md",
  variant: "default",
  className: "",
};

export default Logo;
export { logoVariants };
