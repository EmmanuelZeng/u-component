
import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../atoms/Avatar/Avatar.jsx";

const MessagingPanel = ({ contacts, selectedContact, onSelect, className }) => (
  <div className={`grid gap-4 lg:grid-cols-[280px_1fr] ${className}`}>
    <div className="space-y-3 rounded-3xl border border-gray2 bg-white p-4">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          type="button"
          onClick={() => onSelect(contact.id)}
          className={`flex w-full items-center gap-3 rounded-3xl p-3 text-left transition ${selectedContact === contact.id ? "bg-primary/10" : "hover:bg-gray1"}`}
        >
          <Avatar src={contact.avatar} alt={contact.name} width={2.5} height={2.5} />
          <div>
            <p className="font-semibold text-dark">{contact.name}</p>
            <p className="text-sm text-gray4">{contact.lastMessage}</p>
          </div>
        </button>
      ))}
    </div>
    <div className="rounded-3xl border border-gray2 bg-white p-4">Sélectionnez une conversation pour commencer.</div>
  </div>
);

MessagingPanel.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, avatar: PropTypes.string, name: PropTypes.string, lastMessage: PropTypes.string })),
  selectedContact: PropTypes.string,
  onSelect: PropTypes.func,
  className: PropTypes.string,
};

MessagingPanel.defaultProps = {
  contacts: [],
  selectedContact: "",
  onSelect: () => {},
  className: "",
};

export default MessagingPanel;
