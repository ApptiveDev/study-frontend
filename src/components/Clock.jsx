import React, { use, useEffect, useState } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const { isDarkMode }  = use(ThemeContext);


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
    <div style={{ fontSize: '36px', lineHeight: '1.5', color: isDarkMode ? 'white' : 'black' }}>
      {formatTime(time)}
    </div>
  );
};

export default Clock;
