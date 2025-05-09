import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Header from './Header'
import React, { useState } from "react";
import Navbar from "../src/pages/Navbar";
import HomePage from "../src/pages/HomePage";
import RankingPage from "../src/pages/RankingPage";

function App() {
  const [activePage, setActivePage] = useState("home"); // 기본 페이지를 'home'으로 설정

  const handlePageChange = (page) => {
    setActivePage(page); // 페이지 상태 변경
  };

  return (
    <div className="app-container">
      <div className="title">순위 상세 페이지</div>
      <Navbar activePage={activePage} onPageChange={handlePageChange} />
      
      {activePage === "home" && <HomePage />}  
      {activePage === "ranking" && <RankingPage />}  {/* 조건부 렌더링: 랭킹 페이지 */}
    </div>
  );
}

export default App
