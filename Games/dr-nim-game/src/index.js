import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './DrNim';

const root = ReactDOM.createRoot(document.getElementById('game'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

