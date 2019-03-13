import React from 'react';
import PropTypes from 'prop-types';
import Pluralize from 'components/Shared/Pluralize';
import './deck.css';

const Deck = ({ name, ...props }) => (
  <div className="deck">
    <h4 className="deck__title">{name}</h4>
    <div className="deck__info">
      <Pluralize singular='card' plural='cards' count={props['cards-count']} />
    </div>
  </div>
);

Deck.propTypes = {
  name: PropTypes.string,
  'cards-count': PropTypes.number,
};

Deck.defaultProps = {
  name: '',
  'cards-count': 0,
};
export default Deck;
