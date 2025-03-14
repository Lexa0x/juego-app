import React, { useEffect, useState } from 'react';
import { getTopGames } from '../services/api';
import { Link } from 'react-router-dom';
import Filters from '../components/Filters';
import GameCard from '../components/TarjetaJuego';
import '../App.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getTopGames(1, { ...filters, search: searchQuery });
        setGames(gamesData);
      } catch (error) {
        setError('Error al cargar los juegos');
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, [filters, searchQuery]);

  return (
    <div>
      <h1>Top Juegos</h1>
      <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar juegos..."
      />
      <Filters onApplyFilters={setFilters} />
      {loading ? (
        <p className="loading">Cargando juegos...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="games-grid">
          {games.map((game) => (
            <Link key={game.id} to={`/game/${game.id}`} className="game-card-link">
              <GameCard game={game} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;