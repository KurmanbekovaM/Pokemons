import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      setPokemons(data.results);
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Pokemons List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsList;
