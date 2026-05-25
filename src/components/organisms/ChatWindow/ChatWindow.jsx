
import React from "react";
import PropTypes from "prop-types";
import Textarea from "../../atoms/Textarea/Textarea.jsx";
import Button from "../../atoms/Button/Button.jsx";

const ChatWindow = ({ messages, messageText, onMessageChange, onSendMessage, className }) => (
  <div className={`flex h-full flex-col rounded-3xl border border-gray2 bg-white ${className}`}>
    <div className="flex-1 overflow-auto p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className={`max-w-[80%] rounded-3xl p-4 ${message.mine ? "bg-primary text-white self-end" : "bg-gray1 text-dark self-start"}`}>
          <p className="text-sm">{message.text}</p>
          {message.time && <p className="mt-2 text-xs text-gray5">{message.time}</p>}
        </div>
      ))}
    </div>
    <div className="space-y-3 border-t border-gray2 p-4">
      <Textarea value={messageText} onChange={(event) => onMessageChange(event.target.value)} placeholder="Écrire un message..." />
      <Button type="primary" size="md" onClick={onSendMessage}>
        Envoyer
      </Button>
    </div>
  </div>
);

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, text: PropTypes.string, time: PropTypes.string, mine: PropTypes.bool })),
  messageText: PropTypes.string,
  onMessageChange: PropTypes.func,
  onSendMessage: PropTypes.func,
  className: PropTypes.string,
};

ChatWindow.defaultProps = {
  messages: [],
  messageText: "",
  onMessageChange: () => {},
  onSendMessage: () => {},
  className: "",
};

export default ChatWindow;
