import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Converter from './Converter';
import Rates from './Rates';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;