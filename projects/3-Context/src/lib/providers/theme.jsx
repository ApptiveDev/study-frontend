import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// 처음 앱이 켜질 때 기본 테마 설정
function getInitialTheme() {
  // true면 다크 모드, false면 라이트 모드
  return true;
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkModePrimitive] = useState(getInitialTheme);

  // 상태를 바꿀 때 true/false 값을 받아서 세팅하는 함수
  function setIsDarkMode(value) {
    setIsDarkModePrimitive(value);
  }

  // isDarkMode 상태가 바뀔 때마다 <html> 태그의 class 조작
  useEffect(() => {
    const root = window.document.documentElement; // <html> 태그 가져오기

    if (isDarkMode) {
      root.classList.add('dark'); // <html class="dark"> 추가
    } else {
      root.classList.remove('dark'); // <html class="dark"> 제거
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
