import { use } from "react";
import {ThemeContext} from "../contexts/ThemeContext";

const Heading = () => {
  const { isDarkMode } = use(ThemeContext);
  return (
    <h1 style={{ color : isDarkMode ? "white" : "black" }}>Welcome to the Home Page</h1>
  );
}

export default Heading;