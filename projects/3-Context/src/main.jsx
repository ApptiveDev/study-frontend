import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './lib/providers/theme.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <p className="text-destructive-foreground mt-2 text-sm">
        by APPTIVE Frontend Team
      </p>
    </ThemeProvider>
  </StrictMode>,
);
