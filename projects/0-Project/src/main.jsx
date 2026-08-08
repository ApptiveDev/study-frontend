import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import img1 from './assets/mainimage.JPG'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
      
      <header className='header'>
        <div className='header-left'>01:</div>
        <div className='header-right'>
          APPTIVE 24<br />NAJIN KWON
        </div>
      </header>

      <div className='card'>
        
        <div className='profile-section'>
          <div className='section-title'>자기소개</div>
          
          <div className='info-list'>
            <div className='info-item'>
              <span className='info-number'>01.</span>
              <div className='info-content'>
                <h3>ABOUT ME</h3>
                <p>안녕하세요! 대기환경과학과 23학번 권나진입니다.</p>
              </div>
            </div>

            <div className='info-item'>
              <span className='info-number'>02.</span>
              <div className='info-content'>
                <h3>PNU APPTIVE</h3>
                <p>웹/앱 개발 동아리 APPTIVE에서 24기 FE로 활동하고 있습니다.</p>
              </div>
            </div>

            <div className='info-item'>
              <span className='info-number'>03.</span>
              <div className='info-content'>
                <h3>WHAT I LOVE</h3>
                <p>아기자기한 것들을 좋아해서 좋아하는 것들을 수집하고 배치할 때 느끼는 즐거움을 웹에서도 구현하고 싶어요.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='visual-section'>
          <div className='mainimage'>
            <img src={img1} alt='mainimage'/>
          </div>

          <div className='deliverables'>
            <span className='deliverables-label'>NOW PLAYING:</span>
            <div className='deliverables-title'>
              Just a Feeling
            </div>
            <div className='deliverables-sub'>-S.E.S</div>
          </div>
        </div>

      </div>
    </div>
  </StrictMode>,
)