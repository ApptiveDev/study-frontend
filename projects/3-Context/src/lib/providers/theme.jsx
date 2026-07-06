import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    return true;
  }
  if (stored === 'light') {
    return false;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkModePrimitive] = useState(getInitialTheme);

  function setIsDarkMode(value) {
    setIsDarkModePrimitive(value);
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
