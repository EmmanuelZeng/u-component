import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing } from "../../../lib/utils";

const avatarVariants = cva(
  "inline-flex items-center justify-center overflow-hidden bg-gray1 text-gray3 shrink-0",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
        xl: "h-16 w-16 text-xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-xl",
        // Rétrocompatibilité
        circle_legacy: "rounded-full",
      },
      bordered: {
        true: "ring-2 ring-white ring-offset-1",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
      bordered: false,
    },
  }
);

const DefaultUserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("h-1/2 w-1/2", className)}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const Avatar = forwardRef(
  (
    {
      src,
      alt = "",
      size,
      shape,
      type,
      bordered,
      fallback,
      children,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const resolvedShape = shape || type || "circle";
    const isInteractive = Boolean(onClick);

    return (
      <div
        ref={ref}
        role={isInteractive ? "button" : "img"}
        tabIndex={isInteractive ? 0 : undefined}
        aria-label={alt || undefined}
        onClick={onClick}
        onKeyDown={
          isInteractive
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.(e);
                }
              }
            : undefined
        }
        className={cn(
          avatarVariants({ size, shape: resolvedShape, bordered }),
          isInteractive && cn("cursor-pointer", focusRing),
          className
        )}
        {...props}
      >
        {children ||
          (src ? (
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          ) : (
            fallback || <DefaultUserIcon />
          ))}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  shape: PropTypes.oneOf(["circle", "square", "rounded"]),
  type: PropTypes.oneOf(["circle", "square", "rounded"]),
  bordered: PropTypes.bool,
  fallback: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Avatar.defaultProps = {
  alt: "",
  size: "md",
  shape: "circle",
  bordered: false,
  className: "",
};

export default Avatar;
export { avatarVariants };
