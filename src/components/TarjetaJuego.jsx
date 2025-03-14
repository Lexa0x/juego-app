import React, { useState, useEffect } from 'react';
import '../styles/TarjetaJuego.css';

const GameCard = ({ game }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState(game.background_image);

  useEffect(() => {
    const img = new Image();
    img.src = game.background_image;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageUrl('https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png');
      setImageLoaded(true);
    };
  }, [game.background_image]);

  if (!imageLoaded) {
    return <div>Cargando imagen...</div>;
  }

  return (
    <div className="game-card">
      <h3>{game.name}</h3>
      <img src={imageUrl} alt={game.name} />
      <p>Puntuación: {game.metacritic || 'N/A'}</p>
    </div>
  );
};

export default GameCard;