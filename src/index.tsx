import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);