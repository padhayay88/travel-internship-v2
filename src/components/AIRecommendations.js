import React, { useEffect, useState } from 'react';

const mockData = [
  { id: 1, destination: "Bali", reason: "You liked beaches", tag: "beach" },
  { id: 2, destination: "Manali", reason: "You liked mountains", tag: "mountain" },
  { id: 3, destination: "Amsterdam", reason: "You liked biking", tag: "biking" }
];

function AIRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("aiFeedback")) || {};
    setFeedback(stored);
    setRecommendations(mockData);
  }, []);

  const handleFeedback = (id, value) => {
    const updated = { ...feedback, [id]: value };
    setFeedback(updated);
    localStorage.setItem("aiFeedback", JSON.stringify(updated));
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>🌟 AI Recommendations</h2>
      {recommendations.map(rec => (
        <div
          key={rec.id}
          style={{
            padding: 10,
            margin: "10px 0",
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional soft background
            color: "#fff" // Ensure text is visible on dark background
          }}
        >
          <h4>{rec.destination}</h4>
          <small title="Why this recommendation?">🤖 {rec.reason}</small>
          <br />
          <div style={{ marginTop: 8 }}>
            <button onClick={() => handleFeedback(rec.id, 'like')} disabled={feedback[rec.id] === 'like'}>
              👍
            </button>
            <button
              onClick={() => handleFeedback(rec.id, 'dislike')}
              style={{ marginLeft: 8 }}
              disabled={feedback[rec.id] === 'dislike'}
            >
              👎
            </button>
            {feedback[rec.id] && (
              <span style={{ marginLeft: 12 }}>
                You {feedback[rec.id] === 'like' ? 'liked' : 'disliked'} this.
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AIRecommendations;
