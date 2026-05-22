import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text.jsx';

const Alert = ({ message, type, fullWidth, className, children }) => {
    const width = fullWidth ? 'w-full' : 'w-fit';
    return (
        <div className={`p-2 mt-3 bg-${type}Light rounded-md ${width} ${className} border border-gray1`}>
            {children ?
                children :
                <>
                    <Text type={type} size="small">{message}</Text>
                </>
            }
        </div>
    )
}

Alert.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.any,
    /**
     * The color of component
     */
    type: PropTypes.oneOf(["default", "primary", "info", "danger", "success"]),
    /**
      * The size of the component.
      */
    fullWidth: PropTypes.bool,
    /**
     * The title of th alert
     */
    message: PropTypes.string
};

Alert.defaultProps = {
    type: "default",
    children: null,
};

export default Alert;