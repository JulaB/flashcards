import reducer from 'reducers/modalReducer';
import * as types from 'constants/modalConstants';

describe('modal reducer', () => {
  it('returns the correct initial state', () => {
    const initialState = {
      modalType: null,
      modalProps: {},
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('returns the correct state for SHOW_MODAL', () => {
    const expectedState = {
      modalType: 'some modal',
      modalProps: {
        open: true,
        otherProps: {},
      },
    };
    const action = {
      type: types.SHOW_MODAL,
      modalType: 'some modal',
      modalProps: {
        open: true,
        otherProps: {},
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('returns the correct state for HIDE_MODAL', () => {
    const expectedState = {
      modalType: null,
      modalProps: {},
    };
    const prevState = {
      modalType: 'some modal',
      modalProps: {
        open: true,
      },
    };
    const action = { type: types.HIDE_MODAL };
    expect(reducer(prevState, action)).toEqual(expectedState);
  });
});
