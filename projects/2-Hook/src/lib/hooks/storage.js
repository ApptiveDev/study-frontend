import { useState } from 'react';
import useDebounce from './debounce';

/**
 * `localStorage`에 데이터를 자동으로 동기화하는 커스텀 훅입니다.
 * 새로고침 후에도 상태를 유지하기 위하여 사용합니다.
 * @param {string} key
 * @param {unknown} initialValue
 */
export default function useStorageState(key, initialValue) {
  // 1. 상태 초기화: 컴포넌트 마운트 시 localStorage에서 값을 읽어옵니다.
  const [state, setState] = useState(() => {
    const item = window.localStorage.getItem(key);
    // 저장된 값이 있으면 JSON.parse로 변환하여 사용하고, 없으면 초기값을 사용합니다.
    return item ? JSON.parse(item) : initialValue;
    
  });

  // 2. 상태 저장: state 값이 변경될 때마다 디바운스를 거쳐 저장합니다.
  useDebounce(() => {
    // 500ms 동안 추가 입력이 없으면 localStorage에 현재 state를 저장합니다.
    window.localStorage.setItem(key, JSON.stringify(state)); 
  }, 500); // 딜레이 시간 500ms (0.5초) 설정

  // 3. 기존 useState처럼 사용할 수 있도록 배열 형태로 반환합니다.
  return [state, setState];
}