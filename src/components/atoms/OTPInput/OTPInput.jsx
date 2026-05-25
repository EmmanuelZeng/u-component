import React, { forwardRef, useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { cn, focusRing, disabledStyles, errorRing } from "../../../lib/utils";

const otpSlotVariants = cva(
  [
    "text-center font-semibold text-dark",
    "border-2 border-gray2 bg-white",
    "transition-all duration-200",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-9 w-9 text-sm rounded-md",
        md: "h-11 w-11 text-base rounded-lg",
        lg: "h-14 w-14 text-lg rounded-xl",
      },
      error: {
        true: errorRing,
        false: "focus:border-primary",
      },
      filled: {
        true: "border-primary bg-primaryLight/30",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
      filled: false,
    },
  }
);

const OTPInput = forwardRef(
  (
    {
      length = 6,
      value = "",
      onChange,
      onComplete,
      size,
      error,
      disabled,
      className,
      autoFocus,
      ...props
    },
    ref
  ) => {
    const inputsRef = useRef([]);
    const [internalValue, setInternalValue] = useState(value.split("").slice(0, length));

    useEffect(() => {
      setInternalValue(value.split("").slice(0, length));
    }, [value, length]);

    const updateValue = useCallback(
      (newChars) => {
        const joined = newChars.join("");
        onChange?.(joined);
        if (joined.length === length) {
          onComplete?.(joined);
        }
      },
      [onChange, onComplete, length]
    );

    const handleChange = (index, e) => {
      const char = e.target.value.replace(/[^0-9a-zA-Z]/g, "").slice(-1);
      const next = [...internalValue];
      next[index] = char;
      while (next.length < length) next.push("");
      setInternalValue(next);
      updateValue(next);

      if (char && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !internalValue[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
      if (e.key === "ArrowLeft" && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
      if (e.key === "ArrowRight" && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/[^0-9a-zA-Z]/g, "")
        .slice(0, length)
        .split("");
      const next = Array.from({ length }, (_, i) => pasted[i] || "");
      setInternalValue(next);
      updateValue(next);
      const focusIndex = Math.min(pasted.length, length - 1);
      inputsRef.current[focusIndex]?.focus();
    };

    return (
      <div
        ref={ref}
        role="group"
        aria-label="Code de vérification"
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            value={internalValue[index] || ""}
            disabled={disabled}
            autoFocus={autoFocus && index === 0}
            aria-invalid={error || undefined}
            aria-label={`Caractère ${index + 1} sur ${length}`}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={cn(
              otpSlotVariants({
                size,
                error,
                filled: Boolean(internalValue[index]),
              })
            )}
          />
        ))}
      </div>
    );
  }
);

OTPInput.displayName = "OTPInput";

OTPInput.propTypes = {
  length: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
};

OTPInput.defaultProps = {
  length: 6,
  value: "",
  size: "md",
  error: false,
  disabled: false,
  autoFocus: false,
  className: "",
};

export default OTPInput;
export { otpSlotVariants };
