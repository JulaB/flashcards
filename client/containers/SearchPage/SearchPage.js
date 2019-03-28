import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'components/Loader/Loader';
import Deck from 'components/Deck/Deck';
import DeckQuickView from 'containers/Deck/DeckQuickView';
import { searchFetchData as fetchData } from 'actions/searchActions';
import './search-page.css';

export class SearchPage extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { decks, isFetching } = this.props;
    return (
      <section className='search-page'>
        {isFetching && <Loader />}
        <div className='search-page__results'>
          {decks.map(deck => (
            <Deck {...deck.attributes} key={deck.id}>
              <DeckQuickView deckId={deck.id} />
            </Deck>
          ))}
        </div>
      </section>
    );
  }
}

SearchPage.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  fetchData: PropTypes.func,
};

SearchPage.defaultProps = {
  decks: [],
  isFetching: false,
  fetchData: () => {},
};

const mapStateToProps = ({ searchReducer: state }) => ({
  isFetching: state.searchIsFetching,
  decks: state.decks,
});

export default connect(mapStateToProps, { fetchData })(SearchPage);
