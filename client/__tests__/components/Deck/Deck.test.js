import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Deck from 'components/Deck/Deck';

describe('<Deck />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Deck name="test deck" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
