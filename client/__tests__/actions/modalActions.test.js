import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from 'actions/modalActions';
import * as types from 'constants/modalConstants';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('modalActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches showModal action', () => {
    const modalProps = {
      open: true,
      rest: [],
    };
    const expectedAction = [{
      type: types.SHOW_MODAL,
      modalType: 'SomeModal',
      modalProps,
    }];

    store.dispatch(actions.showModal({
      modalType: 'SomeModal',
      modalProps,
    }));

    expect(store.getActions()).toEqual(expectedAction);
  });

  it('dispatches hideModal action', () => {
    const expectedAction = [{
      type: types.HIDE_MODAL,
    }];

    store.dispatch(actions.hideModal());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
