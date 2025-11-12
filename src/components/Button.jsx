import { use } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const Button = () => {
  const { toggleDarkMode, isDarkMode } = use(ThemeContext);

  
  const handleClick = () => {
    toggleDarkMode();
  }

  return (
    <button style={{backgroundColor: isDarkMode ? "white" : "black", color: isDarkMode ? "black" : "white", borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px'}} onClick={handleClick}>
      { isDarkMode ? "라이트 모드" : "다크 모드" }
    </button>
  );
}

export default Button;