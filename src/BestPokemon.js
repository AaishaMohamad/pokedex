import React, { useState, useEffect } from "react";

const BestPokemon = (props) => {
  console.log(props);
  return (
    <div>
      <p>My favourite Pokemon is {props.pokemon} </p>
      <ul>
        {props.abilities.map((prop, index) => {
          return <li key={index}>{prop.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);
  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }
  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}
const BestPokemonFetcher = (props) => {
  const [bestPokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon(null);

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPokemon(data);
      });
  }, [props.pokemonId]);

  return !bestPokemon ? (
    <div>"Loading..."</div>
  ) : (
    <BestPokemon abilities={bestPokemon.abilities} pokemon={bestPokemon.name} />
  );
};
export default BestPokemonSelector;
