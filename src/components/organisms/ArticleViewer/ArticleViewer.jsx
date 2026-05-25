
import React from "react";
import PropTypes from "prop-types";

const ArticleViewer = ({ title, subtitle, content, author, className }) => (
  <article className={`space-y-6 rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold text-dark">{title}</h1>
      {subtitle && <p className="text-sm text-gray4">{subtitle}</p>}
      {author && <p className="text-xs uppercase tracking-[0.15em] text-gray5">{author}</p>}
    </header>
    <div className="prose max-w-none text-gray4">{content}</div>
  </article>
);

ArticleViewer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
  author: PropTypes.string,
  className: PropTypes.string,
};

ArticleViewer.defaultProps = {
  title: "",
  subtitle: "",
  content: null,
  author: "",
  className: "",
};

export default ArticleViewer;
