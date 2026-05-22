import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ClickAway from "../../atoms/ClickAway/ClickAway.jsx";
import TextField from "../../atoms/TextField/TextField.jsx";
import Text from "../../atoms/Text/Text.jsx";
import { matchSorter } from "match-sorter";

// Filters and sorts the result
const optionFilterFunc = (value, options = [], optionKeys) => {
  if (value === "") {
    return options;
  }
  return matchSorter(options, value, { keys: optionKeys });
};

const Combobox = ({
  placeholder,
  label,
  id,
  required,
  value,
  labelProps,
  icon,
  type,
  variant,
  size,
  fullWidth,
  triggerProps,
  textFieldProps,
  options,
  optionKeys,
  onChange,
  error,
  helperText,
  minWidth,
}) => {
  const [val, setVal] = useState("");
  const [lab, setLab] = useState();
  const [displayedOptions, setDisplayedOptions] = useState([...options]);

  const handleChange = e => {
    const v = e.target.value;
    setVal(v);
    const items = optionFilterFunc(v, options, optionKeys);
    setDisplayedOptions(items);
  };

  const handleSelectItem = (id, cb) => {
    const op = displayedOptions.find(opt => opt.id === id);

    if (op) {
      // setLab(op.name);
      // Pass the selected option to the controller component
      onChange(op);
      // Call the callback to hide the popover
      cb();
    }
  };

  const menuSize = fullWidth
    ? `min-w-${minWidth} max-w-[100%]`
    : "w-fit max-w-[100%]";
  const textColor = error ? "danger" : "gray5";

  useEffect(() => {
    setLab(placeholder);
  }, [placeholder]);

  useEffect(() => {
    if (value) {
      setLab(value);
    } else {
      setLab(placeholder);
    }
  }, [value]);

  useEffect(() => {
    setDisplayedOptions(options);
  }, [options]);
  return (
    <div>
      {label && (
        <label
          className={`text-small text-${textColor} mx-2`}
          {...labelProps}
          htmlFor={`${id ? id : ""}`}
        >
          {label}
          {required ? <span className="text-danger">*</span> : ""}
        </label>
      )}
      <ClickAway
        triggerLabel={
          <Text
            size="small"
            className="block max-w-[100%] text-ellipsis whitespace-nowrap overflow-hidden"
          >
            {lab}
          </Text>
        }
        triggerVariant={variant}
        triggerSize={size}
        fullWidth={fullWidth}
        triggerIcon={icon}
        otherTriggerProps={triggerProps}
        triggerType={error ? "danger" : "default"}
        triggerClassName={`text-left ${menuSize} flex-row-reverse justify-between`}
        triggerTextColor={
          type === "default" && lab === label ? "text-gray3" : ""
        }
        getListContent={toggler => (
          <div
            className={`rounded-lg border border-gray2 divide-y divide-gray2 ${menuSize} bg-white`}
          >
            <div className="px-2 py-2 bg-primaryLight">
              <TextField
                {...textFieldProps}
                value={val}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </div>

            <ul className="py-1 max-h-[300px] overflow-y-auto">
              {displayedOptions.length ? (
                displayedOptions?.map(option => (
                  <li
                    key={option.id}
                    className="cursor-pointer px-3 py-2 hover:bg-primaryLight"
                    onClick={() => handleSelectItem(option.id, toggler)}
                  >
                    <Text size="small">{option.name}</Text>
                  </li>
                ))
              ) : (
                <div className="py-4 text-center">
                  <Text size="small" type="gray3">
                    Aucun élément ne correspond.
                  </Text>
                </div>
              )}
            </ul>
          </div>
        )}
      />
      {error && (
        <Text className="ml-2 mt-[-1px]" element="p" size="small" type="danger">
          {helperText}
        </Text>
      )}
    </div>
  );
};

Combobox.propTypes = {
  /**
   * The label of the component
   */
  label: PropTypes.string,
  /**
   * The placeholder of the component
   */
  placeholder: PropTypes.string,
  /**
   * The inner TextField component props
   */
  triggerProps: PropTypes.object,
  /**
   * The list of popover options
   */
  options: PropTypes.array,
  /**
   * The keys used for the search and filtering
   */
  optionKeys: PropTypes.array,
  icon: PropTypes.any,
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  textFieldProps: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  minWidth: PropTypes.string,
};

Combobox.defaultProps = {
  triggerProps: {},
  type: "default",
  options: [],
  size: "small",
  icon: null,
  variant: "outlined",
  minWidth: "330px",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
};

export default Combobox;
