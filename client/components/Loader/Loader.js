import React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

const Loader = ({ className }) => (
  <div className={`loader ${className}`}>
    <div className="loader__dot1" />
    <div className="loader__dot2" />
    <div className="loader__dot3" />
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
