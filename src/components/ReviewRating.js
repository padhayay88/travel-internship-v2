import React, { useState } from 'react';

function ReviewRating({ onSubmit = () => {} }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ review, rating });
    setReview('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>Leave a Review</h3>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows="3"
        cols="40"
        placeholder="Write your review"
        required
      />
      <br />
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewRating;
