import { useState } from 'react';
import useDebounce from './debounce';

/**
 * `localStorage`에 데이터를 자동으로 동기화하는 커스텀 훅입니다.
 * 새로고침 후에도 상태를 유지하기 위하여 사용합니다.
 * @param {string} key
 * @param {unknown} initialValue
 */
export default function useStorageState(key, initialValue) {
  // enter your code here
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useDebounce(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, 500); // 500ms(0.5초) 뒤에 로컬 스토리지에 저장합니다.

  return [value, setValue];
}
