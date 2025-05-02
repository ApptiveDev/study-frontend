import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const handleHomeClick = () => {
    handleNavigation("/home");
  };

  const handleTrophyClick = () => {
    handleNavigation("/ranking");
  };

  const handleVideoCamClick = () => {
    handleNavigation("/grid");
  };

  const handleVideoCallClick = () => {
    handleNavigation("/upload");
  };

  return (
    <nav className="footer">
      <div className="footer-icon">
        <button
          className="material-symbols-outlined icon-medium"
          onClick={handleHomeClick} 
        >
          home
        </button>
        <p className="icon-text">홈</p>
      </div>
      <div className="footer-icon">
        <button
          className="material-symbols-outlined icon-medium"
          onClick={handleTrophyClick} 
        >
          trophy
        </button>
        <p className="icon-text">랭킹</p>
      </div>
      <div className="footer-icon">
        <button
          className="material-symbols-outlined icon-medium"
          onClick={handleVideoCamClick} 
        >
          videocam
        </button>
        <p className="icon-text">숏폼</p>
      </div>
      <div className="footer-icon">
        <button
          className="material-symbols-outlined icon-medium"
          onClick={handleVideoCallClick} 
        >
          video_call
        </button>
        <p className="icon-text">업로드</p>
      </div>
    </nav>
  );
}

export default Footer;