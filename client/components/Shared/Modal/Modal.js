import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from 'components/Shared/Button/Button';

import './modal.css';

if (process.env.NODE_ENV !== 'test') {
  ReactModal.setAppElement('#root');
}

const Modal = ({
  isOpen,
  title,
  onClose,
  children,
}) => (
  <div>
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal__overlay"
      closeTimeoutMS={1000}
      contentLabel={title}
    >
      <header className="modal__header">
        <h3 className="modal__title">{title}</h3>
        <Button
          className="btn--control modal__close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </Button>
      </header>
      {children}
    </ReactModal>
  </div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  title: '',
  children: null,
  onClose: () => {},
};
export default Modal;
