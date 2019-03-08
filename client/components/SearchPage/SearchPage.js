import React from 'react';
import Loader from '../Loader/Loader';
import Deck from '../Deck/Deck';
import './search-page.css';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [],
      isFetching: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  setData({ data } = []) {
    this.setState({ decks: data, isFetching: false });
  }

  showError() {
    this.setState({ isFetching: false });
  }

  fetchData() {
    fetch('/api/v1/search')
      .then(response => response.json())
      .then(data => this.setData(data))
      .catch(error => this.showError(error));
  }

  render() {
    const { decks, isFetching } = this.state;
    return (
      <section className='search-page'>
        {isFetching && <Loader />}
        <div className='search-page__results'>
          {decks.map(deck => <Deck {...deck.attributes} key={deck.id} />)}
        </div>
      </section>
    );
  }
}

export default SearchPage;
