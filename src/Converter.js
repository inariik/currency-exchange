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
        setResult(result.toFixed(2));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Конвертер валют</h2>
      <input type="number" value={amount} onChange={handleAmountChange} placeholder="Введите сумму" />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value}>
            {currency.label}
          </option>
        ))}
      </select>
      <span>in</span>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value}>
            {currency.label}
          </option>
        ))}
      </select>
      <button onClick={handleConvert}>Конвертировать</button>
      <p>Результат: {result}</p>
      <Link to="/rates">
        <button>Показать курсы валют</button>
      </Link>
    </div>
  );
};

export default Converter;