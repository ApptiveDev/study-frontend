import React from 'react';  
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Grid from './pages/grid/grid';
import Ranking from './pages/ranking/ranking';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/grid" element={<Grid />} />
      <Route path='/ranking' element={<Ranking />} />
    </Routes>
  );
};

export default App;
