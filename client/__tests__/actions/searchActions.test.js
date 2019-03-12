import * as actions from 'actions/searchActions';
import * as types from 'constants/searchConstants';


it('creates an action to set fetching', () => {
  const expectedAction = {
    type: types.SEARCH_IS_FETCHING,
  };
  expect(actions.searchIsFetching()).toEqual(expectedAction);
});
