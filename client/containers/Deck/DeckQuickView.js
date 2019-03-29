import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'components/Loader/Loader';
import Button from 'components/Shared/Button/Button';
import { deckFetchData as fetchData } from 'actions/deckActions';
import { showModal } from 'actions/modalActions';
import { DECK_MODAL } from 'constants/modalConstants';

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
    this.props.openModalFor(deckId);
  }

  render() {
    const { isFetching } = this.props;
    return (
      <Button
        className="btn--primary deck__button"
        onClick={this.handleClick}
        disabled={isFetching}
      >
        { isFetching
          ? <Loader className="loader--btn" />
          : 'Quick View'
        }
      </Button>
    );
  }
}

DeckQuickViewContainer.propTypes = {
  deckId: PropTypes.string.isRequired,
  name: PropTypes.string,
  isFetching: PropTypes.bool,
  openModalFor: PropTypes.func,
};

DeckQuickViewContainer.defaultProps = {
  isFetching: false,
  name: '',
  openModalFor: () => {},
};

const mapStateToProps = ({ deckReducer: state }, ownProps) => ({
  isFetching: state.deckIsFetching[ownProps.deckId] || false,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModalFor: deckId => (
    dispatch(fetchData(deckId))
      .then(() => dispatch(
        showModal({
          modalType: DECK_MODAL,
          modalProps: {
            deckId,
            open: true,
            title: ownProps.name,
          },
        }),
      ))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckQuickViewContainer);
