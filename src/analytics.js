// src/analytics.js
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};
