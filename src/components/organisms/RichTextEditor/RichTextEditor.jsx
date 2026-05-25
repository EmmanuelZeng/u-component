
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const RichTextEditor = ({ value, onChange, className }) => (
  <div className={`space-y-3 rounded-3xl border border-gray2 bg-white p-4 ${className}`}>
    <div className="flex flex-wrap gap-2">
      {['B','I','U'].map((label) => (
        <Button key={label} type="outline" size="sm" onClick={() => {}}>{label}</Button>
      ))}
    </div>
    <textarea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="min-h-[220px] w-full rounded-3xl border border-gray2 bg-gray1 p-4 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

RichTextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

RichTextEditor.defaultProps = {
  value: "",
  onChange: () => {},
  className: "",
};

export default RichTextEditor;
