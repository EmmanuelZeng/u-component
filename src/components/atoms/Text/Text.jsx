import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      // Rétrocompatibilité
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    intent: {
      default: "text-dark",
      primary: "text-primary",
      muted: "text-gray3",
      danger: "text-danger",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      gray1: "text-gray1",
      gray2: "text-gray2",
      gray3: "text-gray3",
      gray4: "text-gray4",
      darkBlue: "text-darkBlue",
      textGray: "text-textGray",
      dark: "text-dark",
      primaryLight: "text-primaryLight",
      dangerLight: "text-dangerLight",
      warningLight: "text-warningLight",
      successLight: "text-successLight",
      infoLight: "text-infoLight",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    intent: "default",
    weight: "normal",
    align: "left",
    truncate: false,
  },
});

const TAG_MAP = {
  span: "span",
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

/**
 * Composant texte polyvalent avec support sémantique.
 * Conserve la prop `element` pour la rétrocompatibilité.
 */
const Text = forwardRef(
  (
    {
      as,
      element,
      size,
      intent,
      type,
      weight,
      fontWeight,
      align,
      truncate,
      textWrap,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Tag = as || TAG_MAP[element] || "span";
    const resolvedIntent = intent || type || "default";
    const resolvedWeight = weight || fontWeight || "normal";
    const resolvedTruncate = truncate ?? !textWrap;

    return (
      <Tag
        ref={ref}
        className={cn(
          textVariants({
            size,
            intent: resolvedIntent,
            weight: resolvedWeight,
            align,
            truncate: resolvedTruncate,
          }),
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = "Text";

Text.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
  element: PropTypes.oneOf(["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.oneOf([
    "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl",
    "small", "medium", "large",
  ]),
  intent: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.oneOf(["normal", "medium", "semibold", "bold"]),
  fontWeight: PropTypes.oneOf(["normal", "medium", "semibold", "bold"]),
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  truncate: PropTypes.bool,
  textWrap: PropTypes.bool,
  className: PropTypes.string,
};

Text.defaultProps = {
  element: "span",
  size: "md",
  intent: "default",
  weight: "normal",
  align: "left",
  textWrap: true,
  className: "",
};

export default Text;
export { textVariants };
