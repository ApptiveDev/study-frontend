function App() {
  // 1. 폼 입력값을 하나의 객체로 관리하는 상태 선언
  //    이름, 아이디, 비밀번호, 비밀번호 확인, 이메일을 포함

  // 2. 공통 onChange 핸들러 작성
  //    각 input 요소의 name을 기반으로 form 객체의 해당 필드를 업데이트


  // 3. 유효성 검사 조건 정의
  //    - 이름이 5자를 초과하면 에러
  //    - 비밀번호와 비밀번호 확인이 다르면 에러

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>회원가입</h2>

      {/* 이름 입력 필드 */}
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          name="name"                         // name 속성은 상태 업데이트에 필요
          placeholder="이름"
          style={inputStyle}
        />
        {/* 이름 유효성 검사 메시지 */}
        <p style={errorStyle}>
        </p>
      </div>

      {/* 아이디 입력 필드 */}
      <div>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          style={inputStyle}
        />
      </div>

      {/* 비밀번호 입력 필드 */}
      <div>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          style={inputStyle}
        />
      </div>

      {/* 비밀번호 확인 입력 필드 */}
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호확인"
          style={inputStyle}
        />
        {/* 비밀번호 일치 여부 메시지 */}
        <p style={errorStyle}>
        </p>
      </div>

      {/* 이메일 입력 필드 */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="이메일"
          style={inputStyle}
        />
      </div>

      {/* 회원가입 버튼 - 필수 입력 미완성 시 비활성화 */}
      <button
        style={buttonStyle}
      >
        회원가입
      </button>
    </div>
  )
}

// 스타일 정의
const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '10px',
  border: '1px solid #ccc',
  marginTop: '0.5rem',
  marginBottom: '0.25rem',
  fontSize: '1rem',
  boxSizing: 'border-box'
}

const errorStyle = {
  color: 'red',
  fontSize: '0.85rem',
  margin: 0,
  marginBottom: '0.75rem'
}

const buttonStyle = {
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#111',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  fontSize: '1rem',
  marginTop: '1rem',
  cursor: 'pointer'
}

export default App
