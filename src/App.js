import React, { useState } from "react";
import Logo from "./Logo";
// import BestPokemon from "./BestPokemon.js";
import BestPokemonFetcher from "./BestPokemon.js";

const CaughtPokemon = () => {
  const [pokemonNameInput, setPokemonName] = useState("");
  function handleInputChange(event) {
    setPokemonName(event.target.value);
  }
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  console.log(caughtPokemon);
  function catchPokemon() {
    setCaughtPokemon(caughtPokemon.concat(pokemonNameInput));
    setPokemonName("");
  }

  // const date = new Date().toLocaleDateString();

  return (
    <div>
      <ul>
        {caughtPokemon.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Add Pokemon</button>
    </div>
  );
};

function App() {
  function logWhenClicked() {
    console.log("it works!!");
  }
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemonFetcher abilities={["glasshopper"]} />
      <CaughtPokemon />
    </div>
  );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
