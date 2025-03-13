import React, { useEffect, useState } from 'react';
import { getTopGames } from '../services/api';
import { Link } from 'react-router-dom';
import GameCard from '../components/TarjetaJuego';
import Filters from '../components/Filters';


const Home = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const fetchgames = async () => {
            try {
                const gamesData = await getTopGames(1,{...filters, search: searchQuery});
                setGames(gamesData);
            } catch (error) {
                setError('Error al cargar los juegos: ');

            } finally {
                setLoading(false);
            }
        };
        fetchgames();
    }, [filters, searchQuery]);

    if (loading) {
        return <p>Cargando juegos...</p>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
        <h1>Top Juegos</h1>
        <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar juegos..."
        />
      </div>
        <Filters onApplyFilters={setFilters} />
        <div>
          {games.map(game => (
            <Link key={game.id} to={`/game/${game.id}`}>
              <GameCard game={game} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Home;