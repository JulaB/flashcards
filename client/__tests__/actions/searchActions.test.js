import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from 'actions/searchActions';
import * as types from 'constants/searchConstants';
import apiUrl from 'libs/routes';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('searchActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches searchIsFetching action', () => {
    const expectedAction = [{
      type: types.SEARCH_IS_FETCHING,
    }];
    store.dispatch(actions.searchIsFetching());
    expect(store.getActions()).toEqual(expectedAction);
  });

  describe('searchFetchData', () => {
    afterEach(() => {
      fetchMock.restore();
    });
    it('creates SEARCH_FETCH_DATA_SUCCESS for success fetching', () => {
      const mockJson = { data: [{ id: 1 }, { id: 2 }] };
      fetchMock.getOnce('/api/v1/search', {
        body: mockJson,
      });
      const expectedActions = [
        { type: types.SEARCH_IS_FETCHING },
        { type: types.SEARCH_FETCH_DATA_SUCCESS, decks: mockJson.data },
      ];
      return store.dispatch(actions.searchFetchData()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates SEARCH_FETCH_DATA_FAILURE when response is invalid', () => {
      fetchMock.getOnce(apiUrl('/search'), 500);
      const expectedActions = [
        { type: types.SEARCH_IS_FETCHING },
        {
          type: types.SEARCH_FETCH_DATA_FAILURE,
          error: new Error('Bad request'),
        },
      ];
      return store.dispatch(actions.searchFetchData()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
