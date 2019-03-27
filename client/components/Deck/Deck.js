import React from 'react';
import PropTypes from 'prop-types';
import Pluralize from 'components/Shared/Pluralize';
import Button from 'components/Shared/Button/Button';

import './deck.css';

const Deck = ({ name, id, ...props }) => (
  <div className="deck">
    <h4 className="deck__title">{name}</h4>
    <div className="deck__info">
      <Pluralize singular='card' plural='cards' count={props['cards-count']} />
      <Button className="btn--primary deck__button">Quick View</Button>
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
