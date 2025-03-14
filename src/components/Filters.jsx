import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Filters.css'

const Filters = ({ onApplyFilters }) => {
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [developer, setDeveloper] = useState('');
  const [tag, setTag] = useState('');

  const [availableGenres, setAvailableGenres] = useState([]);
  const [availablePlatforms, setAvailablePlatforms] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);

  const [loadingGenres, setLoadingGenres] = useState(true);
  const [loadingPlatforms, setLoadingPlatforms] = useState(true);
  const [loadingTags, setLoadingTags] = useState(true);


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
    const validFilters = {
      ...(year && { dates: `${year}-01-01,${year}-12-31` }),
      ...(genre && { genres: genre }),
      ...(platform && { platforms: platform }),
      ...(developer && { developers: developer }),
      ...(tag && { tags: tag }),
    };
    onApplyFilters(validFilters);
  };

  return (
    <div className="filters">
    <div className="filter-item">
      <label>Año:</label>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Año de lanzamiento"
        id="anio"
      />
    </div>
    <div className="filter-item">
      <label>Género:</label>
      {loadingGenres ? (
        <div>Cargando géneros...</div>
      ) : (
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Todos</option>
          {availableGenres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      )}
    </div>
    <div className="filter-item">
      <label>Plataforma:</label>
      {loadingPlatforms ? (
        <div>Cargando plataformas...</div>
      ) : (
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="">Todas</option>
          {availablePlatforms.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      )}
    </div>
    <div className="filter-item">
      <label>Desarrollador:</label>
      <input
        type="text"
        value={developer}
        onChange={(e) => setDeveloper(e.target.value)}
        placeholder="Nombre del desarrollador"
        id="desarrollador"
      />
    </div>
    <div className="filter-item">
      <label>Tag:</label>
      {loadingTags ? (
        <div>Cargando tags...</div>
      ) : (
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="">Todos</option>
          {availableTags.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      )}
    </div>
    <div className="filter-item">
      <button onClick={handleApplyFilters}>Aplicar Filtros</button>
    </div>
  </div>
  );
};

export default Filters;