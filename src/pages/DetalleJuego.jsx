import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Para obtener el ID del juego desde la URL
import { getGameDetails } from '../services/api';

const GameDetail = () => {
  const { id } = useParams();  // Obtener el ID del juego desde la URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const gameData = await getGameDetails(id);
        setGame(gameData);
      } catch (error) {
        setError('Error al cargar los detalles del juego');
      } finally {
        setLoading(false);
      }
    };
    fetchGameDetails();
  }, [id]);

  if (loading) {
    return <div>Cargando detalles...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleBack = () => {
    navigate('/'); // Navega a la página de inicio
  };

  return (
    <div>
        <button onClick={handleBack} className="back-button">Volver a la página principal</button>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} style={{ width: '300px' }} />
      <p>{game.description_raw}</p>
      <p><strong>Género:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
      <p><strong>Año de lanzamiento:</strong> {game.released}</p>
      <p><strong>Plataformas:</strong> {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
      {game.trailers && game.trailers.length > 0 && (
        <div>
          <h3>Trailer</h3>
          <video width="400" controls>
            <source src={game.trailers[0].data[0].max} type="video/mp4" />
            Tu navegador no soporta este formato de video.
          </video>
        </div>
      )}
    </div>
  );
};

export default GameDetail;
