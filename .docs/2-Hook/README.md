# Hook

## Ref: 렌더링과 무관한 데이터 관리하기

**State**는 값이 변경될 때마다 React 시스템에 의해 반드시 리렌더링을 일으킵니다. 일부 정보를 **기억**하고 싶지만, 해당 정보가 **렌더링을 유발**하지 않도록 하려면 **Ref**를 사용하는 것이 좋습니다.

### Ref를 사용하는 이유

- Ref는 React에서 렌더링과 무관한 데이터를 관리하도록 제공하는 기능이므로, 렌더링 프로세스와 단방향 데이터 바인딩에서 벗어난 데이터를 다룰 수 있습니다.
- 따라서 React가 관리하지 않는 외부 JavaScript 라이브러리와 웹 브라우저 API를 사용할 때 유용합니다.

### 참고

- 리렌더링이 필요한 데이터는 **브라우저, 화면에 실시간으로 표시되어야 하는 데이터**가 해당됩니다.
- 그렇지 않은 데이터는 **렌더링과 무관한 데이터, 외부 라이브러리 인스턴스, 타이머 ID, DOM 노드 참조** 등이 해당됩니다.

### 사용법

```jsx
import { useRef } from "react";

function MyComponent() {
  // ...
  const ref = useRef(0);
  // ...
}
```

### 참고: useRef 반환 타입

```ts
interface RefObject<T> {
  current: T;
}
```

`ref.current` 프로퍼티를 통해 컴포넌트 내부에서 원하는 데이터를 읽고 쓸 수 있습니다.

> State와는 달리 setter 함수 대신 대입연산자를 사용하며, **값이 변경되어도 React 시스템이 이를 감지하지 못하므로 리렌더링이 일어나지 않습니다.**

### 어째서 var을 사용하지 않고 Ref를 사용할까요?

- **함수형 컴포넌트는 인스턴스를 가지지 않습니다.** 함수형 컴포넌트는 단순히 props를 입력받아 JSX를 반환하는 함수입니다.
- Ref는 React 시스템에서 관리하는 데이터이므로, 컴포넌트가 리렌더링되더라도 Ref 객체는 동일한 참조를 유지합니다.
- 반면 var로 선언한 변수는 함수 내의 로컬 변수로, 결과값이 반환된 이후에는 사라집니다. 따라서 컴포넌트가 리렌더링될 때마다 해당 변수가 초기화됩니다.

### 실습: 스톱워치 만들기

시작, 중지 버튼으로 조작할 수 있는 스톱워치를 만들어 봅시다.

사용자가 **시작**을 누른 후 시간이 얼마나 지났는지 표시하려면 **시작 버튼을 누른 시각**과 **현재 시각**을 알고 있어야 합니다. 이 데이터는 리렌더링을 통해 화면상에 실시간으로 출력되어야 하므로 State를 사용합니다.

```jsx
const [startTime, setStartTime] = useState(null);
const [now, setNow] = useState(null);
```

예제에서는 사용자가 **시작**을 눌렀을 때 `setInterval`을 통해 주기적으로 현재 시각을 업데이트 하는 로직을 실행시키고, **중지**를 누르면 `clearInterval`을 호출하여 해당 interval을 취소합니다.

위 로직이 올바르게 작동하기 위해선, `setInterval`의 반환값인 interval ID를 저장하여 `clearInterval` 호출에 사용해야 합니다. interval ID는 렌더링에는 사용되지 않는 정보이므로, State 대신 Ref를 사용할 수 있습니다.

```jsx
import { useState, useRef } from "react";

// 완성된 StopWatch 컴포넌트
export default function Stopwatch() {
  // 렌더링이 필요한 데이터: State로 관리
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  // 렌더링과 무관한 데이터: Ref로 관리
  const intervalRef = useRef(null);

  /**
   * 타이머를 시작합니다.
   */
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    // 이전에 실행 중이던 타이머가 있다면 정지합니다.
    clearInterval(intervalRef.current);

    // 10밀리초마다 현재 시각을 갱신하는 타이머를 시작하고,
    // 타이머 ID를 Ref에 저장합니다.
    intervalRef.current = setInterval(() => {
      setNow(Date.now()); // State 갱신
    }, 10);
  }

  /**
   * 타이머를 중지합니다.
   */
  function handleStop() {
    clearInterval(intervalRef.current);
  }

  // 경과 시간을 계산합니다.
  // 이는 지역 변수로, 리렌더링마다 새로 계산되고 함수가 종료되면 사라집니다.
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <Fragment>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </Fragment>
  );
}
```

### Ref 콘텐츠 재생성 피하기

`useRef`는 최초 렌더링시에만 `ref.current`의 값을 초기화하고, 다음 렌더링부터는 이를 무시합니다.

```jsx
const Component = () => {
  const heavyRef = useRef(new Heavy());
  // ...
};
```

