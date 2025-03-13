import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{game.name}</h3>
      <img src={game.background_image} alt={game.name} style={{ width: '200px' }} />
      <p>Puntuación: {game.metacritic}</p>
    </div>
  );
};

export default GameCard;