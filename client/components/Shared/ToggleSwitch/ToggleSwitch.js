import React from 'react';
import PropTypes from 'prop-types';
import './toggle-switch.css';

const ToggleSwitch = ({
  className,
  id,
  ...props
}) => (
  <label className={`toggle-switch ${className}`} htmlFor={id}>
    <input
      type="checkbox"
      className="toggle-switch__checkbox"
      id={id}
      role="switch"
      {...props}
    />
    <span area-hidden="true" className="toggle-switch__container"></span>
  </label>
);

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  className: '',
  id: 'toggleSwitch',
};

export default ToggleSwitch;
