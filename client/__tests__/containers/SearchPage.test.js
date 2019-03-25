import React from 'react';
import { shallow } from 'enzyme';

import { SearchPage } from 'containers/SearchPage/SearchPage';
import Loader from 'components/Loader/Loader';
import Deck from 'components/Deck/Deck';

describe('<SearchPage />', () => {
  it('renders the component with loader', () => {
    const wrapper = shallow(<SearchPage isFetching />);
    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(Deck)).toHaveLength(0);
  });

  it('renders the component with decks', () => {
    const decks = [
      { id: '1', attributes: { name: 'deck1' } },
      { id: '2', attributes: { name: 'deck2' } },
    ];
    const wrapper = shallow(<SearchPage decks={decks} />);
    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(Deck)).toHaveLength(decks.length);
  });
});
