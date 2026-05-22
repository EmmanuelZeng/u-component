import React from 'react';
import PropTypes from 'prop-types';

/**
 * The TextArea component
 * 
 * The component tha holds all the textarea's variant and functionalities
 */

const TextArea = ({
    variant,
    value,
    onChange,
    style,
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
    className
}) => {
    const borderColor = error ? "danger" : "gray2";
    const textColor = error ? 'danger' : 'gray5';
    const Variant = variant === "outlined" ? `border border-${borderColor} bg-white` : "bg-gray1";
    const width = fullWidth ? "w-full" : "w-fit";

    return (
        <div className={`relative flex flex-col gap-1 ${width} ${className}`}>
            {label &&
                <label
                    className={`text-small text-${textColor} mx-2`} {...labelProps} htmlFor={`${id ? id : ''}`}
                >
                    {label}{required ? <span className='text-danger'>*</span>:""}
                </label>
            }
            <textarea
                {...inputProps}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                style={style}
                disabled={disabled}
                id={id ? id : ''}
                className={`${Variant} text-${textColor} text-sm focus:outline-none w-full rounded-lg ${size}`}
            />
            {error &&
                <span className='text-danger text-xs ml-2'>{helperText}</span>
            }
        </div>
    )
}


TextArea.propTypes = {
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
};

TextArea.defaultProps = {
    size: "large",
    variant: "outlined",
    placeholder: "Tape something",
    required: false,
    disabled: false,
    labelProps: "{}",
    inputProps: {},
    error: false,
    helperText: ""
};

export default TextArea;
