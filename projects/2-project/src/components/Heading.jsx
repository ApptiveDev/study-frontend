import { use, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Heading = () => {
  const { isDarkMode } = useContext(ThemeContext);
  // TODO: 다크 모드일 때는 흰색, 라이트 모드 일 때는 검은색으로 글자 색상을 변경해주세요
  return (
    <h1 style={{ color :  isDarkMode?"white":"black" }}>Welcome to the Home Page</h1>
  );
}

export default Heading;