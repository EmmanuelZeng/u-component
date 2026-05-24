import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const imageVariants = cva("object-cover", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    fit: {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
    },
    aspect: {
      auto: "",
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
    },
  },
  defaultVariants: {
    rounded: "md",
    fit: "cover",
    aspect: "auto",
  },
});

const Image = forwardRef(
  (
    {
      src,
      alt,
      rounded,
      fit,
      aspect,
      fallback,
      lazy = true,
      fullWidth,
      className,
      onError,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    if (hasError && fallback) {
      return (
        <div
          className={cn(
            imageVariants({ rounded, fit, aspect }),
            "flex items-center justify-center bg-gray1 text-gray3",
            fullWidth && "w-full",
            className
          )}
        >
          {fallback}
        </div>
      );
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        decoding="async"
        onError={(e) => {
          setHasError(true);
          onError?.(e);
        }}
        className={cn(
          imageVariants({ rounded, fit, aspect }),
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "xl", "full"]),
  fit: PropTypes.oneOf(["cover", "contain", "fill", "none"]),
  aspect: PropTypes.oneOf(["auto", "square", "video", "portrait"]),
  fallback: PropTypes.node,
  lazy: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onError: PropTypes.func,
};

Image.defaultProps = {
  rounded: "md",
  fit: "cover",
  aspect: "auto",
  lazy: true,
  fullWidth: false,
  className: "",
};

export default Image;
export { imageVariants };
