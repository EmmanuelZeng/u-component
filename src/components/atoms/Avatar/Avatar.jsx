import React from "react";
import PropTypes from "prop-types";

const UserIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1/2 h-1/2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

/**
 * This Component is for Avatar Images
 *
 * ### Usage
 * ```jsx
 * <Avatar />
 * ```
 */

const Avatar = ({ width, height, type, src, className, alt, children, onClick }) => {
  const styleAvatar =
    type === "circle"
      ? "rounded-full"
      : type === "square"
        ? "rounded-md"
        : type === "rounded"
          ? "rounded-xl"
          : "";
  return (
    <div
      className={`cursor-pointer inline-block ${styleAvatar} bg-gray1 ${className} flex justify-center items-center text-gray3 overflow-hidden`}
      style={{ width: `${width}em`, height: `${height}em` }}
      onClick={onClick}
    >
      {children ?
        children :
        src ?
          <img
            className={`inline-block w-full h-full`}
            alt={alt}
            src={src}
          /> :
          <UserIcon />
      }
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Width of the component.
   */
  width: PropTypes.number,

  /**
   * Height of the component.
   */
  height: PropTypes.number,

  /**
   * Type of the component.
   */
  type: PropTypes.oneOf(["circle", "square", "rounded"]),

  /**
   * Source file of component
   */
  src: PropTypes.any,

  /**
   * Alternative information for an image
   */

  alt: PropTypes.string,

  /**
   * All css class of the component
   */
  className: PropTypes.string,
};

Avatar.defaultProps = {
  width: 3,
  height: 3,
  alt: "",
  type: "circle",
  src: null,
};

export default Avatar;