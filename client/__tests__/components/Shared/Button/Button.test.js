import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Shared/Button/Button';

describe('<Button />', () => {
  it('renders component with default props', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.btn[type="button"]')).toHaveLength(1);
  });

  it('renders component with custom props', () => {
    const child = <span>child</span>;
    const wrapper = shallow(
      <Button className="some-other class" type="submit">
        {child}
      </Button>,
    );
    expect(wrapper.find('.btn[type="submit"]')).toHaveLength(1);
    expect(wrapper.find('.btn').hasClass('some-other class')).toBe(true);
    expect(wrapper.containsMatchingElement(child)).toBe(true);
  });
});
