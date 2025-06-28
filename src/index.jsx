import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import CSS here
import "./assets/css/style.css";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" />
  </React.StrictMode>
);
