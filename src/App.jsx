import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Grid from "./pages/grid/grid";
import Ranking from "./pages/";
import Home2 from "./pages/home2/home2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
};

export default App;
