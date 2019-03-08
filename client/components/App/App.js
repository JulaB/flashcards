import React from 'react';
import SearchPage from '../SearchPage/SearchPage';
import './app.css';

const App = () => (
  <main className="app app__container">
    <h1 className="app__motto">Learn something new today</h1>
    <SearchPage />
  </main>
);

export default App;
