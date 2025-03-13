import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filters = ({ onApplyFilters }) => {
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [developer, setDeveloper] = useState('');
  const [tags, setTags] = useState('');

  const [availableGenres, setAvailableGenres] = useState([]);
  const [availablePlatforms, setAvailablePlatforms] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  
  const [loadingGenres, setLoadingGenres] = useState(true);
  const [loadingPlatforms, setLoadingPlatforms] = useState(true);
  const [loadingTags, setLoadingTags] = useState(true);

  // Cargar géneros
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/genres', {
          params: {
            key: import.meta.env.VITE_RAWG_API_KEY,
          },
        });
        setAvailableGenres(response.data.results);
      } catch (error) {
        console.error('Error al cargar los géneros', error);
      } finally {
        setLoadingGenres(false);
      }
    };

    fetchGenres();
  }, []);

  // Cargar plataformas
  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/platforms', {
          params: {
            key: import.meta.env.VITE_RAWG_API_KEY,
          },
        });
        setAvailablePlatforms(response.data.results);
      } catch (error) {
        console.error('Error al cargar las plataformas', error);
      } finally {
        setLoadingPlatforms(false);
      }
    };

    fetchPlatforms();
  }, []);

  // Cargar tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/tags', {
          params: {
            key: import.meta.env.VITE_RAWG_API_KEY,
          },
        });
        setAvailableTags(response.data.results);
      } catch (error) {
        console.error('Error al cargar los tags', error);
      } finally {
        setLoadingTags(false);
      }
    };

    fetchTags();
  }, []);

  const handleApplyFilters = () => {
    onApplyFilters({
      year,
      genre,
      platform,
      developer,
      tags,
    });
  };

  return (
    <div>
      <h3>Filtros</h3>
      <div>
        <label>Año:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Año de lanzamiento"
        />
      </div>
      <div>
        <label>Género:</label>
        {loadingGenres ? (
          <div>Cargando géneros...</div>
        ) : (
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Todos</option>
            {availableGenres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        <label>Plataforma:</label>
        {loadingPlatforms ? (
          <div>Cargando plataformas...</div>
        ) : (
          <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="">Todas</option>
            {availablePlatforms.map((platform) => (
              <option key={platform.id} value={platform.name}>
                {platform.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        <label>Desarrollador:</label>
        <input
          type="text"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          placeholder="Nombre del desarrollador"
        />
      </div>
      <div>
        <label>Tag:</label>
        {loadingTags ? (
          <div>Cargando tags...</div>
        ) : (
          <select value={tags} onChange={(e) => setTags(e.target.value)}>
            <option value="">Todos</option>
            {availableTags.map((tag) => (
              <option key={tag.id} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <button onClick={handleApplyFilters}>Aplicar Filtros</button>
    </div>
  );
};

export default Filters;
