
import React from "react";
import PropTypes from "prop-types";

const RecentActivityPanel = ({ activities, className }) => (
  <div className={`rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <h3 className="mb-4 text-lg font-semibold text-dark">Activités récentes</h3>
    <ul className="space-y-3">
      {activities.map((activity) => (
        <li key={activity.id} className="rounded-3xl border border-gray2 p-4">
          <p className="font-semibold text-dark">{activity.title}</p>
          <p className="text-sm text-gray4">{activity.description}</p>
          <p className="mt-2 text-xs text-gray5">{activity.time}</p>
        </li>
      ))}
    </ul>
  </div>
);

RecentActivityPanel.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string, description: PropTypes.string, time: PropTypes.string })),
  className: PropTypes.string,
};

RecentActivityPanel.defaultProps = {
  activities: [],
  className: "",
};

export default RecentActivityPanel;
