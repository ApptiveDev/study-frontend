import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function Footer(props) {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <footer>
      <div className="icon-container">
        <img src="home_icon.png" alt="Home" width="24" height="21"/>
        <div className="text">홈</div>
      </div>
      <div className="icon-container">
        <img src="ranking_icon.png" alt="Ranking" width="24" height="21"/>
        <div className="text">랭킹</div>
      </div>
      <div className="icon-container">
        <img src="shortform_icon.png" alt="Short Form" width="24" height="21"/>
        <div className="text">숏폼</div>
      </div>
      <div className="icon-container">
        <img src="upload_icon.png" alt="Upload" width="24" height="21"/>
        <div className="text">업로드</div>
      </div>
    </footer>
    </>
  )
}
  
export default Footer;
  