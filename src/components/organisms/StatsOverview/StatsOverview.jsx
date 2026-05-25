
import React from "react";
import PropTypes from "prop-types";
import StatCard from "../../molecules/StatCard/StatCard.jsx";

const StatsOverview = ({ stats, className }) => (
  <div className={`grid gap-4 sm:grid-cols-2 xl:grid-cols-4 ${className}`}>
    {stats.map((stat) => (
      <StatCard key={stat.title} title={stat.title} value={stat.value} delta={stat.delta} description={stat.description} />
    ))}
  </div>
);

StatsOverview.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), delta: PropTypes.string, description: PropTypes.string })),
  className: PropTypes.string,
};

StatsOverview.defaultProps = {
  stats: [],
  className: "",
};

export default StatsOverview;
