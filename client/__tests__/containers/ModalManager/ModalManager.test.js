import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'components/Shared/Modal/Modal';

import { DECK_MODAL } from 'constants/modalConstants';
import DeckModal from 'containers/Deck/DeckModal';
import { ModalManagerContainer as ModalManager } from 'containers/ModalManager/ModalManager';

describe('<ModalManager />', () => {
  it('renders null by default', () => {
    const wrapper = shallow(<ModalManager />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toBeNull();
  });

  it('renders null when the modal type is invalid', () => {
    const modalType = 'Unregistered-modal-type';
    const modalProps = { open: true };
    const wrapper = shallow(
      <ModalManager modalProps={modalProps} modalType={modalType} />,
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toBeNull();
  });

  describe('render modal with props', () => {
    let wrapper;
    const modalType = DECK_MODAL;
    const modalProps = { open: true, title: 'modal title' };

    beforeEach(() => {
      wrapper = shallow(
        <ModalManager modalProps={modalProps} modalType={modalType} />,
      );
    });

    it('renders opened modal', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find(DeckModal)).toHaveLength(1);
      expect(wrapper.find(Modal).props().isOpen).toBe(true);
    });

    it('renders closed modal when component receives new props', () => {
      expect(wrapper.find(Modal).props().isOpen).toBe(true);
      wrapper.setProps({ modalProps: {} });
      expect(wrapper.find(Modal).props().isOpen).toBe(false);
    });

    it('closes modal', () => {
      expect(wrapper.find(Modal).props().isOpen).toBe(true);
      wrapper.find(Modal).props().onClose();
      expect(wrapper.find(Modal).props().isOpen).toBe(false);
    });
  });
});
