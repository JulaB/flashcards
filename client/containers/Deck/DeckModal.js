import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardsSlider from 'components/Card/CardsSlider';

const DeckModalContainer = ({ cards }) => (
  <CardsSlider cards={cards} />
);

DeckModalContainer.propTypes = {
  deckId: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
};

DeckModalContainer.defaultProps = {
  deckId: '0',
  cards: [],
};

const mapStateToProps = ({ deckReducer: state }, { deckId }) => ({
  cards: state.cards[deckId] || [],
});

export default connect(mapStateToProps)(DeckModalContainer);
