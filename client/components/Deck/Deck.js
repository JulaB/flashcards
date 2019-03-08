import React from 'react';
import PropTypes from 'prop-types';

import './deck.css';

const Deck = ({ name }) => (
  <div className="deck">
    <h4 className="deck__title">{name}</h4>
  </div>
);

Deck.propTypes = {
  name: PropTypes.string,
};

Deck.defaultProps = {
  name: '',
};
export default Deck;
