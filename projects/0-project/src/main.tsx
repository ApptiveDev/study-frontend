import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  const [tab, setTab] = useState('style')

  const styles = {
    // 바탕
      wrapper: {
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#ffecf1',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      padding: '40px 0',
      fontFamily: 'sans-serif',
    },
    // 상단 프로필 칸
    profileSection: {
      width: '800px',
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '25px',
      border: '4px solid #f8d6dc',
      display: 'flex',
      gap: '30px',
      marginBottom: '20px',
    },
    // 프로필 사진
    profileImage: {
      width: '200px',
      height: '200px',
      borderRadius: '20px',
      backgroundColor: '#f1f8e9',
      border: '3px solid #f0bfc6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '50px'
    },
    // 버튼 선택
      nav: {
        display: 'flex',
        width: '800px',
        gap: '10px',
        position: 'relative' as const
      },
      // 버튼
      navButton: (active: boolean) => ({
        flex: 1,
        padding: '12px 0',
        borderRadius: '15px 15px 0 0',
        border: active ? '4px solid #daaeb4' : '4px solid #f0bfc6',
        backgroundColor: active ? '#daaeb4' : '#ffffff',
        color: active ? 'white' : '#f0bfc6',
        position: 'relative' as const,
        top: '4px',
        borderBottom: active ? '4px solid #daaeb4' : 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px',
        transition: '0.2s',
        zIndex: active ? 3 : 1,
      }),
    // 세부 내용 칸
      mainBox: {
        width: '800px',
        border: '4px solid #f8d6dc',
        borderRadius: '0 25px 25px 25px',
        padding: '40px',
        minHeight: '300px',
        backgroundColor: '#fff',
        position: 'relative' as const,
        zIndex: 2,
      }
  }

  return (
    // my profile칸
    <div style={styles.wrapper}>
    <div style={styles.profileSection}>
    <div style={styles.profileImage}>
      <img
        src="/profile.jpg"  // 프로필 사진 첨부
        style={{width: '100%', height: '100%', borderRadius: '17px', objectFit: 'cover'}}
      />
    </div>
    
    <div style={{ flex: 1 }}>
      <div style={{ display: 'inline-block', padding: '5px 15px', border: '2px solid #c69ea4', borderRadius: '15px', fontWeight: 'bold', marginBottom: '10px', color: '#c69ea4' }}>
        MY PROFILE
      </div>
      <h1 style={{ margin: '0 0 15px 0', fontSize: '36px' }}>이은빈</h1>
      
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '100px 1fr', 
      fontSize: '14px', 
      lineHeight: '1.6' 
    }}>
      <span style={{ color: '#666', fontWeight: 'bold' }}>🎂 생년월일</span>
      <span>2005. 12. 16</span>
      
      <span style={{ color: '#666', fontWeight: 'bold' }}>🧩 MBTI</span>
      <span>ISFP</span>
      
      <span style={{ color: '#666', fontWeight: 'bold' }}> 📞전화번호</span>
      <span>010-5780-4152</span>
      
      <span style={{ color: '#666', fontWeight: 'bold' }}>📧 이메일</span>
      <span>ebin5780@pusan.ac.kr</span>
    </div>
  </div>
