
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const MegaMenu = ({ categories, className }) => (
  <div className={`grid gap-6 rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    {categories.map((category) => (
      <div key={category.title} className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray4">{category.title}</h3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <Button key={item.label} variant="ghost" size="sm" className="justify-start">
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

MegaMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })),
    })
  ),
  className: PropTypes.string,
};

MegaMenu.defaultProps = {
  categories: [],
  className: "",
};

export default MegaMenu;
