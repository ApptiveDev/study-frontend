import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="phone">
        {/* header */}
        <Header title={"title"} />
        {/* Content */}
        <Main />
        {/* Navigation */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
