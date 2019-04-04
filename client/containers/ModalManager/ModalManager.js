import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'components/Shared/Modal/Modal';
import DeckModal from 'containers/Deck/DeckModal';

import * as types from 'constants/modalConstants';

const MODAL_COMPONENTS = {
  [types.DECK_MODAL]: DeckModal,
};

export class ModalManagerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.modalProps.open,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ isOpen: nextProps.modalProps.open });
    }
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { modalType, modalProps } = this.props;
    if (!modalType || !MODAL_COMPONENTS[modalType]) {
      return null;
    }
    const Component = MODAL_COMPONENTS[modalType];

    return (
      <Modal
        isOpen={this.state.isOpen}
        title={modalProps.title}
        onClose={this.closeModal}
      >
        <Component {...modalProps} />
      </Modal>
    );
  }
}

ModalManagerContainer.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
};

ModalManagerContainer.defaultProps = {
  modalType: null,
  modalProps: {
    open: false,
    title: '',
  },
};

const mapStateToProps = ({ modalReducer: state }) => (state);

export default connect(mapStateToProps)(ModalManagerContainer);
