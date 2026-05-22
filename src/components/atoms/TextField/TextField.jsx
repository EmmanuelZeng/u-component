import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
    type,
    variant,
    value,
    onChange,
    label,
    id,
    fullWidth,
    size,
    required,
    placeholder,
    disabled,
    inputProps,
    labelProps,
    error,
    helperText,
    className,
    inputClassName,
    InputClassName,
    prefix,
    suffix
}) => {
    const borderColor = error ? "danger" : "gray2";
    const textColor = error ? 'danger' : 'gray5';
    const Variant = variant === "outlined" ? `border border-${borderColor} bg-white` : "bg-gray1";
    const width = fullWidth ? "w-full" : "w-fit";

    return (
        <div className={`relative flex flex-col ${width} ${className}`}>
            {label &&
                <label
                    className={`text-small text-${textColor} mx-2`} {...labelProps} htmlFor={`${id ? id : ''}`}
                >
                    {label}{required ? <span className='text-danger'>*</span>:""}
                </label>
            }
            <div className={`${inputClassName} ${Variant}  flex items-center w-full rounded-lg overflow-hidden`}>
                {prefix &&
                    <span className="pl-4">
                        {prefix}
                    </span>
                }
                <input
                    {...inputProps}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                    id={id ? id : ''}
                    className={`flex-1 ${variant === "filled" ? "bg-gray1" : ""} text-${textColor} px-5 text-sm focus:outline-none w-full ${InputClassName} ${size}`}
                />
                {suffix &&
                    <span className="pr-4">
                        {suffix}
                    </span>
                }
            </div>
            {error &&
                <span className='text-danger text-xs ml-2'>{helperText}</span>
            }
        </div>
    )
}


TextField.propTypes = {
    /**
     * The size of the component.
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * The variant of the component.
     */
    variant: PropTypes.oneOf(["filled", "outlined"]),
    /**
     * The type of the input
     */
    type: PropTypes.oneOf(["text", "tel", "email", "number", "date", "password"]),
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
     * The error state
     */
    error: PropTypes.bool,
    /**
     * The helper text
     */
    helperText: PropTypes.string,
    /**
     * The class name of the container div 
     */
    className: PropTypes.string,
    /**
     * The class name of input 
     */
    inputClassName: PropTypes.string,
    /**
     * The component displayed before the input
     */
    suffix: PropTypes.any,
    /**
     * The component displayed after the input
     */
    prefix: PropTypes.any,
};

TextField.defaultProps = {
    size: "medium",
    variant: "filled",
    type: "text",
    required: false,
    disabled: false,
    labelProps: {},
    inputProps: {},
    error: false,
    helperText: "",
};

export default TextField;
