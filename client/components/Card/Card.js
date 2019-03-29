import React from 'react';
import PropTypes from 'prop-types';
import FlipBox from 'components/Shared/FlipBox/FlipBox';

import './card.css';

const Card = ({ term, definition }) => {
  if (!term) {
    return null;
  }
  return (
    <FlipBox className="card">
      <div className="card__term">{term}</div>
      <div className="card__definition" >{definition}</div>
    </FlipBox>
  );
};

Card.propTypes = {
  term: PropTypes.string,
  definition: PropTypes.string,
};

Card.defaultProps = {
  term: null,
  definition: '',
};

export default Card;
