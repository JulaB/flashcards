import reducer from 'reducers/searchReducer';
import * as types from 'constants/searchConstants';

describe('search reducer', () => {
  it('returns the correct initial state', () => {
    const initialState = {
      decks: [],
      searchIsFetching: false,
      searchFetchError: null,
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('sets fetching mode', () => {
    const action = { type: types.SEARCH_IS_FETCHING };
    const expectedState = {
      decks: [],
      searchIsFetching: true,
      searchFetchError: null,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('returns the correct state with error', () => {
    const action = {
      type: types.SEARCH_FETCH_DATA_FAILURE,
      error: 'Bad request',
    };
    const prevState = {
      decks: [],
      searchIsFetching: true,
      searchFetchError: null,
    };
    const expectedState = {
      decks: [],
      searchIsFetching: false,
      searchFetchError: 'Bad request',
    };

    expect(reducer(prevState, action)).toEqual(expectedState);
  });

  it('returns state with decks', () => {
    const decksList = [{ name: 'deck1' }, { name: 'deck2' }];
    const action = {
      type: types.SEARCH_FETCH_DATA_SUCCESS,
      decks: decksList,
    };
    const prevState = {
      decks: [],
      searchIsFetching: true,
      searchFetchError: null,
    };
    const expectedState = {
      decks: decksList,
      searchIsFetching: false,
      searchFetchError: null,
    };

    expect(reducer(prevState, action)).toEqual(expectedState);
  });
});
