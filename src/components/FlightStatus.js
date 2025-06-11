import React, { useEffect, useState } from 'react';

const mockFlightData = [
  {
    flight: "AI202",
    destination: "New York",
    status: "On Time",
    eta: "08:45 PM",
    lastUpdated: new Date().toLocaleTimeString(),
  },    
  {
    flight: "BA101",
    destination: "London",
    status: "Delayed by 1h",
    eta: "10:15 PM",
    lastUpdated: new Date().toLocaleTimeString(),
  },
  {
    flight: "SQ305",
    destination: "Singapore",
    status: "Cancelled",
    eta: "-",
    lastUpdated: new Date().toLocaleTimeString(),
  },
];

function FlightStatus() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    const fetchMockData = () => {
      setFlights(mockFlightData);
    };

    fetchMockData();
    const interval = setInterval(fetchMockData, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>✈️ Live Flight Status</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>        
            <th>Flight</th>
            <th>Destination</th>
            <th>Status</th>
            <th>ETA</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, idx) => (
            <tr key={idx}>
              <td>{flight.flight}</td>
              <td>{flight.destination}</td>
              <td>{flight.status}</td>
              <td>{flight.eta}</td>
              <td>{flight.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightStatus;
