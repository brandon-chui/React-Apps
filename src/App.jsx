import React from 'react';
import './App.css';
import TodosComponent from './todo/todosComponent';
import Weather from './weather/weather';
import GiphySearch from './search/giphySearch';
import PracticeTodoComponent from './todoPractice/todosComponent';

function App() {

  return (
    <section className='app'>
      <PracticeTodoComponent />
      <GiphySearch />

    </section>
  );
}

export default App;
