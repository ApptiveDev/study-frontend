import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="phone">
        {/* header */}
        <header className="header">
          <span className="site-name">SiteName</span>
          <div className="button-group">
            <div className="button"></div>
            <div className="button"></div>
            <div className="button"></div>
          </div>
        </header>

        {/* Content */}
        <div className="content">
          <div className="title">
            Hello<br />World!!!
          </div>
          <div className="boxes-wrap-vertical">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="box">{num}</div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <div className="navigation-button"></div>
          <div className="navigation-button"></div>
          <div className="navigation-button"></div>
          <div className="navigation-button"></div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
