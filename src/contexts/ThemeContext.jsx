import React, { createContext, useState } from 'react';

// TODO: 다크 모드와 라이트 모드를 구현하기 위한 컨텍스트, Provider를 작성해주세요

export const ThemeContext = // TODO

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    // TODO: Provider 컴포넌트는 자식 컴포넌트들에게 다크 모드 상태와 토글 함수를 전달합니다.
  );
}
