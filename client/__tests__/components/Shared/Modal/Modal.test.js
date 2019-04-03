import React from 'react';
import { shallow } from 'enzyme';

import Modal from 'components/Shared/Modal/Modal';

describe('<Modal />', () => {
  it('renders the component with default props', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.exists()).toBeTruthy();
  });

  describe('rendering with custom props', () => {
    const child = <span>Modal inner content</span>;
    let wrapper;
    let onClose;

    beforeEach(() => {
      onClose = jest.fn();
      wrapper = shallow(
        <Modal title="Modal title" isOpen={true} onClose={onClose}>
          {child}
        </Modal>,
      );
    });

    it('renders model with title', () => {
      expect(wrapper.find('.modal__title').text()).toEqual('Modal title');
    });

    it('renders model with child', () => {
      expect(wrapper.containsMatchingElement(child)).toBe(true);
    });

    it('triggers onClose callback', () => {
      wrapper.find('.modal__close-btn').simulate('click');
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
