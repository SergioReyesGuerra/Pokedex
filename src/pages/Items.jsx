import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Items() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });
  const [toast, setToast] = useState('');

  // Debounce del buscador
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch inicial
  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        const results = response.data.results;

        const detailedData = await Promise.all(
          results.map(pokemon => axios.get(pokemon.url).then(res => res.data))
        );

        setPokemons(detailedData);
        setFilteredPokemons(detailedData);
      } catch (error) {
        alert('Error al cargar Pokémon');
      } finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, []);

  // Filtrar por búsqueda
  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter(p =>
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  }, [debouncedSearch, pokemons]);

  const toggleFavorite = (id, name) => {
    let updated;
    let action;
    if (favorites.includes(id)) {
      updated = favorites.filter(favId => favId !== id);
      action = `❌ Quitado de favoritos: ${name}`;
    } else {
      updated = [...favorites, id];
      action = `✅ Añadido a favoritos: ${name}`;
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
    showToast(action);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div className="container">
      <h2>Pokédex</h2>

      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="grid">
          {filteredPokemons.map(poke => (
            <div
              key={poke.id}
              className={`card ${favorites.includes(poke.id) ? 'favorite' : ''}`}
            >
              <img src={poke.sprites.front_default} alt={poke.name} />
              <h4>{poke.name}</h4>
              <p style={{ fontSize: '12px' }}>
                Tipo: {poke.types.map(t => t.type.name).join(', ')}
              </p>
              <button onClick={() => toggleFavorite(poke.id, poke.name)}>
                {favorites.includes(poke.id) ? '💔 Quitar' : '❤️ Favorito'}
              </button>
            </div>
          ))}
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
