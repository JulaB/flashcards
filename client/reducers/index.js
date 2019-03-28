import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import deckReducer from './deckReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  searchReducer,
  deckReducer,
  modalReducer,
});
export default rootReducer;
