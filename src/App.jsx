import { useState } from 'react';  // React를 불러오게 되면 객체 React를 통해 React 메소드를 작성할 수 있게 된다.
// 생략 가능
import "./index.css";       // external CSS
import Header from "./Header.jsx";  // component 쓰려면 import

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">    {/* 전체 틀 (class 몸체는 CSS에서 정의) */}
      <Header title="Click me" />

      {/* 가운데 */}
      <div className="main-content">
        {/* State */}
        <h2 onClick={() => setCount(count + 1)}>{count}</h2>

        {/* 가로 스크롤 박스 */}
        <div className="scroll-container">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <nav className="bottom-nav">
        <div className="nav-box"></div>
        <div className="nav-box"></div>
        <div className="nav-box"></div>
        <div className="nav-box"></div>
      </nav>
    </div>
  );
}

export default App;