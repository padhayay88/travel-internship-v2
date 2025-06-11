// src/components/Layout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.jpg'; // Make sure this image exists

function Layout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/60 min-h-screen flex flex-col">
        <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-800 to-indigo-600 shadow-lg">
          <h1 className="text-3xl font-extrabold tracking-wide">✈️ Travel World</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition-transform duration-200 hover:scale-105"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 px-4 sm:px-8 py-8 space-y-12">{children}</main>

        <footer className="text-center py-4 text-sm text-white/70 bg-transparent">
          © {new Date().getFullYear()} Travel World. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Layout;