`new Heavy()`의 반환값은 초기 렌더링에만 사용되지만, 호출 자체는 매 렌더링시에 이뤄집니다. 이는 `Heavy` 생성자의 내부 로직이 복잡하고 무거울 경우에 성능에 악영향을 미칠 수 있습니다.

다음과 같은 방법을 통해 이 문제를 해결할 수 있습니다.

```jsx
const Component = () => {
  const heavyRef = useRef(null);
  if (heavyRef.current === null) {
    heavyRef.current = new Heavy();
  }
  // ...
};
```

다만, 이 경우에 `heavyRef`는 nullable하기 때문에 이벤트 핸들러 등에서 불필요한 `null` 체크가 필요할 수 있습니다. 다음과 같이 getter 함수를 정의하여 조금 더 세련되게 활용해 봅시다.

```jsx
const Component = () => {
  const heavyRef = useRef(null);

  const getHeavyRef = () => {
    if (heavyRef.current !== null) {
      return heavyRef.current;
    }
    const heavy = new Heavy();
    heavyRef.current = heavy;
    return heavy;
  };
  // ...
};
```

`getHeavyRef`는 항상 `Heavy`의 인스턴스를 반환하므로 더 이상 타입 체크가 필요하지 않습니다.

### DOM 조작

React는 DOM 요소에 직접 접근하여 조작을 수행하는 내장 기능을 제공하지 않습니다. 따라서 특정 노드를 직접 조작하거나 브라우저 API를 사용하기 위해서는 Ref에 DOM 노드를 저장하는 방식을 사용해야 합니다.

예제를 통해 설명하겠습니다.

```jsx
import { useRef } from "react";

const Component = () => {
  const ref = useRef(null);

  return <div ref={ref}>컴포넌트입니다.</div>;
};
```

컴포넌트 내부에서 `useRef`를 호출하여 `ref`를 초기화하고, 해당 객체를 JSX 태그의 `ref` 속성으로 전달합니다. `ref.current`의 초기값은 `null`이지만, 가상 DOM에 렌더링이 완료되는 시점에는 해당 DOM 노드를 가리키게 됩니다.

## Effect: Side Effect 다루기

### 순수 함수와 부수 효과(Side Effect)

**순수 함수**는 함수형 프로그래밍에서 사용되는 개념으로, 다음 두 조건을 만족합니다.

1. 동일한 입력에 대해 항상 동일한 결과를 반환한다.
2. 함수의 실행이 외부에 영향을 끼치지 않는다. 즉, 부수 효과(Side Effect)가 없다.

가령, 다음과 같은 JavaScript 함수는 순수 함수라고 할 수 있습니다.

```js
function add(a, b) {
  return a + b;
}
```

React의 함수형 컴포넌트는 순수 함수로 설계되어야 합니다. 다시 말해,

- 동일한 props가 주어지면 항상 동일한 JSX를 반환해야 하며,
- 렌더링 과정에서 외부 상태를 변경하거나, 네트워크 요청을 보내거나, DOM을 직접 조작하는 등의 부수 효과를 발생시켜서는 안 됩니다.

> ### 💡 함수형 컴포넌트의 입력과 출력
>
> 함수형 컴포넌트의 입력은 `props`와 `state`(`context`)입니다.
>
> `state`는 컴포넌트 내부의 상태값으로, `useState`를 통해 주입됩니다.
> 이는 렌더링 로직 바깥에서만 변경이 허용되며, 컴포넌트 관점에서 **입력**으로 취급될 수 있습니다.
>
> 그러므로, 함수형 컴포넌트는 동일한 `props` 및 `state`에 대해 항상 동일한 JSX를 렌더링해야 합니다.

### 부수 효과 다루기

어플리케이션을 개발하다 보면 부수 효과를 발생시켜야 하는 상황이 자주 발생합니다. 예를 들어,

- 네트워크 요청을 보내 데이터를 가져오거나 저장하는 경우
- 브라우저 API를 사용하여 DOM을 직접 조작하는 경우
- 타이머를 설정하거나 구독(subscription)을 관리하는 경우

이러한 작업, 주로 **외부 시스템과의 상호작용**은 함수형 컴포넌트의 렌더링 로직 바깥에서 수행되어야 합니다. 이를 위해 React는 `useEffect` 훅을 제공합니다.

```jsx
import { useEffect } from "react";

const Component = () => {
  // ...
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("저는 부수 효과입니다.");
  }, [count]);
  // ...
  return <>안녕하세요</>;
};
```

`useEffect` 훅은 두 개의 인자를 받습니다.

1. 첫 번째 인자는 부수 효과를 수행하는 콜백 함수입니다.
2. 두 번째 인자는 의존성 배열(dependency array)로, 부수 효과가 다시 실행되어야 하는 조건을 지정합니다.

> ### 💡 의존성 배열
>
> - 의존성 배열이 비어 있으면(`[]`), 부수 효과는 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.
> - 의존성 배열에 특정 값(State, Props 등)이 포함되어 있으면, 해당 값이 변경될 때마다 부수 효과가 다시 실행됩니다.
> - 의존성 배열을 생략하면, 부수 효과는 컴포넌트가 렌더링될 때마다 매번 실행됩니다. 이는 성능에 악영향을 미칠 수 있으므로 주의해야 합니다.

