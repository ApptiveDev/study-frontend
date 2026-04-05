import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import profileImage from './assets/kirby.png' //커비
import friendImage from './assets/oya.png' //오야지치 
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <img
          src={profileImage}
          alt="프로필 이미지"
          className="profile-image"
        />
        <h1>이예은</h1>
        <p>--- v =_= v ---</p>
      </header>

      <section className="section">
        <h2>소개</h2>
        <p>
          안녕하세요! <br />
          부산대학교 정보컴퓨터공학부 재학중인 23학번 이예은입니다 !!
        </p>
      </section>

      <div className="sections-row">
        <section className="section">
          <h2>관심사</h2>
          <ul>
            <li>프론트엔드 👾</li>
            <li>게임 </li>
            <li>롯데 자이언츠 (가을야구 못감)</li>
            <li>별의 커비 / 오야지치</li>
            <li>여행 ✈️</li>
          </ul>
          <ul className="interest-image-container">
            <li>
              <img src={friendImage} alt="오야지치" width="100" />
            </li>
          </ul>
        </section>

        <section className="section contact-info">
          <h2>연락처</h2>
          <p>
            📧 <a>yezzy1022@pusan.ac.kr</a><br/>
            🔗 <a href="https://github.com/badyeun" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </section>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
