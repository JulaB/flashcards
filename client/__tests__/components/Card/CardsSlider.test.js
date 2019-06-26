import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CardsSlider from 'components/Card/CardsSlider';

describe('<CardsSlider />', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(<CardsSlider />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toBe('');
  });

  it('renders slider with cards', () => {
    const cards = [
      { id: '1', attributes: { term: 'term1', definition: 'some definition' } },
      { id: '2', attributes: { term: 'term2', definition: 'some definition' } },
    ];
    const wrapper = shallow(<CardsSlider cards={cards} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
