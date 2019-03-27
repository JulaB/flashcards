import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deckFetchData as fetchData } from 'actions/deckActions';
import Loader from 'components/Loader/Loader';
import Button from 'components/Shared/Button/Button';
// import Slider from 'components/Shared/Slider/Slider';
// import Card from 'components/Card/Card';

export class DeckQuickViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isFetching, deckId } = this.props;
    if (isFetching) {
      return;
    }
    this.props.fetchData(deckId);
  }

  render() {
    const { isFetching } = this.props;
    return (
      <Button className="btn--primary deck__button" onClick={this.handleClick}>
        { isFetching
          ? <Loader className="loader--btn" />
          : 'Quick View'
        }
      </Button>
    );
    // return (
    //   <Slider>
    //     {cards.map(card => (
    //       <Card {...card.attributes} key={card.id} />
    //     ))}
    //   </Slider>
    // );
  }
}

DeckQuickViewContainer.propTypes = {
  deckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func,
};

DeckQuickViewContainer.defaultProps = {
  isFetching: false,
  cards: [],
  fetchData: () => {},
};

const mapStateToProps = ({ deckReducer: state }, ownProps) => ({
  isFetching: state.deckIsFetching[ownProps.deckId] || false,
  cards: state.cards[ownProps.deckId] || [],
});

export default connect(mapStateToProps, { fetchData })(DeckQuickViewContainer);
