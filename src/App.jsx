import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Grid from './pages/grid'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/grid" element={<Grid />} />
    </Routes>
  );
};

export default App;
