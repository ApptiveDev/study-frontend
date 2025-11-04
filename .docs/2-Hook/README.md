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

위 로직이 올바르게 작동하기 위해선, `setInterval`의 반환값인 interval ID를 저장하여 `clearInterval` 호출에 사용해야 합니다.  interval ID는 렌더링에는 사용되지 않는 정보이므로, State 대신 Ref를 사용할 수 있습니다.

```jsx
import { useState, useRef } from 'react';

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
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
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
}
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
}
```

다만, 이 경우에 `heavyRef`는 nullable하기 때문에 이벤트 핸들러 등에서 불필요한 `null` 체크가 필요할 수 있습니다. 다음과 같이 getter 함수를 정의하여 조금 더 세련되게 활용해 봅시다.

```jsx
const Component = () => {
	const heavyRef = useRef(null);
	
	const getHeavyRef = () => {
		if(heavyRef.current !== null) {
			return heavyRef.current;
		}
		const heavy = new Heavy();
		heavyRef.current = heavy;
		return heavy;
	}
	// ...
}
```

`getHeavyRef`는 항상 `Heavy`의 인스턴스를 반환하므로 더 이상 타입 체크가 필요하지 않습니다.

### DOM 조작

React는 DOM 요소에 직접 접근하여 조작을 수행하는 내장 기능을 제공하지 않습니다. 따라서 특정 노드를 직접 조작하거나 브라우저 API를 사용하기 위해서는 Ref에 DOM 노드를 저장하는 방식을 사용해야 합니다.

예제를 통해 설명하겠습니다.

```jsx
import { useRef } from 'react';

const Component = () => {
	const ref = useRef(null);
	
	return (
		<div ref={ref}>
			컴포넌트입니다.
		</div>
	)
}
```

컴포넌트 내부에서 `useRef`를 호출하여 `ref`를 초기화하고, 해당 객체를 JSX 태그의 `ref` 속성으로 전달합니다. `ref.current`의 초기값은 `null`이지만, 가상 DOM에 렌더링이 완료되는 시점에는 해당 DOM 노드를 가리키게 됩니다.

## Effect: Side Effect 다루기