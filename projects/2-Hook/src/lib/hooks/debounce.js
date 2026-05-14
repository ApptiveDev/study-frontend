import { useEffect } from 'react';

/**
 * Debounce 훅은 특정 함수가 연속적으로 호출되는 것을 방지하기 위해 사용됩니다.
 * 주로 검색 입력과 같이 사용자가 빠르게 입력할 때 API 호출을 줄이기 위해 사용됩니다.
 * @param {() => void} callback
 * @param {number} delay
 */
export default function useDebounce(callback, delay) {
    useEffect(() => {
        const timer = setTimeout(() => {
            callback();
        }, delay);

        return () => clearTimeout(timer); // 값이 변경되어 재렌더링 시 기존 타이머를 취소합니다.
    }, [callback, delay]);
}
