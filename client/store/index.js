import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


const configureStore = (initialState = {}) => {
  const composedStore = compose(
    applyMiddleware(thunk),
  )(createStore);
  return composedStore(reducer, initialState);
};

export default configureStore;
