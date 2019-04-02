import * as types from 'constants/deckConstants';
import apiUrl from 'libs/routes';

export const deckIsFetching = deckId => ({
  type: types.DECK_IS_FETCHING,
  deckId,
});

export const deckFetchDataSuccess = (deckId, cards) => ({
  type: types.DECK_FETCH_DATA_SUCCESS,
  deckId,
  cards,
});

export const deckFetchDataFailure = (deckId, error) => ({
  type: types.DECK_FETCH_DATA_FAILURE,
  deckId,
  error,
});

export const deckFetchData = deckId => (
  (dispatch, getState) => {
    const { cards = {} } = getState().deckReducer || {};

    if (cards[deckId]) {
      return Promise.resolve();
    }
    if (!parseInt(deckId, 10)) {
      dispatch(deckFetchDataFailure(
        deckId,
        new Error('Invalid parameters'),
      ));
      return Promise.reject();
    }
    dispatch(deckIsFetching(deckId));
    return fetch(apiUrl(`/decks/${deckId}/cards`))
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad request');
        }
        return response;
      })
      .then(response => response.json())
      .then(({ data }) => dispatch(deckFetchDataSuccess(deckId, data)))
      .catch(error => dispatch(deckFetchDataFailure(deckId, error)));
  }
);
