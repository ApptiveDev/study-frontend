/**
 * `localStorage`에 데이터를 자동으로 동기화하는 커스텀 훅입니다.
 * 새로고침 후에도 상태를 유지하기 위하여 사용합니다.
 * @param {string} key
 * @param {unknown} initialValue
 */

import { useEffect, useState } from "react";
import useDebounce from "./debounce";

export default function useStorageState(key, initialValue) {
  // enter your code here
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key); // localStorage에 key로 저장된 값이 있는지 확인

    // 저장된 값이 있다면 문자열을 원래 데이터로 변환해서 초기값으로 사용
    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }
    // 저장된 값이 없다면 전달받은 initialValue를 초기값으로 사용
    return initialValue;
  });

  // debounce를 적용해서 0.5초 동안 추가 변경이 없을 때만 실행됨
  const saveToStorage = useDebounce(() => {
    // localStorage에는 문자열만 저장 가능하므로 JSON 문자열로 변환
    localStorage.setItem(key, JSON.stringify(value));
  }, 500);

  useEffect(() => {
    // value가 변경될 때마다 저장 함수를 호출
    // 실제 저장은 debounce 때문에 0.5초 뒤에 실행됨
    saveToStorage();
  }, [value, saveToStorage]);
  // 일반 useState처럼 [상태값, 상태변경함수] 형태로 반환
  return [value, setValue];
}
