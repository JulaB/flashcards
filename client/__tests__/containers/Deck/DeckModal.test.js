import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import DeckModal from 'containers/Deck/DeckModal';
import CardsSlider from 'components/Card/CardsSlider';

const cards = [
  { id: '1', attributes: { terms: 'test', definition: 'test' } },
  { id: '2', attributes: { terms: 'test', definition: 'test' } },
];

const store = configureStore()({
  deckReducer: {
    cards: {
      1: cards,
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
    expect(wrapper.find(CardsSlider).props().cards).toEqual([]);
  });

  it("renders the component with deck's cards", () => {
    const wrapper = mount(
      <Provider store={store}>
        <DeckModal deckId="1" />
      </Provider>,
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find(CardsSlider).props().cards).toEqual(cards);
  });
});
