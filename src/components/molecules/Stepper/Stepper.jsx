
import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

const Stepper = ({ steps, activeIndex, className }) => (
  <ol className={cn("flex flex-col gap-4 sm:flex-row sm:items-center", className)}>
    {steps.map((step, index) => {
      const status = index < activeIndex ? "completed" : index === activeIndex ? "active" : "upcoming";
      return (
        <li key={step.label} className="flex items-start gap-3">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
              status === "completed" && "border-primary bg-primary text-white",
              status === "active" && "border-primary bg-white text-primary",
              status === "upcoming" && "border-gray2 bg-white text-gray4"
            )}
          >
            {index + 1}
          </div>
          <div>
            <p className="text-sm font-semibold text-dark">{step.label}</p>
            {step.description && <p className="text-xs text-gray4">{step.description}</p>}
          </div>
        </li>
      );
    })}
  </ol>
);

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  activeIndex: PropTypes.number,
  className: PropTypes.string,
};

Stepper.defaultProps = {
  steps: [],
  activeIndex: 0,
  className: "",
};

export default Stepper;
