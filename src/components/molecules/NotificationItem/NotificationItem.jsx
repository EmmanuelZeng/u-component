
import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../atoms/Avatar/Avatar.jsx";

const NotificationItem = ({ avatar, title, message, time, unread, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex w-full items-start gap-3 rounded-xl border border-gray2 bg-white p-4 text-left transition hover:border-primary hover:bg-gray1 ${className}`}
  >
    <Avatar src={avatar?.src} alt={avatar?.alt} width={2.5} height={2.5} />
    <div className="flex-1">
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-dark">{title}</p>
        {unread && <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">Nouveau</span>}
      </div>
      <p className="text-sm text-gray4">{message}</p>
      {time && <p className="mt-2 text-xs text-gray5">{time}</p>}
    </div>
  </button>
);

NotificationItem.propTypes = {
  avatar: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  title: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  unread: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

NotificationItem.defaultProps = {
  avatar: {},
  title: "",
  message: "",
  time: "",
  unread: false,
  onClick: () => {},
  className: "",
};

export default NotificationItem;
