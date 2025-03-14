import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api/games';

export const getTopGames = async (page = 1, filters = {}) => {
  try {
    const validFilters = {};

    for (const key in filters) {
      if (filters[key] && filters[key] !== '') {
        validFilters[key] = filters[key];
      }
    }

    const params = {
      key: API_KEY,
      page_size: 20,
      page: page,
      ordering: '-metacritic',
    };

    for (const key in validFilters) {
      params[key] = validFilters[key];
    }

    const response = await axios.get(BASE_URL, { params });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching top games:", error);
    throw error;
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