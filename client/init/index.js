import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App/App';
import configureStore from 'store';
import './index.css';

const store = configureStore();
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
});
