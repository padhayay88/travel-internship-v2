// src/components/TravelBundles.js
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react'; // Optional: Use any icon library

const defaultBundles = [
  {
    id: 1,
    name: "Beach Escape",
    type: "Beach",
    items: ["Flight to Goa", "3 Nights Beach Resort", "Sunset Cruise"],
    originalPrice: 25000,
    discount: 0.1,
  },
  {
    id: 2,
    name: "Mountain Adventure",
    type: "Adventure",
    items: ["Flight to Manali", "2 Nights Hotel", "Snow Trekking"],
    originalPrice: 30000,
    discount: 0.15,
  },
  {
    id: 3,
    name: "Biking Tour - Leh",
    type: "Biking",
    items: ["Bike Rental", "Helmet & Gear", "4-Day Guided Leh Ride"],
    originalPrice: 18000,
    discount: 0.12,
  },
  {
    id: 4,
    name: "Beach & Spa Getaway",
    type: "Beach",
    items: ["Flight to Kerala", "2 Nights Beach Resort", "Ayurvedic Spa Session"],
    originalPrice: 22000,
    discount: 0.1,
  },
];

const TravelBundles = () => {
  const [bundles] = useState(defaultBundles);

  const handleShare = (bundleName) => {
    const url = `${window.location.href}?bundle=${bundleName.replace(/\s+/g, '-')}`;
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <section className="text-white">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles className="text-yellow-300" />
        <h2 className="text-4xl font-bold">Travel Package Bundles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bundles.map((bundle) => {
          const discountedPrice = bundle.originalPrice * (1 - bundle.discount);
          return (
            <div
              key={bundle.id}
              className="bg-white/90 text-black p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{bundle.name}</h3>
                <span className="text-sm text-indigo-700 bg-indigo-100 px-2 py-1 rounded-full">
                  {bundle.type}
                </span>
              </div>
              <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                {bundle.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm">
                <span className="line-through text-gray-500">₹{bundle.originalPrice}</span>{' '}
                <span className="text-green-600 font-bold text-lg">₹{discountedPrice.toFixed(0)}</span>{' '}
                <span className="text-xs text-gray-600">({bundle.discount * 100}% off)</span>
              </div>
              <button
                onClick={() => handleShare(bundle.name)}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition"
              >
                📤 Share Bundle
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TravelBundles;
