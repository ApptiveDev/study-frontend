import React from "react";
import HomeIcon from './home.png';
import RankingIcon from './ranking.png';
import ShortsIcon from './shortform.png';
import UploadIcon from './upload.png';

function Navbar({ activePage, onPageChange }) {
  return (
    <div className="navbar">
      <button
        onClick={() => onPageChange("home")}
        className={`navbar-button ${activePage === "home" ? "active" : ""}`}
      >
        <img src={HomeIcon} alt="home-icon" className="navbar-icon" />
        <span>홈</span>
      </button>
      <button
        onClick={() => onPageChange("ranking")}
        className={`navbar-button ${activePage === "ranking" ? "active" : ""}`}
      >
        <img src={RankingIcon} alt="ranking-icon" className="navbar-icon" />
        <span>랭킹</span>
      </button>
      <button
        className="navbar-button"
      >
        <img src={ShortsIcon} alt="shorts-icon" className="navbar-icon" />
        <span>숏폼</span>
      </button>
      <button
        className="navbar-button"
      >
        <img src={UploadIcon} alt="upload-icon" className="navbar-icon" />
        <span>업로드</span>
      </button>
    </div>
  );
}

export default Navbar;




