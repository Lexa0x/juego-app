import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api/games';

export const getTopGames = async (page = 1, filters = {}) => {
  try {
    const validFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value && value !== '')
    );

    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        page_size: 20,
        page,
        ordering: '-metacritic',
        ...validFilters,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error obteniendo juegos:', error);
    return [];
  }
};

export const getGameDetails = async (gameId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${gameId}`, {
      params: {
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles del juego:', error);
    return null;
  }
};