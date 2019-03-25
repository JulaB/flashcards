import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deckFetchData as fetchData } from 'actions/deckActions';
import Loader from 'components/Loader/Loader';
import Slider from 'components/Shared/Slider/Slider';
import Card from 'components/Card/Card';

export class DeckCards extends React.Component {
  componentDidMount() {
    this.props.fetchData(this.props.deckId);
  }

  render() {
    const { cards, isFetching } = this.props;
    if (isFetching) {
      return (<Loader />);
    }

    return (
      <Slider>
        {cards.map(card => (
          <Card {...card.attributes} key={card.id} />
        ))}
      </Slider>
    );
  }
}

DeckCards.propTypes = {
  deckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func,
};

DeckCards.defaultProps = {
  isFetching: false,
  cards: [],
  fetchData: () => {},
};

const mapStateToProps = ({ deckReducer: state }, ownProps) => ({
  isFetching: state.deckIsFetching[ownProps.deckId] || false,
  cards: state.cards[ownProps.deckId] || [],
});

export default connect(mapStateToProps, { fetchData })(DeckCards);
