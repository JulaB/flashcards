import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from 'actions/deckActions';
import * as types from 'constants/deckConstants';
import apiUrl from 'libs/routes';

const middleware = [thunk];
const mockStore = configureStore(middleware);
let store = mockStore({});

describe('deckActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('it dispatches deckIsFetching action', () => {
    const expectedActions = [{
      type: types.DECK_IS_FETCHING,
      deckId: '1',
    }];
    store.dispatch(actions.deckIsFetching('1'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  describe('deckFetchData', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('creates DECK_FETCH_DATA_SUCCESS for success fetching', () => {
      const mockJson = { data: [{ id: 1, type: 'cards' }] };
      const deckId = '1';
      fetchMock.getOnce(apiUrl(`/decks/${deckId}/cards`), {
        body: mockJson,
      });

      const expectedActions = [
        { type: types.DECK_IS_FETCHING, deckId },
        { type: types.DECK_FETCH_DATA_SUCCESS, deckId, cards: mockJson.data },
      ];
      return store.dispatch(actions.deckFetchData(deckId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('creates DECK_FETCH_DATA_FAILURE when response is invalid', () => {
      const deckId = '3';
      fetchMock.getOnce(apiUrl(`/decks/${deckId}/cards`), 404);
      const expectedActions = [
        { type: types.DECK_IS_FETCHING, deckId },
        {
          type: types.DECK_FETCH_DATA_FAILURE,
          error: new Error('Bad request'),
          deckId,
        },
      ];
      return store.dispatch(actions.deckFetchData(deckId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('resolves promise if cards for the deck already exist', () => {
      const deckId = '5';
      store = mockStore({
        deckReducer: {
          cards: {
            5: {
              id: '1',
              type: 'cards',
            },
          },
        },
      });
      return store.dispatch(actions.deckFetchData(deckId)).then(() => {
        expect(store.getActions()).toEqual([]);
      });
    });

    it('creates DECK_FETCH_DATA_FAILURE if invalid parameters are passed', () => {
      const deckId = 'WRONG_ID';
      const expectedActions = [
        {
          type: types.DECK_FETCH_DATA_FAILURE,
          error: new Error('Invalid parameters'),
          deckId,
        },
      ];
      return store.dispatch(actions.deckFetchData(deckId)).catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
