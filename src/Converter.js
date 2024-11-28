import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const currencies = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'RUB', label: 'RUB' },
  { value: 'GBP', label: 'GBP' },
  { value: 'JPY', label: 'JPY' },
  { value: 'CNY', label: 'CNY' },
  { value: 'AUD', label: 'AUD' },
  { value: 'CAD', label: 'CAD' },
  { value: 'CHF', label: 'CHF' },
  { value: 'SEK', label: 'SEK' },
  { value: 'NOK', label: 'NOK' },
  { value: 'DKK', label: 'DKK' },
  { value: 'PLN', label: 'PLN' },
  { value: 'CZK', label: 'CZK' },
  { value: 'HUF', label: 'HUF' },
  { value: 'RON', label: 'RON' },
  { value: 'BGN', label: 'BGN' },
  { value: 'TRY', label: 'TRY' },
  { value: 'ZAR', label: 'ZAR' },
  { value: 'BRL', label: 'BRL' },
  { value: 'MXN', label: 'MXN' },
  { value: 'ARS', label: 'ARS' },
  { value: 'CLP', label: 'CLP' },
  { value: 'PEN', label: 'PEN' },
  { value: 'COP', label: 'COP' },
  { value: 'VEF', label: 'VEF' },
];

const Converter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = () => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[toCurrency];
        const result = amount * rate;
        setResult(`${result.toFixed(2)} ${toCurrency}`);
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ width: '80%', maxWidth: '800px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center' }}>Конвертер валют</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <input type="number" value={amount} onChange={handleAmountChange} placeholder="Введите сумму" style={{ width: '30%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }} />
          <select value={fromCurrency} onChange={handleFromCurrencyChange} style={{ width: '20%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          <span style={{ padding: '10px' }}>in</span>
          <select value={toCurrency} onChange={handleToCurrencyChange} style={{ width: '20%', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          <button onClick={handleConvert} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#4CAF50', color: '#fff' }}>
            Конвертировать
          </button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Результат: {result}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/rates">
            <button style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#4CAF50', color: '#fff' }}>
              Показать курсы валют
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Converter;