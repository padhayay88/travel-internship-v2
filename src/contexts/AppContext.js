import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [locale, setLocale] = useState('en-US');
  const [currency, setCurrency] = useState('USD');

  const selectLang = (e) => setLocale(e.target.value);
  const selectCurrency = (e) => setCurrency(e.target.value);

  return (
    <AppContext.Provider value={{ locale, currency, selectLang, selectCurrency }}>
      {children}
    </AppContext.Provider>
  );
};
