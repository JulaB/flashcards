import React from 'react';
import { shallow } from 'enzyme';

import DarkModeSwitcher from 'components/Shared/DarkModeSwitcher/DarkModeSwitcher';
import ToggleSwitch from 'components/Shared/ToggleSwitch/ToggleSwitch';


describe('<DarkModeSwitcher />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<DarkModeSwitcher />);

    expect(wrapper.find('.dark-mode-switcher')).toHaveLength(1);
    expect(wrapper.find(ToggleSwitch).props().checked).toBe(false);
  });
});
