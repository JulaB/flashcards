import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import deckReducer from './deckReducer';

const rootReducer = combineReducers({
  searchReducer,
  deckReducer,
});
export default rootReducer;
