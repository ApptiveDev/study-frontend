import React from "react";
import './header.css';

function Header() {
  return (
    <header className="header">
      <span className="logo">Logo</span>
      <div className="button-group">
        <div className="button">
          <span className="material-symbols-outlined icon-medium">search</span>
        </div>
        <div className="button">
          <span className="material-symbols-outlined icon-medium">notifications</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
