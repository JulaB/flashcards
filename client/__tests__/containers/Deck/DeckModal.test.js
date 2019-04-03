import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import DeckModal from 'containers/Deck/DeckModal';
import Card from 'components/Card/Card';

const store = configureStore()({
  deckReducer: {
    cards: {
      1: [
        { id: '1', attributes: { terms: 'test', definition: 'test' } },
        { id: '2', attributes: { terms: 'test', definition: 'test' } },
      ],
    },
  },
});

describe('<DeckModal />', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <DeckModal />
      </Provider>,
    );
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toBeNull();
  });

  it("renders the component with deck's cards", () => {
    const wrapper = mount(
      <Provider store={store}>
        <DeckModal deckId="1" />
      </Provider>,
    );
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find(Card)).toHaveLength(2);
  });
});
