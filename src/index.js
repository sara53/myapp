import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
