import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ size, logo_url, className }) => {
    const wL = size === "large" ? "w-48" : size === "medium" ? "w-36" : "w-20"
    return (
        <div className={`${wL} ${className}`}>
            <img src={logo_url} />
        </div>
    )
}

Logo.propTypes = {
    /**
     * The size of the logo
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * The logo image url
     */
    logo_url: PropTypes.any.isRequired,
    /**
     * The class name of the component
     */
    className: PropTypes.string
}

Logo.defaultProps = {
    size: "medium",
    logo_url: '"/public/logo.svg"',
}


export default Logo;