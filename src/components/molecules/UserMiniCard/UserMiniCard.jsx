
import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../atoms/Avatar/Avatar.jsx";
import Badge from "../../atoms/Badge/Badge.jsx";

const UserMiniCard = ({ avatar, name, subtitle, status, className }) => (
  <div className={`flex items-center gap-3 rounded-3xl border border-gray2 bg-white p-4 ${className}`}>
    <Avatar src={avatar?.src} alt={avatar?.alt} width={2.5} height={2.5} />
    <div className="min-w-0 flex-1">
      <p className="font-semibold text-dark truncate">{name}</p>
      {subtitle && <p className="text-sm text-gray4 truncate">{subtitle}</p>}
    </div>
    {status && <Badge variant={status}>{status}</Badge>}
  </div>
);

UserMiniCard.propTypes = {
  avatar: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  name: PropTypes.string,
  subtitle: PropTypes.string,
  status: PropTypes.string,
  className: PropTypes.string,
};

UserMiniCard.defaultProps = {
  avatar: {},
  name: "Utilisateur",
  subtitle: "",
  status: "",
  className: "",
};

export default UserMiniCard;
