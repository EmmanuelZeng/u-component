
import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../atoms/Avatar/Avatar.jsx";
import Textarea from "../../atoms/Textarea/Textarea.jsx";
import Button from "../../atoms/Button/Button.jsx";

const CommentSection = ({ comments, replyValue, onReplyChange, onReplySubmit, className }) => (
  <div className={`space-y-4 ${className}`}>
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-3 rounded-3xl border border-gray2 bg-white p-4">
          <Avatar src={comment.avatar} alt={comment.author} width={2.5} height={2.5} />
          <div>
            <p className="font-semibold text-dark">{comment.author}</p>
            <p className="text-sm text-gray4">{comment.message}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="space-y-3 rounded-3xl border border-gray2 bg-white p-4">
      <Textarea value={replyValue} onChange={(event) => onReplyChange(event.target.value)} placeholder="Ajouter un commentaire..." />
      <Button type="primary" size="md" onClick={onReplySubmit}>
        Publier
      </Button>
    </div>
  </div>
);

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, avatar: PropTypes.string, author: PropTypes.string, message: PropTypes.string })),
  replyValue: PropTypes.string,
  onReplyChange: PropTypes.func,
  onReplySubmit: PropTypes.func,
  className: PropTypes.string,
};

CommentSection.defaultProps = {
  comments: [],
  replyValue: "",
  onReplyChange: () => {},
  onReplySubmit: () => {},
  className: "",
};

export default CommentSection;
