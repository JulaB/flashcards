import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'components/Shared/Slider/Slider';
import Card from 'components/Card/Card';

const CardsSlider = ({ cards }) => (
  <Slider>
    {cards.map(card => <Card {...card.attributes} key={card.id} />)}
  </Slider>
);

CardsSlider.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

CardsSlider.defaultProps = {
  cards: [],
};
export default CardsSlider;
