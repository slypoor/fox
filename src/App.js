import React from 'react';

const API = 'https://pokeapi.co/api/v2/pokemon/';
const PokemonID = '54';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
    };
  }

  componentWillMount() {
    fetch(API + PokemonID)
      .then(response => response.json())
      .then(data => this.setState({ pokemon: data, stats: data.stats, type: data.types}));
  }

render() {
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
          <label for="search"><font size="1">Go to ID (1-151)</font></label><br/><br/>
          <label class="hash">#</label><input id="search" class="search-button" type="text"></input><br/><br/>
          <input id="searchButton" class="search-button" type="button" value="SEARCH"></input>
        </div>
      </div>
    </div>
    <div id="header-text">
      <h1 id="pokemonName">{this.state.pokemon.name}</h1>
    </div>
    <div id="pokemonAvatar">
      <div id="blueScreen" /><br/>
      <div id="redCircle">&nbsp;</div>
      <div id="burger">
        <div class="burger"></div>
        <div class="burger"></div>
        <div class="burger"></div>
      </div>
    </div>
    <div id="pokemon-details">
      <p id="pokemonID" class="details"><font size="1">NO</font><br/>
        #{this.state.pokemon.id}
      </p>
      <p id="pokemonHeight" class="details"><font size="1">HEIGHT</font><br/>
        {this.state.pokemon.height/10}m
      </p>
      <p id="pokemonWeight" class="details"><font size="1">WEIGHT</font><br/>
        {this.state.pokemon.weight/10}kg
      </p>
      <p id="pokemonType" class="details"><font size="1">TYPE</font><br/>
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
}

export default App;
