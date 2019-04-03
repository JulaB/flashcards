import reducer from 'reducers/deckReducer';
import * as types from 'constants/deckConstants';

const prevState = {
  cards: {
    1: [{ id: '2', type: 'cards' }],
  },
  deckIsFetching: {
    1: false,
    2: true,
  },
  deckFetchError: null,
};

describe('deck reducer', () => {
  it('returns the correct initial state', () => {
    const initialState = {
      cards: {},
      deckIsFetching: {},
      deckFetchError: null,
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('sets fetching mode for the deck', () => {
    const expectedState = {
      cards: {
        1: [{ id: '2', type: 'cards' }],
      },
      deckIsFetching: {
        1: false,
        2: true,
        3: true,
      },
      deckFetchError: null,
    };
    const action = {
      type: types.DECK_IS_FETCHING,
      deckId: '3',
    };
    expect(reducer(prevState, action)).toEqual(expectedState);
  });

  it('returns the correct state with errors', () => {
    const expectedState = {
      cards: {
        1: [{ id: '2', type: 'cards' }],
      },
      deckIsFetching: {
        1: false,
        2: false,
      },
      deckFetchError: 'Bad Request',
    };
    const action = {
      type: types.DECK_FETCH_DATA_FAILURE,
      deckId: '2',
      error: 'Bad Request',
    };
    expect(reducer(prevState, action)).toEqual(expectedState);
  });

  it('returns the correct state with the deck cards', () => {
    const expectedState = {
      cards: {
        1: [{ id: '2', type: 'cards' }],
        2: [{ id: '3', type: 'cards' }],
      },
      deckIsFetching: {
        1: false,
        2: false,
      },
      deckFetchError: null,
    };
    const action = {
      type: types.DECK_FETCH_DATA_SUCCESS,
      deckId: '2',
      cards: [{ id: '3', type: 'cards' }],
    };

    expect(reducer(prevState, action)).toEqual(expectedState);
  });
});
