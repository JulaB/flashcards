import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ToggleSwitch from 'components/Shared/ToggleSwitch/ToggleSwitch';

describe('<ToggleSwitch />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<ToggleSwitch />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders component with custom props', () => {
    const wrapper = shallow(
      <ToggleSwitch
        id="customId"
        className="some-class"
        checked={true}
      />,
    );

    expect(wrapper.find('.toggle-switch')).toHaveLength(1);
    expect(wrapper.find('.toggle-switch').hasClass('some-class')).toBe(true);

    const checkbox = wrapper.find({ type: 'checkbox' });
    expect(checkbox.props().checked).toBe(true);
  });
});
