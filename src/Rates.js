import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Rates = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');

  useEffect(() => {
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((response) => {
        setRates(response.data.rates);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [baseCurrency]);

  const handleCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '80%', maxWidth: '800px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center' }}>Курсы валют</h1>
        <select value={baseCurrency} onChange={handleCurrencyChange} style={{ border: '1px solid #ccc', padding: '10px', width: '100%' }}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="CNY">CNY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="SEK">SEK</option>
          <option value="NOK">NOK</option>
          <option value="DKK">DKK</option>
          <option value="PLN">PLN</option>
          <option value="CZK">CZK</option>
          <option value="HUF">HUF</option>
          <option value="RON">RON</option>
          <option value="BGN">BGN</option>
          <option value="TRY">TRY</option>
          <option value="ZAR">ZAR</option>
          <option value="BRL">BRL</option>
          <option value="MXN">MXN</option>
          <option value="ARS">ARS</option>
          <option value="CLP">CLP</option>
          <option value="PEN">PEN</option>
          <option value="COP">COP</option>
          <option value="VEF">VEF</option>
        </select>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Object.keys(rates).map((currency) => (
            <div key={currency} style={{ width: '10%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', margin: '10px' }}>
              <h2 style={{ textAlign: 'center' }}>{currency}</h2>
              <p style={{ textAlign: 'center' }}>{rates[currency]}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/">
            <button style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#4CAF50', color: '#fff' }}>
              Конвертации Валюты
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rates;