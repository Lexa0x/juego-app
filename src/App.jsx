import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Inicio';
import GameDetail from './pages/DetalleJuego';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetail />} /> {/* Ruta para detalle de juego */}
    </Routes>
  </Router>
  )
}

export default App
