
import React from "react";
import PropTypes from "prop-types";
import StatsOverview from "../StatsOverview/StatsOverview.jsx";

const AnalyticsSection = ({ stats, charts, recentActivities, className }) => (
  <section className={`space-y-6 ${className}`}>
    <StatsOverview stats={stats} />
    <div className="grid gap-4 xl:grid-cols-3">
      <div className="xl:col-span-2 rounded-3xl border border-gray2 bg-white p-6">{charts}</div>
      <div className="rounded-3xl border border-gray2 bg-white p-6">{recentActivities}</div>
    </div>
  </section>
);

AnalyticsSection.propTypes = {
  stats: PropTypes.array,
  charts: PropTypes.node,
  recentActivities: PropTypes.node,
  className: PropTypes.string,
};

AnalyticsSection.defaultProps = {
  stats: [],
  charts: null,
  recentActivities: null,
  className: "",
};

export default AnalyticsSection;
