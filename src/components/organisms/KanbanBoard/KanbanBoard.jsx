
import React from "react";
import PropTypes from "prop-types";

const KanbanBoard = ({ columns, className }) => (
  <div className={`grid gap-4 xl:grid-cols-3 ${className}`}>
    {columns.map((column) => (
      <section key={column.title} className="rounded-3xl border border-gray2 bg-white p-4">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-gray4">{column.title}</h3>
        <div className="space-y-3">
          {column.cards.map((card) => (
            <article key={card.id} className="rounded-2xl border border-gray2 bg-gray1 p-4">
              <h4 className="font-semibold text-dark">{card.title}</h4>
              <p className="mt-2 text-sm text-gray4">{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

KanbanBoard.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, cards: PropTypes.arrayOf(PropTypes.object) })
  ),
  className: PropTypes.string,
};

KanbanBoard.defaultProps = {
  columns: [],
  className: "",
};

export default KanbanBoard;
