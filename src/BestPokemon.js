import React, { useState, useEffect } from "react";

const BestPokemon = (props) => {
  console.log(props);
  return (
    <div>
      <p>My favourite Pokemon is {props.pokemon} </p>
      <ul>
        {props.abilities.map((prop) => {
          return <li>{prop}</li>;
        })}
      </ul>
    </div>
  );
};

const BestPokemonFetcher = (props) => {
  const [bestPokemon, setUp] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUp(data);
      });
  }, []);

  return !bestPokemon ? null : (
    <BestPokemon abilities={props.abilities} pokemon={bestPokemon.name} />
  );
};
export default BestPokemonFetcher;
