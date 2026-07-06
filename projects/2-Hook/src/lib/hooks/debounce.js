/**
 * Debounce 훅은 특정 함수가 연속적으로 호출되는 것을 방지하기 위해 사용됩니다.
 * 주로 검색 입력과 같이 사용자가 빠르게 입력할 때 API 호출을 줄이기 위해 사용됩니다.
 * @param {() => void} callback
 * @param {number} delay
 * @param {any} dependencies
 */

import { useEffect, useRef } from "react";

export default function useDebounce(callback, delay, dependencies) {
    // Stale Closure 방지용 변수
    // 리렌더링 시 최신 함수를 기억하기 위해 useRef 사용
    const callbackRef = useRef(callback);

    // 최신 함수 동기화
    // 컴포넌트가 다시 그려질 때마다 ref 안의 함수를 최신 버전으로 갱신
    // 주소값을 고정하되 안의 내용만 최신 상태로
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // 디바운스 타이머 제어
    // 지정된 delay 시간이 지나면 ref에 저장된 최신 함수를 실행시키는 곳
    useEffect(() => {
        // 사용자가 타이핑을 시작하면 'delay'만큼 기다리는 타이머를 겸
        const timer = setTimeout(() => {
            callbackRef.current();  // 지정한 시간이 지나면 함수 실행
        }, delay);

        // 사용자가 입력을 멈추지 않고 계속 타이핑하면 (== dependencies가 계속 변함)
        // 다음 useEffect가 실행되기 직전에 이 return 함수 먼저 실행
        // 이전 타이머를 즉시 취소(clear)하여 실행을 뒤로 미룸
        return () => clearTimeout(timer);
    }, [delay, dependencies]);
}