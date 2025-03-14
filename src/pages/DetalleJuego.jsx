import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGameDetails } from '../services/api';
import '../styles/DetalleJuego.css'; // Importa los estilos

const GameDetail = () => {
  const { id } = useParams();
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
    return <div className="loading">Cargando detalles...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p>{game.description_raw}</p>
      <p><strong>Género:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
      <p><strong>Año de lanzamiento:</strong> {game.released}</p>
      <p><strong>Plataformas:</strong> {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
      {game.trailers && game.trailers.length > 0 && (
        <div className="trailer-container">
          <h3>Trailer</h3>
          <video width="400" controls>
            <source src={game.trailers[0].data[0].max} type="video/mp4" />
            Tu navegador no soporta este formato de video.
          </video>
        </div>
      )}
      <button onClick={handleBack} className="back-button">Volver a la página principal</button>
    </div>
  );
};

export default GameDetail;