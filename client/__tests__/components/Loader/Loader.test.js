import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loader from 'components/Loader/Loader';

describe('<Loader />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<Loader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
