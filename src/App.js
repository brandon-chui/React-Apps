import React from 'react';
import './App.css';

const api = {
  key: "fa46fc1d0dbc6d1807680d774e9193f1",
  url: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="searchbar"
            placeHolder="Name of City"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
