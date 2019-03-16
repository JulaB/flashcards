import React from 'react';
import SearchPageContainer from 'containers/SearchPage/SearchPage';
import './app.css';

const App = () => (
  <main className="app app__container">
    <h1 className="app__motto">Learn something new today</h1>
    <SearchPageContainer />
  </main>
);

export default App;
