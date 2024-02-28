import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [indexUrl, setIndexUrl] = useState(0);

  function handlePageUp(indexUrl) {
    setIndexUrl(indexUrl + 1);
  }

  function handlePageDown(indexUrl) {
    setIndexUrl(indexUrl - 1);
  }
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${indexUrl}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [indexUrl]);

  return (
    <main>
      {indexUrl !== 0 && (
        <button onClick={() => handlePageDown(indexUrl)} type="button">
          Previous Page
        </button>
      )}

      <button onClick={() => handlePageUp(indexUrl)} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
