import React from 'react';
import PropTypes from 'prop-types';


/**
 * The search input component
 */
const SearchInput =  ({
    value,
    onChange,
    variant,
    placeholder,
    fullWidth,
    label,
    id,
    size,
    required,
    disabled,
    inputProps,
    labelProps,
    className,
    inputClassName
}) => {

    const bg = variant === "outlined" ? `bg-white` : "bg-gray1";
    const Variant = variant === "outlined" ? `border border-gray2` : "border-none";
    const width = fullWidth ? "w-full" : "w-fit";

    return (
        <div className={`relative flex flex-col ${width} ${className}`}>
            {label &&
                <label className={`text-small mx-2`} {...labelProps} htmlFor={`${id ? id : ''}`}>
                    {label}{required ? <span className='text-danger'>*</span> : ""}
                </label>
            }

            <div className={`${Variant} ${bg} flex items-center rounded-md pl-2 border`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <input
                    {...inputProps}
                    type={"text"}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    id={id ? id : ''}
                    className={`${bg} text-sm focus:outline-none w-full rounded-lg ${size} pl-2 pr-5 ${inputClassName}`}
                />
            </div>
        </div>
    )
}


SearchInput.propTypes = {
    /**
     * The size of the component.
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * The variant of the component.
     */
    variant: PropTypes.oneOf(["filled", "outlined"]),
    /**
     * The state of the component width
     */
    fullWidth: PropTypes.bool,
    /**
     * Whether the input is required or not
     */
    required: PropTypes.bool,
    /**
     * The input disabled state
     */
    disabled: PropTypes.bool,
    /**
     * The label of the input
     */
    label: PropTypes.string,
    /**
     * An object containg the other props of the label
     */
    labelProps: PropTypes.object,
    /**
     * The input placeholder
     */
    placeholder: PropTypes.string,
    /**
     * An object containg the other props of the input
     */
    inputProps: PropTypes.object,
    /**
     * The class name of the container div 
     */
    className: PropTypes.string,
    /**
     * The class name of input 
     */
    inputClassName: PropTypes.string
}

SearchInput.defaultProps = {
    size: "medium",
    variant: "outlined",
    type: "text",
    required: false,
    disabled: false,
    labelProps: {},
    inputProps: {},
}

export default SearchInput;