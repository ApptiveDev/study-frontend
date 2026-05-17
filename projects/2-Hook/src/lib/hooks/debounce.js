import { useEffect } from 'react';

/**
 * Debounce 훅은 특정 함수가 연속적으로 호출되는 것을 방지하기 위해 사용됩니다.
 * 주로 검색 입력과 같이 사용자가 빠르게 입력할 때 API 호출을 줄이기 위해 사용됩니다.
 * @param {() => void} callback
 * @param {number} delay
 */
export default function useDebounce(callback, delay) {
  useEffect(() => {
    // setTimeout() delay 시간 이후에 callback
    const timer = setTimeout(() => {
      callback();
    }, delay);

    // cleanup 정리 코드 : 다시 실행하기전에 기존 타이머 종료
    return () => {
      clearTimeout(timer);
    };

    // 의존성 배열 callback값이 변할때 다시 실행
  }, [callback, delay]); 
}