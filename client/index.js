import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
