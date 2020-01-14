import React from 'react';
import PropTypes from 'prop-types';
import './toggle-switch.css';

const ToggleSwitch = ({
  className,
  onChange,
  id,
  checked,
}) => (
  <label className={`toggle-switch ${className}`} htmlFor={id}>
    <input
      type="checkbox"
      className="toggle-switch__checkbox"
      onChange={onChange}
      id={id}
      role="switch"
      checked={checked}
    />
    <span area-hidden="true" className="toggle-switch__container"></span>
  </label>
);

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  labelText: PropTypes.string,
  checked: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  className: '',
  onChange: () => {},
  id: 'toggleSwitch',
  labelText: '',
  checked: false,
};

export default ToggleSwitch;
