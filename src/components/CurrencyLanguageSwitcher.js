// src/components/CurrencyLanguageSwitcher.js
import React, { useContext } from 'react';
import { CurrencyLanguageContext } from '../contexts/CurrencyLanguageContext'; // ✅ match this path

const CurrencyLanguageSwitcher = () => {
  const context = useContext(CurrencyLanguageContext);

  // ✅ Prevent null crash
  if (!context) {
    return <div>Error: CurrencyLanguageContext is not available.</div>;
  }

  const { currency, setCurrency, language, setLanguage } = context;

  return (
    <div className="mb-4 flex gap-4">
      <div>
        <label className="text-white">Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-2 rounded"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <label className="text-white">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 rounded"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default CurrencyLanguageSwitcher;
