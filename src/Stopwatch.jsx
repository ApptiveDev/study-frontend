import { useState, useRef } from 'react';

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    // TODO1: 시작 시각과 현재 시각을 `Date.now()`로 설정하세요.
    // TODO2: `setInterval`을 사용하여 `now`가 10ms 주기로 업데이트 되도록 하세요.
    // TODO3: interval id는 `intervalRef`에 저장하여 렌더링을 방지합니다.
  }

  const handleStop = () => {
    // TODO 5: `intervalRef`를 사용하여 타이머를 중지하세요.
  }

  let secondsPassed = 0;
  // TODO4: `startTime`과 `now`가 null이 아닐 때만 경과 시간을 계산하세요.

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

export default Stopwatch
