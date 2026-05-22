import React from 'react';
import PropTypes from 'prop-types';
import RadioBtn from '../../atoms/RadioBtn/RadioBtn.jsx';

/**
 * The radio button card component. It uses the RadioBtn component
 */
const RadioBtnCard = ({
    name,
    label,
    value,
    onChange,
    checked,
    fullWidth,
    disabled,
    radioProps,
    className,
    id
}) => {
    const width = fullWidth ? "w-full" : "w-fit";
    const labelColor = disabled ? "text-gray2" : "text-gray4";

    return (
        <div className={`relative flex items-center rounded-lg ${width} ${className}`}>
            <RadioBtn
                {...radioProps}
                name={name}
                label={label}
                value={value}
                onChange={onChange}
                checked={checked}
                fullWidth={fullWidth}
                disabled={disabled}
                id={id}
                className="h-full"
                labelProps={{
                    className: `p-4 pl-9 w-full h-full flex items-center border-2 border-gray1 rounded-lg ${labelColor} cursor-pointer transition-all peer-checked:text-darkBlue peer-checked:border-2 peer-checked:border-darkBlue hover:bg-gray05`
                }}
                inputProps={{
                    className: "peer absolute left-3 t-0 w-4 h-4"
                }}
            />
        </div>
    )
}

RadioBtnCard.propTypes = {
    /**
     * The name of the input
     */
    name: PropTypes.string,
    /**
     * The label of the input
     */
    label: PropTypes.string,
    /**
     * The value of the input element
     */
    value: PropTypes.any,
    /**
     * The function to be called when the input value changes
     */
    onChange: PropTypes.func,
    /**
     * The state of the radio button
     */
    checked: PropTypes.bool,
    /**
     * The disabled state of the component
     */
    disabled: PropTypes.bool,
    /**
     * The obeject containing the radio btnprops
     */
    radioProps: PropTypes.object,
    /**
     * The component width state
     */
    fullWidth: PropTypes.bool,
    /**
     * The input id
     */
    id: PropTypes.any,
    /**
     * The class name of the card
     */
    className: PropTypes.string
}

RadioBtnCard.defaultProps = {
    name: "",
    label: "Some radio btn"
}

export default RadioBtnCard;
