import * as types from '../constants/searchConstants';

export const searchIsFetching = () => ({
  type: types.SEARCH_IS_FETCHING,
});

export const searchFetchDataSuccess = decks => ({
  type: types.SEARCH_FETCH_DATA_SUCCESS,
  decks,
});

export const searchFetchDataFailure = error => ({
  type: types.SEARCH_FETCH_DATA_FAILURE,
  error,
});

export const searchFetchData = () => (
  (dispatch) => {
    dispatch(searchIsFetching(true));
    fetch('/api/v1/search')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad request');
        }
        return response;
      })
      .then(response => response.json())
      .then(({ data }) => dispatch(searchFetchDataSuccess(data)))
      .catch(error => dispatch(searchFetchDataFailure(error)));
  }
);
