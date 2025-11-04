# Welcome to React

## React를 배우는 이유

### 웹 기술의 높은 확장성

- **JavaScript 생태계**: 압도적인 개발자 풀을 기반으로 한 훌륭한 생태계를 보유하고 있다.
  NPM 라이브러리를 통해 React용 범용 UI 키트 (컴포넌트, 아이콘 등의 디자인 시스템)이 널리 배포된다.
- **다양한 플랫폼 지원**: 브라우저를 구동할 수 있는 OS라면 어떤 곳에서든 사용할 수 있다. (모바일 OS, 임베디드 등)

### 현대적인 문법

- **현대적인 JSX 문법과 컴포넌트 구조**: React에서 사용하는 컴포넌트 아키텍처는 다른 프레임워크에서도 비슷한 형태로 사용되며,
  이를 통해 다른 UI 기술에 대한 진입 장벽을 낮출 수 있다.
- **상태 관리의 용이성**: React의 상태 관리 방식은 HTML을 조작하는 전통적인 방법보다 더 직관적이고 효율적이다.
  상태 변화에 따른 UI 업데이트가 자동으로 이루어지므로 개발자가 직접 DOM을 조작할 필요가 없다.
  > 예시: JavaScript만을 사용한 Counter 상태 관리 vs React useState Hook을 사용한 Counter 상태 관리
  ```javascript
  // JavaScript만을 사용한 Counter 상태 관리
  let count = 0;
  const button = document.createElement("button");
  button.innerText = `Count: ${count}`;
  button.onclick = () => {
    count++;
    button.innerText = `Count: ${count}`;
  };
  document.body.appendChild(button);
  ```
  ```jsx
  // React useState Hook을 사용한 Counter 상태 관리
  import React, { useState } from "react";
  export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
  }
  ```

