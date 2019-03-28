import * as types from 'constants/modalConstants';

const initialState = {
  modalType: null,
  modalProps: {},
};

const modalReducer = (state = initialState, { type, modalType, modalProps }) => {
  switch (type) {
    case types.SHOW_MODAL:
      return {
        modalType,
        modalProps,
      };
    case types.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
