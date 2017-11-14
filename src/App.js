import React from 'react';

function App() {
  return (
    <div id="header">
    <div id="background"></div>
    <div id="parent">
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
    <div id="header-text">
      <h1>POKEMON</h1>
    </div>
    <div id="pokemon-stats">
      <p id="pokemonID" class="stats"><font size="1">NO</font><br/>
        #ID
      </p>
      <p id="pokemonHeight" class="stats"><font size="1">HEIGHT</font><br/>
        0.00m
      </p>
      <p id="pokemonWeight" class="stats"><font size="1">WEIGHT</font><br/>
        00.0kg
      </p>
      <p id="pokemonType" class="stats"><font size="1">TYPE</font><br/>
        Water
      </p>
    </div>
    </div>
    </div>
  );
}

export default App;
