import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import DeckModal from 'containers/Deck/DeckModal';
import Button from 'components/Shared/Button/Button';
import * as types from 'constants/modalConstants';

import './modal.css';

const MODAL_COMPONENTS = {
  [types.DECK_MODAL]: DeckModal,
};

if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('#root');
}

class ModalManagerContainer extends React.Component {
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
      <div>
        <ReactModal
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          className="modal"
          overlayClassName="modal__overlay"
          closeTimeoutMS={1000}
          contentLabel={modalProps.title}
        >
          <header className="modal__header">
            <h3 className="modal__title">{modalProps.title}</h3>
            <Button
              className="btn--control modal__close-btn"
              onClick={this.closeModal}
              aria-label="Close"
            >
              &times;
            </Button>
          </header>
          <Component {...modalProps} />
        </ReactModal>
      </div>
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
