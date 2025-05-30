import React, { use, useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';


const Clock = () => {
  const [time, setTime] = useState(new Date());
  const { isDarkMode }  = // TODO: ThemeContext를 사용하여 다크 모드 상태를 가져옵니다.


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    // TODO: '다크 모드'와 '라이트 모드'의 글자색을 다르게 설정해주세요
    <div style={{ fontSize: '36px', lineHeight: '1.5', color: ??  }}>
      {formatTime(time)}
    </div>
  );
};

export default Clock;
