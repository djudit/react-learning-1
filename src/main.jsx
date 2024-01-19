import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './components/App.jsx';
import Booksapp from './components/Booksapp.jsx';
import Cardapp from './components/Cardapp.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Booksapp />
    <Cardapp />
  </React.StrictMode>
);
