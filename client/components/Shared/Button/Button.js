import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
  className,
  type,
  children,
  ...props
}) => (
  <button type={type} className={`btn ${className}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  children: null,
};

export default Button;
