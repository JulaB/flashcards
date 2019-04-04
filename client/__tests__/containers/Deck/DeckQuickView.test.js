import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DeckQuickViewContainer as DeckQuickView } from 'containers/Deck/DeckQuickView';
import Loader from 'components/Loader/Loader';
import Button from 'components/Shared/Button/Button';

describe('<DeckQuickView />', () => {
  const deckId = '1';
  it('renders the component with default props', () => {
    const wrapper = shallow(<DeckQuickView deckId={deckId} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders loader when isFetching prop is set', () => {
    const wrapper = shallow(<DeckQuickView deckId={deckId} isFetching />);
    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(Button).text()).not.toContain('Quick View');
  });

  it('cannot double click button while fetching', () => {
    const openModalFor = jest.fn();
    const wrapper = shallow(
      <DeckQuickView
        deckId={deckId}
        isFetching
        openModalFor={openModalFor}
      />,
    );
    wrapper.find(Button).simulate('click');
    expect(openModalFor).not.toHaveBeenCalled();
  });

  it('responds to click', () => {
    const openModalFor = jest.fn();
    const wrapper = shallow(
      <DeckQuickView
        deckId={deckId}
        openModalFor={openModalFor}
      />,
    );
    wrapper.find(Button).simulate('click');
    expect(openModalFor).toHaveBeenCalledWith(deckId);
  });
});
