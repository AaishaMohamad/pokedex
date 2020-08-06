import React, { useState } from "react";
import Logo from "./Logo";
// import BestPokemon from "./BestPokemon.js";
import BestPokemonFetcher from "./BestPokemon.js";

const CaughtPokemon = () => {
  const [totalCaught, setCount] = useState(0);
  function incrementTotal() {
    setCount(totalCaught + 1);
  }

  const date = new Date().toLocaleDateString();

  return (
    <div>
      <p>
        Caught {totalCaught}Pokemon on {date};
      </p>
      <button onClick={incrementTotal}>Add Pokemon</button>
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
