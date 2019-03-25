import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';


const configureStore = (initialState = {}) => {
  const middlewareEnhancer = applyMiddleware(thunk);
  const enhancers = [middlewareEnhancer];
  let composeEnhancers;

  /* eslint-disable no-underscore-dangle */
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    composeEnhancers = compose;
  }
  /* eslint-enable */

  const composedEnhancers = composeEnhancers(...enhancers);
  return createStore(reducer, initialState, composedEnhancers);
};

export default configureStore;
