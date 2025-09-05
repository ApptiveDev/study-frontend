# Hook 실습

## 실행 방법

```
git clone https://github.com/ApptiveDev/study-frontend.git
git checkout feat/window-size
npm i
```

## 실습 내용

<img width="687" height="415" alt="스크린샷 2025-09-06 오전 2 45 03" src="https://github.com/user-attachments/assets/5f9b9944-c7ea-4be9-9852-340b38793117" />

1. 화면의 높이, 넓이를 구독하고 상태를 업데이트하는 `useWindowSize()` hook을 작성해주세요.
   - window의 `resize` 이벤트를 구독하여 화면 크기가 업데이트 될 때마다 `width, height` 상태를 업데이트 합니다. 
2. `App.jsx` 에서 `useWindowSize()` 를 사용해서 화면 크기를 출력해주세요.

## 변경 해야 할 파일
1. src/hooks/useWindowSize.js
2. src/App.jsx
