
import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../atoms/Avatar/Avatar.jsx";
import Button from "../../atoms/Button/Button.jsx";

const UserProfileHeader = ({ user, onEdit, className }) => (
  <div className={`flex flex-col gap-4 rounded-3xl border border-gray2 bg-white p-6 sm:flex-row sm:items-center sm:justify-between ${className}`}>
    <div className="flex items-center gap-4">
      <Avatar src={user.avatar} alt={user.name} width={3.5} height={3.5} />
      <div>
        <p className="text-xl font-semibold text-dark">{user.name}</p>
        <p className="text-sm text-gray4">{user.email}</p>
      </div>
    </div>
    <Button type="secondary" size="md" onClick={onEdit}>
      Modifier le profil
    </Button>
  </div>
);

UserProfileHeader.propTypes = {
  user: PropTypes.shape({ avatar: PropTypes.string, name: PropTypes.string, email: PropTypes.string }),
  onEdit: PropTypes.func,
  className: PropTypes.string,
};

UserProfileHeader.defaultProps = {
  user: { avatar: "", name: "Utilisateur", email: "" },
  onEdit: () => {},
  className: "",
};

export default UserProfileHeader;
