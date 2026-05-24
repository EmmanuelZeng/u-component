import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Switch from "../Switch/Switch.jsx";

/**
 * Alias rétrocompatible du composant Switch.
 * @deprecated Utiliser Switch à la place.
 */
const Toggle = forwardRef((props, ref) => <Switch ref={ref} {...props} />);

Toggle.displayName = "Toggle";

Toggle.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Toggle.defaultProps = {
  checked: false,
  onChange: () => {},
  disabled: false,
  className: "",
};

export default Toggle;
