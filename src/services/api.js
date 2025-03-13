import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = `https://api.rawg.io/api/games`;


export const getTopGames = async (page = 1, filters = {}) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                page_size: 20,
                page,
                ordering: '-metacritic',
                ...filters,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error obtenendo juegos:', error);
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
        console.error('Error al obtener detalles del juego: ');
        return null;
    }
}