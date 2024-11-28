import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonsList from './components/PokemonsList';
import PokemonPage from './components/PokemonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
