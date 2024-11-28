import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Converter from './Converter';
import Rates from './Rates';
import ImprovedButtonComponent from './ImprovedButtonComponent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/improved-button" element={<ImprovedButtonComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;