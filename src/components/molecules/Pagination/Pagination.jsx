
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const Pagination = ({ currentPage, totalPages, onChange, className }) => {
  const pages = Array.from({ length: Math.max(1, totalPages) }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Button
        type="secondary"
        size="sm"
        disabled={currentPage <= 1}
        onClick={() => onChange(Math.max(1, currentPage - 1))}
      >
        Précédent
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          type={page === currentPage ? "primary" : "secondary"}
          size="sm"
          onClick={() => onChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        type="secondary"
        size="sm"
        disabled={currentPage >= totalPages}
        onClick={() => onChange(Math.min(totalPages, currentPage + 1))}
      >
        Suivant
      </Button>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  onChange: () => {},
  className: "",
};

export default Pagination;
