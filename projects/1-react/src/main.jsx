import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <p className="text-white/65 mt-2 text-sm">by APPTIVE Frontend Team</p>
  </StrictMode>,
);
