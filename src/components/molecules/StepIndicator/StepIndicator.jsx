import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../../lib/utils";

const StepIndicator = ({ steps, activeIndex, orientation, className }) => (
  <ol
    className={cn(
      "flex gap-4",
      orientation === "vertical" ? "flex-col" : "items-start",
      className
    )}
  >
    {steps.map((step, index) => {
      const isCompleted = index < activeIndex;
      const isActive = index === activeIndex;

      return (
        <li key={step.label} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition",
                isCompleted && "border-primary bg-primary text-white",
                isActive && "border-primary bg-white text-primary",
                !isCompleted && !isActive && "border-gray2 bg-white text-gray4"
              )}
            >
              {isCompleted ? "✓" : index + 1}
            </div>
            {index < steps.length - 1 && orientation === "vertical" && (
              <span className="mt-2 h-6 w-px bg-gray2" />
            )}
          </div>

          <div className="min-w-0">
            <p
              className={cn(
                "text-sm font-semibold",
                isActive ? "text-dark" : "text-gray4"
              )}
            >
              {step.label}
            </p>
            {step.description && (
              <p className="mt-1 text-xs text-gray5">{step.description}</p>
            )}
          </div>

          {index < steps.length - 1 && orientation === "horizontal" && (
            <span className="mt-5 flex-1 self-center h-px bg-gray2" />
          )}
        </li>
      );
    })}
  </ol>
);

StepIndicator.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  activeIndex: PropTypes.number,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  className: PropTypes.string,
};

StepIndicator.defaultProps = {
  steps: [],
  activeIndex: 0,
  orientation: "horizontal",
  className: "",
};

export default StepIndicator;
