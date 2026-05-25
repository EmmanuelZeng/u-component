
import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "../../molecules/NotificationItem/NotificationItem.jsx";

const ActivityFeed = ({ activities, className }) => (
  <div className={`space-y-3 ${className}`}>
    {activities.map((activity) => (
      <NotificationItem
        key={activity.id}
        avatar={activity.avatar}
        title={activity.title}
        message={activity.message}
        time={activity.time}
        unread={activity.unread}
      />
    ))}
  </div>
);

ActivityFeed.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, avatar: PropTypes.object, title: PropTypes.string, message: PropTypes.string, time: PropTypes.string, unread: PropTypes.bool })),
  className: PropTypes.string,
};

ActivityFeed.defaultProps = {
  activities: [],
  className: "",
};

export default ActivityFeed;
