import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Card from 'components/Card/Card';

describe('<Card />', () => {
  it('renders component', () => {
    const wrapper = shallow(<Card term="test" definition="some definition" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders component with default props', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toBeNull();
  });
});
