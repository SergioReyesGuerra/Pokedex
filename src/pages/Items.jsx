import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Items() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    const favs = localStorage.getItem('favs');
    return favs ? JSON.parse(favs) : [];
  });

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(res => {
      Promise.all(res.data.results.map(p => axios.get(p.url)))
        .then(results => {
          setPokemons(results.map(r => r.data));
          setLoading(false);
        });
    });
  }, []);

  const toggleFav = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('favs', JSON.stringify(updated));
  };

  return (
    <div>
      <h1>Pokédex</h1>
      {loading && <p>Cargando...</p>}
      <div>
        {pokemons.map(p => (
          <div key={p.id}>
            <img src={p.sprites.front_default} alt={p.name} />
            <p>{p.name}</p>
            <button onClick={() => toggleFav(p.id)}>
              {favorites.includes(p.id) ? 'Quitar' : 'Favorito'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
