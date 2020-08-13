import React from 'react';
import './App.css';
import TodosComponent from './todo/todosComponent';
import Weather from './weather/weather';
import GiphySearch from './search/giphySearch';

function App() {

  return (
    <section className='app'>
      <TodosComponent />
      <GiphySearch />
      <Weather />

    </section>
  );
}

export default App;
