import React from 'react';
import { createRoot } from 'react-dom/client';
import CRHWebsite from './CRHWebsite.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CRHWebsite />
  </React.StrictMode>
);
