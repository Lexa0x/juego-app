import React, { useState, useEffect } from 'react';
import '../styles/TarjetaJuego.css';

const GameCard = ({ game }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState(game.background_image);

  useEffect(() => {
    const img = new Image();
    img.src = game.background_image;

    img.onload = () => {
      // La imagen se cargó correctamente
      setImageLoaded(true);
    };

    img.onerror = () => {
      // La imagen no se pudo cargar, usar imagen por defecto
      setImageUrl('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg');
      setImageLoaded(true);
    };
  }, [game.background_image]);

  if (!imageLoaded) {
    return <div>Cargando imagen...</div>; // Muestra un mensaje de carga mientras se verifica la imagen
  }

  return (
    <div className="game-card">
      <h3>{game.name}</h3>
      <img
        src={imageUrl} // Usamos imageUrl en lugar de game.background_image directamente
        alt={game.name}
      />
      <p>Puntuación: {game.metacritic || 'N/A'}</p>
    </div>
  );
};

export default GameCard;