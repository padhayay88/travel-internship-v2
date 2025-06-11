import React, { createContext, useState, useEffect } from 'react';

// Create context
export const CurrencyLanguageContext = createContext();

// Provider component
export const CurrencyLanguageProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const storedCurrency = localStorage.getItem('currency');
    const storedLanguage = localStorage.getItem('language');

    if (storedCurrency) setCurrency(storedCurrency);
    if (storedLanguage) setLanguage(storedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem('currency', currency);
    localStorage.setItem('language', language);
  }, [currency, language]);

  return (
    <CurrencyLanguageContext.Provider
      value={{ currency, setCurrency, language, setLanguage }}
    >
      {children}
    </CurrencyLanguageContext.Provider>
  );
};
