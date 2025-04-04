# React

- 프론트엔드 프로그래밍에서, 상태가 변했을 때 실제 dom을 뜯어버리는 대신, dom과 구조가 거의 동일하지만 메모리에 위치해있는 Virtual dom을 갈아엎은 후, 실제 dom과 비교하여 변경사항이 있는 부분만 실제 dom 요소에 반영
- 프론트엔드 UI라이브러리

# 리액트는 Client Side Rendering 방식의 웹앱을 위한 UI 라이브러리입니다. Client Side Rendering이란 무엇일까요? 전통적인 SSR 방식의 웹앱과의 차이점은 무엇일까요?

- Client Side Rendering : 웹 페이지 콘텐츠를 클라이언트에서 렌더링한다
    - 페이지의 초기 로딩을 위해 서버가 제공하는 정적인 HTML, CSS 및 JavaScript 파일을 받아오고, 이후에 클라이언트 측에서 동적으로 페이지를 렌더링하는 방식
    - 초기 페이지는 정적 콘텐츠만을 담은 HTML 파일을 받아와서 렌더링되며, 이후 JavaScript 파일을 로드하고 실행하여 동적 데이터를 가져오고 화면을 갱신한다
    - 인터랙션 빠름, 초기 구동 속도는 느림
- SSR (Server Side Rendering) : 웹 페이지 콘텐츠를 서버에서 초기 렌더링 후, 클라이언트에 완전한 html을 전달한다

# 리액트는 상태에 따른 선언적 프로그래밍이 가능하도록 돕도록 한다고 말씀드렸습니다. 선언적 프로그래밍과 명령형 프로그래밍의 차이는 무엇일까요?

- 선언적 프로그래밍
    - 내가 **무엇을** 원하는지에 관심
    - 결과 중심
    - "우리 집 주소는 298 West Immutable Alley, Eden, Utah 84310 이야.”
    - 명령적 코드를 추상화한 것
    
    ```html
    <article>
      <header>
        <h1>Declarative Programming</h1>
        <p>Sprinkle Declarative in your verbiage to sound smart</p>
      </header>
    </article>
    ```
    
    ```bash
    function add (arr) {
      return arr.reduce((prev, current) => prev + current, 0)
    }
    ```
    
    - 선언형 언어 HTML 예시에서는 '웹 브라우저가 어떻게 article 엘리먼트를 파싱해서 화면에 보여주는가'는 고려하지 않는다
- 명령형 프로그래밍
    - 내가 실제로 **어떻게** 할지에 관심
    - 과정 중심
    - "주차장 북쪽 출구로 나와서 좌회전을 해. 12번가 출구에 도착할 때까지 I-15 북쪽 도로를 타고 와야 해. 거기서 IKEA에 가는 것처럼 출구에서 우회전을 해. 그리고 거기서 직진하다가 첫 번째 신호등에서 우회전을 해. 그 다음에 나오는 신호등을 통과한 후에 좌회전을 하면 돼. 우리 집은 #298 이야."

```bash
function add (arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++){
    result += arr[i]
  }
  return result
}
```

# 브라우저가 웹 페이지를 표시하는 과정을 단계를 나누어 자세히 설명해주세요

1. HTML 파일과 CSS 파일을 파싱해서 각각 DOM Tree, CSSOM Tree를 만든다(**Parsing**)
2. 두 Tree를 결합하여 Rendering Tree를 만든다(**Style**)
    - 실제로 화면에 그려질 Tree구조
    - 레이아웃과 페인팅에 필요한 정보를 추출하고 숨겨진 요소나 비표시 요소를 필터링한다
3. Rendering Tree에서 각 노드의 위치와 크기를 계산해 **배치**한다(**Layout**)
4. 계산된 위치에 요소들을 표시한다, 레이어를 만든다(**Paint**)
5. 레이어를 합성하여 실제 화면에 나타낸다(**Composite**)

# 리액트를 사용하는 이유를 조사해주세요.

- **페이지 전환을 부드럽게 동작**시키는 것을, 일반 자바스크립트가 아닌, 리액트라는 자바스크립트 라이브러리로 쉽게 만들 수 있다
- html 재사용이 편리하다
- 컴포넌트 단위로 개발하기에 분업하기 좋다
