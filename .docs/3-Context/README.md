# Context와 컴포넌트 합성

## 이번 차시를 시작하기 전에...

### 1. `children` prop

`children`은 리액트 컴포넌트에서 특별하게 사용되는 prop으로, 컴포넌트의 **시작 태그**와 **종료 태그** 사이에 위치한 모든 요소들을 포함합니다. 즉 컴포넌트가 감싸고 있는, 컴포넌트 아래의 **자식 요소들**을 나타냅니다.

예를 들어, 다음과 같은 컴포넌트가 있다고 가정해봅시다:

```jsx
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
```

이 컴포넌트를 사용할 때, 다음과 같이 작성할 수 있습니다:

```jsx
function App() {
  return (
    <Wrapper>
      <h1>Hello, World!</h1>
      <p>This is a sample paragraph.</p>
    </Wrapper>
  );
}
```

위 예제에서 `Wrapper` 컴포넌트는 `children` prop을 통해 `<h1>`과 `<p>` 요소를 받아서, 이를 `<div>` 요소 안에 렌더링합니다. 결과적으로, 브라우저에는 다음과 같은 구조가 나타납니다:

```html
<div class="wrapper">
  <h1>Hello, World!</h1>
  <p>This is a sample paragraph.</p>
</div>
```

> #### 참고
>
> `children` prop은 리액트에서 자동으로 전달되므로, 별도로 명시하지 않아도 됩니다.
> 이는 내부적으로 다음과 같이 처리됩니다:
>
> ```jsx
> function App() {
>   return (
>     <Wrapper
>       children={[<h1>Hello, World!</h1>, <p>This is a sample paragraph.</p>]}
>     />
>   );
> }
> ```

### 2. ReactNode 타입

`children` prop의 타입은 일반적으로 `ReactNode`로 지정됩니다. `ReactNode`는 리액트에서 렌더링할 수 있는 모든 유형의 값을 포함하는 타입입니다. 여기에는 다음과 같은 것들이 포함됩니다:

- 문자열 (예: `"Hello, World!"`)
- 숫자 (예: `42`)
- JSX 요소 (예: `<div>Hello</div>`)
- 배열 (예: `[<div key="1">Item 1</div>, <div key="2">Item 2</div>]`)
- `null` 또는 `undefined` (렌더링되지 않음)
- `true` 또는 `false` (렌더링되지 않음)

다양한 타입의 값을 `children`으로 전달할 수 있기 때문에, `ReactNode` 타입은 매우 유연하게 사용됩니다. 배열 렌더링에서 `Array.map`을 사용하여 여러 요소를 생성할 수 있는 것도 이 덕분입니다.

### 3. Fragment

Fragment는 React에서 여러 Component를 DOM Element로 감싸지 않고도 그룹화할 수 있는 방법입니다.

React 컴포넌트는 반드시 하나의 최상위 요소만 반환할 수 있습니다. 2가지 이상의 요소를 반환하려고 하면 오류가 발생합니다.

```jsx
function MyComponent() {
  return (
    <h1>Hello, World!</h1>
    <p>This is a sample paragraph.</p> // 오류 발생!
  );
}
```

따라서 위와 같은 경우, 두 요소를 하나의 부모 요소로 감싸야 합니다. 일반적으로 `<div>`와 같은 HTML 요소를 사용하지만, React에서는 이렇게 사용할 수 있습니다:

```jsx
import { Fragment } from "react";

// 1. Fragment 컴포넌트 사용
function MyComponent() {
  return (
    <Fragment>
      <h1>Hello, World!</h1>
      <p>This is a sample paragraph.</p>
    </Fragment>
  );
}

// 2. 축약형 문법 사용
function MyComponent() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is a sample paragraph.</p>
    </>
  );
}
```

### 4. `key` prop

`key` prop은 리액트에서 각 요소를 고유하게 식별하기 위하여 사용하는 특별한 prop입니다.
일반적으로는 신경쓸 필요가 없지만, 배열을 렌더링할 때에는 반드시 설정해 주어야 합니다.

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li> // key prop 설정
      ))}
    </ul>
  );
}
```

> #### 참고
>
> `key` prop은 모든 React 컴포넌트에 내장되어 있으며, 우리가 직접 접근할 수 없습니다.
> 따라서 `props.key`와 같이 접근하려고 하면 `undefined`가 반환됩니다.

### 5. Node.js의 패키지 매니저

Node.js에서 기본적으로 사용하는 패키지 매니저는 NPM (Node Package Manager)입니다. NPM은 Node.js와 함께 설치되며, JavaScript 패키지들을 쉽게 관리하고 설치할 수 있도록 도와줍니다.

최근에는 Yarn과 PNPM과 같은 대체 패키지 매니저가 Plug-n-Play(PnP), monorepo 지원, 훨씬 빠른 속도 등의 장점으로 큰 인기를 얻고 있으며, 우리 스터디의 예제 코드에서도 PNPM을 사용하고 있습니다.

현재 최신 버전의 Node.js LTS에서 이를 활성화하는 방법은 다음과 같습니다. Windows 환경을 기준으로 설명드립니다.

1. PowerShell을 관리자 권한으로 실행합니다.
2. 다음 명령어를 입력하여 PNPM 및 Yarn을 활성화합니다.
   ```bash
   corepack enable
   ```

## Context API란

## 컴포넌트 합성

## 과제

```

```
