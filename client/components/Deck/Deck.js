import React from 'react';
import PropTypes from 'prop-types';
import Pluralize from 'components/Shared/Pluralize';
import DeckCardsContainer from 'containers/DeckCards/DeckCards';
import './deck.css';

const Deck = ({ name, id, ...props }) => (
  <div className="deck">
    <h4 className="deck__title">{name}</h4>
    <div className="deck__info">
      <DeckCardsContainer deckId={id} />
      <Pluralize singular='card' plural='cards' count={props['cards-count']} />
    </div>
  </div>
);

Deck.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  'cards-count': PropTypes.number,
};

Deck.defaultProps = {
  id: '0',
  name: '',
  'cards-count': 0,
};
export default Deck;
