import { connect } from 'react-redux';
import CardsSlider from 'components/Card/CardsSlider';

const mapStateToProps = ({ deckReducer: state }, { deckId }) => ({
  cards: state.cards[deckId] || [],
});

export default connect(mapStateToProps)(CardsSlider);
