import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function getInitialTheme() {
  // 이 코드를 수정하세요.
  return "dark";
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkModePrimitive] = useState(getInitialTheme);

  function setIsDarkMode(value) {
    // 이 코드를 수정하세요.
  }

  useEffect(() => {
    // 이 코드를 수정하세요.
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
