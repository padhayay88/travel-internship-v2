// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainApp from './components/MainApp';
import Login from './components/Login';
import { CurrencyLanguageProvider } from './contexts/CurrencyLanguageContext';

import baliGate from './assets/download (3).jpg';
import manali from './assets/download (4).jpg';
import mountEverest from './assets/download.jpg';
import champagneBeach from './assets/download (1).jpg';
import amsterdam from './assets/download (2).jpg';

// ✅ Step 10: Import analytics functions
import { initGA, logPageView } from './analytics';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Initialize Google Analytics
    initGA();

    // ✅ Log the initial page view
    logPageView();

    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') setIsAuthenticated(true);

    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);

    setLoading(false);
  }, []);

  const addReview = (newReview) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  if (loading) return <div className="text-center p-10 text-white">Loading...</div>;

  return (
    <CurrencyLanguageProvider>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainApp
                reviews={reviews}
                addReview={addReview}
                images={{ champagneBeach, mountEverest, baliGate, manali, amsterdam }}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CurrencyLanguageProvider>
  );
}

export default App;
