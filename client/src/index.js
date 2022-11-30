import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './app/App';
import './styles/globals.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParallaxProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ParallaxProvider>
);


