
import React from "react";
import PropTypes from "prop-types";

const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

const Calendar = ({ month, events, className }) => (
  <div className={`rounded-3xl border border-gray2 bg-white p-6 ${className}`}>
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-dark">{month}</h3>
    </div>
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <div key={day} className="text-center text-xs font-semibold uppercase text-gray4">
          {day}
        </div>
      ))}
      {Array.from({ length: 35 }).map((_, index) => (
        <div key={index} className="min-h-[80px] rounded-2xl border border-gray2 p-2 text-xs text-gray4">
          <div className="font-semibold text-dark">{index + 1}</div>
          {events?.filter((event) => event.day === index + 1).map((event) => (
            <div key={event.id} className="mt-2 rounded-xl bg-primary/10 px-2 py-1 text-[10px] text-primary">
              {event.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

Calendar.propTypes = {
  month: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape({ day: PropTypes.number, title: PropTypes.string, id: PropTypes.string })),
  className: PropTypes.string,
};

Calendar.defaultProps = {
  month: "",
  events: [],
  className: "",
};

export default Calendar;
