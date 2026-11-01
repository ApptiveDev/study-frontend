import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <p className="text-neutral-400 mt-2 text-sm">by APPTIVE Frontend Team</p>
  </StrictMode>,
);
