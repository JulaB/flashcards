import React from 'react';
import { shallow } from 'enzyme';

import Pluralize from 'components/Shared/Pluralize';


const props = { singular: 'item', plural: 'items' };

describe('<Pluralize />', () => {
  it('renders the component with zero item', () => {
    const wrapper = shallow(<Pluralize {...props}/>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toEqual('0 items');
  });

  it('renders the component with one item', () => {
    const wrapper = shallow(<Pluralize {...props} count={1} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toEqual('1 item');
  });

  it('renders the component with many items', () => {
    const wrapper = shallow(<Pluralize {...props} count={21} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toEqual('21 items');
  });
});
