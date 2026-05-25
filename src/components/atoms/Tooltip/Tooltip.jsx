import React, { forwardRef, useState, useId } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const tooltipVariants = cva(
  "absolute z-50 px-2.5 py-1.5 text-xs font-medium rounded-md shadow-md pointer-events-none whitespace-nowrap",
  {
    variants: {
      intent: {
        default: "bg-dark text-white",
        primary: "bg-primary text-white",
        danger: "bg-danger text-white",
      },
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      intent: "default",
      position: "top",
    },
  }
);

const Tooltip = forwardRef(
  (
    {
      content,
      children,
      intent,
      position,
      delay = 200,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const tooltipId = useId();
    let timeoutId = null;

    const show = () => {
      if (disabled) return;
      timeoutId = setTimeout(() => setVisible(true), delay);
    };

    const hide = () => {
      clearTimeout(timeoutId);
      setVisible(false);
    };

    return (
      <span
        ref={ref}
        className="relative inline-flex"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        {...props}
      >
        <span aria-describedby={visible ? tooltipId : undefined}>{children}</span>
        {visible && content && (
          <span
            id={tooltipId}
            role="tooltip"
            className={cn(tooltipVariants({ intent, position }), className)}
          >
            {content}
          </span>
        )}
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  intent: PropTypes.oneOf(["default", "primary", "danger"]),
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  intent: "default",
  position: "top",
  delay: 200,
  disabled: false,
  className: "",
};

export default Tooltip;
export { tooltipVariants };
