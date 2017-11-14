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
      <h1 id="pokemonName">POKEMON</h1>
    </div>
    <div id="pokemonAvatar">
      <div id="blueScreen">
      </div>
    </div>
    <div id="pokemon-details">
      <p id="pokemonID" class="details"><font size="1">NO</font><br/>
        #ID
      </p>
      <p id="pokemonHeight" class="details"><font size="1">HEIGHT</font><br/>
        0.00m
      </p>
      <p id="pokemonWeight" class="details"><font size="1">WEIGHT</font><br/>
        00.0kg
      </p>
      <p id="pokemonType" class="details"><font size="1">TYPE</font><br/>
        Water
      </p>
    </div>
    <div id="pokemon-stats">
      <p>BASE STATS</p>
      <hr/>
      <br/>
      <div class="segment">
        <label for="HP" class="baseStats">HP</label><br/><br/>
        <div id="HP" class="baseStats2">600</div>
      </div>
      <div class="divider" />
      <div class="segment">
        <label for="Attack" class="baseStats">ATTACK</label><br/><br/>
        <div id="Attack" class="baseStats2">600</div>
      </div>
      <div class="divider" />
      <div class="segment">
        <label for="Defense" class="baseStats">DEFENSE</label><br/><br/>
        <div id="Defense" class="baseStats2">600</div>
      </div>
      <div class="divider" />
      <div class="segment">
        <label for="SPAttack" class="baseStats">SP.ATT</label><br/><br/>
        <div id="SPAttack" class="baseStats2">600</div>
      </div>
      <div class="divider" />
      <div class="segment">
        <label for="SPDefense" class="baseStats">SP.DEF</label><br/><br/>
        <div id="SPDefense" class="baseStats2">600</div>
      </div>
      <div class="divider" />
      <div class="segment">
        <label for="Speed" class="baseStats">SPEED</label><br/><br/>
        <div id="Speed" class="baseStats2">600</div>
      </div>
    </div>
    </div>
    <footer class="footer">
    <br/><br/>
    <a id="backID" href="">&lt; #000 Pokemon</a><div class="footDivier" /><a id="frontID" href="">Pokemon #000 &gt;</a>
    </footer>
    </div>
  );
}

export default App;
