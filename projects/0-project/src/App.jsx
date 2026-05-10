import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PNU from './assets/pnu.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>안녕하세요</h1>
        <h2>제 이름은 <span style={{fontWeight:700}}>김준우</span> 입니다.</h2>
        <h2>멈추지 않고 성장하는 개발자가 되겠습니다!!</h2>
        <a href='https://www.instagram.com/wxx_ya.07' target='_blank' rel='noopener'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
            style={{width:'32px'}}>
          </img>
        </a>
        <a href='https://github.com/wooya07' target='_blank' rel='noopener'>
          <img 
            src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
            style={{width:'32px', backgroundColor:'white', borderRadius:50}}>
          </img>
        </a>
        <a href="mailto:wooya928@pusan.ac.kr">
          <img 
            src={PNU}
            style={{ width: '32px', backgroundColor:'white', borderRadius:50 }}></img>
        </a>
      </header>
      <body>
        <div class='container'>
          <content>
            <h3>한 줄 소개</h3>
            <h4>
              저는 김준우 입니다.<br></br>
              부산대학교 컴퓨터공학과에 재학중이고<br></br>
              APPTIVE 라는 동아리에서<br></br>
              프론트앤드 개발을 배우고있어요.
            </h4>
          </content>
          <content>
            <h3>MBTI</h3>
            <h4>
              <span style={{fontSize:'20px'}}>ISTJ</span><br></br>
              음..'청렴결백한 논리주의자'라네요.<br></br>
              그냥.. 그렇다구요...
            </h4>
          </content>
          <content>
            <h3>취미 / 관심사</h3>
            <h4>
              <span style={{fontSize:20, fontWeight:700}}>- 게임하기</span><br></br> 
                MINECRAFT, VALORANT, 기타 인디게임<br></br>
              <span style={{fontSize:20, fontWeight:700}}>- 애니메이션 보기</span> (닥터스톤 아시는분?)<br></br>
              <span style={{fontSize:20, fontWeight:700}}>- 노래방 가기</span> (랩은 못해요..)
            </h4>
          </content>
          <content>
            <h3>학력사항</h3>
              <h4>부산대학교 정보컴퓨터공학부 컴퓨터공학전공 재학 (2026.03 - )<br></br>
              부산용인고등학교 졸업 (2023.03 - 2026.02)<br></br>
              동래중학교 졸업 (2020.03 - 2023.02)
              </h4>
          </content>
        </div>
      </body>
    </>
  )
}

export default App
