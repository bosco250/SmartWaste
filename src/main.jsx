import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Ensure BrowserRouter wraps the app */}
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>
);
