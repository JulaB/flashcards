import * as types from 'constants/deckConstants';

const initialState = {
  cards: {},
  deckIsFetching: {},
  deckFetchError: null,
};

const deckReducer = (state = initialState, action) => {
  const {
    type,
    deckId,
    cards,
    error,
  } = action;

  switch (type) {
    case types.DECK_IS_FETCHING:
      return {
        ...state,
        deckIsFetching: { ...state.deckIsFetching, [deckId]: true },
      };
    case types.DECK_FETCH_DATA_SUCCESS:
      return {
        ...state,
        cards: { ...state.cards, [deckId]: cards },
        deckIsFetching: { ...state.deckIsFetching, [deckId]: false },
        deckFetchError: null,
      };
    case types.DECK_FETCH_DATA_FAILURE:
      return {
        ...state,
        deckIsFetching: { ...state.deckIsFetching, [deckId]: false },
        deckFetchError: error,
      };
    default:
      return state;
  }
};

export default deckReducer;
