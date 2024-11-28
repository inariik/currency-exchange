import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Rates from './Rates';

export function handleCurrencySelection(e) {
  const selectedCurrency = e.target.value;
  const pressedKey = e.key.toUpperCase();

  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(pressedKey)) {
    const newCurrency = selectedCurrency + pressedKey;
    e.target.value = newCurrency;
  } else if (['BACKSPACE', 'Delete'].includes(pressedKey)) {
    const newCurrency = selectedCurrency.slice(0, -1);
    e.target.value = newCurrency;
  } else if (['ENTER'].includes(pressedKey)) {
    // Выполнить действие при нажатии Enter
  }
};

const App = () => {
  return (
    <div>
      <Rates />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);