import React from 'react';

function App() {
  return (
    <div id="header">
    <div id="background"></div>
    <h1 id="header-text">Pokemon Name</h1>
    <div id="sidebar">
      <div id="center">
        <div id="left">
          <br/><br/>
          <p>Pokedex<br/>
          <sub>by keano porcaro</sub>
          </p>
          <br/>
          <label for="search"><font size="1">Go to ID (1-151)</font></label><br/>
          <input id="search" class="search-button" type="text"></input><br/>
          <input id="searchButton" class="search-button" type="button" value="Search"></input>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
