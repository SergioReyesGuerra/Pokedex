import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
        <Link to="/items" style={{ marginRight: '1rem' }}>🧩 Items</Link>
        <Link to="/contact">📬 Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
