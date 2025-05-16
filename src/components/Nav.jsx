import React from 'react';

const Nav = () => (
  <nav className="nav">
    <button>
    <img
        className="icon-home"
        src="./public/home.svg"
    />
      <span>홈</span>
    </button>
    <button className="active">
    <img
        className="icon-ranking"
        src="./public/trophy.svg"
    />
      <span>랭킹</span>
    </button>
    <button>
    <img
        className="icon-shorts"
        src="./public/shorts.svg"
    />
      <span>숏폼</span>
    </button>
    <button>
    <img
        className="icon-upload"
        src="./public/upload.svg"
    />
      <span>업로드</span>
    </button>
  </nav>
);

export default Nav;