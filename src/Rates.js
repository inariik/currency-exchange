import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

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

const Rates = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = response.data.rates;
        setRates(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  const handleBaseCurrencyChange = (e) => {
    const value = e.target.value;
    const selectedCurrency = currencies.find((currency) => currency.value === value);
    if (selectedCurrency) {
      setBaseCurrency(selectedCurrency.value);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredSuggestions = currencies.filter((currency) => currency.label.toLowerCase().includes(value.toLowerCase()));
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionSelected = (e, { suggestion }) => {
    setBaseCurrency(suggestion.value);
  };

  if (loading) {
    return <p>Загрузка данных...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <h2>Курсы валют</h2>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={() => {}}
        onSuggestionsClearRequested={() => setSuggestions([])}
        getSuggestionValue={(suggestion) => suggestion.label}
        renderSuggestion={(suggestion) => <div>{suggestion.label}</div>}
        inputProps={{
          placeholder: 'Введите валюту',
          value: inputValue,
          onChange: handleInputChange,
        }}
        onSuggestionSelected={handleSuggestionSelected}
      />
      <ul>
        {Object.keys(rates).map((currency) => (
          <li key={currency}>
            {currency}: {rates[currency]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rates;