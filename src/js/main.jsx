// src/js/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap CSS + JS (bundle incluye Popper)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// estilos propios
import '../styles/index.css'

// componente principal
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
