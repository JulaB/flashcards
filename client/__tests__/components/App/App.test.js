import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App/App';

describe('<App />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