## Hook: 함수형 컴포넌트의 상태 관리와 생명주기

Hook은 함수형 컴포넌트에서 생명주기(Lifecycle)와 상태(State) 관리를 가능하게 해 주는 특수한 함수입니다.
함수형 컴포넌트의 특성 상 한 번 렌더링하면 다시 인스턴스를 생성하지 않기 때문에, Hook을 통하여 다른 언어의 Class와 유사한 기능을 하도록 하는 것입니다.
지금까지 살펴본 `useState`, `useRef`, `useEffect` 등이 모두 Hook의 일종입니다.

### 자주 사용하는 Hook

- `useState`: 컴포넌트 내부에서 상태(State)를 관리합니다.
- `useRef`: 렌더링과 무관한 데이터를 관리합니다.
- `useEffect`: 부수 효과(Side Effect)를 다룹니다.
- `useContext`: Context API를 사용하여 전역 상태를 관리합니다.
- `useMemo`: 계산된 값을 메모이제이션하여 성능을 최적화합니다.
- `useCallback`: 함수를 메모이제이션하여 불필요한 재생성을 방지합니다.

React의 버전이 올라감에 따라 새로운 내장 Hook이 추가되고 있습니다. 필요에 따라 공식 문서를 참고하여 적절한 Hook을 활용해 보세요.

### 커스텀 Hook 만들기

프로젝트를 진행하다 보면 간단하지만 반복적인 로직이 필요할 때가 있습니다. 이러한 경우 대부분 유틸리티 함수로 작성하여 재사용하는 것이 일반적인 방법입니다. 그런데 그것이 React의 상태와 연동되어야 한다면 어떻게 해야 할까요?

React에서 상태 관리와 연동한 로직을 재사용하고 싶다면, 커스텀 Hook을 만들어 사용할 수 있습니다.
가령 네트워크 연결이 끊어졌을 때, 사용자에게 알림을 주고 싶다고 가정해 봅시다.

네트워크 상태와 동기화 하기 위해서는 다음 두 가지가 필요합니다.

1. 네트워크가 온라인 상태인지 추적하는 상태 정보
2. online, offline 이벤트를 구독하고 해당 상태를 업데이트

우리는 상태 바에 현재 네트워크 연결 상태를 표시하고 네트워크가 꺼지면 비활성화되는 버튼을 만들고 싶습니다.

```jsx
import { useState, useEffect } from "react";

// 상태 바 컴포넌트
export function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

// 저장 버튼 컴포넌트
export function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
```

`StatusBar` 와 `SaveButton` 컴포넌트는 잘 작동하지만 아쉬운 점이 하나 있습니다.

```jsx
const [isOnline, setIsOnline] = useState(true);
useEffect(() => {
  function handleOnline() {
    setIsOnline(true);
  }
  function handleOffline() {
    setIsOnline(false);
  }
  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);
  return () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
  };
}, []);
```

두 컴포넌트 모두 동일한 네트워크 상태 추적 로직을 포함하고 있다는 점입니다.

만약 네트워크가 끊어졌을 때 경고 배너를 띄우는 `NetworkBanner` 같은 컴포넌트를 새로 만든다고 가정해보겠습니다. 이 컴포넌트에서도 네트워크 상태를 추적해야 하므로 **위 코드를 또다시 복사해서 사용할 것입니다.**

이렇게 되면 코드는 점점 더 중복되고 로직을 수정해야 할 일이 생기면 모든 컴포넌트를 하나하나 찾아 수정해야 하는 번거로움이 생깁니다.

이 경우, 네트워크 상태 추적 로직을 커스텀 Hook으로 분리하여 재사용할 수 있습니다.

```jsx
import { useState, useEffect } from "react";

// 커스텀 Hook: 네트워크 상태 추적
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // 현재 네트워크 상태만 반환!
  return isOnline;
}
```

이렇게 만든 Hook은 이제 여러 컴포넌트에서 간단하게 재사용할 수 있습니다.

```jsx
// 상태 바 컴포넌트
export function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
```

### 실습: 창 크기 추적하기

1. 화면의 높이, 넓이를 구독하고 상태를 업데이트하는 `useWindowSize()` hook을 작성해주세요.
   1. window의 `resize` 이벤트를 구독하여 화면 크기가 업데이트 될 때마다 `width, height` 상태를 업데이트 합니다.
2. `App.jsx` 에서 `useWindowSize()` 를 사용해서 화면 크기를 출력해주세요.

```jsx
// use-window-size.js
import { useState, useEffect } from "react";

const useWindowSize = () => {
  // 여기에 코드를 작성하세요
};

export default useWindowSize;
```

```jsx
function App() {
  const { width, height } = // ...

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  )
}
```
