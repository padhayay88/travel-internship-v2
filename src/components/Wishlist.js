import React, { useState } from 'react';

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [place, setPlace] = useState('');

  const addItem = () => {
    if (place.trim() !== '') {
      setItems([...items, place]);
      setPlace('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>📝 My Wishlist</h2>
      <input
        type="text"
        value={place}
        placeholder="Enter destination"
        onChange={(e) => setPlace(e.target.value)}
        style={{ padding: '8px', width: '200px' }}
      />
      <button onClick={addItem} style={{ marginLeft: '10px', padding: '8px 12px' }}>
        Add
      </button>
      <ul style={{ listStyle: 'none', marginTop: '20px', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index}>✨ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
