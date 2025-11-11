import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Button = () => {
  const { toggleDarkMode, isDarkMode } = useContext(ThemeContext);
  
  const handleClick = () => {
    toggleDarkMode();
  }

  return (
    // TODO: '다크 모드'와 '라이트 모드'의 버튼 색상, 버튼의 글자 색상을 다르게 설정해주세요
    <button style={{
      backgroundColor: isDarkMode? "gray" : "white",
      color: isDarkMode?"white":"black",
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '20px'
      }}
      onClick={handleClick}
    >
      {/* TODO : 다크 모드일 때는 "라이트 모드", 라이트 모드 일 때는 "다크 모드"로 텍스트 변경 */
        isDarkMode?"라이트 모드":"다크 모드"
      }
    </button>
  );
}

export default Button;