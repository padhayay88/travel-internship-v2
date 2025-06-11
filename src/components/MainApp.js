// src/components/MainApp.js
import React from 'react';
import Layout from './Layout';
import CurrencyLanguageSwitcher from './CurrencyLanguageSwitcher';
import Wishlist from './Wishlist';
import ReviewRating from './ReviewRating';
import TravelBundles from './TravelBundles';
import ChatSupport from './ChatSupport';
import AIRecommendations from './AIRecommendations';

function MainApp({ backgroundImage, reviews, addReview, images }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 p-4">
        <Layout>
          {/* This must be used within CurrencyLanguageProvider, which is done in App.js */}
          <CurrencyLanguageSwitcher />
          <TravelBundles images={images} />
          <ReviewRating reviews={reviews} addReview={addReview} />
          <Wishlist />
          <AIRecommendations />
          <ChatSupport />
        </Layout>
      </div>
    </div>
  );
}

export default MainApp;
