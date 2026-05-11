/**
 * Debounce 훅은 특정 함수가 연속적으로 호출되는 것을 방지하기 위해 사용됩니다.
 * 주로 검색 입력과 같이 사용자가 빠르게 입력할 때 API 호출을 줄이기 위해 사용됩니다.
 * @param {() => void} callback
 * @param {number} delay
 */

import { useCallback, useRef } from "react";
export default function useDebounce(callback, delay) {
    // enter your code here
    // setTimeout의 id를 저장하는 ref
    // ref는 값이 바뀌어도 컴포넌트를 다시 렌더링하지 않음
    const timeRef = useRef(null);

    // debounce가 적용된 함수
    const debouncedFunction = useCallback(() => {
        // 이전에 예약된 타이머가 있다면 취소
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }
        // delay 시간 뒤에 callback 실행 예약
        // 그 전에 다시 호출되면 위 clearTimeout으로 취소됨
        timeRef.current = setTimeout(() => {
            callback();
          }, delay);
        }, [callback, delay]);
    // debounce 처리된 함수를 반환
    return debouncedFunction;
}