</div>

      {/* 탭 버튼 : favorite, achieve, goal */}
      <div style={styles.nav}>
        <button style={styles.navButton(tab === 'style')} onClick={() => setTab('style')}>FAVORITE</button>
        <button style={styles.navButton(tab === 'achieve')} onClick={() => setTab('achieve')}>ACHIEVE</button>
        <button style={styles.navButton(tab === 'goal')} onClick={() => setTab('goal')}>GOAL</button>
      </div>

      {/* 하단 세부 정보 */}
      <div style={styles.mainBox}>
        {tab === 'style' && (
  <div style={{ animation: 'fadeIn 0.3s' }}>
    <h2 style={{ color: '#a48387' }}>좋아하는 것</h2>
    <hr style={{ border: '1px solid #f4cbd1', margin: '20px 0' }} />
    
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'flex-start',
      gap: '20px' 
    }}>
      
      {/* 취미 */}
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div style={{ 
          width: '200px', height: '200px', backgroundColor: '#fff', 
          borderRadius: '25px', border: '2px solid #f0bfc6', margin: '0 auto 15px',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}>
          <img src="/hobby.jpg" style={{width: '100%', height: '100%', borderRadius: '17px', objectFit: 'cover'}}/>
        </div>
        <p style={{ fontWeight: 'bold', fontSize: '24px', margin: '5px 0' }}>취미</p>
        <p style={{ fontSize: '15px', color: '#666' }}>베이킹</p>
      </div>

      {/* 부산대 맛집 */}
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div style={{ 
          width: '200px', height: '200px', backgroundColor: '#fff', 
          borderRadius: '25px', border: '2px solid #f8d6dc', margin: '0 auto 15px',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}>
          <img src="/food.jpg" style={{width: '100%', height: '100%', borderRadius: '17px', objectFit: 'cover'}} />
        </div>
        <p style={{ fontWeight: 'bold', fontSize: '24px', margin: '5px 0' }}>부산대 맛집</p>
        <p style={{ fontSize: '15px', color: '#666' }}>장인해장국</p>
      </div>

      {/* 노래 */}
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div style={{ 
          width: '200px', height: '200px', backgroundColor: '#fff', 
          borderRadius: '25px', border: '2px solid #f8d6dc', margin: '0 auto 15px',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}>
          <img src="/song.jpg" style={{width: '100%', height: '100%', borderRadius: '17px', objectFit: 'cover'}}/>
        </div>
        <p style={{ fontWeight: 'bold', fontSize: '24px', margin: '5px 0' }}>노래</p>
        <a href="https://youtu.be/32EjW5rFvck?si=ATEY68x4KM3VaGby" 
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '15px', color: '#a48387',textDecoration: 'none', cursor: 'pointer' }}
    onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
    onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
    >
    WOODZ - AMNESIA 🔗
  </a>
      </div>
    </div>
  </div>
)}
        {/* 지금까지 이뤄낸 것 */}
        {tab === 'achieve' && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h2 style={{ color: '#a48387' }}>지금까지 이뤄낸 것</h2>
            <hr style={{ border: '1px solid #f8d6dc', margin: '20px 0 30px 0' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <div style={{ color: '#f0bfc6', fontWeight: 'bold', fontSize: '18px' }}>2014</div>
                  <div style={{ fontSize: '16px' }}>초등학교 체험 활동 대표 사진 선정</div>
                  <div style={{ fontSize: '14px', color:'#666' }}>(포털 사이트 학교 검색 메인 노출)</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <div style={{ color: '#f0bfc6', fontWeight: 'bold', fontSize: '18px' }}>2016</div>
                  <div style={{ fontSize: '16px', lineHeight:'1.8', whiteSpace: 'pre-wrap' }}>
                    {`부산문화회관에서 밴드 공연
초등학교 교가 음원 녹음`}</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <div style={{ color: '#f0bfc6', fontWeight: 'bold', fontSize: '18px' }}>2018</div>
                  <div style={{ fontSize: '16px' }}>부산 벡스코에서 과학 부스 운영으로 뉴스 출연</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <div style={{ color: '#f0bfc6', fontWeight: 'bold', fontSize: '18px' }}>2019</div>
                  <div style={{ fontSize: '16px' }}>줄넘기 대회 전국 본선 진출</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <div style={{ color: '#f0bfc6', fontWeight: 'bold', fontSize: '18px' }}>2022</div>
                  <div style={{ fontSize: '16px' }}>자유 탐구 주제 대회 본선 진출</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <div style={{ color: '#f0bfc6', fontWeight: 'bold', fontSize: '18px' }}>2026</div>
                  <div style={{ fontSize: '16px' }}>백준 100일 연속 풀이 달성</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <div style={{ color: '#f0bfc6', fontWeight: 'bold', fontSize: '18px' }}>2026</div>
                  <div style={{ fontSize: '16px' }}>리눅스 마스터 2급 취득</div>
                </div>
              </div>


            </div>
          </div>
        )}

        {/* 앞으로의 목표 */}
        {tab === 'goal' && (
          <div>
            <h2 style={{ color: '#a48387' }}>앞으로의 목표</h2>
            <hr style={{ border: '1px solid #f8d6dc', margin: '20px 0' }} />
            <ul style={{ lineHeight: '2.2', fontSize: '18px' }}>
              <li>리눅스 마스터 1급 취득</li>
              <li>해커톤 나가기</li>
              <li>프론트엔드로서 성장하기 위해 노력</li>
              <li>운전 면허 취득</li>
              <li>외국어 관련 자격증 취득</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)