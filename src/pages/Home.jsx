import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨ Bienvenido a la Pokédex</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Explora, busca y guarda tus Pokémon favoritos de la región de Kanto.  
        Usa el buscador inteligente, marca tus favoritos y diviértete.
      </p>

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pikachu"
        style={{ width: '120px', marginBottom: '2rem' }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/items">
          <button style={{ padding: '0.7rem 1.5rem', fontSize: '1rem' }}>🔍 Ver Pokédex</button>
        </Link>
        <Link to="/contact">
          <button style={{ padding: '0.7rem 1.5rem', fontSize: '1rem' }}>📬 Contacto</button>
        </Link>
      </div>
    </div>
  );
}
