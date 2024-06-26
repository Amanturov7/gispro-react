import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PortfolioPage from './Portfolio/PortfolioPage';
import PortfolioDetails from './Portfolio/component/PortfolioDetails';
import ServicesPage from './Services/ServicesPage'; // Import the ServicesPage component
import { BrowserRouter as Router, Routes, Route as MyRoute } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import GeoPortal from './maps/GeoPortal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>

<Routes>
  <MyRoute path="/" element={<App />} /> {/* Главная страница */}
  <MyRoute path="/portfolioPage" element={<PortfolioPage />} /> {/* Основная страница портфолио */}
  <MyRoute path="/portfolioPage/:projectId" element={<PortfolioDetails />} /> {/* Детали проекта */}
  <MyRoute path="/servicesPage/*" element={<ServicesPage />} /> {/* Add this route */}
  <MyRoute path="/geoportal/" element={<GeoPortal />} /> {/* Add this route */}

</Routes>

</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
