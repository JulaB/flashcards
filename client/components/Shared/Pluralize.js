import React from 'react';
import PropTypes from 'prop-types';

const Pluralize = ({
  count, singular, plural, className,
}) => (
  <div className={className}>
    {count} {count === 1 ? singular : plural}
  </div>
);

Pluralize.propTypes = {
  className: PropTypes.string,
  plural: PropTypes.string,
  singular: PropTypes.string,
  count: PropTypes.number,
};

Pluralize.defaultProps = {
  className: '',
  plural: '',
  singular: '',
  count: 0,
};
export default Pluralize;
