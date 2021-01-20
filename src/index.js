import React from 'react';
import ReactDOM from 'react-dom';

// webpack extends import to allow us to load static assets that aren't JS
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
