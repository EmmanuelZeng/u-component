
import React from "react";
import PropTypes from "prop-types";
import Link from "../../atoms/Link/Link.jsx";
import Separator from "../../atoms/Separator/Separator.jsx";

const Breadcrumb = ({ items, className }) => (
  <nav aria-label="breadcrumb" className={`flex flex-wrap items-center gap-2 text-sm ${className}`}>
    {items.map((item, index) => (
      <span key={item.label} className="inline-flex items-center gap-2">
        {item.href ? (
          <Link href={item.href} className="text-primary hover:underline">
            {item.label}
          </Link>
        ) : (
          <span className="text-dark font-semibold">{item.label}</span>
        )}
        {index < items.length - 1 && <Separator orientation="vertical" />}
      </span>
    ))}
  </nav>
);

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  items: [],
  className: "",
};

export default Breadcrumb;
