
import React from "react";
import PropTypes from "prop-types";

const Timeline = ({ items, className }) => (
  <ol className={`space-y-6 ${className}`}>
    {items.map((item) => (
      <li key={item.id} className="flex gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">{item.icon || "•"}</div>
        <div>
          <p className="text-sm font-semibold text-dark">{item.title}</p>
          <p className="text-xs text-gray4">{item.time}</p>
          <p className="mt-2 text-sm text-gray4">{item.description}</p>
        </div>
      </li>
    ))}
  </ol>
);

Timeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, time: PropTypes.string, description: PropTypes.string, icon: PropTypes.node })),
  className: PropTypes.string,
};

Timeline.defaultProps = {
  items: [],
  className: "",
};

export default Timeline;
