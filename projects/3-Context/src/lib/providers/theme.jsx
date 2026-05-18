import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === "dark") {
    return true;
  }
  return false;
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkModePrimitive] = useState(getInitialTheme); // localStorage에서 테마 읽어옴

  function setIsDarkMode(value) {
    setIsDarkModePrimitive(value); // 다크모드 상태를 바꿈
  }

  useEffect(() => { // isDarkMode가 바뀔 때마다 localStorage에 저장
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
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
