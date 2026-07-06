/**
 * `localStorage`에 데이터를 자동으로 동기화하는 커스텀 훅입니다.
 * 새로고침 후에도 상태를 유지하기 위하여 사용합니다.
 * @param {string} key
 * @param {unknown} initialValue
 */

import { useState } from "react";
import useDebounce from "./debounce"; // useDebounce 훅 불러오기

export default function useStorageState(key, initialValue) {
  // 지연 초기화
  // useState 내부에 함수를 인자로 넘겨줌 -> 이 컴포넌트가 처음 마운트될 때 한 번만 함수 실행됨
  // 새로고침할 때 로컬스토리지에서 기존 데이터를 꺼내와 초기 상태값으로 세팅
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      // 기존 저장된 데이터가 있다면 JSON 문자열을 원래 객체/문자열로 파싱
      // 없으면 초기값 사용
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error('로컬스토리지 읽기 실패:', error);
      return initialValue;
    }
  });
  // 디바운스를 활용한 로컬스토리지 자동 동기화
  // if 사용자가 키보드를 칠 때마다(== state가 바뀔 때마다) 실시간으로 로컬 스토리지에 저장 -> 브라우저 과부화
  // => useDebounce를 활용해 사용자가 입력을 멈추고 500ms가 지나야 저장 로직 돌도록 최적화
  // 인자로 [state]를 넘겨주어, 실제로 글자가 바뀔 때만 타이머 작동
  useDebounce(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('로컬스토리지 저장 실패:', error);
    }
  }, 500, state);

  return [state, setState];
}