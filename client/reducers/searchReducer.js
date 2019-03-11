import * as types from '../constants/searchConstants';

export const initialState = {
  decks: [],
  searchIsFetching: false,
  searchFetchError: null,
};

const searchReducer = (state = initialState, { type, decks, error }) => {
  switch (type) {
    case types.SEARCH_IS_FETCHING:
      return { ...state, searchIsFetching: true };
    case types.SEARCH_FETCH_DATA_SUCCESS:
      return {
        ...state,
        decks,
        searchIsFetching: false,
        searchFetchError: null,
      };
    case types.SEARCH_FETCH_DATA_FAILURE:
      return { ...state, searchIsFetching: false, searchFetchError: error };
    default:
      return state;
  }
};

export default searchReducer;
