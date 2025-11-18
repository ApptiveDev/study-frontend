import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function getInitialTheme() {
  const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  const theme = sessionStorage.getItem('theme');
  return theme ?? browserTheme;
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkModePrimitive] = useState(getInitialTheme);

  function setIsDarkMode(value) {
    sessionStorage.setItem('theme', value ? 'dark' : 'light');
    setIsDarkModePrimitive(value);
  }

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (isDarkMode) {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
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
